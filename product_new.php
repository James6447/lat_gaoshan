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
    <META HTTP-EQUIV="Description"
        CONTENT="LauSincere Autowagon Services Tyres Rim Preview, Car Moedel Review, Accessories, Trading Of Tyres And Batteries Of Motor Vehicles,johor bahru,高山輪胎有限公司">
    <link rel="icon" type="image/png" href="img/logo-1.png" />
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.2.4/assets/owl.carousel.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.2.4/assets/owl.theme.default.min.css">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <link href="css/product.css" rel="stylesheet">
    <link href="css/header.css" rel="stylesheet">
    <link href="css/footer.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/zoom.css">
    <link rel="stylesheet" type="text/css" href="css/solid.css">
    <link rel="stylesheet" href="css/fontawesome.css">
    <link rel="stylesheet" href="css/solid.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/Rim.js"></script>
    <script src="js/zoom.js"></script>
    <script src="js/transitions.js"></script>
    <script src="js/header.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
</head>

<?php include('header.html') ?>

<body onscroll="backTop()">
    <div class="product-cover carousel slide mb-4">
        <img src="img/product_banner.png">
    </div>
    <div class="container-fluid pr-3 pl-3 ">
        <ul class="nav nav-tabs product listul" id="myTabq" role="tablist">
            <li class="tyreli ">
                <a class="p-2 pl-2 pr-2 nav-link" id="Tyre-tab" data-toggle="tab" href="#Tyre" role="tab"
                    aria-controls="Tyre" aria-selected="true">
                    Tyres
                </a>
            </li>
            <li class="rimli">
                <a class="-2 pl-2 pr-2 nav-link" id="Rim-tab" data-toggle="tab" href="#Rim" role="tab"
                    aria-controls="Rim" aria-selected="false">Rim</a>
            </li>
            <li class="acessoriesli">
                <a class=" p-2 pl-2 pr-2 nav-link" id="Accessories-tab" data-toggle="tab" href="#Accessories" role="tab"
                    aria-controls="Accessories" aria-selected="false">Accessories</a>
            </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
            <div class="tab-pane active" id="Tyre" role="tabpanel" aria-labelledby="Tyre-tab">
                <div style="display:block;font-size:25px" class="mt-2 mb-2 w-100">Filters by</div>
                <div class="d-f">
                    <select id="tyreWidth" name="tyreWidth">
                        <option value="" selected disabled>Width(mm)</option>
                    </select>
                    <select id="tyreHeight" name="tyreHeight" disabled>
                    <option value="" selected disabled>Height(mm)</option>
                    </select>
                    <select id="Diameter" name="Diameter" disabled>
                        <option value="" selected disabled>Diameter("")</option>
                    </select>
                    <select id="AllBrands" name="AllBrands" disabled>
                        <option value="" selected disabled>AllBrands</option>
                    </select>
                    <button id="Checktyre" class="btn btn-tyre" style="font-size:18px;"><i
                        class="fas fa-search"></i>
                    </button>
                </div>
                <div id="tyreMain">

                </div>
                <nav id="tyrepagination">
                    <ul class="pagination justify-content-center pagination-sm">
                    </ul>
                </nav>
            </div>
            <div class="tab-pane paddingdisable" id="Rim" role="tabpanel" aria-labelledby="profile-tab">
                <div style="display:block;font-size:25px" class="mt-2 mb-2 w-100">Filters by</div>
                <div class="d-f">
                    <select id="typeModel" name="typeModel">
                        <option value="" selected disabled>Inch</option>
                    </select>
                    <select id="RimWidth" name="RimWidth" disabled>
                        <option value="" selected disabled>RimWidth</option>
                    </select>
                    <select id="Offset" name="Offset" disabled>
                        <option value="" selected disabled>Offset</option>
                    </select>
                    <select id="BoltPattern" name="BoltPattern" disabled>
                        <option value="" selected disabled>BoltPattern</option>
                    </select>
                    <button id="CheckRim" class="btn btn-rim" style="font-size:18px;"><i
                            class="fas fa-search"></i></button>
                </div>
                <div id="RimMain">

                </div>
                <nav id="Rimpagination">
                    <ul class="pagination justify-content-center pagination-sm">
                    </ul>

                </nav>
            </div>
            <div class="tab-pane" id="Accessories" role="tabpanel" aria-labelledby="Accessories-tab">
            <div style="display:block;font-size:25px" class="mt-2 mb-2 w-100">Filters by</div>
                <div class="d-f">
                    <select id="AccessoriesName" name="AccessoriesName">
                        <option value="" selected disabled>Brands</option>
                    </select>
                    <button id="CheckAccessories" class="btn btn-Accessories" style="font-size:18px;"><i
                            class="fas fa-search"></i></button>
                </div>
                <div id="AccessoriesMain">

                </div>
                <nav id="Accessoriespagination" class="mt-3 mb-2">
                    <ul class="pagination justify-content-center pagination-sm">
                    </ul>
                </nav>
            </div>
        </div>
    </div>


    </div>
</body>








<!-- linked main.css-->
<a id="fb" class="link-facebook animated infinite bounce" href="https://web.facebook.com/Lausincereautowagon/"
    target="_blank" onmousemove="stop()" onmouseout="start()"><img src="img/button fb.png"></a>
<span class="link-menu" id="head"><img src="img/button up.png"></span>

<!-- Footer -->
<?php
include('footer.html');
?>

</html>
</body>