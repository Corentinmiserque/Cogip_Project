<?php
///  Documentation ///
/*

OBJECTIF:

L'objectif de cette API est de permettre de récupérer différentes informations(contacts,factures,entreprises,...) pour le projet COGIP

COMMENT INSTALLER L'API:

Mettre le dossier work de le projet cogip,
Dans phpmyadmin , créer une nouvelle base de données nommée : "cogip"
importer le script cogip.sql dans la base de donnée cogip
lancer la commande suivante dans le terminal à chaque fois que vous utilisez l'api : "php -S localhost:8001 -t work/"

COMMENT UTILISER L'API : 

Pour utiliser l'api dans js, il faut utiliser la fonction "fetch(url,option)" avec l'url correspondante (voir si dessous pour avoir les urls).

exemple methode GET:

let url='http://localhost:8001/invoices';
fetch(url,{method:"GET"}) 
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
    }) 

exemple methode POST:

data = { name : "test",  company_id: 1, email:"test.test@test.com", phone:"00000000000", create_dat: "2023-02-02"}
let url='http://localhost:8001/invoices';
let option = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
    },
fetch(url,option)
};

GUIDE DES URLS:

toutes les urls commencent par "http://localhost:8001" ce sont justes les terminaisons qui changent 

1) methode : GET , terminaison : /invoices , effet: selectionne toutes les factures à partir de la plus récente

2) methode : GET , terminaison : /invoices/{number} , effet : selectionne "{number}" factures à partir de la plus récente

3) methode : GET , terminaison : /invoice/{id} , effet : selectionne la facture correspondant à l'id

4) methode : GET , terminaison :/companies , effet : selectionne toutes les entreprises par ordre alphabétique

5) methode : GET , terminaison :/companies/{number} , effet : selectionne "{number}"  entreprises à partir de la plus récente

6) methode : GET , terminaison :/company/{id} , effet : selectionne l'entreprise correspondant à l'id

7) methode : GET , terminaison :/contacts , effet : selectionne tout les contactes par ordre alphabétique

8) methode : GET , terminaison :/contacts/{number} , effet : selectionne "{number}" contacts à partir du plus récent

9) methode : GET , terminaison :/contact/{id} , effet : selectionne le contact correspondant à l'id

10) methode : POST , terminaison :/companies , body: {name : "companies_name", type_id : "entreprise", country : "companies_country", tva : "companies_tva", create_dat : "companies_create_dat"} , effet : ajoute une entreprise

11) methode : POST , terminaison :/invoices , body: {ref: "invoice_ref" , id_company:"invoice_id_company", creat_dat:"invoice_creat_dat"} , effet : ajoute une facture

12) methode : POST , terminaison :/contacts , body: {name:"contact_name", company_id : "contact_company", email: "contact_email", phone : "contact_phone", create_dat : "contact_create_dat"} , effet : ajoute un contact

13) methode : PATCH , terminaison :/invoice/{id} , body :  {ref=new_ref , id_company=:new_id_company,update_dat=new_update_dat},
effet : modifie la facture correspondante à l'id

14) methode : PATCH , terminaison :/companie/{id} , body :  {name=new_name , tva=new_tva,country=new_country},
effet : modifie l'entreprise correspondante à l'id

15) methode : PATCH , terminaison :/contact/{id} , body :  {name=new_name , phone=new_phone,email=new_email},
effet : modifie le contact correspondant à l'id

16) methode : DELETE , terminaison : /company/{id} , effet : supprime l'entreprise correspondante à l'id

17) methode : DELETE , terminaison : /invoice/{id} , effet : supprime la facture correspondante à l'id

18) methode : DELETE , terminaison : /contact/{id} , effet : supprime le contact correspondant à l'id






*/
/// début du code ///
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
            header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE,PATCH");
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

//API selectionnant un nombre précis de companies Par plus recent
$router->get('/companies/{number}', function ($number) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare("SELECT * FROM companies ORDER BY create_dat DESC  LIMIT $number ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
        
    });

//API selectionnant UNE COMPANY(AVEC UN Y)
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

//API créant une nouvelle companie
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
      
//API ajouter une facture
$router->post('/invoices', function() {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $data = json_decode(file_get_contents('php://input'), true);
        $add = $pdo->prepare("INSERT INTO invoices (ref, id_company, create_dat) VALUES (:ref, :id_company, :create_dat)");
        $add->bindValue(':ref', $data["ref"]);
        $add->bindValue(':id_company', $data["id_company"]);
        $add->bindValue(':create_dat', $data["create_dat"]);
        $add->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données reçues avec succès']);
    });


//API ajouter un contact
$router->post('/contacts', function() {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $data = json_decode(file_get_contents('php://input'), true);
        $add = $pdo->prepare("INSERT INTO contacts (name, company_id, email, phone, create_dat) VALUES (:name, :company_id, :email, :phone, :create_dat)");
        $add->bindValue(':name', $data["name"]);
        $add->bindValue(':company_id', $data["company_id"]);
        $add->bindValue('email', $data["email"]);
        $add->bindValue('phone', $data["phone"]);
        $add->bindValue(':create_dat', $data["create_dat"]);
        $add->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données reçues avec succès']);
    });

//API modifier une facture
$router->patch('/invoice/{id}', function ($id) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $data = json_decode(file_get_contents('php://input'), true);
        $change=$pdo->prepare("UPDATE invoices SET ref=:ref , id_company=:id_company,update_dat=:update_dat  WHERE id = $id ");
        $change->bindValue(':ref', $data["ref"]);
        $change->bindValue(':id_company', $data["id_company"]);
        $change->bindValue(':update_dat', $data["update_dat"]);
        $change->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données modifiées avec succès']);
            
    });

//API modifier une companie
$router->patch('/companie/{id}', function ($id) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $data = json_decode(file_get_contents('php://input'), true);
        $change=$pdo->prepare("UPDATE companies SET name=:name , tva=:tva,country=:country  WHERE id = $id ");
        $change->bindValue(':name', $data["name"]);
        $change->bindValue(':tva', $data["tva"]);
        $change->bindValue(':country', $data["country"]);
        $change->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données modifiées avec succès']);
            
    });

//API modifier un contact
$router->patch('/contact/{id}', function ($id) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $data = json_decode(file_get_contents('php://input'), true);
        $change=$pdo->prepare("UPDATE contacts SET name=:name , phone=:phone,email=:email  WHERE id = $id ");
        $change->bindValue(':name', $data["name"]);
        $change->bindValue(':phone', $data["phone"]);
        $change->bindValue(':email', $data["email"]);
        $change->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données modifiées avec succès']);
            
    });

//API Retirer UNE COMPANY ( AVEC UN Y)
$router->delete('/company/{id}', function ($id) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare(" DELETE FROM companies WHERE id = $id ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
                    
    });
        
//API Retirer UNE FACTURE ( INVOICE SANS S)
$router->delete('/invoice/{id}', function ($id) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare(" DELETE FROM invoices WHERE id = $id ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
                    
    });
        
//API Retirer UN CONTACT ( SANS S)
$router->delete('/contact/{id}', function ($id) {
        $pdo = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
        $resultat=$pdo->prepare(" DELETE FROM contacts WHERE id = $id ");
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
                    
    });


$router->run();


?>

