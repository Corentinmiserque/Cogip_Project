import Editinvoices from "./Dashboard_InvoicesModifInvoices";
import Dashboard_Header from "../../Compoments/Dashboard_header";
import Dashboard_Herosection from "../../Compoments/Dashboard_herosection";

function Editinvoicespage() {
  return(<div className="dashboard">
  <header className="dashboardheader">
    <Dashboard_Header/>
  </header>
  <main className="dashboard_main">
    <Dashboard_Herosection/>
    <div>
    <Editinvoices />
    </div>
  </main>
  </div>)
}

export default Editinvoicespage;
