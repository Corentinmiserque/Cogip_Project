<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <script>
        /*
    data = { name : "test",  company_id: 1, email:"test.test@test.com", phone:"00000000000", create_dat: "2023-02-02"}
    let url = 'http://localhost:8001/invoices';
    let option = {
        method: "GET",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };*/
    let url='http://localhost:8001/companies/'
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