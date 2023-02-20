import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Editcompanies() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [tva, setTva] = useState("");
  const [typeId, setTypeId] = useState("1");
  const [nameError, setNameError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [tvaError, setTvaError] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
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
      setTvaError("Veuillez entrer une TVA.");
      formIsValid = false;
    } else {
      setTvaError("");
    }

    if (formIsValid) {
      const data = {
        Name: name,
        Type_id: typeId,
        Country: country,
        TVA: tva,
      };
      const confirmSubmit = window.confirm(
        "Êtes-vous sûr de vouloir modifier cette entreprise?"
      );

      if (confirmSubmit) {
        axios
          .patch(`https://quentin.hugoorickx.tech/company/${id}`, data)
          .then(() => {
            window.location.href = "/dashboard_Companiespage";
          })
          .catch((err) => console.log(err.message));
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
        <option value="2">Client</option>e
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





