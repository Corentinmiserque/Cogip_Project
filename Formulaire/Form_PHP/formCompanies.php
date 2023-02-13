
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $type_id = $_POST['type_id'];
  $country = $_POST['country'];
  $tva = $_POST['tva'];
  $create_dat = $_POST['create_dat'];

  $error = false;

  if (!preg_match("/^[a-zA-Z0-9]+$/", $name)) {
    echo "<script> alert('Le nom ne peut contenir que des lettres et des chiffres.') </script>";
    $error = true;
  } elseif (!preg_match("/^[0-9]+$/", $type_id)) {
    echo "<script> alert('Le nombre ne peut contenir que des chiffres.') </script>";
    $error = true;
  } elseif (!preg_match("/^[a-zA-Z]+$/", $country)) {
    echo "<script> alert('Le pays ne peut contenir que des lettres.') </script>";
  } elseif (!preg_match("/^[a-zA-Z]{2}[0-9]+$/", $tva)) {
    echo "<script> alert('La TVA doit commencer par 2 lettres, suivies de chiffres.') </script>";
  } else {
    // Sanitization des données du formulaire
    $name = filter_var($name, FILTER_SANITIZE_STRING);
    $type_id = filter_var($type_id, FILTER_SANITIZE_NUMBER_INT);
    $country = filter_var($country, FILTER_SANITIZE_STRING);
    $tva = filter_var($tva, FILTER_SANITIZE_STRING);
    $create_dat = filter_var($create_dat, FILTER_SANITIZE_STRING);

    echo "
    <script>     
    data = { name : '$name' ,  type_id : '$type_id' , country:'$country', tva:'$tva', create_dat: '$create_dat'}
    let url='http://localhost:8001/companies';
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
   
  header("Refresh:0; url=../Form_Html/addFormCompanies.html");
  
}

?>
