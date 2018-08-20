<?php

$car_type = $_POST['carType'];
$car_model = $_POST['carModel'];
//
$request = array($car_type,$car_model);

print_r(json_encode($request));

?>
