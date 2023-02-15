import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

  const LastInvoicesTable = () => {
    const [invoices, setInvoices] = useState([]);
  
    useEffect(() => {
      axios.get("https://quentin.hugoorickx.tech/invoices/5")
      .then(res => res.data)
      .then(data => setInvoices(data))
      .catch(err => setError(err.message));
      }, []);
      

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
                <td><Link to={`/invoicepage/${invoice.IDCOMPANY}`}>{invoice.Name_company}</Link></td>
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


 


