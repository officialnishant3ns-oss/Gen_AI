import { useContext } from "react"
import { AuthContext } from "../auth.context"
import { register,login,logout,getUser } from "../services/auth.api"

export const useAtuh =()=>{
    const context = useContext(AuthContext)
    const {user,setLoading,loading,setUser} =context

   const handleLogin = async({email,Password})=>{
    setLoading(true)
    const data = await login({email,Password})
    setUser(data.user)
    setLoading(false)
   }
   const handleRegister = async({username,email,Password})=>{
    setLoading(true)
    const data = await register({username,email,Password})
    setUser(data.user)
    setLoading(false)
   }
   const handleLogout = async()=>{
    setLoading(true)
    const data = await logout()
    setUser(null)
    setLoading(false)
   }
   return {user,loading,handleLogin,handleLogout,handleRegister}
}
