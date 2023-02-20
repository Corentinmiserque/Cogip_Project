import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

function Editcompanies (){
  const [name, setName] = useState("");
  const [typeId, setTypeId] = useState("1");
  const [country, setCountry] = useState("");
  const [tva, setTva] = useState("");
  const [nameError, setNameError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [tvaError, setTvaError] = useState("");
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date());
  const { id } = useParams();

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/companies")
      .then(res => res.data)
      .then(data => setCompanies(data))
      .catch(err => setError(err.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérification des champs
    if (!name) {
      setNameError("Veuillez entrer un nom.");
      return;
    }
    if (!country) {
      setCountryError("Veuillez entrer un pays.");
      return;
    }
    if (!tva) {
      setTvaError("Veuillez entrer un numéro de TVA.");
      return;
    }
    if (!/^[A-Za-z]{2}[0-9]{10}$/.test(tva)) {
      setTvaError("Le numéro de TVA doit contenir 2 lettres suivies de 10 chiffres.");
      return;
    }

    const create_dat = date.toISOString();
    const data = { 
      name: name, 
      type_id: typeId, 
      country: country, 
      tva: tva, 
      create_dat: create_dat 
    };

    axios.patch(`https://quentin.hugoorickx.tech/company/${id}`, data)
      .then(() => {
        window.location.href = "/dashboard_Companiespage";
      })
      .catch(err => console.error(err));
  };

  return (
    <form className="dashboard_main_form" onSubmit={handleSubmit}>
      <p>Edit Companies</p>
      <label htmlFor="name"></label>
      <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={(event) => {setName(event.target.value); setNameError("");}}/>
      <div className="error">{nameError}</div>

      <label htmlFor="type_id"></label>
      <select id="type_id" name="type_id" value={typeId} onChange={(event) => {setTypeId(event.target.value);}}>
        <option value="1">Supplier</option>
        <option value="2">Client</option>
      </select>

      <label htmlFor="country"></label>
      <input type="text" id="country" name="country" placeholder="Country" value={country} onChange={(event) => {setCountry(event.target.value); setCountryError("");}}/>
      <div className="error">{countryError}</div>

      <label htmlFor="tva"></label>
      <input type="text" id="tva" name="tva" placeholder="TVA" value={tva} onChange={(event) => {setTva(event.target.value); setTvaError("");}}/>
      <div className="error">{tvaError}</div>

      
            <input type="hidden" id="create_dat" name="create_dat" value="" />
      
            <input className="save" type="submit" value="Save" />
          </form> 
    );
}

export default Editcompanies;
