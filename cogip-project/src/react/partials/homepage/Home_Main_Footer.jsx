import rectrangle from "../../../../public/img/Rectangle.avif"
import phone from "../../../../public/img/phone.avif"

function Home_Main_Footer() {
    // state, données
    
    //comportements
    
    
    //render
      return    <div className="main_Footer">
                    <h1>WORK BETTER IN YOUR COMPANY</h1>  
                    <section className="home_Main_Footer_Img">  
                        <img className="rectangle"src={rectrangle} alt="rectangle" /> 
                        <img className="phone"src={phone} alt="phone"/> 
                    </section>
                </div>
                }

    export default Home_Main_Footer