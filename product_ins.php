<?php
    $car_type = $_GET['carType'];
    $size = $_GET['size'];
    if($car_type == ''){
        $car_model = $_GET['carModel'];
        $rim_size = $_GET['rim_size'];

        if ($car_model == ''){
            $condition = 'rim.php?inch='.$rim_size;
        }
        else{
            $condition = 'rim.php?carModel='.$car_model;
        }
    }else{
            $condition = 'car.php?carType='.$car_type.'&size='.$size;
    }


?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Product</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/main.css" rel="stylesheet">
  <link href="css/product.css" rel="stylesheet">
  <link href="css/header.css" rel="stylesheet">
  <link href="css/footer.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/zoom.css">
  <script src="js/product.js"></script>
  <script src="js/jquery.js"></script>
  <script src="js/header.js"></script>


</head>

<body  id="ins" onload="getProduct('<?php echo $condition?>');" >

<!-- sidebar main.css -->
<div class="row col-12" >
  <div class="col-lg-3 col-sm-3 col-3" >
    <aside class="sidebar">
				<nav class="alt-nav">
					<ul>
						<li><a href="">RIM<span>+</span></a>
              <ul id="startUp" class="list-group list-group-flush">
                 <li class="list-group-item space">&nbsp;</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=13')">13'inch</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=14')">14'inch</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=15')">15'inch</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=16')">16'inch</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=17')">17'inch</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=18')">18'inch</li>
                 <li class="list-group-item" onclick="getProduct('rim.php?inch=19')">19'inch</li>
                 <li class="list-group-item"></li>
              </ul>
						</li>
						<li><a href="">Car Type<span>+</span></a>
              <ul id="car" class="list-group list-group-flush">
                 <li class="list-group-item space">&nbsp;</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=1&name=AUDI')">Audi</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=2&name=BMW')">BMW</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=3&name=FORD')">FORD</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=4&name=HONDA')">HONDA</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=5&name=HYUNDAI')">HYUNDAI</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=6&name=LEXUX')">LEXUX</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=7&name=MAZDA')">MAZDA</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=8&name=MEX')">MEX</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=9&name=MISTUBISHI')">MISTUBISHI</li>
                 <li class="list-group-item" onclick="getProduct('car.php?type=14&name=TOYOTA')">TOYOTA</li>
              </ul>
						</li>
						<!-- <li><a href="">TYRES<span>+</span></a>
              <ul class="list-group list-group-flush">
                 <li class="list-group-item space">&nbsp;</li>
                 <li class="list-group-item" onclick="getProduct('rim.php')">RIM</li>
                 <li class="list-group-item">Dapibus ac facilisis in</li>
                 <li class="list-group-item">RIM</li>
                 <li class="list-group-item">Morbi leo risus</li>
                 <li class="list-group-item">Porta ac consectetur ac</li>
                 <li class="list-group-item">Vestibulum at eros</li>
                 <li class="list-group-item"></li>
              </ul>
						</li> -->
						<li><a href="">ACCESSORIES<span>+</span></a>
              <ul id="access" class="list-group list-group-flush">
                 <li class="list-group-item space">&nbsp;</li>
                 <li class="list-group-item" onclick="getProduct('rim.php')">RIM</li>
                 <li class="list-group-item">Dapibus ac facilisis in</li>
                 <li class="list-group-item">RIM</li>
                 <li class="list-group-item">Morbi leo risus</li>
                 <li class="list-group-item">Porta ac consectetur ac</li>
                 <li class="list-group-item">Vestibulum at eros</li>
                 <li class="list-group-item"></li>
              </ul>
						</li>
					</ul>
				</nav>
			</aside>


          <nav class="hot">
            <ul>
              <li><a href="#">BEST SELLER</a>
                <ul class="list-group list-group-flush" >
                  <li class="list-group-item space">&nbsp;</li>
                   <li class="list-group-item"><img src="img/rim.jpg">
                     <ul>
                       <li>ABC Classic</li>
                       <li>YZ001</li>
                       <li>RM1080.00</li>
                     </ul>
                   </li>
                   <li class="list-group-item"><img src="img/rim.jpg">
                     <ul>
                       <li>ABC Classic</li>
                       <li>YZ001</li>
                       <li>RM1080.00</li>
                     </ul>
                   </li>
                   <li class="list-group-item"><img src="img/rim.jpg">
                     <ul>
                       <li>ABC Classic</li>
                       <li>YZ001</li>
                       <li>RM1080.00</li>
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
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/jquery.min.js"></script>
  <script src="js/main.js"></script>
  <script src="js/zoom.js"></script>
  <script src="js/transitions.js"></script>
</body>
