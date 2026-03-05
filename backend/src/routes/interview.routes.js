import { Router } from "express"
import verifyJWT from "../middleware/auth.middleware"

const interviewRoutes = Router()

interviewRoutes.post('/interview-ai',verifyJWT,)


export default interviewRoutes