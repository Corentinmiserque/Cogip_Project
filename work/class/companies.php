<?php

class companies extends Dbh {
    public function get_companies(){
        $sql="SELECT companies.id, companies.name AS Name_company, country, tva, companies.create_dat , companies.update_dat, types.name AS Name_type
        FROM companies 
        INNER JOIN types 
        ON companies.type_id = types.id 
        ORDER BY companies.name ASC";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function get_companiesNumber($number){
        $sql="SELECT companies.id, companies.name AS Name_company, country, tva, companies.create_dat , companies.update_dat, types.name AS Name_type
        FROM companies 
        INNER JOIN types 
        ON companies.type_id = types.id  ORDER BY create_dat DESC  LIMIT $number";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);

    }

    public function get_companiesID($id){
        $sql="SELECT companies.id, companies.name AS Name_company, country, tva, companies.create_dat , companies.update_dat, types.name AS Name_type
        FROM companies 
        INNER JOIN types 
        ON companies.type_id = types.id  WHERE companies.id = $id ";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);

    }

    public function post_companies(){
        $data = json_decode(file_get_contents('php://input'), true);
        $sql="INSERT INTO companies (name, type_id, country, tva, create_dat) VALUES (:name, :type_id, :country, :tva, :create_dat)";
        $add=$this->connect()->prepare($sql);
        $add->bindValue(':name', $data["name"]);
        $add->bindValue(':type_id', $data["type_id"]);
        $add->bindValue(':country', $data["country"]);
        $add->bindValue(':tva', $data["tva"]);
        $add->bindValue(':create_dat', $data["create_dat"]);
        $add->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données reçues avec succès']);
    }

    public function patch_companie($id){
        $data = json_decode(file_get_contents('php://input'), true);
        $sql="UPDATE companies SET name=:name , tva=:tva,country=:country  WHERE id = $id ";
        $change=$this->connect()->prepare($sql);
        $change->bindValue(':name', $data["name"]);
        $change->bindValue(':tva', $data["tva"]);
        $change->bindValue(':country', $data["country"]);
        $change->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données modifiées avec succès']);
    }

    public function delete_companie($id){
        $sql=" DELETE FROM companies WHERE id = $id ";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);

    }
};
?>