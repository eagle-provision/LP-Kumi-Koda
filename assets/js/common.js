!(function($) {
  "use strict";

  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  console.log(window.innerWidth);
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }


    
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  // Toggle .header-scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Toggle .page-action-btn
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $('.page-action-btn').addClass('fixed');
    } else {
      $('.page-action-btn').removeClass('fixed');
    }
  });

  if ($(window).scrollTop() > 700) {
    $('.page-action-btn').addClass('fixed');
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;

  $(document).on('click', '.nav-menu a, .mobile-nav-menu a, .scrollto, .link, #toc_container a', function(e) {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1000);

        if ($(this).parents('.nav-menu, .mobile-nav-menu').length) {
          $('.nav-menu .active, .mobile-nav-menu .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle').toggleClass('toggle-active');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1000);
      }
    }
  });

  // Mobile Navigation
  $('body').prepend('<button type="button" class="mobile-nav-toggle"><span class="toggle-icon"><span></span><span></span></span></button>');
  $('body').append('<div class="mobile-nav-overly"></div>');

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle').toggleClass('toggle-active');
    $('.mobile-nav-overly').toggle();
  });

  $(document).on('click', '.mobile-nav-menu .drop-down > a', function(e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

  $(document).click(function(e) {
    var container = $("#mobile-nav, .mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle').toggleClass('toggle-active');
        $('.mobile-nav-overly').fadeOut();
      }
    }
  });

  $(document).on('click', '.products-btns .size-select-btn', function(e) {
    e.preventDefault();
    $(this).parents('.modal-content').find('.select-size-layout').fadeIn();
  });

  $(".size_buttons > button").click(function () {
    const sizes = characters[0].product.silver.size;
    $(".size-number>p>span").html($(this).html());
    const size = $(this).html();
    $(".add-cart-btn").attr('href', sizes.filter(s => s.number == size)[0].cart_url);
  });

})(jQuery);


$(".black").click(function() {
  $(".black").css("background-color", "gray");
  $(this).css("background-color", "#cfcccc");
});


$('.modal-close').click(function() {
  $('.bg-black').css('display', 'none');
  window.location.href = 'index.html';
});



$(document).ready(function() {
  if ($('.slides').length > 0) {
    $('.slides').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: false,
        cssEase: 'ease-in-out'
    });
  }
});
