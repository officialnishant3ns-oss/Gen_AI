import mongoose, { connect } from "mongoose"


const connectDB = async () => {
    try {
        const connectionIntence = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Server Connected to Database')
    } catch (error) {
        console.error("Mongo_DB connection error:", error)
        process.exit(1)
    }
}


export default connectDB