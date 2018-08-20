$(document).ready(function() {
  navtogglechange();
  nowstatenav();
});

function nowstatenav() {
  /*$('.nav-link').each(function(){
      if($($(this))[0].href==String(window.location))
          $(this).parent().addClass('navactive');
  });
*/
  $(".nav-link").each(function() {
    if (
      this.href == document.location.href ||
      document.location.href.search(this.href) >= 0
    ) {
      $(this).addClass("navactive"); // this.className = 'active';
    }
  });
}

function navtogglechange() {
  $(".navbar-toggler").click(function() {
    if (
      $(this)
        .find(" .line2")
        .hasClass("closss")
    ) {
      $(this)
        .find(".line2")
        .removeClass("closss");
    } else {
      $(this)
        .find(".line2")
        .addClass("closss");
    }
    if (
      $(this)
        .find(" .line3")
        .hasClass("closss1")
    ) {
      $(this)
        .find(".line3")
        .removeClass("closss1");
    } else {
      $(this)
        .find(".line3")
        .addClass("closss1");
    }
    if (
      $(this)
        .find(" .line1,.line4")
        .hasClass("closss2")
    ) {
      $(this)
        .find(".line1,.line4")
        .removeClass("closss2");
    } else {
      $(this)
        .find(".line1,.line4")
        .addClass("closss2");
    }
  });
}
