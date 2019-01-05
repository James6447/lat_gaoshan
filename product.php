<?php
require 'CombainKeywords.class.php';
$arr = array('tyres maintenance','LauSincere','LauSincere Autowagon Services', 'Services', 'engine oil maintenance','Trading Of Tyres And Batteries Of Motor Vehicles','johor bahru','高山輪胎有限公司');
$sort_handle = new CombainKeywords();
$sort = $sort_handle->sortKeywords($arr, 2);

    $rimType = $_POST['rimType'];
    $size = $_POST['size'];
    if($rimType == ''){
        $car_model = $_POST['carModel'];
        //$rim_size = explode('/',$car_model)[1];
        if ($car_model == ''){
            $condition = 'rim.php?inch=18';
            $pattern = 1;
        }
        else{
            $condition = 'rim.php?carModel='.$car_model;
        }
    }else{
        $condition = 'car.php?carType='.$rimType.'&size='.$size;
    }
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
  <link href="css/main.css" rel="stylesheet">
  <link href="css/product.css" rel="stylesheet">
  <link href="css/header.css" rel="stylesheet">
  <link href="css/footer.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/zoom.css">
  <script src="js/jquery.js"></script>
  <script src="js/header.js"></script>
</head>

<body  onscroll="backTop()" id="ins" onload="getProduct('<?php echo $condition?>');" >
<?php include('header.html') ?>
<h1 class="breadcrumb-title"><span class="brand-title"><img src='img/product.png'></span>&nbsp;&nbsp;&nbsp;Products<span>&nbsp;&nbsp;&nbsp;</h1>
<!-- sidebar main.css -->
<div class="row col-12" >
  <div class="col-lg-3 col-sm-3 col-3" >
    <aside class="sidebar">
				<nav class="alt-nav">
                    <input id="pattern" type="hidden" value="<?php echo $pattern?>"></input>
					<ul>
						<li><a href="">RIM<span>+</span></a>
              <ul id="startUp" class="list-group list-group-flush">
                 <li class="list-group-item space">&nbsp;</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=13')">13'inch</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=14')">14'inch</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=15')">15'inch</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=16')">16'inch</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=17')">17'inch</li>
                 <li id="first" class="list-group-item" onclick="getProduct('rim.php?inch=18')">18'inch</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=19')">19'inch</li>
                 <li class="list-group-item"></li>
              </ul>
						</li>
						<li><a href="">CAR TYPE<span>+</span></a>
              <ul id="car" class="list-group list-group-flush">
                 <li class="list-group-item space">&nbsp;</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=1&name=AUDI')">AUDI</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=2&name=BMW')">BMW</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=3&name=FORD')">FORD</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=4&name=HONDA')">HONDA</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=5&name=HYUNDAI')">HYUNDAI</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=6&name=LEXUX')">LEXUS</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=7&name=MAZDA')">MAZDA</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=8&name=MEX')">MEX</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=9&name=MISTUBISHI')">MISTUBISHI</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=14&name=TOYOTA')">TOYOTA</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=11&name=NISSAN')">NISSAN</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=12&name=PEUGEOT')">PEUGEOT</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=13&name=PORSCHE')">PORSCHE</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=15&name=VOLKSWAGEN')">VOLKSWAGEN</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=16&name=MINI')">MINI</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=17&name=VOLVO')">VOLVO</li>
              </ul>
						</li>
						
						<li><a href="">ACCESSORIES<span>+</span></a>
              <ul id="access" class="list-group list-group-flush">
                 <li class="list-group-item space">&nbsp;</li>
                 <li class="list-group-item" onclick="getProduct('accossories.php?category=1')">ENGINE OIL</li>
<!--                 <li class="list-group-item" onclick="getProduct('accossories.php?category=2')">ENGINE OIL ENEOS</li>-->
                 <li class="list-group-item" onclick="getProduct('accossories.php?category=3')">BATTERY</li>
                 <li class="list-group-item"></li>
              </ul>
						</li>
					</ul>
				</nav>
			</aside>


          <nav class="hot">
            <ul>
              <li><a>BEST SELLER</a>
                <ul class="list-group list-group-flush" >
                  <li class="list-group-item space">&nbsp;</li>
                   <li class="list-group-item"><img src="img/rim/18'/R-18-1.jpeg">
                     <ul>
                       <li>R 172</li>
                       <li>FPBLK1</li>
                       <li>RM2600.00</li>
                     </ul>
                   </li>
                   <li class="list-group-item"><img src="img/rim/15'/R-15-6.jpeg">
                     <ul>
                       <li>R MEX 10</li>
                       <li>FPBLK</li>
                       <li>RM1250.00</li>
                     </ul>
                   </li>
                   <li class="list-group-item"><img src="img/rim/17'/R-17-3.jpeg">
                     <ul>
                       <li>R 174</li>
                       <li>BLKSP</li>
                       <li>RM2100.00</li>
                     </ul>
                   </li>
                   <li class="list-group-item"></li>
                </ul>
            </ul>
          </nav>
  </div>


<!-- item contains ./product(php) -->
<div class='container col-xl-7 col-lg-8 col-7' id="change">
      <!-- product item(share) -->
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
<!-- <script src="js/jquery.min.js"></script> -->
 <script src="http://libs.baidu.com/jquery/1.8.1/jquery.min.js"></script>
  <script src="js/main.js"></script>
  <script src="js/zoom.js"></script>
  <script src="js/transitions.js"></script>
  <script src="js/header.js"></script>
</body>
