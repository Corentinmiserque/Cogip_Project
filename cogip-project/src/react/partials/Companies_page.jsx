import React, { useState, useEffect } from "react";
import axios from 'axios';
import InvoicesTable from './InvoicesTable';

const CompanyDetails = (props) => {
  const [company, setCompany] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8001/company/${props.match.params.id}`)
      .then(res => res.data)
      .then(data => setCompany(data[0]))
      .catch(err => console.error(err));
  }, [props.match.params.id]);

  return (
    <div>
      <h2>Company Details</h2>
      <section>
        <div className="companyDetails">
          <h3>{company.Name_company}</h3>
          <p>TVA: {company.tva}</p>
          <p>Country: {company.country}</p>
          <p>Type: {company.Name_type}</p>
        </div>
        <InvoicesTable companyId={props.match.params.id} />
      </section>
    </div>
  );
};

export default CompanyDetails;
