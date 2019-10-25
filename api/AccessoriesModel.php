<?php
 class Product{
   private $conn;
   private $table_name = "t_oil";
   public $id;
   public $img_path;
   public $category;
   public $is_show;

   public function __construct($db){
    $this->conn = $db;
   }
   public function read($select){
    // select all query
    if($select == 1){
    $query = "SELECT
        *
      FROM
        " . $this->table_name . "
      Where is_show = 1
      ORDER BY img_path ";
    }else if($select == 0){
      $query = "SELECT
        *
      FROM
       " . $this->table_name . "
      Where is_show = 0
      ORDER BY img_path ";
    }
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
    // execute query
    $stmt->execute();
    return $stmt;
  }
  
  public function check($brands){
    // select all query
    if($brands  == NULL){
      $string = 'img_path IS NOT NULL ';
    }else{
      $string = "img_path = '$brands'";
    }
    $query = "SELECT
               *
            FROM
                " . $this->table_name . "
            WHERE $string AND is_show = 0
            ORDER BY img_path";
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
    // execute query
    $stmt->execute();
    return $stmt;
  }
 } 
?>