import { useState } from 'react';
import { Link } from 'react-router-dom';



function Dashboard_Header() {

//state, données:
    const [isOpen, setIsOpen] = useState(false);
    
//comportements:

    const handleClick = () => {
        setIsOpen(!isOpen);
      };
   
//render

    return (

             <>
                    <section className={`hamburger-dashboard ${isOpen ? "hamburger-dashboard_active" : ""}`} onClick={handleClick}>
                        <span className="line-dashboard line1"></span>
                        <span className="line-dashboard line2"></span>
                        <span className="line-dashboard line3"></span>
                    </section>
                    <div className={`allheader ${isOpen ? "allheader_active" : ""}`} onClick={handleClick}>
                        <section className="profil">
                            <img className="profil-img"src="/img/profil-contact.png" alt="Profile" />
                            <h2>Henry George</h2>
                        </section>
                        <section className="nav">
                            <nav>
                                <Link to="/dashboard_Homepage">Dashboard</Link>
                                <Link to="/dashboard_Invoicepage">Invoices</Link>
                                <Link to="/dashboard_Companiespage">Companies</Link>
                                <a href="#">Contacts</a>
                            </nav>
                        </section>
                        <section className="logout">
                            <img src="/img/profil-contact.png" alt="Profile" />
                            <Link to="/"><button>Logout</button></Link>
                        </section>
                    </div>
                    </>     
           
    );
}

export default Dashboard_Header;