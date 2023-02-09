/*import React, { useState, useEffect } from "react";
import axios from 'axios';


const CompaniesTable = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get("https://quentin.hugoorickx.tech/companies/5")
            .then(res => res.data)
            .then(data => setCompanies(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="array arrays__lastCompanies">
            <h2>Last companies</h2>
            <section className="overflowArray">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>TVA</th>
                            <th>Country</th>
                            <th>Type</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map(company => (
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
        </div>
    );
};

export default CompaniesTable;*/

import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const CompaniesTable = () => {
  const [companies, setCompanies] = useState([]);
  const [sortType, setSortType] = useState({ key: '', order: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    axios.get("https://quentin.hugoorickx.tech/companies")
      .then(res => res.data)
      .then(data => setCompanies(data))
      .catch(err => console.error(err));
  }, []);

  const handleSort = key => {
    const order = sortType.key === key && sortType.order === 'asc' ? 'desc' : 'asc';
    setSortType({ key, order });
  };

  const sortedCompanies = companies
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
        return sortType.order === 'asc' ? a.create_dat - b.create_dat : b.create_dat - a.create_dat;
      }
      return 0;
    });

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };
    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const currentCompanies = companies.slice(firstIndex, lastIndex);


  return (
    <div className="array arrays__lastCompanies">
      <h2>Last Companies</h2>
      <section className="overflowArray">
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('Name_company')}>Name
              <button type="button" onClick={() => handleSort("create_dat")}>
                  ^
                </button></th>
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
            {sortedCompanies.map(company => (
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
                pageCount={Math.ceil(companies.length / perPage)}
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

export default CompaniesTable;





