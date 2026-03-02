import JWT from 'jsonwebtoken'

function authUser(req,res,next){
    const token = req.cookies.token
    if(!token){
       res.status(401).json({
            status:false,
            message:'Token not provided'
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

export default authUser
