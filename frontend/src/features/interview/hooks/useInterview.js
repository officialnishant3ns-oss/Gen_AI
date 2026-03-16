import { useContext } from "react"
import { getInterviewReportById, getAllInterviewReport, getinterviewReport } from "../services/interview.api"
import { InterviewContext } from "../Interview.context"
import { toast } from "react-toastify/unstyled"

const useInterview = () => {
  const { loading, setLoading, reports, report, setReport } = useContext(InterviewContext)

  const GenerateReport = async ({ resumeFile, selfDescription, jobDescription }) => {
    try {
      setLoading(true)
      const response = await getinterviewReport({ resumeFile, selfDescription, jobDescription })
      setReport(response.data)

        return response.data 
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to generate report")
    } finally {
      setLoading(false)
    }
  }
  const getReportById = async ({ interviewId }) => {
    try {
      setLoading(true)
      const response = await getInterviewReportById({ interviewId })
      setReport(response.data)
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to fetch report")
    } finally {
      setLoading(false)
    }
  }
  const getAllReports = async () => {
    try {
      setLoading(true)
      const response = await getAllInterviewReport()
      setReport(response.data)
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to fetch reports")
    } finally {
      setLoading(false)
    }
  }
  return { loading, report, reports, getAllReports, getReportById, GenerateReport }
}

export default useInterview