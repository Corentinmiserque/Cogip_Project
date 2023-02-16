<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(empty($_POST["email"])) {
        $errors[] = "Email is required";
    }
    if(empty($_POST["password"])) {
        $errors[] = "Password is required";
    }

    //récupération des variables
    if(isset($_POST["email"]) && isset($_POST["password"])){
        $email = $_POST['email'];
        $password = $_POST['password'];
        //validation
        if(filter_var($email, FILTER_VALIDATE_EMAIL) && preg_match("/^[a-zA-Z\d\\-_]+$/", $password)){
            //sanitisation
            $email=filter_var($email, FILTER_SANITIZE_EMAIL);
            $password = filter_var($password,FILTER_SANITIZE_STRING);
            //vérification que l'user existe
            //connexion
            try
            {
                // On se connecte à MySQL
                $bdd = new PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'root', '');
            }
            catch(Exception $e)
            {
                // En cas d'erreur, on affiche un message et on arrête tout
                    die('Erreur : '.$e->getMessage());
            }
            $resultat = $bdd->query('SELECT * FROM users');
            $donnees = $resultat->fetchALL(PDO::FETCH_ASSOC);
            foreach($donnees as $elem){
                if($elem["email"]==$email && $elem["password"]==$password){
                    session_start();
                    $_SESSION["id"]=$elem["id"];
                    header("Refresh:0; url=../Form_Html/addFormLogin.html");

                }
            }
            if(!isset($_SESSION["id"])){
                $errors[] = "the email or the password is incorrect";
            }


            
        }
        else{
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $errors[]="Warning: the format of the e-mail address is incorrect";
            }
            if (!preg_match("/^[a-zA-Z\d\\-_]+$/", $password)){
                $errors[]="Warning: incorrect password. The format of the password is incorrect.";
            }
        }
    }
    if(isset($errors)){
        echo"<script> alert('".$errors[0]."') </script>";
    }

    header("Refresh:0; url=../Form_Html/addFormLogin.html");
}

?>