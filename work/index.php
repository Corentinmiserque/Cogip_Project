<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
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

14) methode : PATCH , terminaison :/company/{id} , body :  {name=new_name , tva=new_tva,country=new_country},
effet : modifie l'entreprise correspondante à l'id

15) methode : PATCH , terminaison :/contact/{id} , body :  {name=new_name , phone=new_phone,email=new_email},
effet : modifie le contact correspondant à l'id

16) methode : DELETE , terminaison : /company/{id} , effet : supprime l'entreprise correspondante à l'id

17) methode : DELETE , terminaison : /invoice/{id} , effet : supprime la facture correspondante à l'id

18) methode : DELETE , terminaison : /contact/{id} , effet : supprime le contact correspondant à l'id


*/
/// début du code ///
//ajout des classes
include "class/class.php";
include "class/invoices.php";
include "class/companies.php";
include "class/contacts.php";
//connexion à l'api
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

//gestion des routes

//commande affichant toutes les factures en commencant par la plus  récente
$router->get('/invoices',function(){
    $invoice = new invoices();
    $invoice->get_invoices();
});

//API selectionnant le nombre d'élément voulu de Invoices par plus récent
$router->get('/invoices/{number}',function($number){
    $invoice = new invoices();
    $invoice->get_invoicesNumber($number);
});

//API selectionnant UNE FACTURE (SANS S invoice)
$router->get('/invoice/{id}',function($id){
    $invoice = new invoices();
    $invoice->get_invoicesID($id);
});

//API ajouter une facture
$router->post('/invoices',function(){
    $invoice = new invoices();
    $invoice->post_invoices();
});

//API modifier une facture
$router->patch('/invoice/{id}',function($id){
    $invoice = new invoices();
    $invoice->patch_invoice($id);
});

//API Retirer UNE FACTURE ( INVOICE SANS S)
$router->delete('/invoice/{id}',function($id){
    $invoice = new invoices();
    $invoice->delete_invoice($id);
});

//API selectionnant toute les companies par ordre Alphabet
$router->get('/companies',function(){
    $company = new companies();
    $company->get_companies();
});

//API selectionnant un nombre précis de companies Par plus recent
$router->get('/companies/{number}',function($number){
    $company = new companies();
    $company->get_companiesNumber($number);
});

//API selectionnant UNE COMPANY(AVEC UN Y)
$router->get('/company/{id}',function($id){
    $company = new companies();
    $company->get_companiesID($id);
});

//API créant une nouvelle companie
$router->post('/companies',function(){
    $company = new companies();
    $company->post_companies();
});

//API modifier une companie
$router->patch('/company/{id}',function($id){
    $company = new companies();
    $company->patch_companie($id);
});

//API Retirer UNE COMPANY ( AVEC UN Y)
$router->delete('/company/{id}',function($id){
    $company = new companies();
    $company->delete_companie($id);
});

//API selectionnant toute les contacts par odre alphabet
$router->get('/contacts',function(){
    $contact = new contacts();
    $contact->get_contacts();
});

//API selectionnant un nombre précis de contacts par plus récent
$router->get('/contacts/{number}',function($number){
    $contact = new contacts();
    $contact->get_contactsNumber($number);
});

//API selectionnant UNE COMPANY(AVEC UN Y)
$router->get('/contact/{id}',function($id){
    $contact = new contacts();
    $contact->get_contactsID($id);
});

//API ajouter un contact
$router->post('/contacts',function(){
    $contact = new contacts();
    $contact->post_contacts();
});

//API modifier un contact
$router->patch('/contact/{id}',function($id){
    $contact = new contacts();
    $contact->patch_contact($id);
});

//API Retirer UN CONTACT ( SANS S)
$router->delete('/contact/{id}',function($id){
    $contact = new contacts();
    $contact->delete_contact($id);
});


$router->run();
