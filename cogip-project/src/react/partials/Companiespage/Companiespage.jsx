import Header from "../Compoments/Header";
import Header_Img from "../Compoments/Header_Img";
import CompaniesPageTable from "./Companiespage_Array"
import Footer from "../Compoments/Footer";


function Companiespage(){

    return(
      <div>
        <header>
          <Header />
          <Header_Img />
        </header>
        <main>
        <div className="arrays">
          <section className="overflowArray">
          <CompaniesPageTable/>
          </section>
          </div>
        </main>
        <Footer/>
      </div>
    );

}
export default Companiespage