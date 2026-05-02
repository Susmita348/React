import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Aboutus from './components/Aboutus/Aboutus.jsx'
import Contactus from './components/Contactus/Contactus.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "contactus",
                element: <Contactus />
            },
            {
                path: "aboutus",
                element: <Aboutus />
            }
        ]
    }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={router} />
  </StrictMode>,
)
