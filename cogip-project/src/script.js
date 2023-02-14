let url='https://quentin.hugoorickx.tech/invoice/5'
fetch(url,{method:"GET"}) 
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
}) 