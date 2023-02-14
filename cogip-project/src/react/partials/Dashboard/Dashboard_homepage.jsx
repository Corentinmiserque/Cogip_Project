import TotalCompanies from "./Dashboard_Homepage/TotalCompanies";
import TotalContacts from "./Dashboard_Homepage/TotalContacts";
import TotalInvoices from "./Dashboard_Homepage/TotalInvoices";
import DashboardLastInvoicesTable from "./Dashboard_Homepage/Dashboard_LastInvoice";
import DashboardLastCompaniesTable from "./Dashboard_Homepage/Dashboard_LastCompanies";
import DashboardLastContactsTable from "./Dashboard_Homepage/Dashboard_LastContacts";
import { Link } from 'react-router-dom'

function Dashboard_Homepage(){
    return (
        <>
        <div className="statistics">
            <h2>Statistics</h2>
          <TotalCompanies/>
          <TotalContacts/>
          <TotalInvoices/>
          <DashboardLastInvoicesTable/>
          <DashboardLastCompaniesTable/>
          <DashboardLastContactsTable/>
          <Link to="/dashboard_Invoicepage">Invoices</Link>
        </div>
        </>
    );
}

export default Dashboard_Homepage;

