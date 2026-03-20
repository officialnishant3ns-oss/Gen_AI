import mongoose from "mongoose"

const chatSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    interviewId: { type: mongoose.Schema.Types.ObjectId, ref: "InterviewReport" },
    messages: [
        {
            role: {
                type: String,
                enum: ["user", "assistant"]
            },
            content: {
                type:String
            }
        }
    ]
}, { timestamps: true })

export default mongoose.model("Chat", chatSchema)