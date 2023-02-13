<?php

class contacts extends Dbh {
    public function get_contacts(){
        $sql="SELECT contacts.id, contacts.name AS Name_contact, email, phone, companies.name AS Name_company, contacts.create_dat    FROM contacts 
        INNER JOIN companies
        ON contacts.company_id = companies.id
        ORDER BY contacts.name ASC";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function get_contactsNumber($number){
        $sql="SELECT contacts.id, contacts.name AS Name_contact, email, phone, companies.name AS Name_company, contacts.create_dat    FROM contacts 
        INNER JOIN companies
        ON contacts.company_id = companies.id ORDER BY create_dat DESC  LIMIT $number ";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);

    }

    public function get_contactsID($id){
        $sql="SELECT contacts.id, contacts.name AS Name_contact, email, phone, companies.name AS Name_company, contacts.create_dat    FROM contacts 
        INNER JOIN companies
        ON contacts.company_id = companies.id WHERE contacts.id = $id ";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);

    }

    public function get_contactsbycompany($id){
        $sql="SELECT contacts.id, contacts.name AS Name_contact, email, phone, companies.name AS Name_company, contacts.create_dat,company_id    FROM contacts 
        INNER JOIN companies
        ON contacts.company_id = companies.id WHERE company_id = $id ";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);

    }

    public function post_contacts(){
        $data = json_decode(file_get_contents('php://input'), true);
        $sql="INSERT INTO contacts (name, company_id, email, phone, create_dat) VALUES (:name, :company_id, :email, :phone, :create_dat)";
        $add=$this->connect()->prepare($sql);
        $add->bindValue(':name', $data["name"]);
        $add->bindValue(':company_id', $data["company_id"]);
        $add->bindValue('email', $data["email"]);
        $add->bindValue('phone', $data["phone"]);
        $add->bindValue(':create_dat', $data["create_dat"]);
        $add->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données reçues avec succès']);
    }

    public function patch_contact($id){
        $data = json_decode(file_get_contents('php://input'), true);
        $sql="UPDATE contacts SET name=:name , phone=:phone,email=:email  WHERE id = $id ";
        $change=$this->connect()->prepare($sql);
        $change->bindValue(':name', $data["name"]);
        $change->bindValue(':phone', $data["phone"]);
        $change->bindValue(':email', $data["email"]);
        $change->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données modifiées avec succès']);
    }

    public function delete_contact($id){
        $sql=" DELETE FROM contacts WHERE id = $id ";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);

    }
};
?>