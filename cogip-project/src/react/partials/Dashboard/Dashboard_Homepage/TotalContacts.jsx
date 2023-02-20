import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const TotalContacts = () => {
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("https://quentin.hugoorickx.tech/contacts");
        const data = res.data;
        setContacts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchContacts();
  }, []);

  const totalContacts = contacts.length;

  return (
    <div className="totalcontacts">
      <p>{totalContacts}</p>
      <p>Contacts</p>
    </div>
  );
};

export default TotalContacts;
