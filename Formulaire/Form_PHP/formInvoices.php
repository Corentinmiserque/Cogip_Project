<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $ref = $_POST['ref'];
  $id_company = $_POST['id_company'];
  $create_dat = $_POST['create_dat'];
  $update_dat = $_POST['update_dat'];


  $error = false;

  if (!preg_match("/^[a-zA-Z0-9]+$/", $ref)) {
    echo "<script> alert('La référence ne peut contenir que des lettres et des chiffres.') </script>";
    $error = true;
  } elseif (!preg_match("/^[0-9]+$/", $id_company)) {
    echo "<script> alert('L'identifiant de la société ne peut contenir que des chiffres.') </script>";
    $error = true;
  } elseif (!preg_match("/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/", $update_dat)) {
    echo "<script> alert('La date doit être au format YYYY-MM-DD.') </script>";
  } else {
    // Sanitization des données du formulaire
    $ref = filter_var($ref, FILTER_SANITIZE_STRING);
    $id_company = filter_var($id_company, FILTER_SANITIZE_NUMBER_INT);
    $update_dat = filter_var($update_dat, FILTER_SANITIZE_STRING);
    $create_dat = filter_var($create_dat, FILTER_SANITIZE_STRING);
 

echo "
<script>     
data = { ref : '$ref' ,  id_company : '$id_company' , create_dat: '$create_dat' , update_dat: '$update_dat'}
let url='http://localhost:8001/invoices';
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
header("Refresh:0; url=../Form_Html/addFormInvoices.html");
}

?>

