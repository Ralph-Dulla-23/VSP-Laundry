import React from 'react'
import ReactDOM from 'react-dom/client'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
