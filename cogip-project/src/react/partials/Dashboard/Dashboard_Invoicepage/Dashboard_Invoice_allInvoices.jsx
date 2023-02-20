import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link, useParams } from "react-router-dom";

const InvoicesPageTable = () => {
  const [invoices, setInvoices] = useState([]);
  const [sortType, setSortType] = useState({ key: '', order: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(10);
  const [error, setError] = useState('');

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

  const handleDeleteInvoice = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this invoice?");
  
    if (confirmDelete) {
      axios.delete(`https://quentin.hugoorickx.tech/invoice/${id}`)
        .then(res => {
          const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
          setInvoices(updatedInvoices);
        })
        .catch(err => setError(err.message));
    }
  };

  const lastIndex = currentPage * perPage + perPage;
  const firstIndex = currentPage * perPage;
  const displayedInvoices = sortedInvoices.slice(firstIndex, lastIndex);

  return (
    <div className="dashboard_main_allarrays">
      <div className="title">
        <h2 className="underline">All Invoices</h2>
        <input className="search" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search" />
        {error && <p className="error">{error}</p>}
      </div>
      <section className="dashboard_main_allarrays_overflow">
        <table>
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>
              Date Due
              <button
                  className="tri"
                  onClick={() => {
                    handleSortInvoices("Date_due");
                  }}>
                   {sortType.key === 'Date_due' && sortType.order === 'asc' ? '▲' : '▼'}
                </button>
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
                <td><button className="delete" onClick={() => handleDeleteInvoice(invoice.id)}></button></td>
                <td><Link to={`/editinvoicepage/${invoice.id}`}><button className="edit"></button></Link></td>
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