import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const LastContactsTable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/contacts/5")
      .then(res => res.data)
      .then(data => setContacts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="array arrays__lastInvoices">
      <h2>Last Contacts</h2>
      <section className="overflowArray">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Mail</th>
              <th>Companies</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td><Link to={`/contactpage/${contact.IDCOMPANY}`}>{contact.Name_contact}</Link></td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td><Link to={`/invoicepage/${contact.IDCOMPANY}`}>{contact.Name_company}</Link></td>
                <td>{new Date(contact.create_dat).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default LastContactsTable;

