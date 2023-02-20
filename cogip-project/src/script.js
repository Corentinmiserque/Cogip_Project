let url='https://quentin.hugoorickx.tech/company/1'
fetch(url,{method:"GET"}) 
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
}) 