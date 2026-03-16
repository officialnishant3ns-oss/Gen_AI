import { useContext } from "react"
import { AuthContext } from "../Auth.context"
import { register, login, logout, getUser } from "../services/auth.api"
import { toast } from "react-toastify"
import { Link, useNavigate } from 'react-router-dom'

export const useAuth = () => {
    const context = useContext(AuthContext)
      const navigate = useNavigate()
    const { user, setLoading, loading, setUser } = context

    const handleLogin = async ({ email, password }) => {
        try {
            setLoading(true)
            const data = await login({ email, password })
            setUser(data.user)
            toast.success(data?.message || "Login successful")
             navigate('/')
        } catch (error) {
            toast.error(
                error?.response?.data?.message || "Login failed"
            )
        } finally {
            setLoading(false)
        }
    }
    const handleRegister = async ({ username, email, password }) => {
        try {
            setLoading(true)
            const data = await register({ username, email, password })
            console.log("useAuth",data)
            setUser(data.user)
            toast.success(data?.message || "Registration successful")
           navigate('/')
        } catch (error) {
            toast.error(
                error?.response?.data?.message || "Registration failed"
            )
        } finally {
            setLoading(false)
        }
    }
    const handleLogout = async () => {
        try {
            setLoading(true)
            await logout()
            setUser(null)
            toast.success("Logout successful")
            navigate('/login')
        } catch (error) {
            toast.error(
                error?.response?.data?.message || "Logout failed"
            )
        } finally {
            setLoading(false)
        }
    }
    return { user, loading, handleLogin, handleLogout, handleRegister }
}
