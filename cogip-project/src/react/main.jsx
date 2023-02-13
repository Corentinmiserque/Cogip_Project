import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from './partials/Header'
import Footer from './partials/footer'
import Home_HeroSection from './partials/Homepage/Home_HeroSection'
import Header_Img from './partials/Header_Img'
import Home_Main_Footer from './partials/Homepage/Home_Main_Footer'

import LastInvoicesTable from './partials/LastInvoicesArray'
import LastContactsTable from  './partials/LastContacts_array'
import LastCompaniesTable from  './partials/LastCompanies_array'

import Homepage from './partials/Homepage/homepage';
import Invoicespage from './partials/Invoicespage/Invoicespage';
import Contactspage from './partials/Contactspage/Contactspage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Homepage />,
  },
  {
    path: `/invoices`,
    element: <Invoicespage/>,
  },
  {
    path: `/contacts`,
    element: <Contactspage />,
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);