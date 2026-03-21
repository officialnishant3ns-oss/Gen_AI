import { chat } from "../controllers/chat.controller.js"
import { Router } from "express"
import verifyJWT from "../middleware/auth.middleware.js"

const chatbotRoutes = Router()

chatbotRoutes.post('/chatbot',verifyJWT,chat)

export default chatbotRoutes