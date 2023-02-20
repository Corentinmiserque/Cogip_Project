import React, { useState, useEffect } from "react";
import axios from 'axios';

function DashboardContactsMain() {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [companyId, setCompanyId] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState(null);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/companies")
      .then(res => setCompanies(res.data))
      .catch(err => setError(err.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Vérification des champs
let formIsValid = true;

if (!name) {
  setNameError("Veuillez entrer un nom.");
  formIsValid = false;
} else {
  setNameError("");
}

if (!email) {
  setEmailError("Veuillez entrer une adresse e-mail.");
  formIsValid = false;
} else if (!/\S+@\S+\.\S+/.test(email)) {
  setEmailError("Veuillez entrer une adresse e-mail valide.");
  formIsValid = false;
} else {
  setEmailError("");
}

if (!phone) {
  setPhoneError("Veuillez entrer un numéro de téléphone.");
  formIsValid = false;
} else if (!/^\d+$/.test(phone)) {
  setPhoneError("Veuillez entrer un numéro de téléphone valide.");
  formIsValid = false;
} else {
  setPhoneError("");
}

if (!formIsValid) {
  return;
}

const createDat = new Date().toISOString();

const data = { 
  name: name, 
  firstname: firstName,
  company_id: companyId, 
  email: email, 
  phone: phone, 
  create_dat: createDat 
};

axios.post('https://quentin.hugoorickx.tech/contacts', data)
  .then(() => {
    window.location.href = "/dashboard_Companiespage";
  })
  .catch(err => setError(err.message));
};

  return (
    <form className="dashboard_main_form" onSubmit={handleSubmit}>
      <p>New Contact</p>
      
      <label htmlFor="name"></label>
  <input type="text" id="name" name="name" value={name}  placeholder="Name" />

  <label htmlFor="firstname"></label>
  <input type="text" id="firstname" name="firstname" placeholder="Firstname" />

  <label htmlFor="id_company"></label>
      <select id="id_company" name="id_company">
        {companies.map(company => (
          <option key={company.id} value={company.id}>{company.Name_company}</option>
        ))}
      </select>
      <div className="error">{companyIdError}</div>

  <label htmlFor="email"></label>
  <input type="text" id="email" name="email" placeholder="E-mail" />

  <label htmlFor="phone"></label>
  <input type="text" id="phone" name="phone"  placeholder="Phone Number" />

  <input type="hidden" id="create_dat" name="create_dat" value="" />

  <input className="save" type="submit" value="Save" />
</form>

  );
}


export default DashboardContactsMain;