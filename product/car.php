<?php
require '../CombainKeywords.class.php';
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
              AND (inch LIKE '$size%' OR inch=$size OR inch LIKE '%$size')
              ORDER By type desc
              limit $start,$item_column
              ";

    //判斷幾頁
    $query3 ="SELECT * FROM t_tyres WHERE type=$car_search AND (inch LIKE '$size%' OR inch=$size)";
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
             <img class="card-img-top" src="<?php echo 'img/car/'.$row['img_path'].'.png' ?>" data-action="zoom" alt="Card image cap">
             <div class="card-body">
                 <?php
                    $plot = preg_split("/\//",$row['img_path']);
                    $row['img_path'] = $plot[1];
                 ?>
               <h5 class="card-title"><?php echo $row['img_path'] ?></h5>
               <h7 class="card-text"><?php echo $row['size'] ?></h7>
               <p class="card-text"><small class="text-muted"><?php echo 'RIM '.$row['inch'].' inch' ?></small></p>
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

if($car_search == ''){
    $parameters = array(
        'page' => $pages,
        'p'    => $p,
        'url_front'  => "getProduct('car.php?p=",
        'url_back'  => "&type=".$car_type,
    );
}else{
    $parameters = array(
        'page' => $pages,
        'p'    => $p,
        'url_front'  => "getProduct('car.php?p=",
        'url_back'  => "&carType=".$car_search."&size=".$size,
    );
}

$tag_handle = new CombainKeywords();
$tag = $tag_handle->pagination($parameters);
echo $tag;
?>
