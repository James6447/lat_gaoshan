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
  <script src="js/product.js"></script>
  <script src="js/header.js"></script>
  <script src="js/win.js"></script>
</head>
<body onscroll="backTop()">

<?php include('header.html') ?>

<!-- picture holder container main.js mian.css-->
<div id="search-bar" class="row search justify-content-center">
  <div id="title">
    <h5>Find Your Type Here</h5>
    <img src="img/icon-search.png">
  </div>

  <div id="type" class="type-wrap">
      <div class="vihicle">

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              By Vehicle
            </button>
             <div id="vihicle-wrapper" class="dropdown-menu dropdown-menu-right">
              <div class="dropdown-item item-wrapper">
                <!-- <div class="row col-md-12">
                    <p class="col-md-6">By Car</p>
                    <p class="col-md-6">By Year</p>
                </div> -->
                <div class="row col-md-12">
                 <form action="product.php" method="post">
                     <div class="col-md-6 col-xs-12 ">
                         <p class="col-md-6">CAR BRANDS</p>
                          <select  class="maintain" name="carType"  onchange="TypeFunc();">
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Ford</option>
                            <option value="4">Honda</option>
                          </select>
                      </div>
                      <div class="col-md-6 col-xs-12">
                          <p class="col-md-6">CAR MODEL</p>
                          <select class="maintain" name="carModel">

                          </select>
                      </div>
                </div>
                <div class="row submit d-flex justify-content-center">
                    <button type="submit">Submit</button>
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
            By Size
          </button>
          <div id="size-wrapper" class="dropdown-menu">
              <div class="dropdown-item item-wrapper">
                <div class="row col-md-12">
                     <div class="col-md-6 col-12">
                         <form action="product.php" method="post">
                             <div class="col-md-6">
                                 <p>By Brand</p>
                                  <select id="typeModel" class="maintain" name="rimType">
                                      <option value="1">Audi</option>
                                      <option value="2">BMW</option>
                                      <option value="3">Ford</option>
                                      <option value="4">Honda</option>
                                  </select>
                              </div>
                              <div class="col-md-6">
                                 <p>By Inch</p>
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
                                 <button type="submit">Submit</button>
                              </div>
                            </form>
                             </div>
                            <div class="col-md-6 col-12" >
                                  <img src="img/icon-tyre.png">
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
      <!-- <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> -->
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="img/background-3.jpg" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
          <!-- <h1>Product</h1>
          <img src= -->
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="img/background-1.jpg" alt="Second slide">
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
<div class ="container-fluid col-12 pt-4 pb-4 tabcolor">
<ul class="nav nav-tabs " id="myTab" role="tablist">
  <li class="nav-item ">
    <a class="nav-link tabss" id="vehicle-tab" data-toggle="tab" href="#vehicle" role="tab" aria-controls="vehicle" aria-selected="true">By Vehicle</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link tabss" id="rim-tab" data-toggle="tab" href="#rim" role="tab" aria-controls="rim" aria-selected="true">By Inch</a>
  </li>
</ul>


<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="vehicle" role="tabpanel" aria-labelledby="vehicle">
  <form action="#" method="post">
    <div class="container pt-4 pb-4 ">
                             <div class="d-inline-block col-md-3">
                                <p>CAR BRANDS</p>
                                  <select id="typeCar" class="maintain" name="carType"  onchange="TypeFunc();">
                                    <option value="">Car</option>
                                    <option value="1">Audi</option>
                                    <option value="2">BMW</option>
                                    <option value="3">Ford</option>
                                    <option value="4">Honda</option>
                                  </select>
                              </div>
                              <div class="d-inline-block col-md-3">
                                 <p>CAR MODEL</p>
                                  <select id="modelCar" class="maintain" name="carModel">

                                  </select>
                              </div>
            <!-- <div class="col-md-6 submit">
                <button type="submit">Submit</button>
            </div> -->
      </div>
    </form>

    <div>
        <table id="myTable">
         <img id="imgTitle" src="img/logo/WW.png" style="height:50px; width:50px;">
         <caption id="modelTitle">Audi</caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Tire</th>
              <!-- <th scope="col">Rim</th>
              <th scope="col">Bolt pattern</th> -->
            </tr>
          </thead>
          <tbody id="dataChange">
            <tr>
              <td data-label="Model" onclick="carModel()">A4</td>
              <td data-label="Tyre">04/01/2016</td>
              <!-- <td data-label="Amount">$1,190</td>
              <td data-label="Period">03/01/2016 - 03/31/2016</td> -->
            </tr>
            <tr>
              <td scope="row" data-label="">&nbsp;</td>
              <td data-label="Tyre">03/01/2016</td>
              <!-- <td data-label="Amount">$2,443</td>
              <td data-label="Period">02/01/2016 - 02/29/2016</td> -->
            </tr>
            <tr>
              <td scope="row" data-label="">&nbsp;</td>
              <td data-label="Tyre">03/01/2016</td>
              <!-- <td data-label="Amount">$1,181</td>
              <td data-label="Period">02/01/2016 - 02/29/2016</td> -->
            </tr>
            <tr>
              <td scope="row" data-label="">&nbsp;</td>
              <td data-label="Tyre">02/01/2016</td>
              <!-- <td data-label="Amount">$842</td>
              <td data-label="Period">01/01/2016 - 01/31/2016</td> -->
            </tr>
          </tbody>
        </table>

    </div>

  </div>
  <div class="tab-pane fade " id="rim" role="tabpanel" aria-labelledby="rim-tab">
  <form action="product.php" method="post">
  <div class="container pt-4 pb-4 ">
                             <div class="d-inline-block col-md-3">
                                 <p>By Brand</p>
                                  <select id="typeModel" class="maintain" name="rimType">
                                      <option value="1">Audi</option>
                                      <option value="2">BMW</option>
                                      <option value="3">Ford</option>
                                      <option value="4">Honda</option>
                                  </select>
                              </div>
                              <div class="d-inline-block col-md-3">
                                 <p>By Inch</p>
                                  <select id="inch" class="maintain col-md-5 col-xs-12" name="size">
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
                                 <button type="submit">Submit</button>
                              </div>
                              </div>
                            </form>
  </div>
  </div>
  </div>

<!-- linked main.css-->
<a id="fb" class="link-facebook animated infinite bounce" href="https://web.facebook.com/Lausincereautowagon/" target="_blank" onmousemove="stop()" onmouseout="start()"><img src="img/button fb.png"></a>
<span class="link-menu" id="head" ><img src="img/button up.png"></span>

<!-- Footer -->
<?php
include('footer.html');
?>

<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/jquery.min.js"></script>
  <script src="js/main.js"></script>
</body>
