$(document).ready(function() {
  var msnry = new Masonry(".grid", {
    // options
  });
  $(".grid-item").hover(function() {
    $(this)
      .find(".card-body")
      .css({ top: "0%" });
  });

  $(".grid-item").mouseleave(function() {
    $(this)
      .find(".card-body")
      .css({ top: "100%" });
  });

  $(".btn").hover(function() {
    $(this)
      .find(".fa-arrow-right")
      .css({ left: "83%", opacity: "1" });
    $(this)
      .find(".txtbtn")
      .css({ "margin-left": "0px" });
  });

  $(".btn").mouseleave(function() {
    $(this)
      .find(".fa-arrow-right")
      .css({ left: "0%", opacity: "0" });
    $(this)
      .find(".txtbtn")
      .css({ "margin-left": "0px" });
  });
});
