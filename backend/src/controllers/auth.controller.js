import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import JWT from 'jsonwebtoken'
import Blacklist from "../models/blacklist.model.js"

const register = async (req, res) => {
    try {
        const { username, password, email } = req.body
        if (!username || !password || !email) {
            return res.status(400).json({
                status: false,
                message: 'pls Provide username , password and email'
            })
        }
        if (password.length < 6) {
            return res.status(400).json({
                status: false,
                message: "Password must be at least 6 characters"
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
        const token = JWT.sign(
            {
                id: user._id,
                username: user.username
            },
            process.env.JWT_SECRETS,
            {
                expiresIn: "1d"
            }
        )

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        })
        return res.status(200).json({
            status: true,
            message: 'User Register successfully',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        console.error("Register Error:", error)
        return res.status(500).json({
            status: false,
            message: "Server error"
        })
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                status: false,
                message: "Email and password are required"
            })
        }
        if (password.length < 6) {
            return res.status(400).json({
                status: false,
                message: "Password must be at least 6 characters"
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                status: false,
                message: "No user Found , Go to Register"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            })
        }
        const token = JWT.sign(
            { id: user._id },
            process.env.JWT_SECRETS,
            { expiresIn: "7d" }
        )
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        })
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        console.error("Login Error:", error)
        return res.status(500).json({
            status: false,
            message: "Server error"
        })
    }
}

async function Logout(req,res) {
    try {
        const token = req.cookies.token
        if(token){
       await  Blacklist.create({token})
        }
        res.clearCookie("token")
       
        res.status(200).json({
            status:true,
            message:'Logout Successfully'
        })

    } catch (error) {
        console.error("Logout Error:", error)
        return res.status(500).json({
            status: false,
            message: "Server error"
        })  
    }
}

async function getUser(req,res) {
    try {
        // const id = req.user.id
        const user = await User.findById( req.user.id)
        if(!user){
           return res.status(400).json({
            status: false,
            message: "User not Found"
        })  

    }
    return res.status(200).json({
        status:true,
        message:"User Found Successfully",
        user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
    })
    } catch (error) {
         console.error("Get User Error:", error)
        return res.status(500).json({
            status: false,
            message: "Server error"
        })
    }
}

export { register,login,Logout,getUser }