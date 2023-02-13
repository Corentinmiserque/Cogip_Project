
import Header from "../Header";
import Header_Img from "../Header_Img";
import ContactsPageTable from "./Contactspage_Array";
import Footer from "../footer";


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