// responsive menu

  $(document).on("click", ".navbar-toggler", function () {
    // alert(88);
    $(".nav-menu").css({ zIndex: 9999,height: '100vh', opacity: '1' });
    $(this).hide()
    if($(this).hasClass('navbar-toggler')){
      $(this).next('.cross-wrap').show()
    }
  });
  $(document).on("click", ".cross-wrap", function () {
    // alert(88);
    $(".nav-menu").css({ zIndex: -1,height: '0vh', opacity: '0' });
    $(this).hide()
    if($(this).hasClass('cross-wrap')){
      $(this).prev('.navbar-toggler').show()
    }
  });
  $(document).on("click", ".cross-wrap", function () {
    $(".nav-menu").css({ zIndex: '-1',height: '00vh', opacity: '0' });
  });

  //for menu
  $("body").on("click", ".nav-menu li", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".nav-menu li").removeClass("active");
      $(this).addClass("active");
    }
  });