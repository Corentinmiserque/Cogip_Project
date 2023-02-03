import { useState } from 'react'
// state, données

function Footer() {
//comportements

//render

  return  <nav class={`navbar ${isOpen ? "navbarDisplay" : ""}`}>
                <a href="#">Home</a>
                <a href="#">Invoices</a>
                <a href="#">Companies</a>
                <a href="#">Contacts</a> 
          </nav>
}
export default Footer
