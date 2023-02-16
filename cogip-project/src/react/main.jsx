import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Homepage from './partials/Homepage/Homepage';
import Invoicespage from './partials/Invoicespage/Invoicespage';
import Contactspage from './partials/Contactspage/Contactspage';
import Companiespage from './partials/Companiespage/Companiespage';
import Show_Invoicespage from './partials/Show_Invoicespage/Show_Invoicespage';
import Show_Contactspage from './partials/Show_Contactspage/Show_Contactspage';
import Dashboard_Homepage from './partials/Dashboard/Dashboard_Homepage/Dashboard_homepage';
import DashboardInvoicespage from './partials/Dashboard/Dashboard_Invoicepage/Dashboard_Invoicespage';

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
  {
  path: `/companies`,
    element: <Companiespage />,
  },
  {
    path: `/showcompany/:id`,
    element: <Show_Invoicespage />,
  },
  {
  path: `/showcontact/:id`,
  element: <Show_Contactspage />,
},
{
  path: `/dashboard_Homepage`,
  element: <Dashboard_Homepage/>,
},
{
  path: `/dashboard_Invoicepage`,
  element: <DashboardInvoicespage/>,
},


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);