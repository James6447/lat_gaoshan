<?php
require 'CombainKeywords.class.php';
$arr = array('tyres maintenance','LauSincere','LauSincere Autowagon Services', 'Services', 'engine oil maintenance','Trading Of Tyres And Batteries Of Motor Vehicles','johor bahru','高山輪胎有限公司');
$sort_handle = new CombainKeywords();
$sort = $sort_handle->sortKeywords($arr, 2);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>LauSincere Autowagon Services-HOME,高山輪胎有限公司,Johor Bahru</title>
  <meta charset="utf-8">
  <noscript><iframe src=*.html></iframe></noscript>
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

  <link rel="icon" type="image/png" href="img/logo-1.png" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/main.css" rel="stylesheet">
  <link href="css/header.css" rel="stylesheet">
  <link href="css/footer.css" rel="stylesheet">
  <script src="js/jquery.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
  <script src="js/index.js"></script>
  <script src="js/header.js"></script>
  <script src="js/slider.js"></script>

</head>
<body onscroll="backTop()">
<?php include('header.html') ?>

<!-- picture holder container main.js mian.css-->
<div id="search-bar" class="row search justify-content-center container-fluid ">
    <button type="button" class="btn btn-secondary notext" id="btn1" data-toggle="collapse" data-target=".vehicle" aria-control="collapseOne" aria-expanded="true" >
    Find type at here &nbsp&nbsp<img src="img/icon-search.png"></button>
</div>
  <div class="collapse vehicle " id="collapseOne"  aria-labelledby="search-bar">
    <div class="card card-body">
    <div class ="container-fluid col-12 pt-4 pb-4 tabcolor">
              <!-- <ul class="nav nav-tabs " id="myTab" role="tablist">
                 <li class="nav-item focustab">
                    <a class="nav-link tabss " id="vehicle-tab" data-toggle="tab" href="#vehicle" role="tab" aria-controls="vehicle" aria-selected="true">By Vehicle</a>
                </li>  -->
                <!-- <li class="nav-item ">
                    <a class="nav-link tabss" id="rim-tab" data-toggle="tab" href="#rim" role="tab" aria-controls="rim" aria-selected="true">By Inch</a>
                </li> -->
              <!-- </ul> -->
          <div class="tab-content" id="myTabContent">
        <!--      這段保留        -->
            <div class="tab-pane fade show active" id="vehicle" role="tabpanel" aria-labelledby="vehicle">
                <form action="#" method="post">
                  <div class="container pt-4 pb-4" >
                    <div class="d-inline-block col-md-3">
                      <p>CAR BRANDS</p>
                       <select id="typeCar" class="maintain" name="carType">
                           <option value="0">CarType</option>
                            <!--车款选项 -->
                        </select>
                    </div>
                    <div class="d-inline-block col-md-3">
                      <p>CAR MODEL</p>
                      <select id="modelCar" class="maintain" name="carModel">
                            <!-- 车形选项 -->
                       <option>Car Model</option>
                      </select>
                    </div>
                    <img id="imgTitle" src="img/logo/WW.png" style="height:75px; padding:10px;">
                  </div>
                    </form>

               <table id="myTable">
                <!-- <img id="imgTitle" src="img/logo/WW.png" style="height:50px; width:50px;"> -->
                  <caption id="modelTitle">Audi</caption>
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Tire</th>
<!--                       <th scope="col">Rim</th>-->
<!--                      <th scope="col">Bolt pattern</th>-->
                     </tr>
                </thead>
                <tbody id="dataChange">
                </tbody>
             </table>
           </div>
        <!--      這段保留        -->
          </div>
        </div>
      
    
  </div>
</div>

<main class="main-content">
    <section class="slideshow">
        <div class="slideshow-inner">
            <div class="slides">
                <div class="slide is-active ">
                    <div class="slide-content">
                        <div class="caption">
                            <div class="title">To Find Up Your Tire</div>
                            <div class="text">
                                <p>Check the suitable tire for your car</p>
                            </div>
                            <a id="v-btn1" href="#" class="button">
                                <span class="btn-inner">Learn More</span>
                            </a>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="img/5.jpg" alt="" class="image" />
                    </div>
                </div>
                <div class="slide">
                    <div class="slide-content">
                        <div class="caption">
                            <div class="title">Design Your Rim</div>
                            <div class="text">
                                <p>Customized and Embellish your tire rim</p>
                            </div>
                            <a href="product.html" class="button">
                                <span class="btn-inner">Learn More</span>
                            </a>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="img/3.jpg" alt="" class="image" />
                    </div>
                </div>
                <div class="slide">
                    <div class="slide-content">
                        <div class="caption">
                            <div class="title">About The Tire</div>
                            <div class="text">
                                <p>Understanding the basically knowledge of tire</p>
                            </div>
                            <a href="services.html" class="button">
                                <span class="btn-inner">Learn More</span>
                            </a>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="img/4.jpg" alt="" class="image" />
                    </div>
                </div>
                <div class="slide">
                    <div class="slide-content">
                        <div class="caption">
                            <div class="title">Service & Maintain</div>
                            <div class="text">
                                <p>Welcome to visit our store and apply our service</p>
                            </div>
                            <a href="brands.html" class="button">
                                <span class="btn-inner">Learn More</span>
                            </a>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="img/background-1.jpg" alt="" class="image" />
                    </div>
                </div>
            </div>
            <div class="pagination">
                <div class="item is-active">
                    <span class="icon">1</span>
                </div>
                <div class="item">
                    <span class="icon">2</span>
                </div>
                <div class="item">
                    <span class="icon">3</span>
                </div>
                <div class="item">
                    <span class="icon">4</span>
                </div>
            </div>
            <div class="arrows">
                <div class="arrow prev">
          <span class="svg svg-arrow-left">
            <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve"> <path d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z"/> </svg>
            <span class="alt sr-only"></span>
          </span>
                </div>
                <div class="arrow next">
          <span class="svg svg-arrow-right">
            <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve"> <path d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z"/> </svg>
            <span class="alt sr-only"></span>
          </span>
                </div>
            </div>
        </div>
    </section>
</main>

  
<!-- linked main.css-->
<a id="fb" class="link-facebook animated infinite bounce" href="https://web.facebook.com/Lausincereautowagon/" target="_blank" onmousemove="stop()" onmouseout="start()"><img src="img/button fb.png"></a>
<span class="link-menu" id="head" ><img src="img/button up.png"></span>

<!-- Footer -->
<?php
include('footer.html');
?>

<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/jquery.min.js"></script>
</body>
