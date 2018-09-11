<?php
require_once ('../config.php');

$total = array();

$query = "select type from t_tyres group by type ASC";

$result = $con->query($query);

if ($con->connect_error) {
    die("Connection failed: " . $conn->connect_error);
 }
 else{
    while ($row = $result->fetch_assoc()) {
        $total[] = $row;
    }

    for ($i=0; $i < sizeof($total) ; $i++) {
        $plot_total = preg_split("/\//", $total[$i]['type']);
        $total[$i]['type'] = $plot_total[1];

        $total[$i]['value'] = $plot_total[0];

    }
    echo json_encode($total);
}


?>
