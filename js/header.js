$(document).ready(function() {
  navtogglechange();
  nowstatenav();
});

function backTop() {
  var top = window.pageYOffset;

  if (top <= 100) {
    document.getElementById("head").style.visibility = "hidden";
    document.getElementById("head").style.opacity = "0";
  } else {
    document.getElementById("head").style.visibility = "visible";
    document.getElementById("head").style.opacity = "1";
  }
}

function nowstatenav() {
  function ShowAnswer(){
    document.getElementById("AnswerBox").innerHTML='2';
  }
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

$("#myTab a").on("click", function(e) {
  e.preventDefault();
  $(this).tab("show");
});


//Animate contact icon
function toHead() {
  $("html, body").animate(
    {
      scrollTop: $("html").offset().top
    },
    250
  );
}
$("#head").click(function() {
  toHead();
});
$(".list-group li").click(function() {
  toHead();
});

function stop() {
  var element = document.getElementById("fb");
  element.classList.remove("bounce");
}

function start() {
  var element = document.getElementById("fb");
  element.classList.add("bounce");
}