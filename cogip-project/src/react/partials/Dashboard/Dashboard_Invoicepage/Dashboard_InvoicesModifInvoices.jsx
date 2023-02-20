import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Editinvoices() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date());
  const [refError, setRefError] = useState("");
  const [companyIdError, setCompanyIdError] = useState("");
  const [dateError, setDateError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://quentin.hugoorickx.tech/companies")
      .then((res) => setCompanies(res.data))
      .catch((err) => setError(err.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    const form = event.target;
    const formData = new FormData(form);
    const ref = formData.get("ref");
    const id_company = formData.get("id_company");
    const create_dat = date.toISOString();
    const update_dat = formData.get("update_dat");

    if (!ref) {
      setRefError("La référence ne peut pas être vide.");
      formIsValid = false;
    } else {
      setRefError("");
    }

    if (!id_company) {
      setCompanyIdError("La société ne peut pas être vide.");
      formIsValid = false;
    } else {
      setCompanyIdError("");
    }

    if (!update_dat) {
      setDateError("La date ne peut pas être vide.");
      formIsValid = false;
    } else {
      setDateError("");
    }

    if (formIsValid) {
      const data = {
        ref: ref,
        id_company: id_company,
        create_dat: create_dat,
        update_dat: update_dat,
      };

      // Demande une confirmation avant de soumettre le formulaire
      const confirmSubmit = window.confirm(
        "Are you sure you want to edit this invoice?"
      );

      if (confirmSubmit) {
        let url = `https://quentin.hugoorickx.tech/invoice/${id}`;
        let options = {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(url, options).then(() => {
          window.location.href = "/dashboard_Invoicepage";
        });
      }
    }
  };
    return (
      <form className="dashboard_main_form" onSubmit={handleSubmit} id="form" method="post">
        <p>Edit Invoice</p>
        <label htmlFor="ref"></label>
        <input type="text" id="ref" name="ref" placeholder="Référence" />
        <div className="error">{refError}</div>
  
   
        <label htmlFor="id_company"></label>
        <select id="id_company" name="id_company">
          {companies.map(company => (
            <option key={company.id} value={company.id}>{company.Name_company}</option>
          ))}
        </select>
        <div className="error">{companyIdError}</div>
  
        <input type="hidden" id="create_dat" name="create_dat" value={`${date}`} />
  
        <label htmlFor="update_dat"></label>
        <input type="date" name="update_dat" id="update_dat" />
        <div className="error">{dateError}</div>
  
        <input className="save" type="submit" value="Save" />
      </form>
    );
}

export default Editinvoices;





