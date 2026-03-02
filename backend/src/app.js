import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()
app.use(express.json())

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieParser())

//auth routes portion there
import authrouter from '../src/routes/auth.routes.js'
app.use('/api/v1/user',authrouter)

export default app
