import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './partials/Header'
import Footer from'./partials/Footer'
import Home_HeroSection from './partials/Home_HeroSection'


ReactDOM.createRoot(document.getElementById('menu')).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,

)
ReactDOM.createRoot(document.getElementById('home_HeroSection')).render(
  <React.StrictMode>
    <Home_HeroSection/>
  </React.StrictMode>,)






