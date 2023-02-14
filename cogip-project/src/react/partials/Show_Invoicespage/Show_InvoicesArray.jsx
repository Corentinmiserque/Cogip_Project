import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const ShowInvoicesArray = () => {
const { id } = useParams();
const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get(`https://quentin.hugoorickx.tech/company/${id}`)
    .then((res) => setInvoices(res.data))
    .catch(err => console.error(err));
}, []);

  return (
    <main>
    <div className="arrays">
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
              <td>{invoice.ref || '-'}</td>
              <td>{invoice.Date_due ? new Date(invoice.Date_due).toLocaleDateString() : '-'}</td>
              <td>{invoice.Name_company || '-'}</td>
              <td>{invoice.create_dat ? new Date(invoice.create_dat).toLocaleDateString() : '-'}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </section>
    </div>
    </div>
    </main>
  );
};

export default ShowInvoicesArray;

