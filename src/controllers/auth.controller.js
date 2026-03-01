import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import JWT from 'jsonwebtoken'

const register = async (req, res) => {
    try {
        const { username, password, email } = req.body
        if (!username || !password || !email) {
            return res.status(400).json({
                status: false,
                message: 'pls Provide username , password and email'
            })
        }
        const userExist = await User.findOne({
            $or: [{ email }, { username }]
        })
        if (userExist) {
            return res.status(400).json({
                status: false,
                message: 'User Already Exist , Go to Login'
            })
        }
        const HashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            username,
            email,
            password: HashedPassword
        })
        const token =  JWT.sign(
            {
                id: user._id,
                username: user.username
            },
            process.env.JWT_SECRETS,
            {
                expiresIn: "1d"
            }
        )
      
        res.cookie('token',token)
           return res.status(200).json({
                status: true,
                message: 'User Register successfully',
                token   ,
                user :{
                    id:user._id,
                    username:user.username,
                    email:user.email
                }                      
            })

    } catch (error) {

    }
}

export { register }