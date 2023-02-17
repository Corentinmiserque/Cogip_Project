// components
import { useEffect } from "react";
import Header from "../Compoments/Header";
import Header_Img from "../Compoments/Header_Img";
import CompanyDetails from "./Show_CompaniesMain";
import Footer from "../Compoments/Footer";




function Show_Companiespage() {
//state

//comportements

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

//render
  return (
    <>
      <header>
        <Header />
        <Header_Img />
      </header>
      <main>
      <CompanyDetails/>
      </main>
      <Footer />

    </>
  );
}

export default Show_Companiespage;
    










