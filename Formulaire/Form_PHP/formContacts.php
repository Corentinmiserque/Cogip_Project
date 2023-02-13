<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $firstname = $_POST['firstname'];
    $company_id = $_POST['company_id'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $create_dat = $_POST['create_dat'];

    $error = false;

    if (!preg_match("/^[a-zA-Z]+$/", $name)) {
        echo "<script> alert('Le nom ne peut contenir que des lettres.') </script>";
        $error = true;
    } elseif (!preg_match("/^[a-zA-Z]+$/", $firstname)) {
        echo "<script> alert('Le prénom ne peut contenir que des lettres.') </script>";
        $error = true;
    } elseif (!preg_match("/^[0-9]+$/", $company_id)) {
        echo "<script> alert('L'identifiant de la société ne peut contenir que des chiffres.') </script>";
        $error = true;
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script> alert('L'adresse e-mail n'est pas valide.') </script>";
        $error = true;
    } elseif (!preg_match("/^[0-9\/\.-]+$/", $phone)) {
        echo "<script> alert('Le numéro de téléphone ne peut contenir que des chiffres.') </script>";
        $error = true;
    } else {
        // Sanitization des données du formulaire
        $name = filter_var($name);
        $firstname = filter_var($firstname);
        $company_id = filter_var($company_id, FILTER_SANITIZE_NUMBER_INT);
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $phone = filter_var($phone);
        $create_dat = filter_var($create_dat);

        echo "
    <script>     
    data = { name : '$firstname $name', company_id:'$company_id', email:'$email', phone:'$phone', create_dat: '$create_dat'}
    let url='http://localhost:8001/contacts';
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

    header("Refresh:0; url=../Form_Html/addFormContacts.html");
}
