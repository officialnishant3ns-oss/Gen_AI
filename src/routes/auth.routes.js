import { Router } from "express"
import { login, Logout, register } from "../controllers/auth.controller.js"

const router = Router()

router.post('/register',register)
router.post('/login',login)
router.delete('/logout',Logout)

export default router