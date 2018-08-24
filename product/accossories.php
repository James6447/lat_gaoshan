<!DOCTYPE html>
<html lang="en">
<?php
require('../config.php');
$category = $_GET['category'];

$p=$_GET['p'];
if($p == ''){
  $p=1;
}

//每次要顯示幾筆資料
$item_column =3;
$item_row = 2;

$start = ($item_row*$item_column)*($p-1);

//how many per one
$count=$item_row*$item_column;
switch ($category) {
    case '1':
        $title = 'CASTROL';
        break;
    case '2':
        $title = 'ENEOS';
        break;
    case '3':
        $title = 'BATTERY';
        break;
}
    ?>

    <div class="numeric" onclick="reset()">
        <p id="test"><strong><?php echo $title ?></strong> > <?php echo $p?></p>
    </div>

    <?php
for($number = 0;$number < $item_row;$number ++)
{

$con = new mysqli($servername, $username, $password, $dbname);
    //show comment column
    $query1 ="SELECT * FROM t_oil
              WHERE category = $category
              ORDER By type ASC
              limit $start,$item_column
              ";

    //判斷幾頁
    $query3 ="SELECT * FROM t_oil  WHERE category = $category";

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
            <div class="card col-3 accossories">
             <img class="card-img-top" src="<?php echo '/lat_gaoshan/img/accossories/'.$row['category'].'/'.$row['img_path'].'.jpg' ?>"  alt="Card image cap">
             <div class="card-body">
               <h5 class="card-title"><?php echo $row['img_path']?></h5>
               <p class="card-text"><small class="text-muted"><?php echo'RM '.'PRICE'  ?></small></p>
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
      <a class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li> -->
    <?php
    for($i=1;$i<=$pages;$i++){
            ?>
        <li onclick="reset()" class="page-item"><span id="reset" class="page-link" onclick="getData('accossories.php?p=<?php echo $i.'&category='.$category ?>');"><?php echo $i?></span></li>
<?php
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
