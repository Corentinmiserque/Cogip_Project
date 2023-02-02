<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <label for="name">name</label>
        <input type="text" name="name">
        <label for="type_id">type_id</label>
        <input type="number" name="type_id">
        <label for="country">country</label>
        <input type="text" name="country">
        <label for="tva">tva</label>
        <input type="text" name="tva">
        <label for="create_dat">creat_at</label>
        <input type="date" name="create-dat">
        <input type="submit">
    </form>
    <script>

    data = 
    let url = 'http://localhost:8001/companies';
    let option = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };

    </script>
<?php $data = $_POST;
 print_r($_POST); ?>
</body>
</html>