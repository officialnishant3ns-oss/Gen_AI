import chatbot from "../services/aichatbot.services.js"

export const chat = async (req, res) => {
     try {
          const { message } = req.body
          if (!message) {
               return res.status(401).json({
                    status: false,
                    message: "Message Input is required there"
               })
          }
          const reply = await chatbot(message)

          return res.status(200).json({
               status: true,
               reply
          })
     } catch (error) {
          console.log(error)
          return res.status(500).json({
               status: false,
               message: "chat error"
          })
     }
}