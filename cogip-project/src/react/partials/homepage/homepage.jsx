// components
import React from "react";
import Header from "../Compoments/Header";
import Home_HeroSection from "./Home_HeroSection";
import Header_Img from "../Compoments/Header_Img";
import LastInvoicesTable from "../Compoments/LastInvoicesArray";
import LastContactsTable from "../Compoments/LastContacts_array"
import LastCompaniesTable from "../Compoments/LastCompanies_array"
import Home_Main_Footer from "./Home_Main_Footer";
import Footer from "../Compoments/Footer";
import "../../../sass/main.css/"




function Homepage() {
  return (
    <>
      <header>
        <Header />
        <Home_HeroSection />
        <Header_Img />
      </header>
      <main>
        <div className="arrays">
          <section className="overflowArray">
            <LastInvoicesTable />
            <LastContactsTable />
            <LastCompaniesTable />
          </section>
        </div>
        <Home_Main_Footer />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;

