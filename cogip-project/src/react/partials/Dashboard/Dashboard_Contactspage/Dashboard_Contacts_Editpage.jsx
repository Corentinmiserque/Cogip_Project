import Dashboard_Contacts_Modif from "./Dashboard_Contacts_Modif";
import Dashboard_Header from "../../Compoments/Dashboard_header";
import Dashboard_Herosection from "../../Compoments/Dashboard_herosection";

function EditContactspage() {
  return(<div className="dashboard">
  <header className="dashboardheader">
    <Dashboard_Header/>
  </header>
  <main className="dashboard_main">
    <Dashboard_Herosection/>
    <div>
    <Dashboard_Contacts_Modif />
    </div>
  </main>
  </div>)
}

export default EditContactspage