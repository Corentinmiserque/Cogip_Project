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
    <div className=" arrays__lastCompanies">
      <h2>Last companies</h2>
      <section className="overflowArray">
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
  );
};

export default DashboardLastCompaniesTable;
