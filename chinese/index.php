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
  <script src="../js/indexchinese.js"></script>
  <script src="../js/header.js"></script>
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

  <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <!-- <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> -->
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100 " src="../img/6.jpg" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
          <!-- <h1>Product</h1>
          <img src= -->
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 " src="../img/5.jpg"  alt="Second slide">
      </div>

      <div class="carousel-item">
        <img class="d-block w-100" src="../img/4.jpg" alt="Second slide">
      </div>

    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">前一頁</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">後一頁</span>
    </a>
  </div>
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
</body>
