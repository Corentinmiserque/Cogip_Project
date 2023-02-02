<?php
require __DIR__. '/vendor/autoload.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");
$router = new \Bramus\Router\Router();

$router->get('/invoices', function () {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM invoices ORDER BY create_dat ASC LIMIT 5 ");
        $resultat->execute();
        $donnees=$resultat->fetchALL(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });

$router->get('/companies',function(){
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM companies");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
});

$router->post('/companies',function($name,$country,$tva,$creat_at){
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $add=$pdo->prepare("INSERT INTO (name,country,tva,creat_at) companies VALUES (:name,:country,:tva,:creat_at)");
        $add->bindValue(':name',$name);
        $add->bindValue(':country',$country);
        $add->bindValue(':tva',$tva);
        $add->bindValue(':creat_at',$creat_at);
        $add->execute();
});

$router->run();



?>

