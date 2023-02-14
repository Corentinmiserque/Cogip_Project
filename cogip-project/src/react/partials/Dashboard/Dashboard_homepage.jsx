import TotalCompanies from "./Dashboard_Homepage/TotalCompanies";
import TotalContacts from "./Dashboard_Homepage/TotalContacts";
import TotalInvoices from "./Dashboard_Homepage/TotalInvoices";

function Dashboard_Homepage(){
    return (
        <>
        <div className="statistics">
            <h2>Statistics</h2>
          <TotalCompanies/>
          <TotalContacts/>
          <TotalInvoices/>
        </div>
        </>
    );
}

export default Dashboard_Homepage;

