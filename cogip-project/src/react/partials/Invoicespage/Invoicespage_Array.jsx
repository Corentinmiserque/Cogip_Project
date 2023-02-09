import React, { useState, useEffect } from "react";
import axios from 'axios';

const InvoicesPageTable = () => {
  const [invoices, setInvoices] = useState([]);
  const [sortType, setSortType] = useState("asc");

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/invoices")
      .then(res => res.data)
      .then(data => setInvoices(data))
      .catch(err => console.error(err));
  }, []);

  const sortInvoices = (property) => {
    const sortedInvoices = [...invoices].sort((a, b) => {
      let result;
      if (property === 'Date_due') {
        result = new Date(a[property]) - new Date(b[property]);
      } else {
        result = a[property].localeCompare(b[property]);
      }
      return sortType === "asc" ? result : result * -1;
    });
    setInvoices(sortedInvoices);
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  return (
    <div className="array arrays__lastInvoices">
      <h2>Last invoices</h2>
      <section className="overflowArray">
        <table>
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Date Due
              <div className="sortButtons">
          <button onClick={() => sortInvoices('Date_due')}>^</button>
          </div>
              </th>
              <th>Company</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.ref}</td>
                <td>{new Date(invoice.Date_due).toLocaleDateString()}</td>
                <td>{invoice.Name_company}</td>
                <td>{new Date(invoice.create_dat).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default InvoicesPageTable;
