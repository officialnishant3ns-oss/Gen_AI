import generateInterviewReport from "../services/ai.services.js"
import InterviewReport from "../models/interviewReport.model.js"
import { PDFParse } from 'pdf-parse'

const generateInterviewReport_api = async (req, res) => {
    try {
        const { selfDescription, jobDescription } = req.body
        if (!selfDescription || !jobDescription) {
            return res.status(400).json({
                status: false,
                message: "selfDescription and jobDescription are required"
            })
        }

        const uint8Array = new Uint8Array(req.file.buffer)
        const parser = new PDFParse(uint8Array)
        const resumeText = await parser.getText()

        console.log(resumeText.text)
        if (!resumeText) {
            return res.status(400).json({
                status: false,
                message: "Unable to extract text from PDF"
            })
        }
        const rawAiData = await generateInterviewReport({
            resumeContent: resumeText.text,
            selfDescription,
            jobDescription
        })

        const cleanAiArray = (arr) => {
            if (!Array.isArray(arr)) return [];
            return arr.map(item => {
                if (typeof item === 'string') {
                    try {
                        const cleaned = item.trim().replace(/,$/, '');
                        return JSON.parse(cleaned);
                    } catch (e) {
                        console.error("Failed to parse AI item:", item);
                        return null;
                    }
                }
                return item;
            }).filter(item => item !== null);
        };

        const cleanedData = {
            matchScore: rawAiData.matchScore,
            technicalQuestion: cleanAiArray(rawAiData.technicalQuestion),
            behaviouralQuestion: cleanAiArray(rawAiData.behaviouralQuestion),
            skillGaps: cleanAiArray(rawAiData.skillGaps),
            preparationPlan: cleanAiArray(rawAiData.preparationPlan)
        }
        const interviewReport = await InterviewReport.create({
            resume: resumeText.text,
            selfDescription,
            jobDescription,
            ...cleanedData
        })

        return res.status(200).json({
            status: true,
            message: 'interview Report generated',
            data: interviewReport
        })
    } catch (error) {
        console.error("Interview Error:", error)
        return res.status(500).json({
            status: false,
            message: "Server error while generating interview report"
        })
    }
}


export { generateInterviewReport_api }