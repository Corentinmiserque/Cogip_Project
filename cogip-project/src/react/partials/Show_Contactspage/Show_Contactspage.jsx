// components
import Header from "../Compoments/Header";
import Header_Img from "../Compoments/Header_Img";
import Footer from "../Compoments/Footer";
import ContactsDetails from "./Show_contactsMain";




function Show_Contactspage() {
  return (
    <>
      <header>
        <Header />
        <Header_Img />
      </header>
      <main>
        <ContactsDetails/>
        </main>
      <Footer />
    </>
  );
}

export default Show_Contactspage;