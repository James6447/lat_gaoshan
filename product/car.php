<?php
require('../config.php');
$car_search = $_GET['carType'];
$size = $_GET['size'];
if($car_type == ''){
    $car_type=$_GET['type'];
    $car_name=$_GET['name'];
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
if($car_search == ''){
    ?>
    <body>
    <div class="numeric">
        <p><strong>Car</strong> > <?php echo $car_name."> page".$p?></p>
    </div>

    <?php
}else{
    ?>

    <div class="numeric">
        <p><strong>Car</strong> > Size <?php echo $size."'> page".$p?></p>
    </div>

    <?php
}

for($number = 0;$number < $item_row;$number ++)
{

$con = new mysqli($servername, $username, $password, $dbname);

if($car_search == ''){
    //show comment column
    $query1 ="SELECT * FROM t_tyres
              WHERE type=$car_type
              ORDER By type desc
              limit $start,$item_column
              ";

    //判斷幾頁
    $query3 ="SELECT * FROM t_tyres WHERE type=$car_type";
}else {
    //show comment column
    $query1 ="SELECT * FROM t_tyres
              WHERE type=$car_search
              AND (size LIKE '$size%' OR size=$size OR size LIKE '%$size')
              ORDER By type desc
              limit $start,$item_column
              ";

    //判斷幾頁
    $query3 ="SELECT * FROM t_tyres WHERE type=$car_search AND (size LIKE '$size%' OR size=$size)";
}



$result1 = $con->query($query1);
$result3 = $con->query($query3);

$total=mysqli_num_rows($result3);//總共有幾筆資料
$pages=ceil($total/$count);
?>


<?php  echo "<div class='card-deck'>";
  if ($result1-> num_rows >0)
        {
          while( $row = $result1->fetch_assoc())
          {
            ?>
            <div class="card col-3">
             <img class="card-img-top" src="<?php echo '/lat_gaoshan/img/car/'.$row['img_path'].'.png' ?>" data-action="zoom" alt="Card image cap">
             <div class="card-body">
                 <?php
                    $plot = preg_split("/\//",$row['img_path']);
                    $row['img_path'] = $plot[1];
                 ?>
               <h5 class="card-title"><?php echo $row['img_path'] ?></h5>
               <h7 class="card-text"><?php echo 'RIM '.$row['size'].' inch' ?></h7>
               <p class="card-text"><small class="text-muted"><?php echo $row['type'] ?></small></p>
             </div>
            </div>
<?php

           }
    $start=$start+$item_column;
         }
  echo "</div>";
}

?>


<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <!-- <li class="page-item arrow">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li> -->
    <?php
    for($i=1;$i<=$pages;$i++){
        if($car_search == ''){
        ?>
            <li onclick="reset()" class="page-item"><span class="page-link" onclick="getData('car.php?p=<?php echo $i ?>&type=<?php echo $car_type ?>');"><?php echo $i?></span></li>
<?php  }else{
        ?>
            <li onclick="reset()" class="page-item"><span class="page-link" onclick="getData('car.php?p=<?php echo $i ?>&carType=<?php echo $car_search.'&size='.$size?>');"><?php echo $i?></span></li>
       <?php }
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
</body>
