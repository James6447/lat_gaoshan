$(document).ready(function () {
  $('.fb-page').rwd();
  $('.close0').click(function(){
    var vid = document.getElementById('video0')
    vid.pause();
  })
  $('.close1').click(function(){
    var vid = document.getElementById('video1')
    vid.pause();
  })
  $(".grid-item").hover(function () {
    $(this)
      .find(".card-body")
      .css({
        top: "0%"
      });
  });

  $(".grid-item").mouseleave(function () {
    $(this)
      .find(".card-body")
      .css({
        top: "100%"
      });
  });

  $(".btn").hover(function () {
    $(this)
      .find(".fa-arrow-right")
      .css({
        left: "83%",
        opacity: "1"
      });
    $(this)
      .find(".txtbtn")
      .css({
        "margin-left": "0px"
      });
  });

  $(".btn").mouseleave(function () {
    $(this)
      .find(".fa-arrow-right")
      .css({
        left: "0%",
        opacity: "0"
      });
    $(this)
      .find(".txtbtn")
      .css({
        "margin-left": "0px"
      });
  });
});