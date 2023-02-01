<?php
require __DIR__. '/vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");
$router = new \Bramus\Router\Router();

$router->post('/users', function () {    
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $result=$pdo->prepare("INSERT INTO types (id,name,create_dat,update_dat) VALUES (2,'test2','2023-02-01 15:09:40'
        ,'2023-02-01 15:09:40')");
        $result->execute();

});

$router->run();

?>

