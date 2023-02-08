import React, { useState, useEffect } from "react";

function InvoicesTable() {

  // state, données

  const [invoices, setInvoices] = useState([]);

  //comportements

  useEffect(() => {
    fetch("http://localhost/invoices/5")
      .then(res => res.json())
      .then(data => setInvoices(data))
      .catch(err => console.error(err));
  }, []);

  //render

  return <table>
    <tr>
      <th>Invoice Number</th>
      <th>Date Due</th>
      <th>Company</th>
      <th>Created At</th>
    </tr>
    <tr>
      <td>{invoices.ref}</td>
      <td>{invoices.Date_due}</td>
      <td>{invoices.Name_company}</td>
      <td>{invoices.create_dat}</td>
    </tr>
  </table>
};

export default InvoicesTable;



