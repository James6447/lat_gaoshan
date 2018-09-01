<?php
require 'CombainKeywords.class.php';
$arr = array('tyres maintenance','LauSincere','LauSincere Autowagon Services', 'Services', 'engine oil maintenance','Trading Of Tyres And Batteries Of Motor Vehicles','johor bahru','高山輪胎有限公司');
$parameters = array(
    'page' => '1',
    'p'    => '1',
    'url'  => 'onclick="getProduct("rim.php?p='.$p.'&inch='.$rim_size.');">',
    'inch' => '18',
);
// $sort_handle = new CombainKeywords();
// $sort = $sort_handle->pagination($parameters);
// // print_r($sort);
// var_dump($sort);
// echo $sort;

echo CombainKeywords::pagination($parameters);
