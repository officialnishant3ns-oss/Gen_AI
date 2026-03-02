import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()


app.use(cors({
  origin: [
    "http://localhost:5173"
  ],
  methods: ["GET","POST","PUT","DELETE","PATCH"],
  credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))
app.use(cookieParser()) 
//auth routes portion there
import authrouter from '../src/routes/auth.routes.js'
app.use('/api/v1/user',authrouter)

export default app
