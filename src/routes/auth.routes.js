import { Router } from "express"
import { getUser, login, Logout, register } from "../controllers/auth.controller.js"
import verifyJWT from "../middleware/auth.middleware.js"

const router = Router()
/**
 * @routes  /api/v1/user/register
 * @description  To register new User there
 * @access public
 */
router.post('/register',register)

/**
 * @routes  /api/v1/user/login
 * @description  To Login User there
 * @access public
 */
router.post('/login',login)

/**
 * @routes  /api/v1/user/logout
 * @description  To Logout user there
 * @access private
 */
router.delete('/logout',verifyJWT,Logout)

/**
 * @routes  /api/v1/user/get-user
 * @description  To get current user Infoermation there
 * @access private
 */
router.get('/get-user',verifyJWT,getUser)

export default router