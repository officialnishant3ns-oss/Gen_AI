import { Router } from "express"
import verifyJWT from "../middleware/auth.middleware.js"
import upload from "../middleware/multer.middleware.js"
import { generateInterviewReport_api } from "../controllers/interview.controller.js"

const interviewRoutes = Router()

interviewRoutes.post('/interview-ai',verifyJWT,upload.single("resume"),generateInterviewReport_api)


export default interviewRoutes