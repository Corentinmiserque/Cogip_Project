
import Header from "../Header";
import Header_Img from "../Header_Img";
import CompaniesPageTable from "./Companiespage_Array"
import Footer from "../footer";


function Invoicespage(){

    return(
      <div>
        <header>
          <Header />
          <Header_Img />
        </header>
        <main>
        <div className="arrays">
          <section className="overflowArray">
          <InvoicesPageTable/>
          </section>
          </div>
        </main>
        <Footer/>
      </div>
    );

}
export default Invoicespage