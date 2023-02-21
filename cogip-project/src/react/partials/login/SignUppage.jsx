import Signup_Main from "./Singup_Main";
import React from "react";
import Header from "../Compoments/Header";
import Header_Img from "../Compoments/Header_Img";
import Footer from "../Compoments/Footer";
function Singuppage(){
    return(
        <div>
        <header>
          <Header />
          <Header_Img />
        </header>
        <main>
          <Signup_Main/> 
        </main>
        <Footer/>
      </div>
    );
}

export default Singuppage