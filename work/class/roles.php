<?php

class roles extends Dbh{
    public function get_roles(){
        $sql="SELECT * FROM roles ";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);
    }

    public function get_roleID($id){
        $sql="SELECT * FROM roles WHERE id = $id ";
        $resultat=$this->connect()->prepare($sql);
        $resultat->execute();
        $donnees=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($donnees);

    }

}

?>