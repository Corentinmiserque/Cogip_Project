<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p class="test"></p>
    <script>
let url = 'http://localhost:8001/invoices'
data={name : "test", country:"Belgium",tva:"555555",creat_at:"2023-02-02"}
fetch(url,{method:"POST",body:JSON.stringify(data) ,headers: {
      "Content-Type": "application/json",
    },}) 
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data)
      
    }) 
    </script>
</body>
</html>