import DashboardContactsMain from "./Dashboard_Contacts_Main";
import DashboardContactsAllContacts from "./Dashboard_Contacts_allcontacts";
import Dashboard_Header from "../../Compoments/Dashboard_header";
import Dashboard_Herosection from "../../Compoments/Dashboard_herosection";

function DashboardContactspage() {

  return (
     <div className="dashboard">
     <header className="dashboardheader">
       <Dashboard_Header/>
     </header>
     <main className="dashboard_main">
       <Dashboard_Herosection/>
       <div>
       <DashboardContactsMain/>
       <DashboardContactsAllContacts/>
   
       </div>
     </main>
   </div>
  );
}

export default DashboardContactspage;