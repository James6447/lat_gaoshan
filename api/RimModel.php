<?php
 class Product{
   private $conn;
   private $table_name = "t_rim";
   public $id;
   public $img_path;
   public $inch;
   public $type;
   public $descrip;
   public $rim_type;
   public $price;
   public $rim_width;
   public $offset;
   public $centre_bore;
   public $bolt_pattern;

   public function __construct($db){
    $this->conn = $db;
   }

   public function read(){
    // select all query
    $query = "SELECT
               *
            FROM
                " . $this->table_name . "
            ORDER BY type ";
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
    // execute query
    $stmt->execute();
    return $stmt;
  }

  public function finding($Inche,$Width,$Offsete,$Bolte){
    // select all query
    if($Inche  == NULL){
      $string = 'inch IS NOT NULL ';
    }else{
      $string = "inch = '$Inche'";
    }
    if($Width == NULL){
      $string1 = 'rim_width IS NOT NULL ';
    }else{
      $string1= "rim_width = '$Width'";
    }
    if($Offsete == NULL){
      $string2= 'offset IS NOT NULL ';
    }else{
      $string2= "offset = '$Offsete'";
    }
    if($Bolte == NULL){
      $string3= 'bolt_pattern IS NOT NULL ';
    }else{
      $string3= "bolt_pattern = '$Bolte'";
    }
    $query = "SELECT
               *
            FROM
                " . $this->table_name . "
            WHERE $string AND $string1 AND $string2 AND $string3
            ORDER BY type";
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
    // execute query
    $stmt->execute();
    return $stmt;
  }
 } 
?>