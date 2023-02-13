import { useState } from 'react'
import { Link } from 'react-router-dom'




function Header() {

// state, données

  const [isOpen, setIsOpen] = useState(false)

//comportements

  const handleClick = () => {
    setIsOpen(!isOpen)};

//render

  return (
    
      <div className= "header">
       <Link to={`/`}><img className="logo" src="./src/img/logo.svg" alt="logo"/></Link>

        <nav className={`navbar ${isOpen ? "navbarDisplay" : ""}`}>
          <Link to={`/`}> Home</Link>
          <Link to="/invoices">Invoices</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/companies">Companies</Link>
        </nav>

        <section className={`login ${isOpen ? "loginDisplay" : ""}`}>
          <a className= "signUp"href="#">Sign up</a>
          <a href="#">Login</a>
        </section>

        <section className={`hamburger-lines ${isOpen ? "menu" : ""}`} onClick={handleClick}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </section> 

      </div>

   
  );
}
export default Header;

