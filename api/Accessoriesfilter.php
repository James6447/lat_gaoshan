<?php
include_once './config.php';
include_once './AccessoriesModel.php';
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
$Brands = $_POST['Brands'];
// initialize object
$product = new Product($db);
// query products
$stmt = $product->check($Brands);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
    // products array
    $products_arr=array();
    $products_arr["data"]=array();
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $product_item=array(
            "id" => $id,
            "img" => $img_path,
            "category"=>$category
        );
        array_push($products_arr["data"], $product_item);
    }
    // set response code - 200 OK
    http_response_code(200);
    // show products data in json format
    echo json_encode($products_arr);
}else{
  // set response code - 404 Not found
  http_response_code(404);
  // tell the user no products found
  echo json_encode(
      array("message" => "No products found.")
  );
}
?>

