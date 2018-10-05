/*
 **
 ** library.js
 ** Authors: Amy York and Robert Spurlin
 ** All the JS needed for the library website redesign.
 **
 */


// For use of let and const on older browsers that do not support ES6
'use strict';

$(document).ready(function () {

  // Alert system for MTSU.
  const feed = "https://www.getrave.com/rss/mtsu/channel1";
  $.ajax(feed, {
    accepts: {
      xml: "application/rss+xml"
    },
    dataType: "xml",
    success: function (data) {
      let xmlCount = 0;
      $(data).find('item').each(function () {
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
  $("#search-menu").click(function (e) {
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
  $('body').on('click', '.navbar-toggle.collapsed', function () {
    $('.navbar-toggle').toggleClass('offnav onnav');
  });

  // Home page slider on featured buttons function

  const hours = document.getElementById('hours');
  const coursereserves = document.getElementById('coursereserves');
  const howdoi = document.getElementById('howdoi');
  const reserverooms = document.getElementById('reserverooms');

  $('.roomtrigger').click(function (e) {
    e.preventDefault();

    if (hours && hours.style.display === 'block') {
      $('#hours').slideUp('fast');

      setTimeout(function () {
        $('#reserverooms').slideToggle('fast')
      }, 300);

    } else if (coursereserves && coursereserves.style.display === 'block') {
      $('#coursereserves').slideUp('fast');

      setTimeout(function () {
        $('#reserverooms').slideToggle('fast')
      }, 300);

    } else if (howdoi && howdoi.style.display === 'block') {
      $('#howdoi').slideUp('fast');

      setTimeout(function () {
        $('#reserverooms').slideToggle('fast')
      }, 300);

    } else {
      $('#reserverooms').slideToggle('fast');
    }
  });

  $('.hourtrigger').click(function (e) {
    e.preventDefault();

    if (reserverooms && reserverooms.style.display === 'block') {
      $('#reserverooms').slideUp('fast');

      setTimeout(function () {
        $('#hours').slideToggle('fast')
      }, 300);

    } else if (coursereserves && coursereserves.style.display === 'block') {
      $('#coursereserves').slideUp('fast');

      setTimeout(function () {
        $('#hours').slideToggle('fast')
      }, 300);

    } else if (howdoi && howdoi.style.display === 'block') {
      $('#howdoi').slideUp('fast');

      setTimeout(function () {
        $('#hours').slideToggle('fast')
      }, 300);

    } else {
      $('#hours').slideToggle('fast');
    }
  });

  $('.coursetrigger').click(function (e) {
    e.preventDefault();

    if (reserverooms && reserverooms.style.display === 'block') {
      $('#reserverooms').slideUp('fast');

      setTimeout(function () {
        $('#coursereserves').slideToggle('fast')
      }, 300);

    } else if (hours && hours.style.display === 'block') {
      $('#hours').slideUp('fast');

      setTimeout(function () {
        $('#coursereserves').slideToggle('fast')
      }, 300);

    } else if (howdoi && howdoi.style.display === 'block') {
      $('#howdoi').slideUp('fast');

      setTimeout(function () {
        $('#coursereserves').slideToggle('fast')
      }, 300);

    } else {
      $('#coursereserves').slideToggle('fast');
    }
  });

  $('.howdoitrigger').click(function (e) {
    e.preventDefault();

    if (reserverooms && reserverooms.style.display === 'block') {
      $('#reserverooms').slideUp('fast');

      setTimeout(function () {
        $('#howdoi').slideToggle('fast')
      }, 300);

    } else if (hours && hours.style.display === 'block') {
      $('#hours').slideUp('fast');

      setTimeout(function () {
        $('#howdoi').slideToggle('fast')
      }, 300);

    } else if (coursereserves && coursereserves.style.display === 'block') {
      $('#coursereserves').slideUp('fast');

      setTimeout(function () {
        $('#howdoi').slideToggle('fast')
      }, 300);

    } else {
      $('#howdoi').slideToggle('fast');
    }
  });

  $(".child").css({
    "height": $('.parent').height()
  });

  $(window).resize(function () {
    $(".child").css({
      "height": $('.parent').height()
    });
  });

  $('.chat').click(function () {
    $(this).toggleClass('open');
  });

  // Scroll change. To make the logo smaller on scroll and back.

  // First, need to add padding to the body so nothing is broken... 

  $('body').css({
    //'padding-top': $('header').height()
  });

  // Now let's do the shrinking. 
  let scrolled = false;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 32 && !scrolled) {
      $('#logo-and-nav').toggleClass('fixed-menu');
      scrolled = true;
    }

    else if (window.scrollY <= 32) {
      if (scrolled) {
        $('#logo-and-nav').toggleClass('fixed-menu');
        scrolled = false;
      } else if ($(window).width() >= 1079) {
        const top = $('.dropdown-menu.mega-dropdown-menu').css('top');
        $('.dropdown-menu.mega-dropdown-menu').offset({
          top: (top - window.scrollY)
        });
      }
    }
  });
});