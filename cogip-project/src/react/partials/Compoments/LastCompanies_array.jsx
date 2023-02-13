import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const LastCompaniesTable = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/companies/5")
      .then(res => setCompanies(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="array arrays__lastCompanies">
      <h2>Last companies</h2>
      <section className="overflowArray">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>TVA</th>
              <th>Country</th>
              <th>Type</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => (
              <tr key={company.id}>
                <td><Link to={`/company/${company.IDCOMPANY}`}>{company.Name_company}</Link></td>
                <td>{company.tva}</td>
                <td>{company.country}</td>
                <td>{company.Name_type}</td>
                <td>{new Date(company.create_dat).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default LastCompaniesTable;









