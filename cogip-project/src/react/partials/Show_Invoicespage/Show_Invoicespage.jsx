import React, { useState, useEffect } from "react";
import axios from 'axios';

const CompanyDetails = ({ id }) => {
  const [company, setCompany] = useState({});

  useEffect(() => {
    axios.get(`https://quentin.hugoorickx.tech/companies/company/${id}`)
      .then(res => res.data)
      .then(data => setCompany(data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="company-details">
      <h2>{company.Name_company}</h2>
      <section>
        <p><b>Name:</b> {company.Name_company}</p>
        <p><b>TVA Number:</b> {company.tva}</p>
        <p><b>Country:</b> {company.country}</p>
        <p><b>Type:</b> {company.Name_type}</p>
      </section>
    </div>
  );
};

export default CompanyDetails;








