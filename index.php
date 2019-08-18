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
    <META HTTP-EQUIV="Description"
        CONTENT="http://www.lausincere.com, Automotive Repair Shop, tyres, engine oil, vihicle services,Johor Bahru.">

    <link rel="icon" type="image/png" href="img/logo-1.png" />
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <link href="css/header.css" rel="stylesheet">
    <link href="css/footer.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.2.4/assets/owl.carousel.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.2.4/assets/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <script src="js/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
    <script src="js/index.js"></script>
    <script src="js/header.js"></script>
    <script src="js/slider.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/filter.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.2.4/owl.carousel.min.js"></script>
</head>

<body onscroll="backTop()">
    <?php include('header.html') ?>
    <!-- hide slide content -->
    <?php include('./tabPage/index.html')?>
    <!-- hide slide content -->
    <!-- end tyres type match content -->

    <main class="main-content">
        <!-- main slide show -->
        <div class="firstshow">
            <section class="slideshow markslide1 col-12 col-lg-8">
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
                                <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px"
                                    height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26"
                                    xml:space="preserve">
                                    <path
                                        d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z" />
                                </svg>
                                <span class="alt sr-only"></span>
                            </span>
                        </div>
                        <div class="arrow next">
                            <span class="svg svg-arrow-right">
                                <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px"
                                    height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26"
                                    xml:space="preserve">
                                    <path
                                        d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z" />
                                </svg>
                                <span class="alt sr-only"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <div class="search-area col-12 col-lg-4">
                <div class="markerarea">
                    <div class="img-wrapper">
                        <img src="img/find_tyre_size.png">
                    </div>
                    <div class="markertext">
                        <p> Enter your tyre size </p>

                        <form action="product_new.php" method="get">
                            <div class="search-filter">
                                <div class="block space-filter">
                                    <span>Width(mm)</span>
                                    <select class="" name="width">
                                        <option value="">Width(mm)</option>
                                    </select>
                                </div>

                                <div class="block blockdis">
                                    <span class="symbol"> / </span>
                                </div>

                                <div class="block space-filter">
                                    <span>Height(mm)</span>
                                    <select class="is-active" name="height">
                                        <option value="">Height(mm)</option>
                                    </select>
                                </div>

                                <div class="block blockdis">
                                    <span class="symbol"> R </span>
                                </div>

                                <div class="block space-filter">
                                    <span>Diameter(")</span>
                                    <select class="is-active" name="diameter">
                                        <option value="">Diameter(")</option>
                                    </select>
                                </div>
                            </div>
                            <div class="search-btn">
                                <button type="submit">Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- end main slide show -->

        <!-- second main slide show -->
        <div class="product-slide " style="height:100%;width:100%">
            <section class="slideshow container-fluid">
                <div class="owl-carousel owl-theme product-slide-content">
                    <div class="item">
                        <div id="cont-1" class="card">
                            <div class="card-body">
                                <div class="cardclass">
                                    <img src="https://blobs.continental-tires.com/www8/servlet/image/1299144/uncropped/0/176/2/cc6.png"
                                        alt="cc6" class="product_thumbnail img-responsive">
                                    <!--                        <a href="#" class="btn btn-primary">Go somewhere</a>-->
                                </div>
                                <h6>ComfortContact CC6</h6>
                                <div class="active-content">
                                    <p>The comfort choice with lowest noise level and smooth comfortable ride.</p>
                                    <a href="#">
                                        <button type="button" onclick="changeTabContent('t-1')"
                                            class="btn btn-secondary notext" style="color:#fff" data-toggle="modal"
                                            data-target="#t-1">
                                            More Details
                                        </button>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div id="cont-2" class="card">
                            <div class="card-body">
                                <div class="cardclass">
                                    <img src="https://blobs.continental-tires.com/www8/servlet/image/1299208/uncropped/0/176/2/uc6.png"
                                        alt="UC6" class="product_thumbnail img-responsive">
                                    <!--                            <a href="#" class="btn btn-primary">Go somewhere</a>-->
                                </div>
                                <h6>UltraContact UC6</h6>
                                <div class="active-content">
                                    <p>Highest performance level guaranteed by German Technology. Perfect tyre-contact
                                        to control the vehicle.</p>
                                    <a href="#">
                                        <button type="button" onclick="changeTabContent('t-2')"
                                            class="btn btn-secondary notext" style="color:#fff" id="btn2"
                                            data-toggle="modal" data-target="#t-1">
                                            More Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div id="cont-3" class="card">
                            <div class="card-body">
                                <div class="cardclass">
                                    <img src="https://blobs.continental-tires.com/www8/servlet/image/264720/uncropped/0/176/3/sportcontact-6-tire-image.png"
                                        alt="tire_image1" class="product_thumbnail img-responsive">
                                </div>
                                <h6>SportContact™ 6</h6>
                                <div class="active-content">
                                    <p>Safety on any street. Control at any speed.</p>
                                    <a href="#">
                                        <button type="button" onclick="changeTabContent('t-3')"
                                            class="btn btn-secondary notext" style="color:#fff" id="btn3"
                                            data-toggle="modal" data-target="#t-1">
                                            More Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div id="cont-4" class="card">
                            <div class="card-body">
                                <div class="cardclass">
                                    <img src="https://blobs.continental-tires.com/www8/servlet/image/629014/uncropped/0/176/2/mc5.png"
                                        alt="mc5" class="product_thumbnail img-responsive">
                                    <!--                            <a href="#" class="btn btn-primary">Go somewhere</a>-->
                                </div>
                                <h6>MaxContact MC5</h6>
                                <div class="active-content">
                                    <p>Perfect for performance and comfort</p>
                                    <a href="#">
                                        <button type="button" onclick="changeTabContent('t-4')"
                                            class="btn btn-secondary notext" id="btn4" style="color:#fff"
                                            data-toggle="modal" data-target="#t-1">
                                            More Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div id="cont-5" class="card">
                            <div class="card-body">
                                <div class="cardclass">
                                    <img src="https://blobs.continental-tires.com/www8/servlet/image/5918/uncropped/0/176/7/contipremiumcontact-5-tire-image.png"
                                        alt="tire_image1" class="product_thumbnail img-responsive">
                                    <!--                            <a href="#" class="btn btn-primary">Go somewhere</a>-->
                                </div>
                                <h6>ContiPremiumContact™ 5</h6>
                                <div class="active-content">
                                    <p>The perfect all-round tyre, matching performance with safety.</p>
                                    <a href="#">
                                        <button type="button" onclick="changeTabContent('t-5')"
                                            class="btn btn-secondary notext" id="btn5" style="color:#fff"
                                            data-toggle="modal" data-target="#t-1">
                                            More Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div id="cont-6" class="card">
                            <div class="card-body">
                                <div class="cardclass">
                                    <img src="https://blobs.continental-tires.com/www8/servlet/image/2361948/uncropped/0/176/2/contimaxcontact-mc6-product--1-.png"
                                        alt="ContiMaxContact MC6_Product" class="product_thumbnail img-responsive">
                                    <!--                            <a href="#" class="btn btn-primary">Go somewhere</a>-->
                                </div>
                                <h6>MaxContact MC6</h6>
                                <div class="active-content">
                                    <p>When MAX Performance Counts</p>
                                    <a href="#">
                                        <button type="button" onclick="changeTabContent('t-6')"
                                            class="btn btn-secondary notext" id="btn6" style="color:#fff"
                                            data-toggle="modal" data-target="#t-1">
                                            More Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- end second main slide show -->

        <!-- tyres type match content -->
        <div class="" id="collapseOne" aria-labelledby="search-bar">
            <div class="tabcolor">
                <div class="tab-content myTabContent">
                    <!--      這段保留        -->
                    <div class="tab-pane fade show active" id="vehicle" role="tabpanel" aria-labelledby="vehicle">
                        <form action="#" method="post">
                            <div class="container pt-4 pb-4">
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
    </main>

    <!-- linked main.css-->
    <a id="fb" class="link-facebook animated infinite bounce" href="https://web.facebook.com/Lausincereautowagon/"
        target="_blank" onmousemove="stop()" onmouseout="start()"><img src="img/button fb.png"></a>
    <span onclick="indexTop()" class="link-menu" id="head"><img src="img/button up.png"></span>
    <!-- Footer -->
    <?php
include('footer.html');
?>

</body>