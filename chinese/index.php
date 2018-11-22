<!DOCTYPE html>
<html lang="en">
<head>
  <title>LAUSINCERE-HOME</title>
  <meta charset="utf-8">
  <noscript><iframe src=*.html></iframe></noscript>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <META NAME="Author" CONTENT="LauSincere Autowagon Services - 高山輪胎有限公司">
  <META HTTP-EQUIV="Keywords" CONTENT="tyres maintenance,LauSincere Autowagon Services, Services,engine oil, services,Trading Of Tyres And Batteries Of Motor Vehicles,johor bahru,高山輪胎有限公司">
  <META HTTP-EQUIV="Description" CONTENT="http://www.lausincere.com, Automotive Repair Shop, tyres, engine oil, vihicle services">

  <link rel="icon" type="../image/png" href="../img/logo-1.png" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
  <link href="../css/bootstrap.min.css" rel="stylesheet">
  <link href="../css/main.css" rel="stylesheet">
  <link href="../css/header.css" rel="stylesheet">
  <link href="../css/footer.css" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
  <script src="../js/jquery.js"></script>
  <script src="../js/indexchinese.js"></script>
  <script src="../js/header.js"></script>
  <script src="../js/slider.js"></script>
</head>
<body onscroll="backTop()">

<?php include('header.html') ?>

<!-- picture holder container main.js mian.css-->
<div id="search-bar" class="row search justify-content-center container-fluid ">
    <button type="button" class="btn btn-secondary sss notext"  id="btn1" data-toggle="collapse" data-target=".vehicle" aria-control="collapseOne" aria-expanded="true" >
    尋找你要的類型 &nbsp&nbsp<img src="../img/icon-search.png"></button>
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
                      <p>車的廠商</p>
                       <select id="typeCar" class="maintain" name="carType">
                           <option value="0">車的種類</option>
                            <!--车款选项 -->
                        </select>
                    </div>
                    <div class="d-inline-block col-md-3">
                      <p>車款</p>
                      <select id="modelCar" class="maintain" name="carModel">
                            <!-- 车形选项 -->
                       <option>車款</option>
                      </select>
                    </div>
                    <img id="imgTitle" src="../img/logo/WW.png" style="height:75px; padding:10px;">
                  </div>
                    </form>

               <table id="myTable">
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
                            <div class="title">尋找您的輪胎</div>
                            <div class="text">
                                <p>查詢與您的車子合適的輪胎尺寸</p>
                            </div>
                            <a id="v-btn1" href="#" class="button">
                                <span class="btn-inner">更多</span>
                            </a>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../img/5.jpg" alt="" class="image" />
                    </div>
                </div>
                <div class="slide">
                    <div class="slide-content">
                        <div class="caption">
                            <div class="title">設計您的輪框</div>
                            <div class="text">
                                <p>挑選多樣化與美化輪框來搭配您的車子</p>
                            </div>
                            <a href="product.html" class="button">
                                <span class="btn-inner">更多</span>
                            </a>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../img/3.jpg" alt="" class="image" />
                    </div>
                </div>
                <div class="slide">
                    <div class="slide-content">
                        <div class="caption">
                            <div class="title">輪胎的知識</div>
                            <div class="text">
                                <p>更加了解如何挑選輪胎與輪胎使用的基本知識</p>
                            </div>
                            <a href="services.html" class="button">
                                <span class="btn-inner">更多</span>
                            </a>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../img/4.jpg" alt="" class="image" />
                    </div>
                </div>
                <div class="slide">
                    <div class="slide-content">
                        <div class="caption">
                            <div class="title">服務與維修</div>
                            <div class="text">
                                <p>歡迎到實體店面參觀與使用更多的服務</p>
                            </div>
                            <a href="brands.html" class="button">
                                <span class="btn-inner">更多</span>
                            </a>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="../img/background-1.jpg" alt="" class="image" />
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
<a id="fb" class="link-facebook animated infinite bounce" href="https://web.facebook.com/Lausincereautowagon/" target="_blank" onmousemove="stop()" onmouseout="start()"><img src="../img/button fb.png"></a>
<span class="link-menu" id="head" ><img src="../img/button up.png"></span>

<!-- Footer -->
<?php
include('footer.html');
?>

<script src="../js/bootstrap.bundle.min.js"></script>
<script src="../js/jquery.min.js"></script>
</body>
