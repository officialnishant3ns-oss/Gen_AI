import { Router } from "express"
import { login, Logout, register } from "../controllers/auth.controller.js"

const router = Router()

router.post('/register',register)
router.post('/login',login)
router.delete('/logout',Logout)

/**
 * @routes  /api/v1/user/get-user
 * @description  To get current user Infoermation there
 * @access private
 */
router.get('get-user',)

export default router