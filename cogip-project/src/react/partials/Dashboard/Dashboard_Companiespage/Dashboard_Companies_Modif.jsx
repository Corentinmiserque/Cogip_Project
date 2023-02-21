import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Editcompanies() {
  const [date, setDate] = useState(new Date());
  const [typeId, setTypeId] = useState("1");
  const [nameError, setNameError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [tvaError, setTvaError] = useState("");
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const country = formData.get("country");
    const create_dat = date.toISOString();
    const tva = formData.get("tva");
    // Validation des champs de formulaire
    if (!name) {
      setNameError("Veuillez entrer un nom.");
      formIsValid = false;
    } else {
      setNameError("");
    }
   
    if (!country) {
      setCountryError("Veuillez entrer un pays.");
      formIsValid = false;
    } else {
      setCountryError("");
    }
    if (!tva) {
      setTvaError("Veuillez entrer un numéro de TVA.");
      formIsValid = false;
    } else {
      setTvaError("");
    }
    if (!/^[A-Za-z]{2}[0-9]{10}$/.test(tva)) {
      setTvaError("Le numéro de TVA doit contenir 2 lettres suivies de 10 chiffres.");
      return;
    }

    if (formIsValid) {
      const data = { 
        name: name, 
        type_id: typeId, 
        country: country, 
        tva: tva, 
        create_dat: create_dat 
      };
      const confirmSubmit = window.confirm(
        "Êtes-vous sûr de vouloir modifier cette entreprise?"
      );

      if (confirmSubmit) {
        let url = `https://quentin.hugoorickx.tech/company/${id}`;
        let options = {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(url, options).then(() => {
          window.location.href = "/dashboard_Companiespage";
        });
      }
    }
  };
    return (
      <form className="dashboard_main_form" onSubmit={handleSubmit}>
      <p>Edit Company</p>
      <label htmlFor="name"></label>
      <input type="text" id="name" name="name" placeholder="Name" />
      <div className="error">{nameError}</div>

      <label htmlFor="type_id"></label>
      <select id="type_id" name="type_id">
        <option value="1">Supplier</option>
        <option value="2">Client</option>
      </select>

      <label htmlFor="country"></label>
      <input type="text" id="country" name="country" placeholder="Country" />
      <div className="error">{countryError}</div>

      <label htmlFor="tva"></label>
      <input type="text" id="tva" name="tva" placeholder="TVA"/>
      <div className="error">{tvaError}</div>

      <input type="hidden" id="create_dat" name="create_dat" value="" />
    
          <input className="save" type="submit" value="Save" />
        </form> 
    );
}

export default Editcompanies;





