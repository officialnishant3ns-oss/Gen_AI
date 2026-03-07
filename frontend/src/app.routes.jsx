import { createBrowserRouter } from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"

import ProtectedRoutes from "./features/auth/components/ProtectedRoutes"
import Home from "./features/interview/pages/Home"

export const router = createBrowserRouter([
 {
    path: "/",
    element: (
      <ProtectedRoutes>
      <Home/>
      </ProtectedRoutes>
    )
  },
 {
    path:'/login',
    element:<Login/>
 },
 {
     path:'/register',
    element:<Register/>
 }
])