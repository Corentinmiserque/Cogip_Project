import Login_Main from "./Login_Main";
import React from "react";
import Header from "../Compoments/Header";
import Header_Img from "../Compoments/Header_Img";
import Footer from "../Compoments/Footer";
function Loginpage(){
    return(
        <div>
        <header>
          <Header />
          <Header_Img />
        </header>
        <main>
          <Login_Main/> 
        </main>
        <Footer/>
      </div>
    );
}

export default Loginpage