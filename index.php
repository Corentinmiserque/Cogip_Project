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
let url = 'http://localhost:8001/invoices/5'

fetch(url,{method:"GET"}) 
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data)
      
    }) 
    </script>
</body>
</html>