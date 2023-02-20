import React, { useState, useEffect } from "react";
import axios from 'axios';

function DashboardCompaniesMain() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date());
  const [nameError, setNameError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [tvaError, setTvaError] = useState("");

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/companies")
      .then(res => res.data)
      .then(data => setCompanies(data))
      .catch(err => setError(err.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const type_id = formData.get("type_id");
    const country = formData.get("country");
    const tva = formData.get("tva");
    const create_dat = date.toISOString();

    if (!name) {
      setNameError("Le nom ne peut pas être vide.");
      formIsValid = false;
    } else {
      setNameError("");
    }

    if (!country) {
      setCountryError("Le pays ne peut pas être vide.");
      formIsValid = false;
    } else {
      setCountryError("");
    }

    if (!/^([a-zA-Z]{2}\d+)?$/.test(tva)) {
      setTvaError("La TVA doit commencer par deux lettres suivies de chiffres.");
      formIsValid = false;
    } else {
      setTvaError("");
    }

    if (formIsValid) {
      const data = { 
        name: name, 
        type_id: type_id, 
        country: country, 
        tva: tva, 
        create_dat: create_dat 
      };

      axios.post('https://quentin.hugoorickx.tech/companies', data)
        .then(() => {
          window.location.href = "/dashboard_Companiespage";
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <form className="dashboard_main_form" onSubmit={handleSubmit}>
<p>All Companies</p>
<label htmlFor="name"></label>
<input type="text" id="name" name="name" placeholder="Name"/>
      <div className="error">{nameError}</div>

      <label htmlFor="type_id"></label>
      <select id="type_id" name="type_id" defaultValue="1">
        <option value="1">Supplier</option>
        <option value="2">Client</option>
      </select>

      <label htmlFor="country"></label>
      <input type="text" id="country" name="country"  placeholder="Country" />
      <div className="error">{countryError}</div>

      <label htmlFor="tva"></label>
      <input type="text" id="tva" name="tva" placeholder="TVA" />
      <div className="error">{tvaError}</div>

      <input type="hidden" id="create_dat" name="create_dat" value="" />

      <input className="save" type="submit" value="Save" />
    </form> 
  );
}

export default DashboardCompaniesMain;
