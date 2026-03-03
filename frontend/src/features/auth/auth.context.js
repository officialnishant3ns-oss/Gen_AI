import { Children, createContext, useState } from "react"


export const AuthContext = createContext()



export const AuthProvider = ({Children})=>{
const [user,setUser] =useState(null)
const [loading,setLoading] =useState(false)


return (
    <AuthContext.Provider value={{user,setLoading,loading,setUser}}>
        {Children}
    </AuthContext.Provider>
)
}