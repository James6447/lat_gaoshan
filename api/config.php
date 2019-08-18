<?php 
class Database{
  private $servername = "172.17.0.1";
  private $username = "root";
  private $password = "JAfaMJbSwSjN";
  private $dbname = "web_lausincere";
 public function getConnection(){
   $this ->conn = null;
   try{
      $this->conn = new PDO("mysql:host=" . $this->servername . ";dbname=" . $this->dbname, $this->username, $this->password);
      $this->conn->exec("set names utf8");
   }catch(PDOException $exception){
    echo "Connection error: " . $exception->getMessage();
    }
    return $this->conn;
 }
 
}

?>