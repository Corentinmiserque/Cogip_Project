import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const InvoicesPageTable = () => {
  const [invoices, setInvoices] = useState([]);
  const [sortType, setSortType] = useState({ key: '', order: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(10);
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/invoices")
      .then(res => res.data)
      .then(data => setInvoices(data))
      .catch(err => setError(err.message));
  }, []);

  const sortedInvoices = useMemo(() => {
    const { key: sortField, order: sortOrder } = sortType;
    return invoices
      .filter(invoice => (
        invoice.ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.Date_due.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.Name_company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        new Date(invoice.create_dat).toLocaleDateString().includes(searchTerm)
      ))
      .sort((a, b) => {
        let result = 0;
        if (sortField === "Date_due") {
          result = new Date(a.Date_due) - new Date(b.Date_due);
        }

        if (sortOrder === "desc") {
          result = result * -1;
        }

        return result;
      });

  }, [invoices, sortType, searchTerm]);

  const handleSortInvoices = key => {
    const order = sortType.key === key && sortType.order === 'asc' ? 'desc' : 'asc';
    setSortType({ key, order });
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const lastIndex = currentPage * perPage + perPage;
  const firstIndex = currentPage * perPage;
  const displayedInvoices = sortedInvoices.slice(firstIndex, lastIndex);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="array arrays__lastContacts">
      <div className="title">
      <h2 className="underline">All Invoices</h2>
      <input className="search" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search invoices" />
      </div>
      {error && <p className="error">{error}</p>}
      <section className="overflowArray">
        <table>
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>
              Date Due
              <div className="sortButtons">
                <button
                  className={`tri ${isOpen ? "activetri" : ""}`}
                  onClick={() => {
                    handleClick();
                    handleSortInvoices('Date_due');
                  }}>
                  ▲
                </button>
              </div>
              </th>
              <th>Company</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {displayedInvoices.map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.ref}</td>
                <td>{new Date(invoice.Date_due).toLocaleDateString()}</td>
                <td>{invoice.Name_company}</td>
                <td>{new Date(invoice.create_dat).toLocaleDateString()}</td>
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
    pageCount={Math.ceil(sortedInvoices.length / perPage)}
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
  export default InvoicesPageTable;