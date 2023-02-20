import DashboardCompaniesMain from "./Dashboard_CompaniesMain";
import DashboardCompaniesAllCompanies  from "./Dashboard_Companies_Allcompanies";
import Dashboard_Header from "../../Compoments/Dashboard_header";
import Dashboard_Herosection from "../../Compoments/Dashboard_herosection";
function DashboardCompaniespage() {

  return (
     <div className="dashboard">
     <header className="dashboardheader">
       <Dashboard_Header/>
     </header>
     <main className="dashboard_main">
       <Dashboard_Herosection/>
       <div>
       <DashboardCompaniesMain/>
        <DashboardCompaniesAllCompanies/>
       </div>
     </main>
   </div>
  );
}

export default DashboardCompaniespage;
