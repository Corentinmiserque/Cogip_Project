import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './partials/Header'
import Footer from './partials/footer'
import Home_HeroSection from './partials/homepage/Home_HeroSection'
import Header_Img from './partials/Header_Img'
import Home_Main_Footer from './partials/homepage/Home_Main_Footer'
import LastInvoicesTable from './partials/LastInvoicesArray'
import LastContactsTable from  './partials/LastContacts_array'
import LastCompaniesTable from  './partials/LastCompanies_array'
import InvoicesPage_Array from './partials/Invoicespage/Invoicespage_Array'
import ContactsPage_Array from './partials/ContactsPage_Array'
import CompaniesPage_Array from './partials/CompagniesPage_Array'
import Homepage from './partials/homepage/homepage'
import InvoicesPageTable from './partials/Invoicespage/Invoicespage_Array'


ReactDOM.createRoot(document.getElementById('homepage')).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('invoice')).render(
  <React.StrictMode>
    <CompaniesPage_Array />
  </React.StrictMode>,
)

