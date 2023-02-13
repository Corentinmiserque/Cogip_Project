<?php

class users extends Dbh{
    public function get_users(){
        $sql="SELECT users.*, roles.name
        FROM users
        INNER JOIN roles
        ON users.role_id = roles.id; ";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function get_userID($id){
        $sql="SELECT users.*, roles.name
        FROM users 
        INNER JOIN roles
        ON users.role_id = roles.id WHERE users.id = $id";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function post_users(){
        $data = json_decode(file_get_contents('php://input'), true);
        $sql="INSERT INTO users (first_name,role_id,last_name,email,password,create_dat,update_dat) VALUES (:first_name,:role_id,:last_name,:email, :password,:create_dat,:update_dat) ";
        $add=$this->connect()->prepare($sql);
        $add->bindValue(':first_name', $data["first_name"]);
        $add->bindValue(':role_id', $data["role_id"]);
        $add->bindValue(':last_name', $data["last_name"]);
        $add->bindValue(':email', $data["email"]);
        $add->bindValue(':password', $data["password"]);
        $add->bindValue(':create_dat', $data["create_dat"]);
        $add->bindValue(':update_dat', $data["update_dat"]);
        $add->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données reçues avec succès']);
    }
    public function patch_userID($id){
        $data = json_decode(file_get_contents('php://input'), true);
        $sql="UPDATE users SET first_name=:first_name,role_id=:role_id,last_name=:last_name,email=:email,password=:password,update_dat=:update_dat WHERE id=$id";
        $add=$this->connect()->prepare($sql);
        $add->bindValue(':first_name', $data["first_name"]);
        $add->bindValue(':role_id', $data["role_id"]);
        $add->bindValue(':last_name', $data["last_name"]);
        $add->bindValue(':email', $data["email"]);
        $add->bindValue(':password', $data["password"]);
        $add->bindValue(':update_dat', $data["update_dat"]);
        $add->execute();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Données reçues avec succès']);
    }

    public function delete_userID($id){
        $sql=" DELETE FROM users WHERE id = $id ";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);

    }
}

?>