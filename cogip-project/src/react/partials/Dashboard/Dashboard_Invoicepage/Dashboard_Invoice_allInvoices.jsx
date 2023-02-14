import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const DashboardInvoicesAllInvoices = () => {
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
    
    const handleDeleteInvoice = (invoiceId) => {
      axios.delete(`https://quentin.hugoorickx.tech/invoices/${invoiceId}`)
        .then(res => {
          const updatedInvoices = invoices.filter(invoice => invoice.id !== invoiceId);
          setInvoices(updatedInvoices);
        })
        .catch(err => setError(err.message));
    };
    
    const handleEditInvoice = (invoiceId, newRef, newCompany, newDate) => {
      axios.patch(`https://quentin.hugoorickx.tech/invoices/${invoiceId}`, {
        ref: newRef,
        Name_company: newCompany,
        Date_due: newDate
      })
      .then(res => {
        const updatedInvoices = invoices.map(invoice => {
          if (invoice.id === invoiceId) {
            return {
              ...invoice,
              ref: newRef,
              Name_company: newCompany,
              Date_due: newDate
            };
          } else {
            return invoice;
          }
        });
        setInvoices(updatedInvoices);
      })
      .catch(err => setError(err.message));
    };
    const lastIndex = currentPage * perPage + perPage;
    const firstIndex = currentPage * perPage;
    const displayedInvoices = sortedInvoices.slice(firstIndex, lastIndex);
    
    return (
    <div className="array arrays__lastContacts">
    <h2>All Invoices</h2>
    {error && <p className="error">{error}</p>}
    <section className="overflowArray">
    <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
    <table>
    <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Date Due
              <div className="sortButtons">
          <button onClick={() => handleSortInvoices('Date_due')}>^</button>
          </div>
              </th>
              <th>Company</th>
              <th>Created At</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
              <tbody>
                {displayedInvoices.map(invoice => (
                <tr key={invoice.id}>

                    <td>{invoice.ref}</td>
                    <td>{new Date(invoice.Date_due).toLocaleDateString()}</td>
                    <td>{invoice.Name_company}</td>
                    <td>{new Date(invoice.create_dat).toLocaleDateString()}</td>
                    <td><button onClick={() => handleDeleteInvoice(invoice.id)}>Delete</button></td>
                    <td><button onClick={() => handleEditInvoice(invoice.id)}>Edit</button></td>
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
  export default DashboardInvoicesAllInvoices;