import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';

function DashboardInvoicesMain(){
    const [companies, setCompanies] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get("https://quentin.hugoorickx.tech/companies")
            .then(res => res.data)
            .then(data => setCompanies(data))
            .catch(err => setError(err.message));
    }, []);
    
    return (
        <form action="../../../../../../Formulaire/Form_PHP/formInvoices.php" method="post">
            <label htmlFor="ref">Reference:</label>
            <input type="text" id="ref" name="ref" /><br /><br />
    
            <label htmlFor="id_company">Company</label>
            <select id="id_company" name="id_company">
                {companies.map(company => (
                    <option key={company.id} value={company.id}>{company.Name_company}</option>
                ))}
            </select><br /><br />
    
            <input type="hidden" id="create_dat" name="create_dat" value="" />
    
            <label htmlFor="update_dat">Dates Due</label>
            <input type="date" name="update_dat" id="update_dat" /><br /><br />
    
            <input type="submit" value="Submit" />
        </form> 
    );
    
}

export default DashboardInvoicesMain;
