import { Router } from "express"
import verifyJWT from "../middleware/auth.middleware.js"
import upload from "../middleware/multer.middleware.js"
import { generateInterviewReport_api, generateResumebyId, generateResumePdf_Api, getAllInterviewReport, getInterviewReportById } from "../controllers/interview.controller.js"

const interviewRoutes = Router()

interviewRoutes.post('/interview-ai',verifyJWT,upload.single("resume"),generateInterviewReport_api)
interviewRoutes.get('/getinterview-report/:InterviewId',verifyJWT,getInterviewReportById)
interviewRoutes.get('/all-interview-report',verifyJWT,getAllInterviewReport)
interviewRoutes.post('/generate-pdf',upload.single("resume"),verifyJWT,generateResumePdf_Api)
interviewRoutes.post('/generate-resume/:InterviewId',verifyJWT,generateResumebyId)
export default interviewRoutes