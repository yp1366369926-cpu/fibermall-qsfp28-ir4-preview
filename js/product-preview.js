(() => {
  'use strict';
  const data = JSON.parse(document.getElementById('product-data').textContent);
  const find = (selector, scope = document) => scope.querySelector(selector);
  const all = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const hero = find('.ins_productCon9');
  const mainInput = find('.btn_add input', hero);
  const cart = new Map();
  const inquiries = new Map();
  let vendor = 'FiberMall';
  const currency = value => '$' + Number(value).toFixed(2);
  const quantity = value => Math.min(9999, Math.max(1, Math.trunc(Number(value)) || 1));
  const reviewBox = find('.ins_productCon16 form > .item_box');
  const reviewTemplate = reviewBox.firstElementChild.cloneNode(true);
  const orderTemplate = find('.product_add .item_box > .item').cloneNode(true);
  const message = text => window.layer.msg(text, {time: 2300});
  const setText = (scope, selector, value) => { find(selector, scope).textContent = value; };

  function selectVendor(option) {
    const config = data.vendors[option.textContent.trim()];
    if (!config?.sku) return;
    vendor = config.vendor;
    all('.one', option.parentElement).forEach(item => {
      item.classList.toggle('active', item === option);
      item.setAttribute('aria-pressed', String(item === option));
    });
    setText(hero, 'h1 > span', config.name);
    const fields = all('.right_box .content1 > .t2 span', hero);
    fields[0].textContent = 'PN: ' + config.pn;
    fields[1].textContent = 'SKU: ' + config.sku;
    setText(hero, '.money .word', currency(config.price));
    const bar = find('.ins_productCon18');
    setText(bar, '.left_box .t1 p', config.name);
    setText(bar, '.left_box .icon_box .word', '13 Reviews  |  SKU: ' + config.sku);
    setText(bar, '.right_box > .word', currency(config.price));
    const cells = all('.ins_productCon11 tbody tr:first-child td');
    cells[0].textContent = config.specKey;
    cells[1].textContent = config.pn;
  }

  function orderItem(trigger) {
    if (trigger?.dataset.id) {
      const {name, price, id, image} = trigger.dataset;
      return {name, price: Number(price), id, image, label: 'Product ID: ' + id};
    }
    const model = data.vendors[trigger?.dataset.vendor || vendor];
    return {id: model.sku, label: 'SKU: ' + model.sku, name: model.name,
            price: model.price, image: 'target-assets/product0.jpg'};
  }

  function updateBadge() {
    const total = Array.from(cart.values()).reduce((sum, row) => sum + row.count, 0);
    all('.shopping_box .icon i').forEach(badge => { badge.textContent = total; });
  }

  function showOrder(kind, heading) {
    const entries = kind === 'cart' ? cart : inquiries;
    const modal = find(kind === 'cart' ? '.product_add' : '.product_nquiry');
    setText(modal, '.title .name span', heading);
    const list = find('.item_box', modal);
    list.replaceChildren();
    if (!entries.size) {
      const empty = document.createElement('p');
      empty.className = 'empty-state';
      empty.textContent = kind === 'cart' ? 'Your cart is empty.' : 'Your inquiry list is empty.';
      list.append(empty);
    }
    for (const item of entries.values()) {
      const row = orderTemplate.cloneNode(true);
      row.dataset.id = item.id;
      setText(row, '.t1 p', item.name);
      setText(row, '.t2 p', item.label);
      find('.img_box img', row).src = item.image;
      find('.btn_add input', row).value = item.count;
      setText(row, '.money', currency(item.price * item.count));
      list.append(row);
    }
    modal.classList.add('active');
    updateBadge();
  }

  function addItem(kind, trigger) {
    const entries = kind === 'cart' ? cart : inquiries;
    const item = orderItem(trigger);
    const count = trigger?.dataset.id || trigger?.dataset.vendor ? 1 : quantity(mainInput.value);
    item.count = quantity((entries.get(item.id)?.count || 0) + count);
    entries.set(item.id, item);
    showOrder(kind, kind === 'cart' ? 'Added to Cart' : 'Added to Inquiry List');
  }
  window.product_add = trigger => addItem('cart', trigger);
  window.product_nquiry = () => addItem('inquiry');
  function setQuantity(input, value) {
    const count = quantity(value);
    input.value = count;
    const row = input.closest('.product_pop .item[data-id]');
    if (!row) return;
    const collection = row.closest('.product_add') ? cart : inquiries;
    const item = collection.get(row.dataset.id);
    item.count = count;
    setText(row, '.money', currency(count * item.price));
    updateBadge();
  }

  window.renderReviewPage = page => {
    reviewBox.replaceChildren();
    data.reviews.slice((page - 1) * 5, page * 5).forEach(review => {
      const row = reviewTemplate.cloneNode(true);
      setText(row, '.information > .icon', review.name[0]);
      setText(row, '.information .name', review.name);
      setText(row, '.information .time', '· ' + review.date_added);
      setText(row, '.right_box > .t1 p', review.text);
      setText(row, '.likes .word', review.helpfulvote + ' helpful votes');
      find('.stars2 img', row).src = './images/product/' + (Number(review.rating) === 5 ? 'i22.png' : 'i23.png');
      find('textarea', row).placeholder = 'Reply to ' + review.name;
      reviewBox.append(row);
    });
  };
  // Page changes replace review rows, so the original two click handlers are delegated.
  $(function () {
    $(reviewBox).find('.likes,.message').off('click');
    $(reviewBox).on('click', '.likes,.message', function () {
      this.classList.toggle('active');
      if (this.classList.contains('message')) {
        this.closest('.right_box').querySelector('.inputInfo').classList.toggle('active', this.classList.contains('active'));
      }
    });
  });

  const officialProduct = data.vendors.FiberMall.url;
  const shareUrls = [
    'https://www.facebook.com/sharer/sharer.php?u=',
    'https://www.linkedin.com/sharing/share-offsite/?url=',
    'https://twitter.com/intent/tweet?url='
  ];
  all('.ins_productCon9 h1 .img_box .list .one').forEach((button, i) => {
    const labels = ['Share on Facebook', 'Share on LinkedIn', 'Share on X', 'Copy link for Instagram'];
    button.setAttribute('aria-label', labels[i]);
    button.addEventListener('click', async () => {
      const productUrl = data.vendors[vendor]?.url || officialProduct;
      if (shareUrls[i]) window.open(shareUrls[i] + encodeURIComponent(productUrl), '_blank', 'noopener');
      else {
        try {
          await navigator.clipboard.writeText(productUrl);
          message('Product link copied.');
        } catch {
          window.prompt('Copy the product link', productUrl);
        }
      }
    });
  });
  const searchField = find('.search_for input');
  function searchProducts(query) {
    if (!query.trim()) { searchField.focus(); return; }
    const url = new URL('https://www.fibermall.com/index.php');
    url.search = new URLSearchParams({r:'product/index', style:'list', kw:query.trim()}).toString();
    window.open(url.href, '_blank', 'noopener');
  }
  find('.search_for .search_in .icon').addEventListener('click', () => searchProducts(searchField.value));
  searchField.addEventListener('keydown', e => { if (e.key === 'Enter') searchProducts(searchField.value); });
  all('.search_for .kw_list a').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); searchProducts(a.textContent);
  }));

  document.addEventListener('click', event => {
    const el = event.target;
    const option = el.closest('.ins_productCon9 .content3 .one');
    if (option) {
      if (option.dataset.url) {
        if (!option.classList.contains('active')) window.open(option.dataset.url, '_blank', 'noopener');
      } else selectVendor(option);
      return;
    }
    const qty = el.closest('.btn_add button');
    if (qty) {
      event.preventDefault();
      const input = find('input', qty.parentElement);
      setQuantity(input, quantity(input.value) + (qty.classList.contains('add') ? 1 : -1));
      return;
    }
    const view = el.closest('[data-open],.shopping_box .icon');
    if (view) {
      event.preventDefault();
      if (view.dataset.open === 'checkout') return message('Preview only. No order will be placed.');
      return view.dataset.open === 'inquiry' ? showOrder('inquiry', 'Inquiry List') : showOrder('cart', 'Shopping Cart');
    }
    if (el.closest('.content2 .icon_box .word .one')) {
      const wish = el.closest('.one');
      const active = wish.classList.toggle('active');
      wish.textContent = active ? 'Added to wish' : 'Add to wish';
    }
    if (el.closest('.ins_productCon9 .icon_box .word span:first-child')) {
      find('.ins_productCon16').scrollIntoView({behavior:'smooth'});
    }
    if (el.closest('.review-preview-submit,.ins_productCon16 .inputInfo .btn')) {
      event.preventDefault();
      const box = el.closest('.inputInfo');
      const value = find('textarea', box).value.trim();
      if (!value) return message('Please enter a reply.');
      const result = document.createElement('p');
      result.textContent = value;
      box.before(result);
      find('textarea', box).value = '';
      box.classList.remove('active');
      box.closest('.right_box').querySelector('.message').classList.remove('active');
    }
    if (el.closest('#mobile-search')) find('.search_for').classList.add('active');
    if (el.closest('.foot_left .input button')) message('Subscription preview. No email has been sent.');
  });
  document.addEventListener('change', e => {
    if (e.target.matches('.btn_add input')) setQuantity(e.target, e.target.value);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.popup_close();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[role="button"]')) {
      e.preventDefault(); e.target.click();
    }
  });
  document.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.matches('.contact_Info form')) {
      message('Preview only. Your inquiry has not been sent.');
      window.popup_close();
    }
  });
})();
