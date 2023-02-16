<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $first_name = $_POST['first_name'];
    $role_id = $_POST['role_id'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $create_dat = $_POST['create_dat'];

    $error = false;

    if (!preg_match("/^[a-zA-Z]+$/", $name)) {
        echo "<script> alert('Le nom ne peut contenir que des lettres.') </script>";
        $error = true;
    } elseif (!preg_match("/^[a-zA-Z]+$/", $first_name)) {
        echo "<script> alert('Le prénom ne peut contenir que des lettres.') </script>";
        $error = true;
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script> alert('L\'adresse email n\'est pas valide.') </script>";
        $error = true;
    } else {
        // Sanitization des données du formulaire
        $name = filter_var($name);
        $first_name = filter_var($first_name);
        $role_id = filter_var($role_id, FILTER_SANITIZE_NUMBER_INT);
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $password = filter_var($password);
        $create_dat = filter_var($create_dat);

        echo "
    <script>     
    data = {  first_name: '$first_name', role_id:'$role_id', last_name:'$name', email:'$email', password:'$password', create_dat: '$create_dat', update_dat: '$create_dat'}
    let url='http://localhost:8001/users';
    let option = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json',
      },
    }
    fetch(url,option) 

    </script>";
    }

    header("Refresh:0; url=../Form_Html/addFormSub.html");
}
