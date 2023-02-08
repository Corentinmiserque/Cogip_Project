<?php 

class Dbh{
    private $host="localhost";
    private $user="root";
    private $pwd="";
    private $dbName="cogip";

    protected function connect(){
        $dsn='mysql:host=' . $this ->host . ';dbname='. $this->dbName;
        $pdo = new PDO($dsn, $this->user,$this->pwd);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
        return $pdo;
    }
}


/*
class Test extends Dbh{
    public function getCompagnies(){
        $sql="SELECT * FROM companies";
        $stmt=$this->connect()->query($sql);
        while($row = $stmt->fetch()){
            echo $row["name"] . "<br>";
        }

    }

    public function getCompagniesStmt($name,$country){
        $sql="SELECT * FROM companies WHERE name= ? AND country= ? ";
        $stmt=$this->connect()->prepare($sql);
        $stmt->execute([$name,$country]);
        $datas = $stmt->fetchAll();

        foreach($datas as $data ){
            echo $data["name"] . "<br>";
        }

    }

    public function setCompagniesStmt($name,$type_id,$country,$tva,$create_dat,$update_dat){
        $sql="INSERT INTO companies (name,type_id,country,tva,create_dat,update_dat) VALUES (?,?,?,?,?,?)";
        $stmt=$this->connect()->prepare($sql);
        $stmt->execute([$name,$type_id,$country,$tva,$create_dat,$update_dat]);

    }
}
*/
?>