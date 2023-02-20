import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

function Editcompanies (){
    const [companies, setCompanies] = useState([]);
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
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const type_id = formData.get("type_id");
    const country = formData.get("country");
    const tva = formData.get("tva");
    const create_dat = date.toISOString();
    const data = { 
      name: name, 
      type_id: type_id, 
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
        <div className="form-edit">
     <form onSubmit={handleSubmit} id="form" method="post">
      <label htmlFor="name">Nom:</label>
      <input type="text" id="name" name="name" /><br /><br />

      <label htmlFor="type_id">Type:</label>
        <select id="type_id" name="type_id" defaultValue="1">
        <option value="1">Supplier</option>
        <option value="2">Client</option>
        </select><br /><br />

      <label htmlFor="country">Pays:</label>
      <input type="text" id="country" name="country" /><br /><br />

      <label htmlFor="tva">TVA:</label>
      <input type="text" id="tva" name="tva" /><br /><br />

      <input type="hidden" id="create_dat" name="create_dat" value="" />

      <input type="submit" value="Submit" />
    </form> 
        </div>
    );
}

export default Editcompanies;