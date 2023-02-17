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
    const data = { ref: ref, id_company: id_company, create_dat: create_dat, update_dat: update_dat };
    let url = 'https://quentin.hugoorickx.tech/invoices';
    let options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(url, options).then(() => {
      window.location.href = "/dashboard_Invoicepage";
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="ref">Reference:</label>
      <input type="text" id="ref" name="ref" /><br /><br />

      <label htmlFor="id_company">Company</label>
      <select id="id_company" name="id_company">
        {companies.map(company => (
          <option key={company.id} value={company.id}>{company.Name_company}</option>
        ))}
      </select><br /><br />

      <input type="hidden" id="create_dat" name="create_dat" value={`${date}`} />

      <label htmlFor="update_dat">Dates Due</label>
      <input type="date" name="update_dat" id="update_dat" /><br /><br />

      <input type="submit" value="Submit" />
    </form>
  
  );
}

export default DashboardInvoicesMain;
