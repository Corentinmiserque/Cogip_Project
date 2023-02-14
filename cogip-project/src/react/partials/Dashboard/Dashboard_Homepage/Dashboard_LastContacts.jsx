import React, { useState, useEffect } from "react";
import axios from 'axios';

const DashboardLastContactsTable = () => {
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
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.Name_contact}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DashboardLastContactsTable;