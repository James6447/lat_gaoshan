<?php
require('../config.php');

$modelCar = $_POST['modelCar'];
$query = "SELECT * FROM t_tyres WHERE img_path LIKE '%$modelCar'";

$result = $con->query($query);

if ($con->connect_error) {
    die("Connection failed: " . $conn->connect_error);
 }

 else{
    while ($row = $result->fetch_assoc()) {
     $total[] = $row;
    }

    for ($i=0; $i < sizeof($total) ; $i++) {
     // $total[$i]['img_path'] = explode('/',$total[$i]['img_path'])[1];
     $plot = preg_split("/\//", $total[$i]['img_path']);
     $total[$i]['img_path'] = $plot[1];
 }

    $style = preg_split("/[\s,]+/",$total[0]['size']);
     for ($i=0; $i <count($style) ; $i++) {
         $total['size'][$i]=  $style[$i];
    }
    echo json_encode($total);
 }
