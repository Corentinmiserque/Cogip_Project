import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link, useParams } from "react-router-dom";

const DashboardCompaniesAllCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [sortType, setSortType] = useState({ key: '', order: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(10);
  const [error, setError] = useState('');
  

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/companies")
      .then(res => setCompanies(res.data))
      .catch(err => setError(err.message));
  }, []);

  const sortByName = (companies, order) => {
    return companies.sort((a, b) => {
      return order === 'asc' ? a.Name_company.localeCompare(b.Name_company) : b.Name_company.localeCompare(a.Name_company);
    });
  };

  const sortByDate = (companies, order) => {
    return companies.sort((a, b) => {
      return order === 'asc' ? new Date(a.create_dat) - new Date(b.create_dat) : new Date(b.create_dat) - new Date(a.create_dat);
    });
  };

  const sortedCompanies = useMemo(() => {
    let sorted = companies
      .filter(company => (
        company.Name_company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.tva.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.Name_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        new Date(company.create_dat).toLocaleDateString().includes(searchTerm)
      ));

    if (sortType.key === 'Name_company') {
      sorted = sortByName(sorted, sortType.order);
    } else if (sortType.key === 'create_dat') {
      sorted = sortByDate(sorted, sortType.order);
    }

    return sorted;
  }, [companies, sortType, searchTerm]);

  const handleSort = key => {
    const order = sortType.key === key && sortType.order === 'asc' ? 'desc' : 'asc';
    setSortType({ key, order });
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDeleteCompanies = (id) => {
    axios.delete(`https://quentin.hugoorickx.tech/company/${id}`)
      .then(res => {
        const updatedCompanies = companies.filter(company => company.id !== id);
        setCompanies(updatedCompanies);
      })
      .catch(err => setError(err.message));
  };

  const lastIndex = currentPage * perPage + perPage;
  const firstIndex = currentPage * perPage;
  const displayedCompanies = sortedCompanies.slice(firstIndex, lastIndex);
;

  return (
    <div className="array arrays__lastCompanies">
      <div className="title">
        <h2 className="underline underlinecompanies">All Companies</h2>
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
      className= "tri"
      onClick={() => {
        handleSort("Name_company");
      }}>
      {sortType.key === 'Name_company' && sortType.order === 'asc' ? '▲' : '▼'}
    </button>
  </div>
</th>

<th>TVA</th>
<th>Country</th>
<th>Type</th>

<th>Created At
  <div className="sortButtons">
    <button
      className= "tri"
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
  {displayedCompanies.map(company => (
    <tr key={company.id}>
        <td><Link to={`/showcompany/${company.id}`}>{company.Name_company}</Link></td>
      <td>{company.tva}</td>
      <td>{company.country}</td>
      <td>{company.Name_type}</td>
      <td>{new Date(company.create_dat).toLocaleDateString()}</td>
      <td><button onClick={() => handleDeleteCompanies(company.id)}>delete</button></td>
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
  pageCount={Math.ceil(sortedCompanies.length / perPage)}
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
export default DashboardCompaniesAllCompanies;