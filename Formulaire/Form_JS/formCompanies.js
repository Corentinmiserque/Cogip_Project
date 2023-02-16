submit=document.querySelector("#form");

submit.addEventListener("submit",function(event){
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const type_id = formData.get("type_id");
    const country = formData.get("country");
    const tva = formData.get("tva");
    const create_dat=formData.get("create_dat")
    data = { name : name,  type_id : type_id, country:country,tva:tva,create_dat:create_dat}
    let url='http://localhost:8001/company/14';
    let option = {
    method: 'PATCH',
     body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    }
    fetch(url,option)

})