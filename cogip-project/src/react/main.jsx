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

import InvoicesPageTable from './partials/Invoicespage/Invoicespage_Array'
import ContactsPageTable from './partials/Contactspage_Array'
import CompaniesPageTable from './partials/Compagniespage_Array'
import Homepage from './partials/homepage/homepage'



ReactDOM.createRoot(document.getElementById('homepage')).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('companies')).render(
  <React.StrictMode>
    <CompaniesPageTable />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('contacts')).render(
  <React.StrictMode>
    <ContactsPageTable />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('invoices')).render(
  <React.StrictMode>
    <InvoicesPageTable />
  </React.StrictMode>,
)