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
      <div className=" show contactsDetails">
          {contacts.map(contact=> (
            <div className="info" key={contact.id}>
              
    
                <section className="contactpeople">
                <h2 className="underline">{contact.Name_contact}</h2>
                  <p>Name: {contact.Name_contact}</p>
                  <p>Phone: {contact.phone}</p>
                  <p>Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
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
