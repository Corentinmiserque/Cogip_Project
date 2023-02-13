// components
import Header from "../Compoments/Header";
import Header_Img from "../Compoments/Header_Img";
import CompanyDetails from "./Show_invoiceMain";
import Footer from "../Compoments/Footer";




function Show_Invoicespage() {
  return (
    <>
      <header>
        <Header />
        <Header_Img />
      </header>
      <CompanyDetails/>
      <Footer />
    </>
  );
}

export default Show_Invoicespage;
    










