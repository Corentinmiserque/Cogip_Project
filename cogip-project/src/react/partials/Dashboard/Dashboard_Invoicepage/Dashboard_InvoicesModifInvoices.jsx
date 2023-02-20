import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

function Editinvoices (){
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
      const ref = formData.get("ref");
      const id_company = formData.get("id_company");
      const update_dat = formData.get("update_dat");
      const create_dat = date.toISOString();
      
      // Vérifie que tous les champs sont remplis avant de soumettre le formulaire
      if (!ref || !id_company || !update_dat) {
        alert("Please fill in all fields.");
        return;
      }
      
      // Demande une confirmation avant de soumettre le formulaire
      const confirmSubmit = window.confirm("Are you sure you want to edit this invoice?");
      
      if (confirmSubmit) {
        const data = { ref: ref, id_company: id_company, create_dat: create_dat, update_dat: update_dat };
        let url = `https://quentin.hugoorickx.tech/invoice/${id}`;
        let options = {
          method: 'PATCH',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        fetch(url, options).then(() => {
          window.location.href = "/dashboard_Invoicepage";
        });
      }
    };
    
    return (
      
     <form className="dashboard_main_form" onSubmit={handleSubmit}>
      <p>Edit Invoice</p>
        <label htmlFor="ref"></label>
        <input type="text" id="ref" name="ref" placeholder="Référence"/>
  
        <label htmlFor="id_company"></label>
        <select id="id_company" name="id_company">
          {companies.map(company => (
            <option key={company.id} value={company.id}>{company.Name_company}</option>
          ))}
        </select>
  
        <label htmlFor="update_dat"></label>
        <input type="date" name="update_dat" id="update_dat" />
  
        <input className="save" type="submit" value="Save" />
      </form>
    
    );
}

export default Editinvoices;





