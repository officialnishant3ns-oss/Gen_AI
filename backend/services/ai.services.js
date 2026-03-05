import { GoogleGenAI } from "@google/genai"
import { json, z } from "zod"
import { zodToJsonSchema } from "zod-to-json-schema"


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

const interviewreportSchema = z.object({

    matchScore: z.number().min(1).max(100)
        .describe("Score between 1 and 100 indicating how well the candidate matches the job description"),

    technicalQuestions: z.array(
        z.object({
            question: z.string().describe("Technical interview question can be asked in the interview"),
            intention: z.string().describe("Intention of the interviewer behind asking this question"),
            answer: z.string().describe("how to answer this question , what points to cover ,what approach to take etc.")
        })
    ).describe("Technical interview questions along with the interviewer intention and ideal answer strategy"),


    behaviouralQuestions: z.array(
        z.object({
            question: z.string().describe("Technical interview question can be asked in the interview"),
            intention: z.string().describe("Intention of the interviewer behind asking this question"),
            answer: z.string().describe("how to answer this question , what points to cover ,what approach to take etc.")
        })
    ).describe("Behavioural interview questions along with their intention and guidance on answering them"),

    skillGaps: z.array(
        z.object({
            skill: z.string().describe("Skill candidate is lacking"),
            severity: z.enum(["low", "medium", "high"])
        })
    ).describe("list of all skills gap in the candidate's profile along with thier severity"),

    preparationPlan: z.array(
        z.object({
            day: z.number().describe("Day number in the interview preparation schedule, starting from 1 and increasing sequentially"),
            focus: z.string().describe("Primary topic or skill the candidate should focus on for this day of preparation"),
            tasks: z.array(
                z.string().describe("Specific actionable preparation task such as studying a concept, solving problems, practicing coding, or reviewing interview topics")
            )
        })
    ).describe("A structured multi-day preparation roadmap designed to help the candidate improve skills and prepare effectively for the interview")

})

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
// const prompt = `
// You are an expert technical interviewer.

// Generate an interview preparation report.

// Return ONLY JSON matching the schema.

// Candidate Resume:
// ${resume}

// Self Description:
// ${selfDescription}

// Job Description:
// ${jobDescription}
// `

const prompt = `
You are an expert technical interviewer.
Analyze the candidate profile and generate an interview preparation report.
You MUST return JSON that EXACTLY matches this structure:

{
  "matchScore": number (1-100),
  "technicalQuestions": [
    {
      "question": string,
      "intention": string,
      "answer": string
    }
  ],
  "behaviouralQuestions": [
    {
      "question": string,
      "intention": string,
      "answer": string
    }
  ],
  "skillGaps": [
    {
      "skill": string,
      "severity": "low" | "medium" | "high"
    }
  ],
  "preparationPlan": [
    {
      "day": number,
      "focus": string,
      "tasks": [string]
    }
  ]
}

Candidate Resume:${resume}
Self Description:${selfDescription}
Job Description:${jobDescription}
`
    const response = await ai.models.generateContent({
    //    model: "gemini-3-flash-preview",
    model: "gemini-2.5-flash-lite",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: zodToJsonSchema(interviewreportSchema),
        }

    })
   return JSON.parse(response.text)
}
export default generateInterviewReport