import logo from "../../../../public/img/logo.avif"
import facebook from "../../../../public/img/Facebook.avif"
import twitter from "../../../../public/img/Twitter.avif"
import linkedin from "../../../../public/img/LinkedIn.avif"
import youtube from "../../../../public/img/youtube.avif"
import instagram from "../../../../public/img/Instagram.avif"
import google from "../../../../public/img/GooglePlus.avif"
import pinterest from "../../../../public/img/pinterest.avif"
import SRR from "../../../../public/img/RSS.avif"
import { Link } from 'react-router-dom'

function Footer() {
// state, données

//comportements

//render

  return <footer>
  <div className="footer">

    <img className="logo"src={logo} alt="logo_border"/>

    <div className="contacts">

        <section className="contact">
            <p className="localisation">Square des Martyrs, 6000 Charleroi</p>
            <p className="phonenumber">(123) 456-7890</p>
            <p className="fax">(123) 456-7890</p>
        </section>

        <section className="socialmedia">
            <p>Social media </p>
            <a href="#"><img src={facebook} alt="facebook"/></a>
            <a href="#"><img src={twitter}alt="twitter"/></a>
            <a href="#"><img src={linkedin} alt="linkedin"/></a>
            <a href="#"><img src={youtube}alt="youtube"/></a>
            <a href="#"><img src={instagram}alt="instagram"/></a>
            <a href="#"><img src={google} alt="google+"/></a>
            <a href="#"><img src={pinterest} alt="pinterest"/></a>
            <a href="#"><img src={SRR} alt="flux rss"/></a>
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
