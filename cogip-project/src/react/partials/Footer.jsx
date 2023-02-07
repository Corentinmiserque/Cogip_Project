function Footer() {
// state, données

//comportements

//render

  return <footer>
  <div className="footer">

    <img className="logo"src="./src/img/logo.svg" alt="logo_border"/>

    <div className="contacts">

        <section className="contact">
            <p className="localisation">Square des Martyrs, 6000 Charleroi</p>
            <p className="phonenumber">(123) 456-7890</p>
            <p className="fax">(123) 456-7890</p>
        </section>

        <section className="socialmedia">
            <p>Social media </p>
            <a href="#"><img src="./src/img/Facebook.svg" alt="facebook"/></a>
            <a href="#"><img src="./src/img/Twitter.svg" alt="twitter"/></a>
            <a href="#"><img src="./src/img/LinkedIn.svg" alt="linkedin"/></a>
            <a href="#"><img src="./src/img//Youtube.svg" alt="youtube"/></a>
            <a href="#"><img src="./src/img/Instagram.svg" alt="instagram"/></a>
            <a href="#"><img src="./src/img/GooglePlus.svg" alt="google+"/></a>
            <a href="#"><img src="./src/img/pinterest.svg" alt="pinterest"/></a>
            <a href="#"><img src="./src/img//RSS.svg" alt="flux rss"/></a>
        </section>

    </div>  
  </div>

  <div className="footer_footer">
      <section className="footer_footer_navbar">
            <nav>
                <a href="#">home</a>
                <a href="#">invoices</a>
                <a href="#">companies</a>
                <a href="#">contacts</a>
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
