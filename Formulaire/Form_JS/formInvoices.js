submit=document.querySelector("#form");

submit.addEventListener("submit",function(event){
    event.preventDefault();
    const formData = new FormData(form);
    const ref = formData.get("ref");
    const id_company = formData.get("id_company");
    const update_dat = formData.get("update_dat");
    const create_dat=formData.get("create_dat")
    data = { ref : ref ,  id_company : id_company,create_dat:create_dat ,update_dat: update_dat}
    let url='http://localhost:8001/invoice/22';
    let option = {
    method: 'PATCH',
     body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    }
    fetch(url,option)

})


/*
data = { ref : '$ref' ,  id_company : '$id_company' , create_dat: '$create_dat' , update_dat: '$update_dat'}
let url='http://localhost:8001/invoices';
let option = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
      'Content-Type': 'application/json',
  },
}
fetch(url,option) 
*/