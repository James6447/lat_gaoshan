<?php
/**
 * Created by PhpStorm.
 * User: james
 * Date: 25/04/2019
 * Time: 4:00 PM
 */

require('../config.php');

$row = 1;
if (($handle = fopen("Sheet1.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $item = [];
        $num = count($data);
        echo "<p> $num fields in line $row: <br /></p>\n";

        if($row === 1) {
            $row++;
            continue;
        }
        $row++;
        for ($c=0; $c < $num; $c++) {
            echo $data[$c] . "<br />\n";
            $item[] = $data[$c];
        }

        $sql = "INSERT INTO p_tyres
                  (brand, name_tyre, width, height, diameter, car_type)
                  VALUES('".$item[0]."','".$item[1]."','".$item[2]."','".$item[3]."','".$item[4]."','".$item[5]."'
                )";

//        $sql = "INSERT INTO tyre_details
//          (name, title, content_1, content_2, content_3, img_url)
//          VALUES('".$item[0]."','".$item[1]."','".$item[2]."','".$item[3]."','".$item[4]."','".$item[5]."'
//        )";

        if ($con->query($sql) == TRUE){
            $message="Thanks For Command";
            echo $message;
        }
        else{
            echo $sql.'<br/>'. $con->error;
        }

    }
    fclose($handle);
}
?>