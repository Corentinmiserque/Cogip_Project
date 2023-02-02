<?php
require __DIR__. '/vendor/autoload.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");
$router = new \Bramus\Router\Router();

$router->get('/invoices/{number}', function ($number) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM invoices WHERE id=".$number." ORDER BY create_dat ASC ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });

$router->get('/companies',function(){
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM companies");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
});

$router->run();



?>

