<?php
require('config.php');

$con = new mysqli($servername, $username, $password, $dbname);

$query ="INSERT INTO t_rim(inch,type,descrip)
          VALUES(22,'michelin','TOYOTA-HONDA');
          ";

// $query1 ="SELECT * FROM t_rim
//           WHERE inch=18";
//
// $result1 = $con->query($query1);
//
// if ($result1-> num_rows >0)
//       {
//         while( $row = $result1->fetch_assoc())
//          {
//            echo $row['inch'];
//            echo $row['type'];
//            echo $row['descrip'];
//            echo "<br>";
//           }
//          }

if ($con->query($query) == TRUE){
    $message="Thanks For Command";
    echo $message;
}
else{
    echo $query.'<br/>'. $con->error;
}
