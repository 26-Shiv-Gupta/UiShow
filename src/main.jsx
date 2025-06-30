import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Cards from './components/cards/Cards.jsx';
import Buttons from './components/buttons/Buttons.jsx'
import Home from './components/home/Home.jsx'
import Loadings from './components/loadings/Loadings.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: "/loadings", element: <Loadings /> },
      {path: "/cards", element: <Cards />},
      {path: "/buttons", element: <Buttons />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)