<?php
require('../config.php');

//專門給搜尋bar使用
$search_details = empty($_REQUEST['search_details']) ? $_REQUEST['search_details'] : 1;
$current_get = isset($_REQUEST['current_get']) ? $_REQUEST['current_get'] : 'width';
//共用
$width = isset($_REQUEST['width']) ? $_REQUEST['width'] : '';
$height = isset($_REQUEST['height']) ? $_REQUEST['height'] : '';
$diameter = isset($_REQUEST['diameter']) ? $_REQUEST['diameter'] : '';
$brand = isset($_REQUEST['brand']) ? $_REQUEST['brand'] : '';
//詳細資料使用
$page = empty($_REQUEST['page']) ? 1 : $_REQUEST['page'];
$page_size = isset($_REQUEST['page_size']) ? $_REQUEST['page_size'] : 20 ;
$conditon = '';
$column_join = '';
$count_page = '';


//$width = 175;
//$height = 70;
//$diameter = 13;


if( $brand ){
    $conditon .= " AND brand = '{$brand}'";
}

if( $width ){
    $conditon .= " AND width = {$width}";
}

if( $height ){
    $conditon .= " AND height = {$height}";
}

if( $diameter ){
    $conditon .= " AND diameter = {$diameter}";
}

if( $page ){
    $page_start = ($page-1) * $page_size;
}


if( $search_details ) {
    $column_join .= "LEFT JOIN tyre_details AS b ON b.name = a.name_tyre";

    $count_page = ",(SELECT COUNT(*)
        FROM(
            SELECT name
            FROM p_tyres AS c LEFT JOIN tyre_details AS d ON d.name = c.name_tyre
            WHERE 1 ". $conditon ."
        ) As Z) AS total";

    $conditon .= " LIMIT {$page_start},{$page_size}";


}else{
    $conditon .= " GROUP BY {$current_get} ORDER BY {$current_get} ASC";
}

$query ="SELECT *, a.id AS ID {$count_page} FROM p_tyres AS a
            {$column_join}
            WHERE 1 {$conditon}
        ";

//echo $query;
//echo $page;
//var_dump(empty($_REQUEST['page']));
//exit();
$result = $con->query($query);

$return = [];
$param = [];

if ($result-> num_rows >0)
{
    while( $row = $result->fetch_assoc()) {

        if( $search_details ) {
            $param['id'] = $row['ID'];
            $param['brand'] = $row['brand'];
            $param['name'] = $row['name'];
            $param['title'] = $row['title'];
            $param['content_1'] = $row['content_1'];
            $param['content_2'] = $row['content_2'];
            $param['content_3'] = $row['content_3'];
            $param['img_url'] = $row['img_url'];
            $param['car_type'] = $row['car_type'];
            $param['width'] = $row['width'];
            $param['height'] = $row['height'];
            $param['diameter'] = $row['diameter'];
            $param['total_page'] = ceil($row['total']/$page_size);
            $param['page'] = $page;
            $return[] = $param;
        } else{
            $return[] =  $row["{$current_get}"];
        }
    }
}

// if ( $search_details ){
//     $return['page'] = $page;
// }

echo json_encode($return);


?>