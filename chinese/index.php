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
  <script src="../js/jquery.js"></script>
  <script src="../js/product.js"></script>
  <script src="../js/header.js"></script>
  <script src="../js/win.js"></script>
</head>
<body onscroll="backTop()">

<?php include('header.html') ?>

<!-- picture holder container main.js mian.css-->
<div id="search-bar" class="row search justify-content-center">
  <div id="title">
    <h5>寻找您的商品</h5>
    <img src="../img/icon-search.png">
  </div>

  <div id="type" class="type-wrap">
      <div class="vihicle">

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              车款寻找
            </button>
             <div id="vihicle-wrapper" class="dropdown-menu dropdown-menu-right">
              <div class="dropdown-item item-wrapper">
                <!-- <div class="row col-md-12">
                    <p class="col-md-6">By Car</p>
                    <p class="col-md-6">By Year</p>
                </div> -->
                <div class="row col-md-12">
                 <form action="cnproduct.html" method="post">
                     <div class="col-md-6 col-xs-12 ">
                         <p class="col-md-6">车款</p>
                          <select id="typeCar" class="maintain" name="carType"  onchange="TypeFunc();">
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Ford</option>
                            <option value="4">Honda</option>
                          </select>
                      </div>
                      <div class="col-md-6 col-xs-12">
                          <p class="col-md-6">车型</p>
                          <select id="modelCar" class="maintain" name="carModel">

                          </select>
                      </div>
                </div>
                <div class="row submit d-flex justify-content-center">
                    <button type="submit">寻找</button>
                </div>
               </form>
              </div>
            </div>

        </div>
      </div>
      <div class="dash">
        <h5>|</h5>
      </div>
      <div class="size">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            尺寸寻找
          </button>
          <div id="size-wrapper" class="dropdown-menu">
              <div class="dropdown-item item-wrapper">
                <div class="row col-md-12">
                     <div class="col-md-6 col-12">
                         <form action="cnproduct.html" method="post">
                             <div class="col-md-6">
                                 <p>车款</p>
                                  <select id="typeModel" class="maintain" name="rimType">
                                      <option value="1">Audi</option>
                                      <option value="2">BMW</option>
                                      <option value="3">Ford</option>
                                      <option value="4">Honda</option>
                                  </select>
                              </div>
                              <div class="col-md-6">
                                 <p>英尺</p>
                                  <select id="inch" class="maintain rol-md-5 rol-xs-12" name="size">
                                      <!-- <option value="13">13</option>
                                      <option value="14">14</option>
                                      <option value="15">15</option>
                                      <option value="16">16</option> -->
                                      <option value="17">17</option>
                                      <option value="18">18</option>
                                      <option value="19">19</option>
                                      <option value="20">20</option>
                                  </select>
                              </div>
                              <div class="col-md-6 submit">
                                 <button type="submit">寻找</button>
                              </div>
                            </form>
                             </div>
                            <div class="col-md-6 col-12" >
                                  <img src="../img/icon-tyre.png">
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
</div>

  <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../img/background-3.jpg" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
          <!-- <h1>Product</h1>
          <img src= -->
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../img/background-1.jpg" alt="Second slide">
      </div>

    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>




<!-- linked main.css-->
<a id="fb" class="link-facebook animated infinite bounce" href="https://web.facebook.com/Lausincereautowagon/" target="_blank" onmousemove="stop()" onmouseout="start()"><img src="../img/button fb.png"></a>
<span class="link-menu" id="head" ><img src="../img/button up.png"></span>

<!-- Footer -->
<?php
include('footer.html');
?>

<script src="../js/bootstrap.bundle.min.js"></script>
<script src="../js/jquery.min.js"></script>
  <script src="../js/main.js"></script>
</body>
