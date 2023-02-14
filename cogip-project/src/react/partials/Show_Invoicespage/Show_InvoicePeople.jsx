import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const ShowInvoicesContactsPeople = () => {
  const { id } = useParams();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get(`https://quentin.hugoorickx.tech/contactsbycompany/${id}`)
      .then((res) => setContacts(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <main>
          <h2>Contacts People</h2>
            {contacts.map(contact => (
              <p key={contact.id}>{contact.Name_contact}</p>
            ))}
    </main>
  );
};

export default ShowInvoicesContactsPeople;