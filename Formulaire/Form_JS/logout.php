<?php
if(isset($_POST["deconnexion"])){
    session_destroy();
    header("location:../Form_Html/addFormLogin.html");
  }
?>