<!DOCTYPE html>
<html lang="en">
<?php
require('../config.php');
$rim_size = $_GET['inch'];
$car_model = $_GET['carModel'];
$plot_range = preg_split("/\//",$car_model);
$size_range = $plot_range[1];

$plot = preg_split("/\~/",$size_range);
$size_min = $plot[0];
$size_max = $plot[1];

if($size_max == ''){
    $size_max = $size_range;
}

$p=$_GET['p'];
if($p == ''){
  $p=1;
}

//每次要顯示幾筆資料
$item_column =3;
$item_row = 3;

$start = ($item_row*$item_column)*($p-1);

//how many per one
$count=$item_row*$item_column;


if($car_model == ''){
    ?>
    <div class="numeric">
        <p id="test"><strong>WHELL</strong> > <?php echo $rim_size."'> page".$p?></p>
    </div>
    <?php
}else{
    ?>
    <div class="numeric">
        <p><strong><?php echo $plot_range[0];?></strong> > <?php echo $size_range."'> page".$p?></p>
    </div>
    <?php
}


for($number = 0;$number < $item_row;$number ++)
{

$con = new mysqli($servername, $username, $password, $dbname);
if($car_model == ''){
    //show comment column
    $query1 ="SELECT * FROM t_rim
              WHERE inch=$rim_size
              ORDER By type desc
              limit $start,$item_column
              ";

    //判斷幾頁
    $query3 ="SELECT * FROM t_rim WHERE inch=$rim_size";
}else{
    //show comment column
    $query1 ="SELECT * FROM t_rim
              WHERE inch BETWEEN $size_min AND $size_max
              ORDER By type desc
              limit $start,$item_column
              ";
    //判斷幾頁
    $query3 ="SELECT * FROM t_rim WHERE inch BETWEEN $size_min AND $size_max";
}



$result1 = $con->query($query1);
$result3 = $con->query($query3);

$total=mysqli_num_rows($result3);//總共有幾筆資料
$pages=ceil($total/$count);
?>


<?php  echo "<div class='card-deck'>";
  if ($result1-> num_rows >0)
        {
          $empty = 1;
          while( $row = $result1->fetch_assoc())
          {
            ?>
            <div class="card col-3">
             <img class="card-img-top" src="<?php echo '/img/rim/'.$row['img_path'].'.jpeg' ?>" data-action="zoom" alt="Card image cap">
             <div class="card-body">
               <h5 class="card-title"><?php echo 'RM '.$row['price'] ?></h5>
               <p class="card-text"><?php echo $row['type'] ?></p>
               <p class="card-text"><small class="text-muted"><?php echo $row['descrip'] ?></small></p>
             </div>
            </div>
<?php

           }
    $start=$start+$item_column;
         }
  echo "</div>";
}
if ($empty != 1){
    echo '<h1 style="color: #9a9696; position: absolute; margin: 50% 36%;">No Result Search</h1>';
}

?>


<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <!-- <li class="page-item arrow">
      <a class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li> -->
    <?php
    for($i=1;$i<=$pages;$i++){
        if($car_model == ''){
            ?>
        <li onclick="reset()" class="page-item"><span id="reset" class="page-link" onclick="getProduct('rim.php?p=<?php echo $i ?>&inch=<?php echo $rim_size ?>');"><?php echo $i?></span></li>
<?php
        }
    else {?>
        <li onclick="reset()" class="page-item"><span id="reset" class="page-link" onclick="getProduct('rim.php?p=<?php echo $i ?>&carModel=<?php echo $car_model ?>');"><?php echo $i?></span></li>
    <?php
        }
    }
    ?>
    <!-- <li class="page-item arrow">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li> -->
  </ul>
</nav>
