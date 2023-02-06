import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './partials/Header'
import Footer from'./partials/Footer'
import Home_HeroSection from './partials/homepage/Home_HeroSection'
import Header_Img from './partials/Header_Img'
import Home_Main_Footer from './partials/homepage/Home_Main_Footer'

ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,

)
ReactDOM.createRoot(document.getElementById('home_HeroSection')).render(
  <React.StrictMode>
    <Home_HeroSection/>
  </React.StrictMode>,)

ReactDOM.createRoot(document.getElementById('header_Img')).render(
  <React.StrictMode>
    <Header_Img/>
  </React.StrictMode>,)

ReactDOM.createRoot(document.getElementById('home_Main_Footer')).render(
  <React.StrictMode>
    <Home_Main_Footer/>
  </React.StrictMode>,)






