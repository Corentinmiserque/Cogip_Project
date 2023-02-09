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
    data = { name : "Aurélien2", company_id:"3",email:"test2@test.com", phone:"555-555", create_dat: "2023-02-01"};
    let url = 'http://localhost:8001/contact/12';
    let option = {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(url,option)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
    }) 
    /*
    let url='http://localhost:8001/invoice/5'
    fetch(url,{method:"GET"}) 
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
    }) 
    */
    </script>

</body>
</html>