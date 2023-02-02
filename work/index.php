 <?php
require __DIR__. '/vendor/autoload.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");
$router = new \Bramus\Router\Router();

//API selectionnant TOUT les Invoices

$router->get('/invoices', function () {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM invoices ORDER BY create_dat DESC ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });



//API selectionnant le nombre d'élément voulu de Invoices
$router->get('/invoices/{number}', function ($number) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM invoices LIMIT ".$number." ORDER BY create_dat ASC ");
        $resultat->execute();
        $donnees=$resultat->fetchALL(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });


//API selectionnant toute les companies
$router->get('/companies',function(){
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM companies ORDER BY name ASC");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
});

//API selectionnant un npmbre précis de companies
$router->get('/companies/{number}', function ($number) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM companies ORDER BY create_dat DESC  LIMIT $number ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });

//API selectionnant toute les contacts
$router->get('/contacts',function(){
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM contacts ORDER BY name ASC");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
});

//API selectionnant un npmbre précis de contacts
$router->get('/contacts/{number}', function ($number) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM contacts ORDER BY create_dat DESC  LIMIT $number ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });


$router->post('/companies',function(){
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $add=$pdo->prepare("INSERT INTO `companies` (`name`,`country`,`tva`,`creat_at`) VALUES (test,test,test,test)");
        $add->execute();
});

$router->run();


?>

