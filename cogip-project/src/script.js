let url='https://quentin.hugoorickx.tech/invoice/1'
fetch(url,{method:"GET"}) 
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
}) 