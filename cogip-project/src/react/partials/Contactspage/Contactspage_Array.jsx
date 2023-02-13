
import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const ContactsPageTable = () => {
const [contacts, setContacts] = useState([]);
const [sortType, setSortType] = useState({ key: '', order: '' });
const [searchTerm, setSearchTerm] = useState('');
const [currentPage, setCurrentPage] = useState(0);
const [perPage] = useState(10);
const [error, setError] = useState('');

useEffect(() => {
axios.get("https://quentin.hugoorickx.tech/contacts")
.then(res => res.data)
.then(data => setContacts(data))
.catch(err => setError(err.message));
}, []);

const sortedContacts = useMemo(() => {
const { key: sortField, order: sortOrder } = sortType;
return contacts
.filter(contact => (
contact.Name_contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
contact.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
contact.Name_company.toLowerCase().includes(searchTerm.toLowerCase()) ||
new Date(contact.create_dat).toLocaleDateString().includes(searchTerm)
))
.sort((a, b) => {
let result = 0;
if (sortField === "Name_contact") {
  result = a.Name_contact.localeCompare(b.Name_contact);
} else if (sortField === "phone") {
  result = a.phone.localeCompare(b.phone);
} else if (sortField === "email") {
  result = a.email.localeCompare(b.email);
} else if (sortField === "Name_company") {
  result = a.Name_company.localeCompare(b.Name_company);
} else if (sortField === "create_dat") {
  result = a.create_dat - b.create_dat;
}


if (sortOrder === "desc") {
  result = result * -1;
}

return result;
});

}, [contacts, sortType, searchTerm]);

const handleSort = key => {
const order = sortType.key === key && sortType.order === 'asc' ? 'desc' : 'asc';
setSortType({ key, order });
};

const handlePageClick = (data) => {
setCurrentPage(data.selected);
};

const lastIndex = currentPage * perPage + perPage;
const firstIndex = currentPage * perPage;
const displayedContacts = sortedContacts.slice(firstIndex, lastIndex);

//render

return (
<div className="array arrays__lastContacts">
<h2>All Contacts</h2>
{error && <p className="error">{error}</p>}
<section className="overflowArray">
<input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
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
                <button type="button" onClick={() => handleSort("create_dat")}>^</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedContacts.map(contact => (
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
<ReactPaginate
  previousLabel={"previous"}
  nextLabel={"next"}
  breakLabel={"..."}
  breakClassName={"break-me"}
  pageCount={Math.ceil(sortedContacts.length / perPage)}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={handlePageClick}
  containerClassName={"pagination"}
  subContainerClassName={"pages pagination"}
  activeClassName={"active"}
/>
</div>
);
};
export default ContactsPageTable;