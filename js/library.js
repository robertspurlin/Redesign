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
  })



  $('#reserverooms').hide();

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

  if (document.getElementsByClassName("s-lib-cmd-bar").length != 0) {
    document.getElementById("s-lg-guide-tabs").style.display = "block";
  } else {
    document.getElementById("s-lg-guide-tabs").style.display = "none";
  }

  $('.chat').click(function(){
    $(this).toggleClass('open');
  });
});
