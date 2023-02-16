import TotalCompanies from "./TotalCompanies";
import TotalContacts from "./TotalContacts";
import TotalInvoices from "./TotalInvoices";
import DashboardLastInvoicesTable from "./Dashboard_LastInvoice";
import DashboardLastCompaniesTable from "./Dashboard_LastCompanies";
import DashboardLastContactsTable from "./Dashboard_LastContacts";
import Dashboard_Header from "../../Compoments/Dashboard_header";
import { Link } from 'react-router-dom'
import "../../../../sass/partials/dashboard/dashboard.css"
function Dashboard_Homepage(){
    return (
        
<>
             <Dashboard_Header/>
            <main>
                <div className="statistics">
                    <h2>Statistics</h2>
                    <TotalCompanies/>
                    <TotalContacts/>
                    <TotalInvoices/>
                </div>
                <div className="dashboard_arrays">
                    <DashboardLastInvoicesTable/>
                    <DashboardLastCompaniesTable/>
                    <DashboardLastContactsTable/>
                </div>
            </main>
</>          
    );
}

export default Dashboard_Homepage;

