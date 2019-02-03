<?php
$servername = "172.17.0.1";
$username = "lausincere";
$password = "okpl8899";
$dbname = "lausincere";

// $servername = "10.140.0.2";
// $username = "lausincere";
// $password = "okpl8899";
// $dbname = "web_lausincere";

$con = new mysqli($servername, $username, $password, $dbname);

if ($con -> connect_errno)
{
    printf("Verbindung fehlgeschlagen: %s\n", $mysqli->connect_error);
    exit();
}
?>
