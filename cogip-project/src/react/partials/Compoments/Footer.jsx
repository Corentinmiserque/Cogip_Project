import logo from "../../../../public/img/logo.avif"
import { Link } from 'react-router-dom'

function Footer() {
// state, données

//comportements

//render

  return <footer>
  <div className="footer">

    <img className="logo"src="../public/logo.avif" alt="logo_border"/>

    <div className="contacts">

        <section className="contact">
            <p className="localisation">Square des Martyrs, 6000 Charleroi</p>
            <p className="phonenumber">(123) 456-7890</p>
            <p className="fax">(123) 456-7890</p>
        </section>

        <section className="socialmedia">
            <p>Social media </p>
            <a href="#"><img src="../public/img/Facebook.svg" alt="facebook"/></a>
            <a href="#"><img src="../public/img/Twitter.svg" alt="twitter"/></a>
            <a href="#"><img src="../public/img/LinkedIn.svg" alt="linkedin"/></a>
            <a href="#"><img src="../public/img//Youtube.svg" alt="youtube"/></a>
            <a href="#"><img src="../public/img/Instagram.svg" alt="instagram"/></a>
            <a href="#"><img src="../public/img/GooglePlus.svg" alt="google+"/></a>
            <a href="#"><img src="../public/img/pinterest.svg" alt="pinterest"/></a>
            <a href="#"><img src="../public/img//RSS.svg" alt="flux rss"/></a>
        </section>

    </div>  
  </div>

  <div className="footer_footer">
      <section className="footer_footer_navbar">
            <nav>
                <Link to={`/`}> Home</Link>
                <Link to="/invoices">Invoices</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/companies">Companies</Link>
                <a href="#">privacy policy</a>
            </nav>
        </section>
        <section className="copyright">
                <p>Copyright © 2022 • COGIP Inc.</p>
                <p>test</p>
            </section>
    </div>
</footer>;
}
export default Footer
