<?php 
include "connexion.php";

//$method=$_SERVER["Request_Method"];

function getItems($bdd) {
    $sql = "SELECT * FROM companies";
    $result =$bdd->query($sql);
    $response = [];
      while ($row = $result->fetchAll()) {
        $response[] = $row;
      }
    return $response;
  }

  header('Content-Type: application/json');
  echo json_encode(getItems($bdd));