import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

  const DashboardLastInvoicesTable = () => {
    const [invoices, setInvoices] = useState([]);
  
    useEffect(() => {
      axios.get("https://quentin.hugoorickx.tech/invoices/5")
      .then(res => res.data)
      .then(data => setInvoices(data))
      .catch(err => setError(err.message));
      }, []);
      

  return (
    <div className="dashboard_arrays">
    <div className="dashboard_main_all_arrays">
      <h2>Last invoices</h2>
      <section className="dashboard_main_all_arrays_overflow">
        <table>
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Date</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.ref}</td>
                <td>{new Date(invoice.create_dat).toLocaleDateString()}</td>
                <td>{invoice.Name_company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
    </div>
  );
};


export default DashboardLastInvoicesTable;