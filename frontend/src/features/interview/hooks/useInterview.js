import { useContext } from "react"
import { getInterviewReportById, getAllInterviewReport, getinterviewReport } from "../services/interview.api"
import { InterviewContext } from "../Interview.context"
import { toast } from "react-toastify/unstyled"

const useInterview = async () => {
  const { loading, setLoading, reports, report, setReport } = useContext(InterviewContext)

  const GenerateReport = async ({ resumeFile, selfDescription, jobDescription }) => {
    try {
      setLoading(true)
      const response = await getAllInterviewReport({ resumeFile, selfDescription, jobDescription })
      setReport(response.data)
    } catch (error) {
      toast.error(message.error)
    } finally {
      setLoading(false)
    }
  }
  const getReportById = async ({interviewId}) => {
    try {
      setLoading(true)
      const response = await getInterviewReportById({interviewId})
      setReport(response.data)
    } catch (error) {
      toast.error(message.error)
    } finally {
      setLoading(false)
    }
  }
  const getAllReport = async () => {
    try {
      setLoading(true)
      const response = await getAllReport()
      setReport(response.data)
    } catch (error) {
      toast.error(message.error)
    } finally {
      setLoading(false)
    }
  }
}

export default useInterview