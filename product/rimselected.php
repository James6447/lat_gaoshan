<?php
require_once ('../config.php');
$pattern = $_POST['pattern'];
$typeModel = $_POST['typeModel'];
$rimWitdh = $_POST['rimWitdh'];
$offset = $_POST['offset'];
$CenterBore = $_POST['CenterBore'];
// $car_model = $_POST['carType'].'/'.$_POST['carModel'];
// $total = array();

switch ($pattern) {
    case '1':
        $column = 'inch';
        $condition = " group by $column order by $column desc";
        break;

    case '2';
        $column = 'rim_width';
        $condition = " WHERE inch=$typeModel group by $column order by $column desc";
        break;

    case '3';
        $column = 'offset';
        $condition = " WHERE inch=$typeModel and rim_width=$rimWitdh group by $column order by $column desc";
        break;

    case '4';
        $column = 'centre_bore';
        $condition = " WHERE inch=$typeModel and rim_width=$rimWitdh and offset=$offset group by $column order by $column desc";
        break;

    case '5';
        $column = 'bolt_pattern';
        $condition = " WHERE inch=$typeModel and rim_width=$rimWitdh and offset=$offset and centre_bore=$CenterBore group by $column order by $column desc";
        break;
}


$query = 'select '.$column.' from t_rim'.$condition;

$result = $con->query($query);

if ($con->connect_error) {
    die("Connection failed: " . $conn->connect_error);
 }
 else{

    while ($row = $result->fetch_assoc()) {
        $total[] = $row;
    }

    echo json_encode($total);
}


?>
