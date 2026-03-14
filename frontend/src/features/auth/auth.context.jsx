import { Children, createContext, useEffect, useState } from "react"
import { getUser } from "./services/auth.api"


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUser()
            setUser(data?.user || null)
            setLoading(false)
        }
        fetchUser()
    }, [])

    return (
        <AuthContext.Provider value={{ user, setLoading, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}