import React, { useState, useEffect } from "react";
import axios from 'axios';

const DashboardLastCompaniesTable = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/companies/5")
    .then(res => res.data)
    .then(data => setCompanies(data))
    .catch(err => console.error(err));
}, []);

  return (
    <div className="dashboard_arrays">
    <div className="dashboard_main_all_arrays">
    <h2>Last Companies</h2>
    <section className="dashboard_main_all_arrays_overflow">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>TVA</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => (
              <tr key={company.id}>
                <td>{company.Name_company}</td>
                <td>{company.tva}</td>
                <td>{company.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
    </div>
  );
};

export default DashboardLastCompaniesTable;
