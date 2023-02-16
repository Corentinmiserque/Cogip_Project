submit=document.querySelector("#form");

submit.addEventListener("submit",function(event){
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const firstname = formData.get("firstname");
    const company_id = formData.get("company_id");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const create_dat=formData.get("create_dat")
    data = { name : firstname +" " +name ,  company_id : company_id, email:email,phone:phone,create_dat:create_dat}
    let url='http://localhost:8001/contact/15';
    let option = {
    method: 'PATCH',
     body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    }
    fetch(url,option)

})