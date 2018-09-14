<?php
require_once ('../config.php');
$offset = $_POST['typeModel'];
// $car_model = $_POST['carType'].'/'.$_POST['carModel'];
// $total = array();
if($offset == ''){
    $column = 'offset';
    $condition = " group by offset order by $column desc";
}
else{
    $column = 'rim_width';
    $condition = " WHERE offset=$offset group by $column order by $column desc";
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
