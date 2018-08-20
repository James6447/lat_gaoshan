<?php
    $rimType = $_POST['rimType'];
    $size = $_POST['size'];
    if($rimType == ''){
        $car_model = $_POST['carModel'];
        //$rim_size = explode('/',$car_model)[1];
        if ($car_model == ''){
            $condition = 'rim_size=18';
        }
        else{
            $condition = 'carModel='.$car_model;
        }
    }else{
        $condition = 'carType='.$rimType.'&size='.$size;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>PRODUCTS</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="img/logo-1.png" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/main.css" rel="stylesheet">
  <link href="css/product.css" rel="stylesheet">
  <link href="css/header.css" rel="stylesheet">
  <link href="css/footer.css" rel="stylesheet">
  <script src="js/jquery.js"></script>



</head>

<body onscroll="backTop()">

<?php include('header.html') ?>

<iframe src="product_ins.php?<?php echo $condition ?>"></iframe>

<!-- linked main.css-->
<a id="fb" class="link-facebook animated infinite bounce" href="" target="_blank" onmousemove="stop()" onmouseout="start()"><img src="img/button fb.png"></a>
<span class="link-menu" id="head" ><img src="img/button up.png"></span>

<!-- Footer -->
<?php
include('footer.html');
?>


<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/jquery.min.js"></script>
<script src="js/main.js"></script>
<script src="js/header.js"></script>

</body>
