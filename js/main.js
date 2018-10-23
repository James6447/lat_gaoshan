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
// index
// $("#search-bar").hover(function() {
//   $("#title").toggle("fast");
//   $("#type").toggle("fast");
// });

// $("#translate").hover(function() {
//   $("#text").toggle("1s");
//   $("#pic").toggle("1s");
// });

// $(document).ready(function() {
//   var search_bar = $("#type").width();
//   var select_box = search_bar / 2;
//   $(".item-wrapper").css("width", select_box);

//   var wrapper = $(".item-wrapper").width();
//   var windows = $(window).width();

//   if (windows == 320) {
//     $("#size-wrapper").css("transform", "translate3d(" + -16 + "px, 0px, 0px)");
//   }
//   if (windows == 375) {
//     $("#size-wrapper").css("transform", "translate3d(" + -36 + "px, 0px, 0px)");
//   }
//   if (windows == 425) {
//     $("#size-wrapper").css("transform", "translate3d(" + -53 + "px, 0px, 0px)");
//   }
//   if (windows == 768) {
//     $("#size-wrapper").css(
//       "transform",
//       "translate3d(" + -172.5 + "px, 0px, 0px)"
//     );
//   }
//   if (windows == 1024) {
//     $("#size-wrapper").css(
//       "transform",
//       "translate3d(" + -261 + "px, 0px, 0px)"
//     );
//   }
//   if (windows >= 1300) {
//     var space_width = windows - wrapper;
//     var size_wrapper = 0 - space_width / 2 - 23.5;
//     $("#size-wrapper").css(
//       "transform",
//       "translate3d(" + size_wrapper + "px, 0px, 0px)"
//     );
//   }
// });

// $( window ).resize(function() {
// 	var search_bar =$ ("#type").width();
// 	var select_box = search_bar/2;
//
// 	$('.item-wrapper').css( "width", select_box);
//
// 	var wrapper = $(".item-wrapper").width();
// 	var windows = $(window).width();
// 	var space_width = windows-wrapper;
// 	var size_wrapper = 0-(space_width/2);
//
// 	$('#size-wrapper').css( "transform", "translate3d("+ size_wrapper +"px, 0px, 0px)");
// });

/* ------------------------end-------------------------- */
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

/* ------------------------end-------------------------- */
// Product
//顯示產品
function getProduct(pageName) {
  var req = new XMLHttpRequest();
  req.open("get", "http://localhost:5566/lat_gaoshan/product/" + pageName);
  req.onload = function() {
    let app = $(window).width();
    let content = document.getElementById("change");
    change.innerHTML = this.responseText;
    //remove atribute zoom in photo
    if (app <= 769) {
      let cls = document.getElementsByClassName("card-img-top");
      for (var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute("data-action");
      }
    }
  };
  req.send();
}

// function getProduct(pageName){
//   var req=new XMLHttpRequest();
//   req.open("get","http://www.lausincere.com/product/"+pageName);
//   req.onload=function(){
//       let app = $(window).width();
//       let content=document.getElementById("change");
//       change.innerHTML=this.responseText;
//       //remove atribute zoom in photo
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
// BRANDS
function showImg(img) {
  document.getElementById(img).style.border = "7px solid #f5a131";
}

function hideImg(img) {
  document.getElementById(img).style.border = "5px solid #fff";
}

function stop() {
  var element = document.getElementById("fb");
  element.classList.remove("bounce");
  // alert('hi');
}

function start() {
  var element = document.getElementById("fb");
  element.classList.add("bounce");
}

/* ------------------------end-------------------------- */

//GOOGLE MAP API
// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
var map;
function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(1.5188448, 103.6845604),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // assigning to global variable:
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h4 id="firstHeading" class="firstHeading">LAU SINCERE AUTOWAGON SERVICES SDN BHD</h4>' +
    '<div id="bodyContent">' +
    "<p>Adress</p>" +
    '<p>No.1,Jalan Anggerik 3/1,Taman Anggerik.81200,Johor Bahru, <a target="_blank" href="https://www.google.la/maps/place/Jalan+Anggerik+3%2F1,+Taman+Anggerik,+81200+Johor+Bahru,+Johor,+Malaysia/@1.5345018,103.6891713,880m/data=!3m2!1e3!4b1!4m5!3m4!1s0x31da7237d36a0091:0x25b164cfc3ce8153!8m2!3d1.5345018!4d103.69136?hl=en">' +
    "https://www.google.la/maps/place/</a> " +
    // '(last visited June 22, 2009).</p>'+
    "</div>" +
    "</div>";

  var contentString1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h4 id="firstHeading" class="firstHeading">LAU BROTHERS Auto Tyres&Battery Services</h4>' +
    '<div id="bodyContent">' +
    "<p>Adress</p>" +
    '<p>No.1,Jalan Pakis,Taman Handal,81400 Senai,Johor, <a target="_blank" href="https://www.google.la/maps/place/1,+Jalan+Pakis,+Taman+Handal,+81400+Senai,+Johor,+Malaysia/@1.6094253,103.6588465,17z/data=!3m1!4b1!4m5!3m4!1s0x31da70eacd010857:0x8fa8b4e0f58f2d9d!8m2!3d1.6094253!4d103.6610352?hl=en">' +
    "https://www.google.la/maps/place/</a> </br>" +
    // '(last visited June 22, 2009).</p>'+
    "</div>" +
    "</div>";

  var contentString2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h4 id="firstHeading" class="firstHeading">Mee Auto TYRES BATTERY SERVICES(JM0655091-K)</h4>' +
    '<div id="bodyContent">' +
    "<p>Adress</p>" +
    '<p>No.2 & 4,Jalan Dian8,Taman Munsyi Ibrahim,81200 Johor Bahru, <a target="_blank" href="https://www.google.la/maps/place/4,+Jalan+Dian+8,+Taman+Munsyi+Ibrahim,+81200+Johor+Bahru,+Johor,+Malaysia/@1.5614378,103.6469808,12z/data=!4m13!1m7!3m6!1s0x31da72561b82b8cb:0x2ea52e2c150c35c0!2s4,+Jalan+Dian+8,+Taman+Munsyi+Ibrahim,+81200+Johor+Bahru,+Johor,+Malaysia!3b1!8m2!3d1.5148888!4d103.6886873!3m4!1s0x31da72561b82b8cb:0x2ea52e2c150c35c0!8m2!3d1.5148888!4d103.6886873?hl=en">' +
    " https://www.google.la/maps/place/</a>" +
    // '(last visited June 22, 2009).</p>'+
    "</div>" +
    "</div>";

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
  });

  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
    maxWidth: 200
  });
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    maxWidth: 200
  });

  var marker = new google.maps.Marker({
    position: { lat: 1.5188448, lng: 103.6845604 },
    map: map
  });

  var marker1 = new google.maps.Marker({
    position: { lat: 1.609434, lng: 103.6610035 },
    map: map
  });

  var marker2 = new google.maps.Marker({
    position: { lat: 1.5156932, lng: 103.6892922 },
    map: map
  });

  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });

  marker1.addListener("click", function() {
    infowindow1.open(map, marker1);
  });

  marker2.addListener("click", function() {
    infowindow2.open(map, marker2);
  });

  $("#brand1").click(function() {
    if ($(window).width() <= 768) {
      toHead();
    }
    infowindow.open(map, marker);
    infowindow1.close(map, marker1);
    infowindow2.close(map, marker2);
  });
  $("#brand2").click(function() {
    if ($(window).width() <= 768) {
      toHead();
    }
    infowindow1.open(map, marker1);
    infowindow.close(map, marker);
    infowindow2.close(map, marker2);
  });
  $("#brand3").click(function() {
    if ($(window).width() <= 768) {
      toHead();
    }
    infowindow2.open(map, marker2);
    infowindow1.close(map, marker1);
    infowindow.close(map, marker);
  });
}

document.getElementById("brand1").addEventListener("mouseover", function() {
  $(".main-background").css("background-image", "url('../img/brand-1.jpg')");
  if ($(window).width() <= 768) toggle("brand1");
});
document.getElementById("brand2").addEventListener("mouseover", function() {
  $(".main-background").css("background-image", "url('../img/brand-2.jpg')");
  if ($(window).width() <= 768) toggle("brand2");
});
document.getElementById("brand3").addEventListener("mouseover", function() {
  $(".main-background").css("background-image", "url('../img/brand-3.jpg')");
  if ($(window).width() <= 768) toggle("brand3");
});
if ($(window).width() <= 768) {
  document.getElementById("brand1").addEventListener("mouseout", function() {
    toggle("brand1", "1");
  });
  document.getElementById("brand2").addEventListener("mouseout", function() {
    toggle("brand2", "1");
  });
  document.getElementById("brand3").addEventListener("mouseout", function() {
    toggle("brand3", "1");
  });
}

function toggle(id, change) {
  if (change == 1) {
    document.getElementById(id).style.opacity = "0.6";
  } else {
    document.getElementById(id).style.opacity = "1";
  }
  // alert(id);
}

function moveToLocation(lat, lng, id, img) {
  let numberOfRects = 3;
  for (var i = 1; i <= numberOfRects; i++) {
    document.getElementById("brand" + i).style.opacity = "0.6";
  }

  document.getElementById(id).style.opacity = "1";
  document.getElementById(id).style.transition = "opacity 0.3s linear";
  // document.getElementById(id).style.transform = 'scale(1.04)';

  var center = new google.maps.LatLng(lat, lng);
  // using global variable:
  map.panTo(center);
}

/* ------------------------end-------------------------- */
// $(function() {
//   var modal1 = document.getElementById("myCMSModal");
//   var btn1 = document.getElementById("vihicle");
//   var span1 = document.getElementsByClassName("close")[0];
//   btn1.onclick = function() {
//     modal1.style.display = "block";
//   };

//   span1.onclick = function() {
//     modal1.style.display = "none";
//   };
// });
