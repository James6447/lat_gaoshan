$(document).ready(function() {
  // when a nav parent is clicked
  let pattern = document.getElementById("pattern").value;
  if (pattern == 1) {
    $(".alt-nav > ul > li")
      .children("#startUp")
      .slideDown();
    $("#startUp #first").addClass("active-choose");
  } else {
    $(".alt-nav > ul > li")
      .children("#car")
      .slideDown();
  }
  
  $(".alt-nav > ul > li").click(function() {
    // if section is already active and clicked again

    if ($(this).hasClass("active-click")) {
      return false;
    } else {
      // if section is made active

      $(".alt-nav ul ul").slideUp();
      $(".alt-nav li").removeClass("active-click");
      $("#startUp li").removeClass("active-choose");
      $("#car li").removeClass("active-choose");
      $("#access li").removeClass("active-choose");
      $(this).addClass("active-click");
      $(this)
        .children("ul")
        .slideDown();
      return false;
    }
  }); // end click event handler

  $("#startUp > li").click(function() {
    if ($(this).hasClass("active-choose")) {
      return false;
    } else {
      $("#startUp li").removeClass("active-choose");
      $(this).addClass("active-choose");
      return false;
    }
  });
  $("#car > li").click(function() {
    if ($(this).hasClass("active-choose")) {
      return false;
    } else {
      $("#car li").removeClass("active-choose");
      $(this).addClass("active-choose");
      return false;
    }
  });
  $("#access > li").click(function() {
    if ($(this).hasClass("active-choose")) {
      return false;
    } else {
      $("#access li").removeClass("active-choose");
      $(this).addClass("active-choose");
      return false;
    }
  });
});

/* ------------------------end-------------------------- */
// Product
//顯示產品
function getProduct(pageName) {
  var req = new XMLHttpRequest();
  req.open("get", "http://localhost:83/product/" + pageName);
  req.onload = function() {
    let app = $(window).width();
    let content = document.getElementById("change");
    change.innerHTML = this.responseText;
    // remove atribute zoom in photo
    if (app <= 769) {
      let cls = document.getElementsByClassName("card-img-top");
      for (var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute("data-action");
      }
    }
  };
  req.send();
}
//
// function getProduct(pageName){
//   var req=new XMLHttpRequest();
//   req.open("get","http://www.lausincere.com/product/"+pageName);
//   req.onload=function(){
//       let app = $(window).width();
//       let content=document.getElementById("change");
//       change.innerHTML=this.responseText;
// //       //remove atribute zoom in photo
//       if(app <= 769){
//           let cls = document.getElementsByClassName('card-img-top');
//           for(var i = 0; i < cls.length; i++) {
//              cls[i].removeAttribute('data-action');
//           }
//       }
//   };
//   req.send();
// }

//選擇殘品後往上滑
function reset() {
  $("html, body").animate(
    {
      scrollTop: $("html").offset().top
    },
    250
  );
}

/* ------------------------end-------------------------- */

