import { createBrowserRouter } from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"

import ProtectedRoutes from "./features/auth/components/ProtectedRoutes"
import Home from "./features/interview/pages/Home"
import Response from "./features/interview/pages/Response"

export const router = createBrowserRouter([
//  {
//     path: "/",
//     element: (
//       <ProtectedRoutes>
//       <Home/>
//       </ProtectedRoutes>
//     )
//   },
 {
    path: "/",
    element: (
      <ProtectedRoutes>
      <Response/>
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