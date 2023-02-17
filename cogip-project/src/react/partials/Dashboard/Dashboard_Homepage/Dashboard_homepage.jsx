import TotalCompanies from "./TotalCompanies";
import TotalContacts from "./TotalContacts";
import TotalInvoices from "./TotalInvoices";
import DashboardLastInvoicesTable from "./Dashboard_LastInvoice";
import DashboardLastCompaniesTable from "./Dashboard_LastCompanies";
import DashboardLastContactsTable from "./Dashboard_LastContacts";
import Dashboard_Header from "../../Compoments/Dashboard_header";
import Dashboard_Herosection from "../../Compoments/Dashboars_herosection";
import { Link } from 'react-router-dom'
import "../../../../sass/partials/dashboard/dashboard.css"
function Dashboard_Homepage(){
    return (
        
<>
    <header className="dashboardheader">
        <Dashboard_Header/>
        <Dashboard_Herosection/>
    </header>
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

