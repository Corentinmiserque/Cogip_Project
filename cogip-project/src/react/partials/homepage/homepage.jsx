// components
import React from "react";
import Header from "../Header";
import Home_HeroSection from "./Home_HeroSection";
import Header_Img from "../Header_Img";
import LastInvoicesTable from "../LastInvoicesArray";
import LastContactsTable from "../LastContacts_array";
import LastCompaniesTable from "../LastCompanies_array";
import Home_Main_Footer from "./Home_Main_Footer";
import Footer from "../footer";




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

