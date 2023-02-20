import EditContacts from "./Dashboard_Contacts_Modif";
import Dashboard_Header from "../../Compoments/Dashboard_header";
import Dashboard_Herosection from "../../Compoments/Dashboard_herosection";

function EditCompaniespage() {
  return(<div className="dashboard">
  <header className="dashboardheader">
    <Dashboard_Header/>
  </header>
  <main className="dashboard_main">
    <Dashboard_Herosection/>
    <div>
    <EditContacts />
    </div>
  </main>
  </div>)
}

export default EditCompaniespage