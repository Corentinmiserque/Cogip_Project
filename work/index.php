<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 1000');
    }
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        }
    
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
            header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
        }
        exit(0);
    }
require __DIR__. '/vendor/autoload.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");
$router = new \Bramus\Router\Router();

//API selectionnant TOUT les Invoices par plus récent

$router->get('/invoices', function () {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM invoices ORDER BY create_dat DESC ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });



//API selectionnant le nombre d'élément voulu de Invoices par plus récent
$router->get('/invoices/{number}', function ($number) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM invoices ORDER BY create_dat DESC LIMIT $number ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });
    //API selectionnant UNE FACTURE (SANS S invoice)
    $router->get('/invoice/{id}', function ($id) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM invoices WHERE id = $id ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });

//API selectionnant toute les companies par ordre Alphabet
$router->get('/companies',function(){
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM companies ORDER BY name ASC");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
});

//API selectionnant un npmbre précis de companies Par plus recent
$router->get('/companies/{number}', function ($number) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM companies ORDER BY create_dat DESC  LIMIT $number ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });

    //API selectionnant UNe COMPANY(AVEC UN Y)
    $router->get('/company/{id}', function ($id) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM companies WHERE id = $id ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });

//API selectionnant toute les contacts par odre alphabet
$router->get('/contacts',function(){
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM contacts ORDER BY name ASC");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
});

//API selectionnant un nombre précis de contacts par plus récent
$router->get('/contacts/{number}', function ($number) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM contacts ORDER BY create_dat DESC  LIMIT $number ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });

    //API selectionnant UN CONTACT (sans s)
$router->get('/contact/{id}', function ($id) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM contacts WHERE id = $id ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });

    $router->post('/companies', function() {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $data = json_decode(file_get_contents('php://input'), true);
        $add = $pdo->prepare("INSERT INTO companies (name, type_id, country, tva, create_dat) VALUES (:name, :type_id, :country, :tva, :create_dat)");
        $add->bindValue(':name', $data["name"]);
        $add->bindValue(':type_id', $data["type_id"]);
        $add->bindValue(':country', $data["country"]);
        $add->bindValue(':tva', $data["tva"]);
        $add->bindValue(':create_dat', $data["create_dat"]);
        $add->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données reçues avec succès']);
      });
      

$router->run();


?>

