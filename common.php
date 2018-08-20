<?php
//what pages now
$p=$_GET['p'];
if($p == ''){
  $p=1;
}

$number=3;//每次要顯示幾筆資料
$start=($p-1)*$number;
$con = new mysqli($servername, $username, $password, $dbname);

//show camment column
$query1 ="SELECT * FROM t_rim
          WHERE inch=18
          limit $start,$number
          ";

//判斷幾頁
$query3 ="SELECT * FROM t_rim WHERE inch=18";

$result1 = $con->query($query1);
$result3 = $con->query($query3);

$total=mysqli_num_rows($result3);//總共有幾筆資料
$pages=ceil($total/$number);
