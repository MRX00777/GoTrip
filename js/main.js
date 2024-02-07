


// Carousel

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});



const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
    responsive : {
        // breakpoint from 0 up
        0 : {
            
        },
        // breakpoint from 480 up
        480 : {
            
        },
        // breakpoint from 768 up
        1000 : {
            margin: 20,
        },
        1200 : {
            margin: 30,
        },
    }
});


$('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
})



// Burger nav button

// const navBtn = document.querySelector('.nav__toggle');

var Menu = {

  
    el: {
      ham: $('.menu'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom')
    },
    
    init: function() {
      Menu.bindUIactions();
    },
    
    bindUIactions: function() {
      Menu.el.ham
          .on(
            'click',
          function(event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
    },
    
    activateMenu: function() {
      Menu.el.menuTop.toggleClass('menu-top-click');
      Menu.el.menuMiddle.toggleClass('menu-middle-click');
      Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
    }
  };
  
  Menu.init();


const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');


navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no--scroll');
}






