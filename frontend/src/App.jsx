import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes.jsx'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"
const App = () => {
  return (
   <>
  <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  theme="dark"
/>
<RouterProvider  router={router} />
   </>
  )
}

export default App
