
import Header from "../Compoments/Header";
import Header_Img from "../Compoments/Header_Img";
import InvoicesPageTable from "./Invoicespage_Array";
import Footer from "../Compoments/Footer";

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