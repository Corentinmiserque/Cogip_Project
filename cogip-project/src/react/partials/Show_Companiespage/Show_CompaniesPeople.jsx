import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const ShowCompaniesContactsPeople = () => {
  const { id } = useParams();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get(`https://quentin.hugoorickx.tech/contactsbycompany/${id}`)
      .then((res) => setContacts(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
  <div className="peoples">
      <h2>Contact people</h2>
      <img className="blocknote" src="../public/img/blocknote.svg" alt="blocknote" />
        {contacts.map(contact => (
          <div className="people" key={contact.IDCOMPANY}>
            <img src="../public/img/profil-contact.avif" alt="profil-contact" />
            <p>{contact.Name_contact}</p>
          </div>
        ))}
      </div>
  );
};

export default ShowCompaniesContactsPeople;
