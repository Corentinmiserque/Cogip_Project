import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const totalCompanies= () => {
  const [companies, setCompanies] = useState([]);
  
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get("https://quentin.hugoorickx.tech/companies");
        const data = res.data;
        setCompanies(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCompanies();
  }, []);

  const totalCompanies = companies.length;

  return (
    <div className="totalcompanies">
      <p>{totalCompanies}</p>
      <p>Companies</p>

    </div>
  );
};

export default totalCompanies
