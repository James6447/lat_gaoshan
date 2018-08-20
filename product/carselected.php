<?php
require_once ('../config.php');
$car_type = $_POST['carType'];
$car_model = $_POST['carType'].'/'.$_POST['carModel'];
$total = array();
if($car_model ==  $car_type.'/'){
    $condition = " WHERE type=$car_type";
}
else{
    $condition = " WHERE type=$car_type AND img_path='$car_model'";
}

$query = "SELECT img_path,size FROM t_tyres".$condition;

$result = $con->query($query);

if ($con->connect_error) {
    die("Connection failed: " . $conn->connect_error);
 }
 else{

    // foreach ($result as $key => $value) {
    //     $total[] = $value;
    // }
    while ($row = $result->fetch_assoc()) {
        $total[] = $row;
    }

    for ($i=0; $i < sizeof($total) ; $i++) {
        // $total[$i]['img_path'] = explode('/',$total[$i]['img_path'])[1];
        $plot = preg_split("/\//", $total[$i]['img_path']);
        $total[$i]['img_path'] = $plot[1];
    }
    echo json_encode($total);
}


?>
