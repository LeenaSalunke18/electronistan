// $(document).ready(function () {
//   "use strict";

//   var menuActive = false;
//   var header = $('.header');
//   setHeader();
//   initCustomDropdown();
//   initPageMenu();

//   function setHeader() {

//     if (window.innerWidth > 991 && menuActive) {
//       closeMenu();
//     }
//   }

//   function initCustomDropdown() {
//     if ($('.custom_dropdown_placeholder').length && $('.custom_list').length) {
//       var placeholder = $('.custom_dropdown_placeholder');
//       var list = $('.custom_list');
//     }

//     placeholder.on('click', function (ev) {
//       if (list.hasClass('active')) {
//         list.removeClass('active');
//       }
//       else {
//         list.addClass('active');
//       }

//       $(document).one('click', function closeForm(e) {
//         if ($(e.target).hasClass('clc')) {
//           $(document).one('click', closeForm);
//         }
//         else {
//           list.removeClass('active');
//         }
//       });

//     });

//     $('.custom_list a').on('click', function (ev) {
//       ev.preventDefault();
//       var index = $(this).parent().index();

//       placeholder.text($(this).text()).css('opacity', '1');

//       if (list.hasClass('active')) {
//         list.removeClass('active');
//       }
//       else {
//         list.addClass('active');
//       }
//     });

//     $('select').on('change', function (e) {
//       placeholder.text(this.value);

//       $(this).animate({ width: placeholder.width() + 'px' });
//     });
//   }

//   function initPageMenu() {
//     if ($('.page_menu').length && $('.page_menu_content').length) {
//       var menu = $('.page_menu');
//       var menuContent = $('.page_menu_content');
//       var menuTrigger = $('.menu_trigger');

//       menuTrigger.on('click', function () {
//         if (!menuActive) {
//           openMenu();
//         }
//         else {
//           closeMenu();
//         }
//       });

//       if ($('.page_menu_item').length) {
//         var items = $('.page_menu_item');
//         items.each(function () {
//           var item = $(this);
//           if (item.hasClass("has-children")) {
//             item.on('click', function (evt) {
//               evt.preventDefault();
//               evt.stopPropagation();
//               var subItem = item.find('> ul');
//               if (subItem.hasClass('active')) {
//                 subItem.toggleClass('active');
//                 TweenMax.to(subItem, 0.3, { height: 0 });
//               }
//               else {
//                 subItem.toggleClass('active');
//                 TweenMax.set(subItem, { height: "auto" });
//                 TweenMax.from(subItem, 0.3, { height: 0 });
//               }
//             });
//           }
//         });
//       }
//     }
//   }

//   function openMenu() {
//     var menu = $('.page_menu');
//     var menuContent = $('.page_menu_content');
//     TweenMax.set(menuContent, { height: "auto" });
//     TweenMax.from(menuContent, 0.3, { height: 0 });
//     menuActive = true;
//   }

//   function closeMenu() {
//     var menu = $('.page_menu');
//     var menuContent = $('.page_menu_content');
//     TweenMax.to(menuContent, 0.3, { height: 0 });
//     menuActive = false;
//   }
// });

// (function () {

//   function init(item) {
//     var items = item.querySelectorAll('li'),
//       current = 0,
//       autoUpdate = true,
//       timeTrans = 4000;

//     var navv = document.createElement('navv');
//     navv.className = 'navv_arrows';

//     var prevbtn = document.createElement('button');
//     prevbtn.className = 'prev';
//     prevbtn.setAttribute('aria-label', 'Prev');

//     var nextbtn = document.createElement('button');
//     nextbtn.className = 'next';
//     nextbtn.setAttribute('aria-label', 'Next');

//     var counter = document.createElement('div');
//     counter.className = 'counter';
//     counter.innerHTML = "<span>1</span><span>" + items.length + "</span>";

//     if (items.length > 1) {
//       navv.appendChild(prevbtn);
//       navv.appendChild(counter);
//       navv.appendChild(nextbtn);
//       item.appendChild(navv);
//     }

//     items[current].className = "current";
//     if (items.length > 1) items[items.length - 1].className = "prev_slide";

//     var navigate = function (dir) {
//       items[current].className = "";

//       if (dir === 'right') {
//         current = current < items.length - 1 ? current + 1 : 0;
//       } else {
//         current = current > 0 ? current - 1 : items.length - 1;
//       }

//       var nextCurrent = current < items.length - 1 ? current + 1 : 0,
//         prevCurrent = current > 0 ? current - 1 : items.length - 1;

//       items[current].className = "current";
//       items[prevCurrent].className = "prev_slide";
//       items[nextCurrent].className = "";

//       counter.firstChild.textContent = current + 1;
//     }

//     item.addEventListener('mouseenter', function () {
//       autoUpdate = false;
//     });

//     item.addEventListener('mouseleave', function () {
//       autoUpdate = true;
//     });

//     setInterval(function () {
//       if (autoUpdate) navigate('right');
//     }, timeTrans);

//     prevbtn.addEventListener('click', function () {
//       navigate('left');
//     });

//     nextbtn.addEventListener('click', function () {
//       navigate('right');
//     });

//     document.addEventListener('keydown', function (ev) {
//       var keyCode = ev.keyCode || ev.which;
//       switch (keyCode) {
//         case 37:
//           navigate('left');
//           break;
//         case 39:
//           navigate('right');
//           break;
//       }
//     });

//     item.addEventListener('touchstart', handleTouchStart, false);
//     item.addEventListener('touchmove', handleTouchMove, false);
//     var xDown = null;
//     var yDown = null;
//     function handleTouchStart(evt) {
//       xDown = evt.touches[0].clientX;
//       yDown = evt.touches[0].clientY;
//     };
//     function handleTouchMove(evt) {
//       if (!xDown || !yDown) {
//         return;
//       }

//       var xUp = evt.touches[0].clientX;
//       var yUp = evt.touches[0].clientY;

//       var xDiff = xDown - xUp;
//       var yDiff = yDown - yUp;

//       if (Math.abs(xDiff) > Math.abs(yDiff)) {
//         if (xDiff > 0) {
//           navigate('right');
//         } else {
//           navigate('left');
//         }
//       }
//       xDown = null;
//       yDown = null;
//     };
//   }

//   [].slice.call(document.querySelectorAll('.cd-slider')).forEach(function (item) {
//     init(item);
//   });

// })();

// $(document).ready(function () {

//   $('#itemslider').carousel({ interval: 3000 });

//   $('.carousel-showmanymoveone .item').each(function () {
//     var itemToClone = $(this);

//     for (var i = 1; i < 6; i++) {
//       itemToClone = itemToClone.next();

//       if (!itemToClone.length) {
//         itemToClone = $(this).siblings(':first');
//       }

//       itemToClone.children(':first-child').clone()
//         .addClass("cloneditem-" + (i))
//         .appendTo($(this));
//     }
//   });
// });


// $("input.variation").on("click", function () {
//   if ($(this).val() > 3) {
//     $("body").css("background", "#111");
//     $("footer").attr("class", "dark");
//   } else {
//     $("body").css("background", "#f9f9f9");
//     $("footer").attr("class", "");
//   }
// });

// $(".option__button").on("click", function () {
//   $(".option__button").removeClass("selected");
//   $(this).addClass("selected");
//   if ($(this).hasClass("option--grid")) {
//     $(".results-section").attr("class", "results-section results--grid");
//   } else if ($(this).hasClass("option--list")) {
//     $(".results-section").attr("class", "results-section results--list");
//   }
// });

// $(function () {

//   var $clientcarousel = $('#clients-list');
//   var clients = $clientcarousel.children().length;
//   var clientwidth = (clients * 140);
//   $clientcarousel.css('width', clientwidth);

//   var rotating = true;
//   var clientspeed = 1800;
//   var seeclients = setInterval(rotateClients, clientspeed);

//   $(document).on({
//     mouseenter: function () {
//       rotating = false;
//     },
//     mouseleave: function () {
//       rotating = true;
//     }
//   }, '#clients');

//   function rotateClients() {
//     if (rotating != false) {
//       var $first = $('#clients-list li:first');
//       $first.animate({ 'margin-left': '-140px' }, 600, function () {
//         $first.remove().css({ 'margin-left': '0px' });
//         $('#clients-list li:last').after($first);
//       });
//     }
//   }
// });

let  product = document.getElementById('products')


fetch('homeElectronics.json')
.then(response => response.json())
.then(function(json){
  json.forEach(element => {
    product.innerHTML = product.innerHTML + `
    <div class="card" style="width: 30rem;">
            <img src="${element.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title" style=" font-weight: bold; font-size:30px;">${element.price}</h5>
                <p class="card-text">${element.content}</p>
                <a href="#" class="btn " style="margin-left:70px; background-color: #039ee6 !important;">${element.action}</a>
            </div>
        </div>
    `
  });
});


