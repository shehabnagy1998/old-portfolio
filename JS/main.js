/*global $*/

$(function () {
    'use strict';

  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();

  $(".opener").click(function(event) {
    $(this).animate({opacity: "0"}, 1000);
    $(".left-menu").animate({width: "100%"}, 1000, function() {
      $(".menu-content").animate({opacity: "1"}, 1000);
    });
  });

  $(".closer").click(function(event) {
    $(".menu-content").animate({opacity: "0"}, 1000, function() {
      $(".left-menu").animate({width: "0%"}, 1000);
      $(".opener").animate({opacity: "1"}, 1000);
    });
  });

  $("#home-tab").fadeIn(1000);

  $(".left-menu .menu-items").click(function(event) {
    /* Act on the event */
    $(this).addClass('active').siblings().removeClass('active');
    if ($(window).width() <= 991.98) {
      $(".menu-content").animate({opacity: "0"}, 500, function() {
        $(".left-menu").animate({width: "0%"}, 500);
        $(".opener").animate({opacity: "1"}, 500);
      });
    }
    $($(this).attr('href')).fadeIn(1000).siblings().fadeOut(1000);
  });

  $.ripple(".tab", {
    on: "mousedown",
    opacity: 0.4,
    color: "auto",
    multi: true,
    easing: 'ease-in-out'
  });

  $.ripple(".menu-items:not('.active')", {
    on: "mousedown",
    opacity: 0.6,
    color: "auto",
    multi: true,
    easing: 'linear',
    duration: 1
  });

  $(".social .btn").click(function(event) {
    /* Act on the event */
    $(this).toggleClass('active').parent().siblings().each(function () {
      $(this).children().removeClass('active').children('div');
    });
    $(".social .btn.active").children('div').animate({width: "300px"}, 1000);
    $(".social .btn:not('.active')").children('div').animate({width: "0px"}, 1000);
  });
});
