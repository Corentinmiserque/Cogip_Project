import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../../../public/img/logo.avif"
function Header() {
// state, données
  const [isOpen, setIsOpen] = useState(false);

// comportements
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

// render
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="logo" />
      </Link>

      <nav className={`navbar ${isOpen ? "navbarDisplay" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/invoices">Invoices</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>

      <section className={`login ${isOpen ? "loginDisplay" : ""}`}>
      <Link to="/signuppage"><span className="signUp">Sign up</span></Link>

        <Link to="/loginpage">Login</Link>
      </section>

      <section
        className={`hamburger-lines ${isOpen ? "menu" : ""}`}
        onClick={handleClick}
      >
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </section>
    </div>
  );
}

export default Header;

