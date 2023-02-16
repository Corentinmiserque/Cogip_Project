<?php

class invoices extends Dbh
{
    public function get_invoices()
    {
        $sql = "SELECT invoices.id, ref, invoices.update_dat AS Date_due , invoices.create_dat, companies.name AS Name_company, companies.id AS IDCOMPANY FROM invoices
        INNER JOIN companies
        ON invoices.id_company = companies.id
        ORDER BY invoices.create_dat DESC ";
        $resultat = $this->connect()->prepare($sql);
        $resultat->execute();
        $donnees = $resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function get_invoicesNumber($number)
    {
        $sql = "SELECT invoices.id, ref, invoices.update_dat AS Date_due , invoices.create_dat, companies.name AS Name_company, companies.id AS IDCOMPANY FROM invoices
        INNER JOIN companies
        ON invoices.id_company = companies.id ORDER BY create_dat DESC LIMIT $number ";
        $resultat = $this->connect()->prepare($sql);
        $resultat->execute();
        $donnees = $resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function get_invoicesID($id)
    {
        $sql = "SELECT invoices.id , ref, invoices.update_dat AS Date_due , invoices.create_dat, companies.name AS Name_company, companies.id AS IDCOMPANY FROM invoices
        INNER JOIN companies
        ON invoices.id_company = companies.id WHERE invoices.id = $id";
        $resultat = $this->connect()->prepare($sql);
        $resultat->execute();
        $donnees = $resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function post_invoices(){
        $data = json_decode(file_get_contents('php://input'), true);
        $error=false;
        $ref = $data['ref'];
        $id_company = $data['id_company'];
        $create_dat = $data['create_dat'];
        $update_dat = $data['update_dat'];
        if (!preg_match("/^[a-zA-Z0-9]+$/", $ref)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'La référence ne peut contenir que des lettres et des chiffres.']);
            $error = true;
          } elseif (!preg_match("/^[0-9]+$/", $id_company)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'L\'identifiant de la société ne peut contenir que des chiffres.']);
            $error = true;
          } elseif (!preg_match("/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/", $update_dat)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'La date doit être au format YYYY-MM-DD.']);
            $error=true;
          } else {
            // Sanitization des données du formulaire
            $ref = filter_var($ref, FILTER_SANITIZE_STRING);
            $id_company = filter_var($id_company, FILTER_SANITIZE_NUMBER_INT);
            $update_dat = filter_var($update_dat, FILTER_SANITIZE_STRING);
            $create_dat = filter_var($create_dat, FILTER_SANITIZE_STRING);
          }
        if(!$error){         
        $sql="INSERT INTO invoices (ref, id_company, create_dat,update_dat) VALUES (:ref, :id_company, :create_dat,:update_dat)";
        $add=$this->connect()->prepare($sql);
        $add->bindValue(':ref', $data["ref"]);
        $add->bindValue(':id_company', $data["id_company"]);
        $add->bindValue(':create_dat', $data["create_dat"]);
        $add->bindValue(':update_dat', $data["update_dat"]);
        $add->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données reçues avec succès']);
        };
    }

    public function patch_invoice($id){
        $data = json_decode(file_get_contents('php://input'), true);
        $error=false;
        $ref = $data['ref'];
        $id_company = $data['id_company'];
        $create_dat = $data['create_dat'];
        $update_dat = $data['update_dat'];
        if (!preg_match("/^[a-zA-Z0-9]+$/", $ref)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'La référence ne peut contenir que des lettres et des chiffres.']);
            $error = true;
          } elseif (!preg_match("/^[0-9]+$/", $id_company)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'L\'identifiant de la société ne peut contenir que des chiffres.']);
            $error = true;
          } elseif (!preg_match("/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/", $update_dat)) {
            header('Content-Type: application/json');
            echo json_encode(['error'=> 'La date doit être au format YYYY-MM-DD.']);
            $error=true;
          } else {
            // Sanitization des données du formulaire
            $ref = filter_var($ref, FILTER_SANITIZE_STRING);
            $id_company = filter_var($id_company, FILTER_SANITIZE_NUMBER_INT);
            $update_dat = filter_var($update_dat, FILTER_SANITIZE_STRING);
            $create_dat = filter_var($create_dat, FILTER_SANITIZE_STRING);
          }
        if(!$error){
        $sql="UPDATE invoices SET ref=:ref , id_company=:id_company,update_dat=:update_dat  WHERE id = $id ";
        $change=$this->connect()->prepare($sql);
        $change->bindValue(':ref', $data["ref"]);
        $change->bindValue(':id_company', $data["id_company"]);
        $change->bindValue(':update_dat', $data["update_dat"]);
        $change->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données modifiées avec succès']);
        }
    }

    public function delete_invoice($id)
    {
        $sql = " DELETE FROM invoices WHERE id = $id ";
        $resultat = $this->connect()->prepare($sql);
        $resultat->execute();
        $donnees = $resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }
};
