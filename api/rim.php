<?php
include_once './config.php';
include_once './RimModel.php';
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$product = new Product($db);
// query products
$stmt = $product->read();
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
            "inch" => $inch,
            "type" => $type,
            "descrip" => $descrip,
            "rim_type" => $rim_type,
            "price" => $price,
            "rim_width" => $rim_width,
            "offset"  => $offset,
            "centre_bore" => $centre_bore,
            "bolt_pattern" => $bolt_pattern,
            "price" => $price
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

