<?php

class contacts extends Dbh
{
    public function get_contacts()
    {
        $sql = "SELECT contacts.id, contacts.name AS Name_contact, email, phone, companies.name AS Name_company, contacts.create_dat , companies.id AS IDCOMPANY   FROM contacts 
        INNER JOIN companies
        ON contacts.company_id = companies.id
        ORDER BY contacts.name ASC";
        $resultat = $this->connect()->prepare($sql);
        $resultat->execute();
        $donnees = $resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function get_contactsNumber($number)
    {
        $sql = "SELECT contacts.id, contacts.name AS Name_contact, email, phone, companies.name AS Name_company, contacts.create_dat, companies.id AS IDCOMPANY   FROM contacts 
        INNER JOIN companies
        ON contacts.company_id = companies.id ORDER BY create_dat DESC  LIMIT $number ";
        $resultat = $this->connect()->prepare($sql);
        $resultat->execute();
        $donnees = $resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function get_contactsID($id)
    {
        $sql = "SELECT contacts.id, contacts.name AS Name_contact, email, phone, companies.name AS Name_company, contacts.create_dat , companies.id AS IDCOMPANY   FROM contacts 
        INNER JOIN companies
        ON contacts.company_id = companies.id WHERE contacts.id = $id ";
        $resultat = $this->connect()->prepare($sql);
        $resultat->execute();
        $donnees = $resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function get_contactsbycompany($id)
    {
        $sql = "SELECT contacts.id, contacts.name AS Name_contact, email, phone, companies.name AS Name_company, contacts.create_dat,company_id, companies.id AS IDCOMPANY   FROM contacts 
        INNER JOIN companies
        ON contacts.company_id = companies.id WHERE company_id = $id ";
        $resultat = $this->connect()->prepare($sql);
        $resultat->execute();
        $donnees = $resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function post_contacts(){
        $data = json_decode(file_get_contents('php://input'), true);
        $name = $data['name'];
        $company_id = $data['company_id'];
        $email = $data['email'];
        $phone = $data['phone'];
        $create_dat = $data['create_dat'];
        $error = false;
        if (!preg_match("/^[a-zA-ZÀ-ÿ ]+$/", $name)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'Le nom ne peut contenir que des lettres']);
            $error = true;
        } elseif (!preg_match("/^[0-9]+$/", $company_id)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'L\'entreprise ne peut contenirdes chiffres.']);
            $error = true;
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'L\'adresse email n\'est pas valide']);
            $error = true;
        } elseif (!preg_match("/^[0-9\/\.-]+$/", $phone)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'Le numéro de téléphone ne peut contenir que des chiffres']);
            $error = true;
        } else {
            // Sanitization des données du formulaire
            $name = filter_var($name);
            $company_id = filter_var($company_id, FILTER_SANITIZE_NUMBER_INT);
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
            $phone = filter_var($phone);
            $create_dat = filter_var($create_dat);
        }        
        if(!$error){
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
        };
    }

    public function patch_contact($id){
        $data = json_decode(file_get_contents('php://input'), true);
        $name = $data['name'];

        $company_id = $data['company_id'];
        $email = $data['email'];
        $phone = $data['phone'];
        $create_dat = $data['create_dat'];
        $error = false;
        if (!preg_match("/^[a-zA-ZÀ-ÿ ]+$/", $name)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'Le nom ne peut contenir que des lettres']);
            $error = true;
        } elseif (!preg_match("/^[0-9]+$/", $company_id)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'L\'entreprise ne peut contenirdes chiffres.']);
            $error = true;
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'L\'adresse email n\'est pas valide']);
            $error = true;
        } elseif (!preg_match("/^[0-9\/\.-]+$/", $phone)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'Le numéro de téléphone ne peut contenir que des chiffres']);
            $error = true;
        } else {
            // Sanitization des données du formulaire
            $name = filter_var($name);
            $company_id = filter_var($company_id, FILTER_SANITIZE_NUMBER_INT);
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
            $phone = filter_var($phone);
            $create_dat = filter_var($create_dat);
        }        
        if(!$error){
        $sql="UPDATE contacts SET name=:name , phone=:phone,email=:email  WHERE id = $id ";
        $change=$this->connect()->prepare($sql);
        $change->bindValue(':name', $data["name"]);
        $change->bindValue(':phone', $data["phone"]);
        $change->bindValue(':email', $data["email"]);
        $change->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données modifiées avec succès']);
        }
    }

    public function delete_contact($id)
    {
        $sql = " DELETE FROM contacts WHERE id = $id ";
        $resultat = $this->connect()->prepare($sql);
        $resultat->execute();
        $donnees = $resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }
};
