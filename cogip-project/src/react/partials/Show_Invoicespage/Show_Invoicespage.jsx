import React, { useState, useEffect } from "react";
import Header from "../Compoments/Header";
import Header_Img from "../Compoments/Header_Img";
import ShowInvoicesMain from "./Show_InvoicesMain";
import Footer from "../Compoments/Footer";

function Show_Invoicespage() {
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
        <ShowInvoicesMain />
      </main>
      <Footer />
    </>
  );
}

export default Show_Invoicespage;
