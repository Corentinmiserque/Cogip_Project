import React from "react";
import { useEffect } from "react";
import Header from "../Compoments/Header";
import Header_Img from "../Compoments/Header_Img";
import InvoicesPageTable from "./Invoicespage_Array";
import Footer from "../Compoments/Footer";

function Invoicespage(){
  //states

  //comportements

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //render
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