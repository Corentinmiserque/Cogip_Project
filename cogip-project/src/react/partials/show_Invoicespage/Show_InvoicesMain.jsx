import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const ShowInvoicesMain = () => {
  const { id } = useParams();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get(`https://quentin.hugoorickx.tech/invoice/${id}`)
      .then((res) => setInvoices(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const filteredInvoices = invoices.filter(invoice => invoice.id === id);


  return (
    <main>
      <div className="show invoice2">
        {filteredInvoices.map(invoice => (
          <div className="info" key={invoice.id}>
            <section className="contactpeople">
              <h2 className="underline">{invoice.ref}</h2>
              <p>Invoice Number: {invoice.ref}</p>
              <p>Date Due: {new Date(invoice.Date_due).toLocaleDateString()}</p>
              <p>Company: {invoice.Name_company}</p>
              <p>Created At: {new Date(invoice.create_dat).toLocaleDateString()}</p>
            </section>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ShowInvoicesMain;
