<?php 
include "connexion.php";

$method=$_SERVER["Request_Method"];

function getItems($bdd) {
    $sql = "SELECT * FROM my_table";
    $result =$bdd->query($sql);
    $response = [];
      while ($row = $result->fetch_assoc()) {
        $response[] = $row;
      }
    return Json_encode($response);
  }

  switch($method){
    case 'GET'
        getItems($bdd);
        break;
  }