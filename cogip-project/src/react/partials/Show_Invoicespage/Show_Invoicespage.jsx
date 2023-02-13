import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const CompanyDetails = () => {
    const {id} = useParams();
   const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get(`https://quentin.hugoorickx.tech/company/${id}`)
      .then((res) => setCompanies(res.data))
      .catch(err => console.error(err));
  }, []);
console.log(companies)
  return (
    <div className="company-details">
        {companies.map(company => (
      <div>
      <h2>{company.Name_company}</h2>
      <section>
        <p><b>Name:</b> {company.Name_company}</p>
        <p><b>TVA Number:</b> {company.tva}</p>
        <p><b>Country:</b> {company.country}</p>
        <p><b>Type:</b> {company.Name_type}</p>
      </section>
      </div>
         ))}
    </div>
  );
};

export default CompanyDetails;









