import { useState } from 'react'
// state, données

function Menu() {
  const [isOpen, setIsOpen] = useState(false)
//comportements

  const handleClick = () => {
    setIsOpen(!isOpen)};
//render

  return  <div class= "header">
            <img class="logo" src ="./src/img/logo.svg" alt="logo" />

            <nav class={`navbar ${isOpen ? "navbarDisplay" : ""}`}>
                <a href="#">Home</a>
                <a href="#">Invoices</a>
                <a href="#">Companies</a>
                <a href="#">Contacts</a>
            </nav>
                
            <section class={`login ${isOpen ? "loginDisplay" : ""}`} onClick={handleClick}>
                <a class= "signUp"href="#">Sign up</a>
                <a href="#">Login</a>
            </section>

            <section class={`hamburger-lines ${isOpen ? "menu" : ""}`} onClick={handleClick}>
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </section> 
             
          </div>
}
export default Menu
