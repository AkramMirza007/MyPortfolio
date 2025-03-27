import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Intro from './intro/Intro';
import Projects from './webprojects/Projects';
import ContactUs from './contactUs/ContactUs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Intro/>
      },
      {
        path: "webprojects",
        element: <Projects/>
      },
      {
        path: "contactUs",
        element: <ContactUs/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
