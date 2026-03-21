import { GoogleGenAI } from "@google/genai"


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})
async function chatbot({ text }) {
    const prompt = `
    You are an interview preparation assistant. Answer short and professional.
    text:: ${text}
    Return JSON:
    {
  "reply": "string"
  }
    `
    const response = await ai.models.generateContent({
        // model: "gemini-2.0-flash", 
        model: "gemini-3-flash-preview",
        contents: prompt,
        generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.2
        }
    })

    const data = JSON.parse(response.text)
    return data.reply
}

export default chatbot