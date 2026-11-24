
function hiUpgrade() { window.AESKey = '';  function isSupportPlaceholder() { var input = document.createElement('input'); return 'placeholder' in input; };function IEVersion() {  var userAgent = navigator.userAgent; var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; if (isIE) {  var reIE = new RegExp("MSIE (\\d+\\.\\d+);"); reIE.test(userAgent); var fIEVersion = parseFloat(RegExp["$1"]); if (fIEVersion < 10 || !isSupportPlaceholder()) { return true; } } else { return false; } } var tpl = '<div id="hi-upgrade"><div class="hi-wrap"><p class="hi-title">Unable to browse this website normally!</p><div class="hi-close">Continue browsing</div><div class="hi-text1"><p>1、Your browser version is too low, please upgrade your browser.</p><p>2、If your browser is the latest version, please switch to the high-speed mode</span>visit.</p><p>3、You are using a browser below IE10. We recommend that you<span>use a mainstream browser</span>visit.</p></div><p class="hi-text2"><span>Mainstream browser downloads</span></p><ul class="hi-list"><li><a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank"><div class="hi-ico1"></div><p>Chrome</p></a></li><li><a href="http://www.firefox.com.cn/download/" target="_blank"><div class="hi-ico2"></div><p>Firefox browser</p></a></li><li><a href="http://browser.360.cn" target="_blank"><div class="hi-ico3"></div><p>UC Browser</p></a></li><li><a href="https://www.uc.cn" target="_blank"><div class="hi-ico4"></div><p>360浏览器</p></a></li><li><a href="https://browser.qq.com" target="_blank"><div class="hi-ico5"></div><p>QQ Browser</p></a></li><li><a href="https://ie.sogou.com" target="_blank"><div class="hi-ico6"></div><p>Sogou Browser</p></a></li></ul></div></div>'; if (IEVersion()) { document.write(tpl); } }
hiUpgrade();
window.onload = function () { document.addEventListener("keydown", function (event) { if ((event.ctrlKey === true || event.metaKey === true) && (event.which === 61 || event.which === 107 || event.which === 173 || event.which === 109 || event.which === 187 || event.which === 189)) { event.preventDefault(); } }, false); }
window.addEventListener("mousewheel", function (event) { if (event.ctrlKey === true || event.metaKey) { event.preventDefault(); } }, { passive: false });
window.addEventListener("DOMMouseScroll", function (event) { if (event.ctrlKey === true || event.metaKey) { event.preventDefault(); } }, { passive: false });
function deepClone(obj, newObj) { var newObj = newObj || {}; for (let key in obj) { if (typeof obj[key] == "object") { newObj[key] = (obj[key].constructor === Array) ? [] : {}; deepClone(obj[key], newObj[key]); } else { newObj[key] = obj[key] } } return newObj; }
function popup_video(src) { $("#popup_video").attr("src", src); $(".popup_video").addClass("active"); var video = $(".popup_video").find("video")[0]; video.play(); }
function popup_iframe(src) {  $("#popup_iframe").attr("src", src); $(".popup_iframe").addClass("active"); }
function popup_img(src) { $("#popup_img").attr("src", src); $(".popup_img").addClass("active"); }
function popup_text() { $(".popup_text").addClass("active"); }

function product_add() { $(".product_add").addClass("active"); } function product_nquiry() { $(".product_nquiry").addClass("active"); }

function select_popup() { $(".select_popup").addClass("active"); }
function product_select() { $(".product_select").addClass("active"); }
function contact_Info() { $(".contact_Info").addClass("active"); }
function product_Info() { $(".product_Info").addClass("active"); }
function popup_close() { $(".remove_box").removeClass("active"); var video = $(".popup_video").find("video")[0]; video.pause(); $("#popup_iframe").attr("src", ""); }
function good_close() { $(".good_box").removeClass("active"); var video = $('.popup_video').find("video")[0]; video.pause(); }
function goUp() { $("html,body").animate({ "scrollTop": 0 }, 1000); }
$(".close_popup").click(function () { $(".open_popup").removeClass("active"); })

let wH = window.innerHeight, wW = window.innerWidth, c = "active";
$(document).ready(function () {
	"use strict";
	$(".checkbox_c").click( function(){ if($(".checkbox_c").hasClass("active")){ $(".checkbox_c").removeClass("active"); $(".checkbox_c").find("input").removeAttr("checked"); } else { $(".checkbox_c").addClass("active"); $(".checkbox_c").find("input").attr("checked","checked"); }})
	$(".jump_num").countUp({ delay: 10, time: 2000 });
	wowFun(".wowUp","fadeInUp animated",1)
	wowFun(".imgScale","active",0.9)
	wowFun(".ins_aboutCon21","active",0.3)
	function inputText() { var input = $("input"); input.each(function(){ var _this = $(this); var text = _this.attr("placeholder"); if(text!="" && text!=null && text!="undefined" && text!=undefined){ _this.attr("autocomplete","off"); _this.focus(function(){ $(this).attr("placeholder","") }); _this.blur(function(){ $(this).attr("placeholder",text) }); } }) } inputText();


			

			function inquiry_list(){
				var box = $('.inquiry_list');
				if (box.length) {
					var li = box.find('table tbody tr');

					li.each(function(){
						var _this = $(this), moreproduct = _this.find(".product .more"),swiper = _this.find(".swiper_box"),prev = _this.find('.prev'), next = _this.find('.next');

						moreproduct.click(function(){
							$(this).parent().parent().find(".product_swiper").toggleClass("active");
							var swiper_1 = new Swiper(swiper, {
								slidesPerView: 3, spaceBetween: 10, speed: 1200,
								watchOverflow: true,
								navigation: { nextEl: next, prevEl: prev, },
								breakpoints: { 1280: { spaceBetween: 6, } },
							})
						})

						

					})

					

				}
			}
			inquiry_list();


			function message_wrap(){
				var box = $('.message_wrap');
					if (box.length) {
					var textareaVal = box.find('textarea');  
					textareaVal.on('input', function() {   
						var message = $('#messageMal').val();
						if(message.length > 1){
							box.find(".opacitybg").addClass("active");
						}else{
							box.find(".opacitybg").removeClass("active");
						}
					});
				}
			}
			message_wrap();

			function message_wrap_details(){
				var box = $('.message_wrap_details');
					if (box.length) {
					var textareaVal = box.find('textarea');  
					textareaVal.on('input', function() {   
						var message = $('#messageMal').val();
						if(message.length > 1){
							box.find(".opacitybg").addClass("active");
						}else{
							box.find(".opacitybg").removeClass("active");
						}
					});
				}
			}
			message_wrap_details();

			function login_wrap (){
				var box = $('.login_wrap ');
				if (box.length) {
					var icon = box.find('.pwdicon');
					icon.click(function(){
						$(this).toggleClass("active");
					})

				}
			}
			login_wrap ();

			function register_wrap (){
				var box = $('.register_wrap ');
				if (box.length) {
					var account = box.find('.account'),content = box.find(".account_content");
					account.click(function(){
						var d = $(this).index();
						$(this).addClass("active").siblings().removeClass("active");
						content.eq(d).addClass("active").siblings().removeClass("active");
					})

				}
			}
			register_wrap ();
			function resetPwd_wrap(){
				var box = $('.resetPwd_wrap');
					if (box.length) {
					var textareaVal = box.find('input');  
					textareaVal.on('input', function() {   
						var message = textareaVal.val();
						if(message.length > 1){
							box.find(".opacitybg").addClass("active");
						}else{
							box.find(".opacitybg").removeClass("active");
						}
					});
				}
			}
			resetPwd_wrap();

			function checkwrap(){
				var box = $('.checkwrap'), shipaddr = box.find(".shipping_addr .item"), add_addr = box.find(".add_icon");
				if (box.length) {
					shipaddr.click(function () {
						$(this).addClass("active").siblings().removeClass("active")
					})
					add_addr.click(function(){
						$(".addAddrPop").addClass("active")
					})
				}
			}
			checkwrap();

			function shiplist(){
				var box = $('.shiplist'), shipaddr = box.find(".item");
				if (box.length) {
					shipaddr.click(function () {
						$(this).addClass("active").siblings().removeClass("active")
					})
				}
			}
			shiplist();

			function add_new_product(){
				var box = $('.add_new_product'), shipaddr = box.find(".taglist .tag");
				if (box.length) {
					shipaddr.click(function () {
						$(this).addClass("active").siblings().removeClass("active")
					})
				}
			}
			add_new_product();

			function inner_fibermall_swiperwrap(){
				var box = $('.inner_fibermall_swiperwrap');
					if (box.length) {
					var swiperbg = box.find(".imgbg"), swiper = box.find('.swiper_box'), current = swiper.find(".swiper-slide"),   pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
					current.eq(0).addClass("active"); 

					var swiper_1 = new Swiper(swiperbg, {
						slidesPerView: 1, spaceBetween: 10, speed: 1200,
						// loop: true, 
						// effect: 'fade', fadeEffect: { crossFade: true, },
						allowTouchMove:false,
						pagination: { el: pagination, clickable: true, }, watchOverflow: true,
						// navigation: { nextEl: next, prevEl: prev, },
					})
					var swiper_2 = new Swiper(swiper, {
						slidesPerView: 5, spaceBetween: 10, speed: 1200,
						// loop: true, 
						// effect: 'fade', fadeEffect: { crossFade: true, },
						pagination: { el: pagination, clickable: true, }, watchOverflow: true,
						navigation: { nextEl: next, prevEl: prev, },
						breakpoints: { 990: { slidesPerView: 1.2, spaceBetween: 12, } },
						on:{
							slideChangeTransitionStart: function () {
								var d = this.activeIndex;
								swiper_1.slideTo(d);
								current.eq(d).addClass("active").siblings().removeClass("active");
							},
							
						}
					})

					current.click(function(){
						var d = $(this).index();
						swiper_1.slideTo(d);
						$(this).addClass("active").siblings().removeClass("active");

					})

				}
			}
			inner_fibermall_swiperwrap();

			function ins_core_test_capability() {
				var box = $('.ins_core_test_capability');
				if (box.length) {
						var swiper = box.find('.swiper_box');
						var swiper_1 = new Swiper(swiper, {
								slidesPerView: 1, spaceBetween: 38, speed: 1200, allowTouchMove: false,
								effect: 'fade', fadeEffect: { crossFade: true, },
						})
						var swiper_info = box.find(".swiper_info");
						swiper_info.each(function(){
								var _this = $(this), swiper_word = _this.find(".swiper_word"),pagination = _this.find('.swiper_line'), prev = _this.find('.prev'), next = _this.find('.next');
								var swiper_2 = new Swiper(swiper_word, {
										slidesPerView: 1, spaceBetween: 38, speed: 1200, watchOverflow: true,
										effect: 'fade', fadeEffect: { crossFade: true, },
										pagination: { el: pagination, clickable: true, type : 'progressbar', },
										navigation: { nextEl: next, prevEl: prev, },
								})
						})

						var item = box.find('.item_box .item');
						item.click(function (e) {
								var index = $(this).index(); swiper_1.slideTo(index);
								$(this).stop().addClass('active').siblings().stop().removeClass('active');
						})
				}
		}
		ins_core_test_capability();
		
			function idx_homeCon1() {
				var box = $(".idx_homeCon1");
				if (box.length) {
					var swiper = box.find(".swiper_box"), pagination = box.find(".idxPageLine"), prev = box.find(".prev"), next = box.find(".next");
					var swiper_1 = new Swiper(swiper, {
						slidesPerView: 3, spaceBetween: 38, speed: 1200,
						loop: true, effect: "fade", fadeEffect: { crossFade: true, },
						pagination: { el: pagination, clickable: true, }, watchOverflow: true,
						navigation: { nextEl: next, prevEl: prev, },
						breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, } },
						autoplay: {delay: 5000, disableOnInteraction: false, waitForTransition: false},
					})
				}
			}
			idx_homeCon1();


			function idx_homeCon2() {
				var box = $(".idx_homeCon2");
				if (box.length) {
					var swiper = box.find(".swiper_box"), centerInfo = swiper.find(".swiper_info");
					var item = box.find(".item_box .item");
					var swiper_1 = new Swiper(swiper, {
						slidesPerView: 1, speed: 500, allowTouchMove: false, spaceBetween: 24,
						on: {
							slideChangeTransitionStart: function () {
								var index = this.realIndex;
								item.removeClass("active").eq(index).addClass("active");
							},
						},
					})
					item.hover(function (e) {
						if(e.type === "mouseenter") {
							var index = $(this).index(); swiper_1.slideTo(index);
						}
					})
					centerInfo.each(function () {
						var pagination = $(this).find(".idxPageLine"), prev = $(this).find(".prev"), next = $(this).find(".next"), swiper_img = $(this).find(".swiper_img");
						var swiper_2 = new Swiper(swiper_img, {
							slidesPerView: 4, spaceBetween: 20, speed: 800,
							navigation: { nextEl: next, prevEl: prev, },
							pagination: { el: pagination, clickable: true, },
							breakpoints: { 990: { slidesPerView: 2, spaceBetween: 10, } },
						})
					})
				}
			}
			idx_homeCon2();

			function idx_homeCon3() {
				var box = $(".idx_homeCon3");
				if (box.length) {
					var item = box.find(".item_box .item");
					item.hover(function (e) {
						var _this = $(this);
						if (e.type === "mouseenter") {
							_this.stop().addClass("active").siblings().stop().removeClass("active");
							item.find(".list").stop().slideUp(500);
							setTimeout(function(){
								_this.find(".list").stop().slideDown(500);
							},300)
						}
					})
					item.eq(0).mouseenter();

					
					var swiper = box.find('.swiper_box'), pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
					var swiper_1 = new Swiper(swiper, {
						slidesPerView: 3, spaceBetween: 38, speed: 1200,
						pagination: { el: pagination, clickable: true, }, watchOverflow: true,
						navigation: { nextEl: next, prevEl: prev, },
						breakpoints: { 990: { slidesPerView: 1, spaceBetween: 20, } },
					})
				}
			}
			idx_homeCon3();
			
			function idx_homeCon4() {
				var box = $(".idx_homeCon4");
				if (box.length) {
					if(wW > 990) {
						var swiper = box.find(".swiper_box");
						swiper.each(function(){
							var swiper_1 = new Swiper($(this), {
								slidesPerView: 1, spaceBetween: 30, speed: 10000,  direction: "vertical",
								allowTouchMove: false, loop: true, loopAdditionalSlides: 7,
								autoplay: {delay: 0, disableOnInteraction: false, reverseDirection: true,},
								breakpoints: { 990: { slidesPerView: 3, spaceBetween: 16, } },
							})
						})
						var swiper_info = box.find(".swiper_info");
						swiper_info.each(function(){
							var swiper_1 = new Swiper($(this), {
								slidesPerView: 1, spaceBetween: 30, speed: 10000,  direction: "vertical",
								allowTouchMove: false, loop: true, loopAdditionalSlides: 7,
								autoplay: {delay: 0, disableOnInteraction: false, reverseDirection: false,},
								breakpoints: { 990: { slidesPerView: 3, spaceBetween: 16, } },
							})
						})
					}else {
						var swiper = box.find(".swiper_box");
						swiper.each(function(){
							var swiper_1 = new Swiper($(this), {
								slidesPerView: 1, spaceBetween: 30, speed: 10000, 
								allowTouchMove: false, loop: true, loopAdditionalSlides: 7,
								autoplay: {delay: 0, disableOnInteraction: false, reverseDirection: true,},
								breakpoints: { 990: { slidesPerView: 3, spaceBetween: 10, } },
							})
						})
						var swiper_info = box.find(".swiper_info");
						swiper_info.each(function(){
							var swiper_1 = new Swiper($(this), {
								slidesPerView: 1, spaceBetween: 30, speed: 10000,
								allowTouchMove: false, loop: true, loopAdditionalSlides: 7,
								autoplay: {delay: 0, disableOnInteraction: false, reverseDirection: false,},
								breakpoints: { 990: { slidesPerView: 3, spaceBetween: 10, } },
							})
						})
					}
				}
			}
			idx_homeCon4();

			function idx_homeCon5() {
				var box = $('.idx_homeCon5');
				if (box.length) {
					var swiper = box.find('.swiper_box'), pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
					var swiper_1 = new Swiper(swiper, {
						slidesPerView: 3, spaceBetween: 38, speed: 1200,
						pagination: { el: pagination, clickable: true, }, watchOverflow: true,
						navigation: { nextEl: next, prevEl: prev, },
						breakpoints: { 990: { slidesPerView: 1, spaceBetween: 20, } },
					})
				}
			}
			idx_homeCon5();

			function idx_homeCon6() {
				var box = $(".idx_homeCon6");
				if (box.length) {
					var swiper = box.find(".swiper_box"), pagination = box.find(".idxPageHide"), prev = box.find(".prev"), next = box.find(".next");
					var swiper_1 = new Swiper(swiper, {
						slidesPerView: 3, spaceBetween: 32, speed: 1200,
						pagination: { el: pagination, clickable: true, }, watchOverflow: true,
						navigation: { nextEl: next, prevEl: prev, },
						breakpoints: { 1300: { spaceBetween: 20, }, 990: { slidesPerView: 1, spaceBetween: 20, } },
					})
				}
			}
			idx_homeCon6();
			

            function ins_productCon4() {
                var box = $('.ins_productCon4');
                if (box.length) {
                    var swiper = box.find('.swiper_box'), pagination = box.find('.swiper_line'), prev = box.find('.prev'), next = box.find('.next');
                    var swiper_1 = new Swiper(swiper, {
                        slidesPerView: 4, spaceBetween: 20, speed: 1200,
                        pagination: { el: pagination, clickable: true, type : 'progressbar', }, watchOverflow: true,
                        navigation: { nextEl: next, prevEl: prev, },
                        breakpoints: { 990: { slidesPerView: 1.2, spaceBetween: 12, } },
                    })
                }
            }
            ins_productCon4();
            
            function ins_productCon7() {
                var box = $('.ins_productCon7');
                if (box.length) {
                    var swiper = box.find('.swiper_box'), pagination = box.find('.swiper_line'), prev = box.find('.prev'), next = box.find('.next');
                    var swiper_1 = new Swiper(swiper, {
                        slidesPerView: 3, spaceBetween: 32, speed: 1200,
                        pagination: { el: pagination, clickable: true, type : 'progressbar', }, watchOverflow: true,
                        navigation: { nextEl: next, prevEl: prev, },
                        breakpoints: { 990: { slidesPerView: 1.2, spaceBetween: 12, } },
                    })
                }
            }
            ins_productCon7();
			

			function ins_productCon9() {
				var box = $(".ins_productCon9");
				if (box.length) {
					var swiper_box = box.find(".swiper_box"), pagination = box.find(".idxPageHide"), prev = box.find(".prev"), next = box.find(".next"), swiper_item = box.find(".swiper_item");
					var item = swiper_item.find("ul li");
					var swiper_1 = new Swiper(swiper_box, {
						slidesPerView: 1, spaceBetween: 38, speed: 1200,allowTouchMove: false,
						pagination: { el: pagination, clickable: true, }, watchOverflow: true,
						breakpoints: { 990: { slidesPerView: 1, spaceBetween: 20, } },
						effect: 'fade', fadeEffect: { crossFade: true, },
					 })
					var swiper_2 = new Swiper(swiper_item, {
						slidesPerView: 4, spaceBetween: 10, speed: 1200, watchOverflow: true,
						navigation: { nextEl: next, prevEl: prev, },
						breakpoints: { 990: { slidesPerView: 5, spaceBetween: 10, } },
					 })
					 item.click(function(){
						var index = $(this).index(); swiper_2.slideTo(index); swiper_1.slideTo(index);
						$(this).stop().addClass("active").siblings().stop().removeClass("active");
					 })
					 box.find(".addLike").click(function(){
						if($(this).hasClass('active')){ $(this).stop().removeClass('active');  }else{ $(this).stop().addClass('active');  }
					 })

				}
			}
			ins_productCon9();

			
			function ins_productCon16(){
				var box = $(".ins_productCon16");
				if(box.length) {
					var likes = box.find(".content2 .item_box .item .right_box .iconInfo .likes");
					likes.each(function(){
						$(this).click(function(){
							if($(this).hasClass("active")){  $(this).stop().removeClass("active"); }else{ $(this).stop().addClass("active"); }
						})
					})
					var message = box.find(".content2 .item_box .item .right_box .iconInfo .message");
					message.each(function(){
						$(this).click(function(){
							if($(this).hasClass("active")){ $(this).stop().removeClass("active"); $(this).parents(".iconInfo").siblings(".inputInfo").removeClass("active"); }
							else{ $(this).stop().addClass("active"); $(this).parents(".iconInfo").siblings(".inputInfo").addClass("active");}
						})
					})
					var swiper_info = box.find(".swiper_info");
					swiper_info.each(function(){
						var swiper = $(this).find(".swiper_box"), pagination = $(this).find(".idxPageHide"), prev = $(this).find(".prev"), next = $(this).find(".next");
						var swiper_1 = new Swiper(swiper, {
							slidesPerView: 2, spaceBetween: 10, speed: 1200,
							pagination: { el: pagination, clickable: true, }, watchOverflow: true,
							navigation: { nextEl: next, prevEl: prev, },
							breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, } },
						})
					})
				}
			}
			ins_productCon16();   

			function ins_productCon17(){
			var box = $('.ins_productCon17');
				if (box.length) {
					var swiper = box.find('.swiper_box'), pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
					var swiper_1 = new Swiper(swiper, {
					slidesPerView: 4, spaceBetween: 20, speed: 1200,
					//loop: true, effect: 'fade', fadeEffect: { crossFade: true, },
					pagination: { el: pagination, clickable: true, }, watchOverflow: true,
					navigation: { nextEl: next, prevEl: prev, },
					breakpoints: { 990: { slidesPerView: 1.3, spaceBetween: 12, } },
				})
			}
			}
			ins_productCon17();

			
			function ins_serviceQueryCon2() {
				var box = $(".ins_serviceQueryCon2");
				if (box.length) {
					var itemLength = box.find(".left_box .content1 .item_box .item").length;
					var itemAc = box.find(".left_box .content1 .item_box .item.active").length, number = 100 / (itemLength - 1);
					box.find(".left_box .content1 .item_box .line").css({ "--width": number * (itemAc - 1) + "%", })
				}
			}
			ins_serviceQueryCon2();
			

			function ins_faqCon1() {
				var box = $('.ins_faqCon1');
				if (box.length) {
					var top = box.find('.right_box .item_box .item .top');
					top.hover(function (e) {
						if(e.type === 'mouseenter') {
							var item = $(this).parent('.item');
							if(item.hasClass('active')){ 
								item.stop().removeClass('active'); item.find('.bot').stop().slideUp(500);
							}else{
								item.stop().addClass('active').siblings().stop().removeClass('active'); item.find('.bot').stop().slideDown(500).parent('.item').siblings().find('.bot').stop().slideUp(500);
								if(wW < 990) { setTimeout(function(){ var topOffset = item.offset().top; $('html,body').animate({ 'scrollTop': topOffset-100}, 1000);},500)}
							}
						}
					})
				}
			}
			ins_faqCon1();
			
			function ins_serviceTrafficCon1() {
				var box = $('.ins_serviceTrafficCon1');
				if (box.length) {
					// var top = box.find('.left_box .item_box .item .top');
					// top.click(function (e) {
                    //     var item = $(this).parent('.item');
                    //     if(item.hasClass('active')){ 
                    //         item.stop().removeClass('active'); item.find('.bot').stop().slideUp(500);
                    //     }else{
                    //         item.stop().addClass('active').siblings().stop().removeClass('active'); item.find('.bot').stop().slideDown(500).parent('.item').siblings().find('.bot').stop().slideUp(500);
                    //     }
					// })
                    // top.parent(".item").eq(0).find(".top").click();


                    
					var top2 = box.find('.right_box .item_box2 .item .top');
					top2.click(function (e) {
                        var item = $(this).parent('.item');
                        if(item.hasClass('active')){ 
                            item.stop().removeClass('active'); item.find('.bot').stop().slideUp(500);
                        }else{
                            item.stop().addClass('active').siblings().stop().removeClass('active'); item.find('.bot').stop().slideDown(500).parent('.item').siblings().find('.bot').stop().slideUp(500);
                        }
					})
                    top2.parent(".item").eq(0).find(".top").click();
				}
			}
			ins_serviceTrafficCon1();

			
            function ins_aboutCon2() {
                var box = $(".ins_aboutCon2");
                if (box.length) {
                    var swiper = box.find(".swiper_box"), pagination = box.find(".idxPageHide"), prev = box.find(".prev"), next = box.find(".next");
                    var swiper_1 = new Swiper(swiper, {
                        slidesPerView: 3, spaceBetween: 0, speed: 1200,
                        pagination: { el: pagination, clickable: true, }, watchOverflow: true,
                        navigation: { nextEl: next, prevEl: prev, }, loop: true,
                        breakpoints: { 990: { slidesPerView: 1, spaceBetween: 0, } },
                        autoplay: {delay: 5000, disableOnInteraction: false, waitForTransition: false},
                    })
                }
            }
            ins_aboutCon2();


            function ins_aboutCon4() {
                var box = $(".ins_aboutCon4");
                if (box.length) {
                    var swiper_img = box.find(".swiper_img"), pagination = box.find(".idxPageHide"), prev = box.find(".prev"), next = box.find(".next"), swiper_box = box.find(".swiper_box");
                    var item = box.find(".item_box .item");
                    var swiper_1 = new Swiper(swiper_img, {
                        slidesPerView: 1, spaceBetween: 38, speed: 1200, watchOverflow: true,
                        effect: "fade", fadeEffect: { crossFade: true, }, allowTouchMove: false,
                        breakpoints: { 990: { slidesPerView: 1, spaceBetween: 20, } },
                     })
                    var swiper_2 = new Swiper(swiper_box, {
                        slidesPerView: 1, spaceBetween: 16, speed: 1200, watchOverflow: true,
                        navigation: { nextEl: next, prevEl: prev, }, 
                        effect: "fade", fadeEffect: { crossFade: true, },
                        pagination: { el: pagination, clickable: true, },
                        breakpoints: { 990: { slidesPerView: 1, spaceBetween: 20, allowTouchMove: true, } },
                        on: {
                            slideChangeTransitionStart: function () {
                                var index = this.realIndex;  swiper_1.slideTo(index);
                                item.removeClass("active").eq(index).addClass("active");
                            },
                        },
                     })
                    item.click(function (e) { var index = $(this).index(); swiper_2.slideTo(index); })
                }
            }
            ins_aboutCon4();
			
            function ins_aboutCon12() {
                var box = $(".ins_aboutCon12");
                if (box.length) {
                    var content1 = box.find(".content1");
                    content1.each(function(){
                        var _this = $(this);
                        var swiper = _this.find(".swiper_img"), pagination = _this.find(".idxPageHide"), top = _this.find(".item_box .item .top");
                        var swiper_1 = new Swiper(swiper, {
                            slidesPerView: 1, spaceBetween: 38, speed: 1200,
                            effect: "fade", fadeEffect: { crossFade: true, },
                            pagination: { el: pagination, clickable: true, }, watchOverflow: true,
                            breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, } },
                        })
                        top.click(function (e) {
                            var item = $(this).parent(".item");
                            item.stop().addClass("active").siblings().stop().removeClass("active"); item.find(".bot").stop().slideDown(500).parent(".item").siblings().find(".bot").stop().slideUp(500);
                            var index = item.index();
                            swiper_1.slideTo(index);
                        })
                        top.eq(0).click();
                    })
                }
            }
            ins_aboutCon12();

			
            function ins_aboutCon14() {
                var box = $('.ins_aboutCon14');
                if (box.length) {
                    var swiper = box.find('.swiper_box');
                    var swiper_1 = new Swiper(swiper, {
                        slidesPerView: 1, spaceBetween: 38, speed: 1200, allowTouchMove: false,
                        effect: 'fade', fadeEffect: { crossFade: true, },
                    })
                    var swiper_info = box.find(".swiper_info");
                    swiper_info.each(function(){
                        var _this = $(this), swiper_word = _this.find(".swiper_word"),pagination = _this.find('.swiper_line'), prev = _this.find('.prev'), next = _this.find('.next');
                        var swiper_2 = new Swiper(swiper_word, {
                            slidesPerView: 1, spaceBetween: 38, speed: 1200, watchOverflow: true,
                            effect: 'fade', fadeEffect: { crossFade: true, },
                            pagination: { el: pagination, clickable: true, type : 'progressbar', },
                            navigation: { nextEl: next, prevEl: prev, },
                        })
                    })

                    var item = box.find('.item_box .item');
                    item.click(function (e) {
                        var index = $(this).index(); swiper_1.slideTo(index);
                        $(this).stop().addClass('active').siblings().stop().removeClass('active');
                    })
                }
            }
            ins_aboutCon14();
			
            function ins_aboutCon16() {
                var box = $('.ins_aboutCon16');
                if (box.length) {
                    var swiper = box.find('.swiper_box'), pagination = box.find('.idxPageShow'), prev = box.find('.prev'), next = box.find('.next');
                    var swiper_1 = new Swiper(swiper, {
                        slidesPerView: 1, spaceBetween: 30, speed: 1200, loopAdditionalSlides: 3,
                        pagination: { el: pagination, clickable: true, }, watchOverflow: true,
                        navigation: { nextEl: next, prevEl: prev, }, loop: true,
                        breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, } },
                        autoplay: {delay: 5000, disableOnInteraction: false, waitForTransition: false},
                    })
                }
            }
            ins_aboutCon16();

			
			function ins_aboutCon22() {
				var box = $(".ins_aboutCon22");
				if (box.length) {
					var top = box.find(".right_box .item_box .item .top"), content = box.find(".content .left_box .content1");
					top.click(function (e) {
						var item = $(this).parent(".item");
						item.stop().addClass("active").siblings().stop().removeClass("active"); item.find(".bot").stop().slideDown(500).parent(".item").siblings().find(".bot").stop().slideUp(500);
						content.eq(item.index()).addClass("active").siblings().removeClass("active");
					})
					top.eq(0).click();
				}
			}
			ins_aboutCon22();



			function ins_aboutCon23() {
				var box = $(".ins_aboutCon23");
				if (box.length) {
					box.each(function (e) {
						var _this = $(this);
						var swiper = _this.find(".swiper_img");
						var swiper_word = _this.find(".swiper_word");
						var item = _this.find(".item_box .item"), pagination = _this.find('.idxPageShow');
						var swiper_2 = new Swiper(swiper_word, {
							slidesPerView: 1, spaceBetween: 12, speed: 800, autoHeight: true, watchOverflow: true, allowTouchMove: false, 
							effect: "fade", fadeEffect: { crossFade: true, },
							pagination: { el: pagination, clickable: true, },
                            breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, allowTouchMove: true, } },
						})
						var swiper_1 = new Swiper(swiper, {
							slidesPerView: 1, spaceBetween: 12, speed: 800, autoHeight: true, watchOverflow: true, allowTouchMove: false, effect: "fade", fadeEffect: { crossFade: true, },
							on: {
								slideChangeTransitionStart: function () {
									var index = this.realIndex; swiper_2.slideTo(index);
									item.removeClass("active").eq(index).addClass("active");
								},
							},
						})
						item.click(function (e) {
							var index = $(this).index();
							swiper_1.slideTo(index);
						})
					})
				}
			}
			ins_aboutCon23();

			function ins_aboutCon25() {
				var box = $('.ins_aboutCon25');
				if (box.length) {
					var list = box.find(".list .one"), content = box.find(".center_box .content_box .content");
					list.click(function (e) {
						var index = $(this).index();
						$(this).stop().addClass('active').siblings().stop().removeClass('active');
						content.eq(index).addClass('active').siblings().stop().removeClass('active');
					})
				}
			}
			ins_aboutCon25();

			
            function ins_aboutCon18() {
                var box = $('.ins_aboutCon18');
                if (box.length) {
                    var swiper = box.find('.swiper_box'), pagination = box.find('.swiper_line'), prev = box.find('.prev'), next = box.find('.next');
                    var swiper_1 = new Swiper(swiper, {
                        slidesPerView: 3.45, spaceBetween: 20, speed: 1200,
                        pagination: { el: pagination, clickable: true, type : 'progressbar', }, watchOverflow: true,
                        navigation: { nextEl: next, prevEl: prev, },
                        breakpoints: { 990: { slidesPerView: 1.5, spaceBetween: 12, } },
                    })
                }
            }
            ins_aboutCon18();
			
            function ins_contactCon3() {
                var box = $('.ins_contactCon3');
                if (box.length) {
					var list = box.find(".list .one"), content = box.find(".center_box .content_box .content");
                    list.hover(function (e) {
                        if(e.type === 'mouseenter') {
                            var index = $(this).index();
                            $(this).stop().addClass('active').siblings().stop().removeClass('active');
                            content.eq(index).addClass('active').siblings().stop().removeClass('active');
                        }
                    })
                }
            }
            ins_contactCon3();

			function categories_box() {
				var box = $('.categories_box');
				if (box.length) {
					if(wW < 990){
						var categories = box.find(".categories");
						categories.click(function(){
							var _this = $(this), siblings = _this.siblings(".categories_list");
							if(_this.hasClass('active')){ 
								_this.stop().removeClass('active'); siblings.stop().slideUp(500);
							}else{
								_this.stop().addClass('active'); siblings.stop().slideDown(500);
							}
						})
					}
				}
			}
			categories_box();

			
			function ins_productCon8(){
				var box = $('.ins_productCon8');
				if (box.length) {
					if(wW < 990) {
						var item = box.find(".center_box .content .content1 .left_box");
						item.click(function(){
							var _this = $(this), siblings = _this.siblings(".right_box");
							if(_this.hasClass('active')){ 
								_this.stop().removeClass('active'); siblings.stop().slideUp(500);
							}else{
								_this.stop().addClass('active'); siblings.stop().slideDown(500);
							}
						})
					}
				}
			}
			ins_productCon8();

			function ins_productCon12() {
				var box = $('.ins_productCon12');
				if (box.length) {
					var item = box.find(".center_box .content .item_box .item");
					var imginfo = box.find(".content .imagesBox .imginfo")
					item.hover(function (e) {
						var index = $(this).index(); 
						$(this).stop().addClass('active').siblings().stop().removeClass('active');
						imginfo.eq(index).stop().addClass('active').siblings().stop().removeClass('active');
					})
				}
			}
			ins_productCon12();


			function ins_solutionCon7() {
				var box = $('.ins_solutionCon7');
				if (box.length) {
					var swiper = box.find('.swiper_box'), pagination = box.find('.swiper_line'), prev = box.find('.prev'), next = box.find('.next');
					var swiper_1 = new Swiper(swiper, {
						slidesPerView: 2, spaceBetween: 20, speed: 1200,
                        pagination: { el: pagination, clickable: true, type : 'progressbar', }, watchOverflow: true,
						navigation: { nextEl: next, prevEl: prev, },
						breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, } },
						autoplay: {delay: 5000, disableOnInteraction: false, waitForTransition: false},
					})
				}
			}
			ins_solutionCon7();
			
            function ins_technologyCon3() {
                var box = $('.ins_technologyCon3');
                if (box.length) {
                    var contentInfo = box.find('.center_box .right_box .content1 .contentInfo');
                    contentInfo.each(function(){
                        var _this = $(this);
                        let tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: _this, pin: false, start: 'top 20%', end: 'bottom 20%', scrub: .1,
                                onEnter: ({progress, direction, isActive}) => {
                                    var index = _this.index(); box.find(".left_box .item_box .item.active .list .one").eq(index - 1).addClass("active").siblings().removeClass("active");
                                    contentInfo.eq(index-1).addClass("active").siblings().removeClass("active");
                                },
                                onEnterBack: ({progress, direction, isActive}) => {
                                    var index = _this.index(); box.find(".left_box .item_box .item.active .list .one").eq(index - 1).addClass("active").siblings().removeClass("active");
                                    contentInfo.eq(index-1).addClass("active").siblings().removeClass("active");
                                },
                            }
                        });
                    })

                    var listinfo = box.find(".center_box .right_box .content1 .contentInfo .conBox .listinfo");
                    listinfo.each(function(){
                        var _this = $(this);
                        var top = _this.offset().top;
                        _this.attr("data-scr",top)
                        let tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: _this, pin: false, start: 'top 20%', end: 'bottom 20%', scrub: .1,
                                onEnter: ({progress, direction, isActive}) => {
                                    var index = _this.index(); box.find(".left_box .item_box .item .list .one.active .bot .tow").eq(index).addClass("active").siblings().removeClass("active");
                                },
                                onEnterBack: ({progress, direction, isActive}) => {
                                    var index = _this.index(); box.find(".left_box .item_box .item .list .one.active .bot .tow").eq(index).addClass("active").siblings().removeClass("active");
                                },
                            }
                        });
                    })
                    box.find(".left_box .item_box .item .list .one .bot .tow").click(function(){
                        var _this  = $(this), number = _this.parent(".bot").parent(".one").index();
                        var datasrc = box.find('.center_box .right_box .content1 .contentInfo').eq(number).find(".conBox .listinfo").eq(_this.index()).attr("data-scr");
                        $('body,html').animate({ scrollTop: (datasrc - 120) + 'px' }); 
                        
                    })
                    box.find(".left_box .item_box .item .list .one .top").click(function(){
                        var item = $(this).parent('.one');
                        item.stop().addClass('active').siblings().stop().removeClass('active'); item.find('.bot').stop().slideDown(500).parent('.one').siblings().find('.bot').stop().slideUp(500);
                    })
                }
            }
            ins_technologyCon3();

});



function closePop() {
	$(".addAddrPop").removeClass("active");
}
