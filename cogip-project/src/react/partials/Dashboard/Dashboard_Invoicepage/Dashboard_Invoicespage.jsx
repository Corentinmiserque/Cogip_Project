import DashboardInvoicesMain from "./Dashboard_InvoiceMain";
import DashboardInvoicesAllInvoices from "./Dashboard_Invoice_allInvoices";
import Dashboard_Header from "../../Compoments/Dashboard_header";
import Dashboard_Herosection from "../../Compoments/Dashboard_herosection";

function DashboardInvoicespage() {
  return (
    <div className="dashboard">
      <header className="dashboardheader">
        <Dashboard_Header/>
      </header>
      <main className="dashboard_main">
        <Dashboard_Herosection/>
        <div>
          <DashboardInvoicesMain />
          <DashboardInvoicesAllInvoices />
        </div>
      </main>
    </div>
  );
}

export default DashboardInvoicespage;
