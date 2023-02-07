let url='http://localhost:8001/invoices'
fetch(url,{method:"GET"}) 
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
}) 