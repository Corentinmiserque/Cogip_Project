import Header from "../Header";
import Header_Img from "../Header_Img";
import InvoicesPageTable from "./Invoicespage_Array";
import Footer from "../footer";

function homepage(){

    return(
      <div>
        <header>
          <Header />
          <Home_HeroSection />
          <Header_Img />
        </header>
        <main>
          <InvoicesPageTable/>
        </main>
        <Footer/>
      </div>
    );

}
