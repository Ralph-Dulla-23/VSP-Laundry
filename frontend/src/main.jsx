import React from 'react'
import ReactDOM from 'react-dom/client'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import './assets/style.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import App from './App.jsx'
import Login from './Pages/Login.jsx'
import Services from '/src/Pages/Services.jsx'
import Signin from './Pages/Signin.jsx'
import Dashboard from './Pages/home/Dashboard.jsx'
import Inquiry from './Pages/home/Inquiry.jsx'
import Staff from './Pages/home/Staff.jsx';

import common_tg from "./translations/tg/common.json";
import common_en from "./translations/en/common.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path:"/Dashboard",
    element: <Dashboard/> 
  },
  {
    path:"/Inquiry",
    element: <Inquiry/> 
  },
  {
    path:"/Staff",
    element: <Staff/> 
  }

]);

i18next.init({
  
  interpolation: { escapeValue: false },  
    lng: 'en',                             
    resources: {
        en: {
            common: common_en               
        },
        tg: {
            common: common_tg
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
        <RouterProvider router={router} />
      </I18nextProvider>
  </React.StrictMode>,
)
