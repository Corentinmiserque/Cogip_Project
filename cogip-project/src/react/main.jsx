import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Homepage from './partials/Homepage/Homepage';
import Invoicespage from './partials/Invoicespage/Invoicespage';
import Contactspage from './partials/Contactspage/Contactspage';
import Companiespage from './partials/Companiespage/Companiespage';
import Show_Invoicespage from './partials/Show_Invoicespage/Show_Invoicespage';
import Show_Contactspage from './partials/Show_Contactspage/Show_Contactspage';
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
    path: `/invoicepage/:id`,
    element: <Show_Invoicespage />,
  },
  {
  path: `/contactpage/:id`,
  element: <Show_Contactspage />,
},

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);