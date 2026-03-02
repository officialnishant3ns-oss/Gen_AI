import JWT from 'jsonwebtoken'
import Blacklist from '../models/blacklist.model.js'



async function verifyJWT(req,res,next){
    const token = req.cookies.token
    if(!token){
       res.status(401).json({
            status:false,
            message:'Token not provided'
        }) 
    }
    const isTokenBlacklisted = await Blacklist.findOne({token})
    if(isTokenBlacklisted){
        return res.status(400).json({
            status: false,
            message: "Token is invalid"
        }) 
    }
   try {
    const decoded =  JWT.verify(token,process.env.JWT_SECRETS)
    req.user = decoded

    next()

   } catch (error) {
     console.error("Invalid token Error:", error)
        return res.status(500).json({
            status: false,
            message: "Server error"
        }) 
   }
}

export default verifyJWT
