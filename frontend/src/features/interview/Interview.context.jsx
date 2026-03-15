import { useState } from "react"
import { createContext } from "react"

export const InterviewContext = createContext()
const InterviewProvider = ({children}) => {
  const[loading , setLoading]=useState(false)
  const[report ,setReport]=useState(null)
  const[reports ,setReports]=useState(null)

  return (
    <InterviewContext.Provider value={{loading,reports,setReports,setLoading,report,setReport}}>
        {children}
        </InterviewContext.Provider>
  )
}

export default InterviewProvider
