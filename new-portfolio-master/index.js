  
$(document).ready(function() {
    var scroll_start = 0;
    var startChange = $("#about");
    var offset = startChange.offset();
    $(window).scroll(function() {
      $("#home").css("opacity", 1 - $(window).scrollTop() / 200);
    });
    if (startChange.length) {
      $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if (scroll_start > 527) {
          $(".fixed-top").css("background", "white");
          $(".nav-link").css("color", "teal");
        } else {
          $(".fixed-top").css("background", "transparent");
          $(".nav-link").css("color", "white");
        }
      });
    }
  })
  