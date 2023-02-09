/*import React, { useState, useEffect } from "react";
import axios from 'axios';

const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/contacts/5")
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
                <td>{contact.Name_contact}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>{contact.Name_company}</td>
                <td>{new Date(contact.create_dat).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ContactsTable;*/

import React, { useState, useEffect } from "react";
import axios from 'axios';

const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/contacts/5")
      .then(res => res.data)
      .then(data => setContacts(data))
      .catch(err => console.error(err));
  }, []);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOrder("asc");
      setSortField(field);
    }
  };

  const sortedContacts = [...contacts].sort((a, b) => {
    let result = 0;
    if (sortField === "Name_contact") {
      result = a.Name_contact.localeCompare(b.Name_contact);
    } else if (sortField === "create_dat") {
      result = a.create_dat - b.create_dat;
    }

    if (sortOrder === "desc") {
      result = result * -1;
    }

    return result;
  });

  return (
    <div className="array arrays__lastInvoices">
      <h2>Last Contacts</h2>
      <section className="overflowArray">
        <table>
          <thead>
            <tr>
              <th>Name
                <button type="button" onClick={() => handleSort("Name_contact")}>
                  ^
                </button>
              </th>
              <th>Phone</th>
              <th>Mail</th>
              <th>Companies</th>
              <th>Created At
                <button type="button" onClick={() => handleSort("create_dat")}>
                  ^
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedContacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.Name_contact}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>{contact.Name_company}</td>
                <td>{new Date(contact.create_dat).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ContactsTable;