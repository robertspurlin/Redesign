/*
 **
 ** library.js
 ** Authors: Amy York and Robert Spurlin
 ** All the JS needed for the library website redesign.
 **
 */


// For use of let and const on older browsers that do not support ES6
'use strict';

$(document).ready(function() {

  // Alert system for MTSU.
  const feed = "https://www.getrave.com/rss/mtsu/channel1";
  $.ajax(feed, {
    accepts: {
      xml: "application/rss+xml"
    },
    dataType: "xml",
    success: function(data) {
      let xmlCount = 0;
      $(data).find('item').each(function() {
        if (!xmlCount) {
          xmlCount++;
          const alertText = $(this).find('description').text();
          if (alertText.indexOf('MTSU ALERT') > -1) {
            $('.Alert').append(alertText);
          }
        }
      });
    }
  });

  // ITD Header.
  let searchvisible = 0;
  $("#search-menu").click(function(e) {
    //This stops the page scrolling to the top on a # link.
    e.preventDefault();
    if (searchvisible === 0) {
      //Search is currently hidden. Slide down and show it.
      $("#search-form").slideDown(200);
      $("#s").focus(); //Set focus on the search input field.
      searchvisible = 1; //Set search visible flag to visible.
    } else {
      //Search is currently showing. Slide it back up and hide it.
      $("#search-form").slideUp(200);
      searchvisible = 0;
    }
  });

  // Button animation trigger
  $('body').on('click', '.navbar-toggle.collapsed', function() {
    $('.navbar-toggle').toggleClass('offnav onnav');
  });

  // Home page slider on featured buttons function
  $('.roomtrigger').click(function(e) {
    e.preventDefault();

    if (document.getElementById('hours') && document.getElementById('hours').style.display === 'block') {
      $('#hours').slideUp('fast');

      setTimeout(function() {
        $('#reserverooms').slideToggle('fast')
      }, 300);

    } else {
      $('#reserverooms').slideToggle('fast');
    }
  });

  $('.hourtrigger').click(function(e) {
    e.preventDefault();

    if (document.getElementById('reserverooms') && document.getElementById('reserverooms').style.display === 'block') {
      $('#reserverooms').slideUp('fast');

      setTimeout(function() {
        $('#hours').slideToggle('fast')
      }, 300);

    } else {
      $('#hours').slideToggle('fast');
    }
  });

  $(".child").css({
    "height": $('.parent').height()
  });

  $(window).resize(function() {
    $(".child").css({
      "height": $('.parent').height()
    });
  });

  // Smooth scroll function
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      if (screen.width <= 991) {
        setTimeout(function() {
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          const targetscroll = target.offset().top;
          if (target.length) {
            $('html, body').animate({
              scrollTop: targetscroll
            }, 500);
          }
        }, 300);
      }
    }
  });

  $('.chat').click(function(){
    $(this).toggleClass('open');
  });
});
