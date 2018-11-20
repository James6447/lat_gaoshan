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
  $(".main-background").css("background-image", "url('img/brand-1.jpg')");
  if ($(window).width() <= 768) toggle("brand1");
});
document.getElementById("brand2").addEventListener("mouseover", function() {
  $(".main-background").css("background-image", "url('img/brand-2.jpg')");
  if ($(window).width() <= 768) toggle("brand2");
});
document.getElementById("brand3").addEventListener("mouseover", function() {
  $(".main-background").css("background-image", "url('img/brand-3.jpg')");
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

  var center = new google.maps.LatLng(lat, lng);
  // using global variable:
  map.panTo(center);
}

/* ------------------------end-------------------------- */

// BRANDS
function showImg(img) {
  document.getElementById(img).style.border = "7px solid #f5a131";
}

function hideImg(img) {
  document.getElementById(img).style.border = "5px solid #fff";
}

