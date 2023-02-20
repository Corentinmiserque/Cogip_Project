import React, { useState, useEffect } from "react";
import axios from 'axios';

function DashboardInvoicesMain() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date());

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
    
    // Vérification des champs avant de soumettre le formulaire
    if (!ref || !id_company || !update_dat) {
      alert("Please fill in all fields.");
      return;
    }
    
    const data = { ref: ref, id_company: id_company, create_dat: create_dat, update_dat: update_dat };
    let url = 'https://quentin.hugoorickx.tech/invoices';
    let options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios.post('https://quentin.hugoorickx.tech/invoices', data)
    .then(() => {
      window.location.href = "/dashboard_Invoicepage";
    })
    .catch(err => console.error(err));
  };

  return (
    <form className="dashboard_main_form" onSubmit={handleSubmit}id="form" method="post">
      <p>New Invoice</p>
      <label htmlFor="ref"></label>
      <input type="text" id="ref" name="ref" placeholder="Référence" />

      <label htmlFor="id_company"></label>
      <select id="id_company" name="id_company">
        {companies.map(company => (
          <option key={company.id} value={company.id}>{company.Name_company}</option>
        ))}
      </select>

      <input type="hidden" id="create_dat" name="create_dat" value={`${date}`} />

      <label htmlFor="update_dat"></label>
      <input type="date" name="update_dat" id="update_dat" />

      <input className="save" type="submit" value="Save" />
    </form>
  
  );
}

export default DashboardInvoicesMain;
