import React, { useState, useEffect } from "react";
import axios from "axios";

function DashboardContactsMain() {
  const [date, setDate] = useState(new Date());
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [company_id, setCompany_id] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [companyIdError, setCompanyIdError] = useState("");

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/companies")
      .then(res => setCompanies(res.data))
      .catch(err => setError(err.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const firstname = formData.get("firstname");
    const company_id = formData.get("company_id");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const create_date = new Date().toISOString();
    // Vérification des champs
    if (!name) {
      setNameError("Veuillez entrer un nom.");
      formIsValid = false;
    } else {
      setNameError("");
    }
    if (!firstname) {
      setFirstnameError("Veuillez entrer un prénom.");
      formIsValid = false;
    } else {
      setFirstnameError("");
   
    }
    if (!company_id) {
      setCompanyIdError("La société ne peut pas être vide.");
      formIsValid = false;
    } else {
      setCompanyIdError("");

    }
    if (!email) {
      setEmailError("Veuillez entrer un e-mail.");
      formIsValid = false;
    } else {
      setEmailError("");
  
    }

    if (!phone) {
      setPhoneError("Veuillez entrer un numéro de téléphone.");
      formIsValid = false;
    } else {
      setPhoneError("");
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneError("Le numéro de téléphone doit contenir 10 chiffres.");
      formIsValid = false;
    } else {
      setPhoneError("");
    }

    if (formIsValid) {
      const create_date = new Date().toISOString();

      const data = {
       name : firstname +" " +name ,
        company_id: company_id,
        email: email,
        phone: phone,
        create_date: create_date,
      };

      axios
        .post("https://quentin.hugoorickx.tech/contacts", data)
        .then(() => {
          window.location.href = "/dashboard_Contactspage";
        })
        .catch((err) => console.error(err));
    }
  };

    return (
      <form className="dashboard_main_form" onSubmit={handleSubmit}>
        <p>New Contact</p>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" placeholder="Name"/>
        <div className="error">{nameError}</div>
    
        <label htmlFor="firstname"></label>
        <input type="text" id="firstname" name="firstname" placeholder="First Name"
        />
        <div className="error">{firstnameError}</div>
    
        <label htmlFor="company_id"></label>
        <select id="company_id" name="company_id">
          {companies.map(company => (
            <option key={company.id} value={company.id}>{company.Name_company}</option>
          ))}
        </select>
        <div className="error">{companyIdError}</div>
    
        <label htmlFor="email"></label>
        <input type="email" id="email" name="email" placeholder="E-mail"/>
        <div className="error">{emailError}</div>
    
        <label htmlFor="phone"></label>
        <input type="text" id="phone" name="phone" placeholder="Phone Number"/>
        <div className="error">{phoneError}</div>
    
        <input type="hidden" id="create_dat" name="create_dat" value={`${date}`}/>
    
        <input className="save" type="submit" value="Save"/>
      </form>
    );
  }

  export default DashboardContactsMain;    