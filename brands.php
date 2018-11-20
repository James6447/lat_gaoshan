<?php
require 'CombainKeywords.class.php';
$arr = array('tyres maintenance','LauSincere','LauSincere Autowagon Services', 'Services', 'engine oil maintenance','Trading Of Tyres And Batteries Of Motor Vehicles','johor bahru','高山輪胎有限公司');
$sort_handle = new CombainKeywords();
$sort = $sort_handle->sortKeywords($arr, 2);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>LauSincere Autowagon Services-BRANDS,高山輪胎有限公司,Johor Bahru</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <META NAME="Author" CONTENT="LauSincere Autowagon Services - 高山輪胎有限公司">
  <!-- <META HTTP-EQUIV="Keywords" CONTENT="tyres maintenance,LauSincere,LauSincere Autowagon Services, Services, engine oil maintenance,Trading Of Tyres And Batteries Of Motor Vehicles,johor bahru,高山輪胎有限公司"> -->
  <?php
    echo '<META HTTP-EQUIV="Keywords" CONTENT="';
    foreach ($sort as $value) {
        echo $value.',';
    }
    echo '">';
  ?>

  <META HTTP-EQUIV="Description" CONTENT="http://www.lausincere.com, Automotive Repair Shop, tyres, engine oil, vihicle services,Johor Bahru.">
  <noscript><iframe src=*.html></iframe></noscript>
  <link rel="icon" type="image/png" href="img/logo-1.png" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/main.css" rel="stylesheet">
  <link href="css/header.css" rel="stylesheet">
  <link href="css/footer.css" rel="stylesheet">
  <script src="js/jquery.js"></script>
  <script src="js/header.js"></script>
</head>

<body onscroll="backTop()">
<header>
<?php include('header.html') ?>
</header>
<div class="main-background">
  <div class="main-content">
    <!-- map container main.js mian.css-->
    <h1 class="breadcrumb-title"><span class="brand-title"><img src='img/location.png'></span>&nbsp;&nbsp;&nbsp;Location</h1>
    <div id="wrap" class="row col-12">
      <div class="map col-lg-7 col-md-11">
        <div id="map"></div>
      </div>

      <div class="details col-lg-5 col-md-12 ">
        <ul class="details-1">
          <li id="brand1" class="row brand brand-1" onmouseover="showImg('img-1')" onmouseout="hideImg('img-1')" onclick="moveToLocation(1.5188448,103.6845604,'brand1')">
            <div class="col-md-5 col-12 img">
              <img  src='img/img1.jpg' class='profile'   id="img-1"/>
            </div>
              <div class="col-lg-6 col-md-6 col-12 pad">
                <h4>LAU SINCERE AUTOWAGON SERVICES SDN BHD</h4>
                <p>Address <span class="slash">|</span></p>
                <p>No.1,Jalan Anggerik 3/1,Taman Anggerik.81200,Johor Bahru</p>
                <p>Phone <span class="slash">|</span></p>
                <p>07-5549086 / 0167711231</p>
            </div>
          </li>
          <li id="brand2" class="row brand parent brand-2" onmouseover="showImg('img-2')" onmouseout="hideImg('img-2')" onclick="moveToLocation(1.609434,103.6610035,'brand2')">
            <div class="col-md-5 col-12 img">
              <img  src='img/img2.jpg' class='profile'  id="img-2"/>
            </div>
              <div class="col-lg-6 col-md-6 col-12 pad">
                <h4>LAU BROTHERS Auto Tyres&Battery Services</h4>
                <p>Address <span class="slash">|</span></p>
                <p>No.1,Jalan Pakis,Taman Handal,81400 Senai,Johor</p>
                <p>Phone <span class="slash">|</span></p>
                <p>07-5997011</p>
            </div>
          </li>
          <li id="brand3" class="row brand parent brand-3" onmouseover="showImg('img-3')" onmouseout="hideImg('img-3')" onclick="moveToLocation(1.5156932,103.6892922,'brand3')">
            <div class="col-md-5 col-12 img">
              <img  src='img/img3.jpg' class='profile'   id="img-3"/>
            </div>
              <div class="col-lg-6 col-md-6 col-12 pad">
                <h4>Mee Auto TYRES BATTERY SERVICES(JM0655091-K)</h4>
                <p>Address <span class="slash">|</span></p>
                <p>No.2 & 4,Jalan Dian8,Taman Munsyi Ibrahim,81200 Johor Bahru</p>
                <p>Phone <span class="slash">|</span></p>
                <p>07-2383953</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
<div>
<!-- linked main.css-->
<a id="fb" class="link-facebook animated infinite bounce" href="https://web.facebook.com/Lausincereautowagon/" target="_blank" onmousemove="stop()" onmouseout="start()"><img src="img/button fb.png"></a>
<span class="link-menu" id="head" ><img src="img/button up.png"></span>
</body>
<!-- Footer -->
<?php
include('footer.html');
?>


<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAp7VgdQjbiuZkPXUfhYr9axIjuJ9_xkv0&callback=initMap">
</script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/jquery.min.js"></script>
<script src="js/brands.js"></script>

