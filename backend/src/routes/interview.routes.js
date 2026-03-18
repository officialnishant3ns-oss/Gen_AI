import { Router } from "express"
import verifyJWT from "../middleware/auth.middleware.js"
import upload from "../middleware/multer.middleware.js"
import { generateInterviewReport_api, generateResumePdf_Api, getAllInterviewReport, getInterviewReportById } from "../controllers/interview.controller.js"

const interviewRoutes = Router()

interviewRoutes.post('/interview-ai',verifyJWT,upload.single("resume"),generateInterviewReport_api)
interviewRoutes.get('/getinterview-report/:InterviewId',verifyJWT,getInterviewReportById)
interviewRoutes.get('/all-interview-report',verifyJWT,getAllInterviewReport)
interviewRoutes.post('/generate-pdf',verifyJWT,generateResumePdf_Api)

export default interviewRoutes