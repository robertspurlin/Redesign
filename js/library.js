/*
 **
 ** library.js
 ** Authors: Amy York and Robert Spurlin
 ** All the JS needed for the library website redesign.
 **
 */

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

  $('body').on('click', '.navbar-toggle.collapsed', function() {
    $('.navbar-toggle').toggleClass('offnav onnav');
  });

  $('.roomtrigger').click(function(e) {
    e.preventDefault();

    if (document.getElementById('gethelp').style.display === "block") {
      $('#gethelp').slideUp('fast');

      setTimeout(function() {
        $('#reserverooms').slideToggle('fast')
      }, 300);

    } else {
      $('#reserverooms').slideToggle('fast');
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

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      const target = $(this.hash);
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

  backgroundChanger();
});



// Newsite V3, background fade function

function backgroundChanger() {
    const backgroundID = document.getElementById('s-lg-box-18167313-container');

    if (!backgroundID) {
      return;
    }

    const bgArr = ['DSC_4753_low_res.jpg', 'download.jpg', 'autumn-2015-test-alert-illus.jpg'];
    const baseURL = "https://libapps.s3.amazonaws.com/accounts/123588/images/";

    const rand = bgArr[Math.floor(Math.random() * bgArr.length)];

    backgroundID.style.background = "url(" + baseURL + rand + ") no-repeat center center";
    backgroundID.style.backgroundSize = "cover";

}
