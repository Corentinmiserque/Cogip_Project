import TotalCompanies from "./TotalCompanies";
import TotalContacts from "./TotalContacts";
import TotalInvoices from "./TotalInvoices";
import DashboardLastInvoicesTable from "./Dashboard_LastInvoice";
import DashboardLastCompaniesTable from "./Dashboard_LastCompanies";
import DashboardLastContactsTable from "./Dashboard_LastContacts";
import Dashboard_Header from "../../Compoments/Dashboard_header";
import Dashboard_Herosection from "../../Compoments/Dashboard_herosection";
import { Link } from 'react-router-dom';
import "../../../../sass/partials/dashboard/dashboard.css";

function Dashboard_Homepage() {
  return (
    <div className="dashboard">
      <header className="dashboardheader">
        <Dashboard_Header/>
      </header>
      <main className="dashboard_main">
        <Dashboard_Herosection/>
        <div className="dashboard_main_all">
          <div className="dashboard_main_all_statistics">
            <h2>Statistics</h2>
            <section className="dashboard_main_all_statistics_statistic">
              <TotalInvoices/>
              <TotalCompanies/>
              <TotalContacts/> 
            </section>
          </div>
          <DashboardLastInvoicesTable/>
          <DashboardLastCompaniesTable/>
          <DashboardLastContactsTable/>
        </div>
      </main>
    </div> 
  );
}

export default Dashboard_Homepage;


