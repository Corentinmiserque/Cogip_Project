import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";


const ContactsDetails = () => {
  const {id} = useParams();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get(`https://quentin.hugoorickx.tech/contact/${id}`)
      .then((res) => setContacts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
        <div className="contactsDetails">
          {contacts.map(contact=> (
            <div key={contact.id}>
              <h2>{contact.Name_contact}</h2>
              <section className="contactpeople">
                <p>Name: {contact.Name_contact}</p>
                <p>Phone: {contact.phone}</p>
                <p>Mail: {contact.email}</p>
                <p>Company: {contact.Name_company}</p>
              </section>
              <section className="profil-img">
                <img src="../public/img/profil-contact.png" alt="profil-img" />
              </section>
            </div>
          ))}
    </div>
  );
};

export default ContactsDetails;
