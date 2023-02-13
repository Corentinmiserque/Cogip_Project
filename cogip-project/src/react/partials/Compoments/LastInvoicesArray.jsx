import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const LastInvoicesTable = (props) => {
  const { companyId } = props;
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get(`https://quentin.hugoorickx.tech/invoices/5?company_id=${companyId}`)
      .then(res => res.data)
      .then(data => setInvoices(data))
      .catch(err => console.error(err));
  }, [companyId]);

  return (
    <div className="array arrays__lastInvoices">
      <h2>Last invoices</h2>
      <section className="overflowArray">
        <table>
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Date Due</th>
              <th>Company</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.ref}</td>
                <td>{new Date(invoice.Date_due).toLocaleDateString()}</td>
                <td><Link to={`/companies/${invoice.company_id}`}>{invoice.Name_company}</Link></td>
                <td>{new Date(invoice.create_dat).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default LastInvoicesTable;


 


