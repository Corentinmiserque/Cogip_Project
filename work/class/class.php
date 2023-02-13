<?php 

class Dbh{
    private $host="localhost";
    private $user="u716273791_cogip_quentin";
    private $pwd="bHIN:d1J/";
    private $dbName="u716273791_cogip_quentin";

    protected function connect(){
        $dsn='mysql:host=' . $this ->host . ';dbname='. $this->dbName;
        $pdo = new PDO($dsn, $this->user,$this->pwd);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
        return $pdo;
    }
}


?>