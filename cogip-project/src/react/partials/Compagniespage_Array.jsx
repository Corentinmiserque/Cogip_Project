import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const CompaniesPageTable = () => {
const [companies, setCompanies] = useState([]);
const [sortType, setSortType] = useState({ key: '', order: '' });
const [searchTerm, setSearchTerm] = useState('');
const [currentPage, setCurrentPage] = useState(0);
const [perPage] = useState(10);
const [error, setError] = useState('');

useEffect(() => {
axios.get("https://quentin.hugoorickx.tech/companies")
.then(res => res.data)
.then(data => setCompanies(data))
.catch(err => setError(err.message));
}, []);

const sortedCompanies = useMemo(() => companies
.filter(company => (
company.Name_company.toLowerCase().includes(searchTerm.toLowerCase()) ||
company.tva.toLowerCase().includes(searchTerm.toLowerCase()) ||
company.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
company.Name_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
new Date(company.create_dat).toLocaleDateString().includes(searchTerm)
))
.sort((a, b) => {
if (sortType.key === 'Name_company') {
return sortType.order === 'asc' ? a.Name_company.localeCompare(b.Name_company) : b.Name_company.localeCompare(a.Name_company);
} else if (sortType.key === 'create_dat') {
return sortType.order === 'asc' ? new Date(a.create_dat) - new Date(b.create_dat) : new Date(b.create_dat) - new Date(a.create_dat);
}
return 0;
}), [companies, sortType, searchTerm]);

const handleSort = key => {
const order = sortType.key === key && sortType.order === 'asc' ? 'desc' : 'asc';
setSortType({ key, order });
};

const handlePageClick = (data) => {
setCurrentPage(data.selected);
};

const lastIndex = currentPage * perPage + perPage;
const firstIndex = currentPage * perPage;
const displayedCompanies = sortedCompanies.slice(firstIndex, lastIndex);

//render

return (
<div className="array arrays__lastCompanies">
<h2>All Companies</h2>
{error && <p className="error">{error}</p>}
<section className="overflowArray">
<input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
<table>
<thead>
<tr>
<th onClick={() => handleSort('Name_company')}>Name
                <button type="button" onClick={() => handleSort("create_dat")}>
                  ^
                </button>
              </th>
              <th>TVA</th>
              <th>Country</th>
<th>Type</th>
<th onClick={() => handleSort('create_dat')}>Created At
  <button type="button" onClick={() => handleSort("create_dat")}>
    ^
  </button>
</th>
</tr>
</thead>
<tbody>
  {displayedCompanies.map(company => (
    <tr key={company.id}>
      <td>{company.Name_company}</td>
      <td>{company.tva}</td>
      <td>{company.country}</td>
      <td>{company.Name_type}</td>
      <td>{new Date(company.create_dat).toLocaleDateString()}</td>
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
export default CompaniesPageTable;