import {  createContext, useEffect, useState } from "react"
import { getUser } from "./services/auth.api"


export const InterviewContext = createContext()

export const InterviewProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [ai_response , setAi_response] = useState(null)
  
    return (
        <InterviewContext.Provider value={{ ai_response, setLoading, loading, setAi_response }}>
            {children}
        </InterviewContext.Provider>
    )
}