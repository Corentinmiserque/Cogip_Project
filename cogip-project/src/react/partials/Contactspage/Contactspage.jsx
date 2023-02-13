
import Header from "../Compoments/Header";
import Header_Img from "../Compoments/Header_Img";
import ContactsPageTable from "./Contactspage_Array";
import Footer from "../Compoments/Footer";


function Contactspage(){

    return(
      <div>
        <header>
          <Header />
          <Header_Img />
        </header>
        <main>
        <div className="arrays">
          <section className="overflowArray">
          <ContactsPageTable/>
          </section>
          </div>
        </main>
        <Footer/>
      </div>
    );

}
export default Contactspage