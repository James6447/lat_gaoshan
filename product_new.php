<?php
require 'CombainKeywords.class.php';
$arr = array('tyres maintenance','LauSincere','LauSincere Autowagon Services', 'Services', 'engine oil maintenance','Trading Of Tyres And Batteries Of Motor Vehicles','johor bahru','高山輪胎有限公司');
$sort_handle = new CombainKeywords();
$sort = $sort_handle->sortKeywords($arr, 2);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>LauSincere Autowagon Services-PRODUCT,高山輪胎有限公司,Johor Bahru</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <META HTTP-EQUIV="Keywords" CONTENT="tyres maintenance,LauSincere Autowagon Services, Services,engine oil, services,Trading Of Tyres And Batteries Of Motor Vehicles,johor bahru,高山輪胎有限公司"> -->
    <?php
    echo '<META HTTP-EQUIV="Keywords" CONTENT="';
    foreach ($sort as $value) {
        echo $value.',';
    }
    echo '">';
    ?>
    <META HTTP-EQUIV="Description" CONTENT="LauSincere Autowagon Services Tyres Rim Preview, Car Moedel Review, Accessories, Trading Of Tyres And Batteries Of Motor Vehicles,johor bahru,高山輪胎有限公司">
    <link rel="icon" type="image/png" href="img/logo-1.png" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.2.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.2.4/assets/owl.theme.default.min.css">
    <link href="css/main.css" rel="stylesheet">
    <link href="css/product.css" rel="stylesheet">
    <link href="css/header.css" rel="stylesheet">
<!--    <link href="css/loading.css" rel="stylesheet">-->
    <link href="css/footer.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/zoom.css">
    <script src="js/jquery.js"></script>
    <script src="js/header.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
</head>
<!--<div class="loading">-->
<!--    <div class="loading-dot"></div>-->
<!--    <div class="loading-dot"></div>-->
<!--    <div class="loading-dot"></div>-->
<!--    <div class="loading-dot"></div>-->
<!--</div>-->
<?php include('header.html') ?>

<body>
    <div class="product-cover carousel slide">
        <img src="img/product_banner.png">
    </div>

    <div class="categories d-flex justify-content-center">

        <a href="#" role="button" id="tyreDropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="category-item">
                <img src="img/product_tyres.png">
                <p>Tyres</p>
            </div>
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>

        <a href="">
            <div class="category-item product-white">
                <img src="img/product_wheel.png">
                <p>Wheels</p>
            </div>
        </a>

        <a href="">
            <div class="category-item">
                <img src="img/product_accessories.png">
                <p>Accessories</p>
            </div>
        </a>
    </div>

    <h1 class="mark-title">
        Tyre
    </h1>

    <span class="mark-sub-title">
        Filter for Available Tyres
    </span>

    <div class="container col-11">
        <div class="product-search-filter row">
            <div class="space-filter d-flex justify-content-around col-md-5 col-12">
                <select name="width">
                    <option value="">Width(mm)</option>
                </select>

                <select class="is-active" name="height">
                    <option value="">Height(mm)</option>
                </select>
            </div>

            <div class="space-filter d-flex justify-content-around col-md-5 col-12">
                <select class="is-active" name="diameter">
                    <option value="">Diameter(")</option>
                </select>

                <select class="is-active" name="brand">
                    <option value="">All Brand</option>
                </select>
            </div>

            <div class="d-flex justify-content-center col-md-2 col-12">
                <button id="filter_submit">Filter
                    <img src="img/icon-search.png"/>
                </button>
            </div>
        </div>

        <div class="product-item">
            <div id="productTab" class="row d-flex justify-content-around">


            </div>
        </div>


        <nav class="page-nav" aria-label="product page">
            <ul class="pagination justify-content-center">
<!--                <li class="page-item disabled">-->
<!--                    <a class="page-link" href="#" tabindex="-1"> < </a>-->
<!--                </li>-->
<!--                <li class="page-item"><a class="page-link content current" href="#">1</a></li>-->
<!--                <li class="page-item"><a class="page-link content" href="#">2</a></li>-->
<!--                <li class="page-item"><a class="page-link content" href="#">3</a></li>-->
<!--                <li class="page-item">-->
<!--                    <a class="page-link" href="#"> > </a>-->
<!--                </li>-->
            </ul>
        </nav>

    </div>
</body>








<!-- linked main.css-->
<a id="fb" class="link-facebook animated infinite bounce" href="https://web.facebook.com/Lausincereautowagon/" target="_blank" onmousemove="stop()" onmouseout="start()"><img src="img/button fb.png"></a>
<span class="link-menu" id="head" ><img src="img/button up.png"></span>

<!-- Footer -->
<?php
include('footer.html');
?>

</html>

<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/jquery.min.js"></script>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'></script>
<!-- include in product_new.js===> function getData -->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.2.4/owl.carousel.min.js"></script>-->
<script src="js/product_new.js"></script>
<script src="js/zoom.js"></script>
<script src="js/transitions.js"></script>
<script src="js/header.js"></script>
</body>

