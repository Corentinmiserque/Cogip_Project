
import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

const ContactsPageTable = () => {
const [contacts, setContacts] = useState([]);
const [sortType, setSortType] = useState({ key: '', order: '' });
const [searchTerm, setSearchTerm] = useState('');
const [currentPage, setCurrentPage] = useState(0);
const [perPage] = useState(10);
const [error, setError] = useState('');

useEffect(() => {
  axios.get("https://quentin.hugoorickx.tech/contacts")
    .then(res => setContacts(res.data))
    .catch(err => setError(err.message));
}, []);
const sortByName = (contacts, order) => {
  return contacts.sort((a, b) => {
    return order === 'asc' ? a.Name_contact.localeCompare(b.Name_company) : b.Name_company.localeCompare(a.Name_company);
  });
};

const sortByDate = (contacts, order) => {
  return contacts.sort((a, b) => {
    return order === 'asc' ? new Date(a.create_dat) - new Date(b.create_dat) : new Date(b.create_dat) - new Date(a.create_dat);
  });
};
const sortedContacts = useMemo(() => {
 let sorted = contacts
.filter(contact => (
contact.Name_contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
contact.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
contact.Name_company.toLowerCase().includes(searchTerm.toLowerCase()) ||
new Date(contact.create_dat).toLocaleDateString().includes(searchTerm)
));

    if (sortType.key === 'Name_contact') {
      sorted = sortByName(sorted, sortType.order);
    } else if (sortType.key === 'create_dat') {
      sorted = sortByDate(sorted, sortType.order);
    }

    return sorted;
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
  <div className="title">
  <h2 className="underline">All Contacts</h2>
  <input className="search" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search" />
  {error && <p className="error">{error}</p>}
  </div>
<section className="overflowArray">
  <table>
          <thead>
            <tr>
              <th>Name
              <div className="sortButtons">
                <button
                  className="tri"
                  onClick={() => {
                    handleSort("Name_contact");
                  }}>
                   {sortType.key === 'Name_contact' && sortType.order === 'asc' ? '▲' : '▼'}
                </button>
              </div>
              </th>
              <th>Phone</th>
              <th>Mail</th>
              <th>Companies</th>
              <th>Created At
              <div className="sortButtons">
                <button
                  className="tri"
                  onClick={() => {
                    handleSort("create_dat");
                  }}>
                   {sortType.key === 'create_dat' && sortType.order === 'asc' ? '▲' : '▼'}
                </button>
              </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedContacts.map(contact => (
              <tr key={contact.ids}>
                 <td><Link to={`/showcontact/${contact.id}`}>{contact.Name_contact}</Link></td>
                <td>{contact.phone}</td>
                <td><a href={`mailto:${contact.email}`}>{contact.email}</a></td>
                <td><Link to={`/showcompany/${contact.IDCOMPANY}`}>{contact.Name_company}</Link></td>
                <td>{new Date(contact.create_dat).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
</section>
<ReactPaginate
  previousLabel={"<"}
  nextLabel={">"}
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