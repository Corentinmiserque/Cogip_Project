import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const TotalInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await axios.get("https://quentin.hugoorickx.tech/invoices");
        const data = res.data;
        setInvoices(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchInvoices();
  }, []);

  const totalInvoices = invoices.length;

  return (
    <div className="totalinvoices">
      <p>{totalInvoices}</p>
      <p>Invoices</p>
    </div>
  );
};

export default TotalInvoices;
