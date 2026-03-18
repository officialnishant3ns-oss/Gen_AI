import { generateInterviewReport, generateResumePdf } from "../services/ai.services.js"
import InterviewReport from "../models/interviewReport.model.js"
import { PDFParse } from 'pdf-parse'
import puppeteer from "puppeteer"

const generateInterviewReport_api = async (req, res) => {
    try {
        const { selfDescription, jobDescription } = req.body
        if (!selfDescription || !jobDescription) {
            return res.status(400).json({
                status: false,
                message: "selfDescription and jobDescription are required"
            })
        }
        if (!req.file) {
            return res.status(400).json({
                status: false,
                message: "Resume PDF is required"
            })
        }

        const uint8Array = new Uint8Array(req.file.buffer)
        const parser = new PDFParse(uint8Array)
        const resumeText = await parser.getText()

        // console.log(resumeText.text)
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
        const interviewReport = await InterviewReport.create({
            user: req.user.id,
            resume: resumeText.text,
            selfDescription,
            jobDescription,
            ...rawAiData
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
const getInterviewReportById = async (req, res) => {
    try {
        const { InterviewId } = req.params
        const Interviewreportdata = await InterviewReport.findById({ _id: InterviewId, user: req.user.id })

        if (!Interviewreportdata) {
            return res.status(400).json({
                status: false,
                message: "Unable to extract report"
            })
        }
        return res.status(200).json({
            status: true,
            message: "Successfully found Report",
            Interviewreportdata
        })
    } catch (error) {
        console.error("Interview Error:", error)
        return res.status(500).json({
            status: false,
            message: "Server error while getting interview report"
        })
    }
}
const getAllInterviewReport = async (req, res) => {
    try {
        const Interviewreportdata = await InterviewReport
            .find({ user: req.user.id })

        if (Interviewreportdata.length === 0) {
            return res.status(404).json({
                status: false,
                message: "No interview reports found"
            })
        }

        return res.status(200).json({
            status: true,
            message: "Successfully found reports",
            count: Interviewreportdata.length,
            Interviewreportdata,
        })

    } catch (error) {
        console.error("Interview Error:", error)
        return res.status(500).json({
            status: false,
            message: "Server error while getting interview report"
        })
    }
}
const generateResumePdf_Api = async (req, res) => {
    let browser
    try {
        const { selfDescription, jobDescription } = req.body
        if (!selfDescription || !jobDescription) {
            return res.status(400).json({
                status: false,
                message: "selfDescription and jobDescription are required"
            })
        }
        if (!req.file) {
            return res.status(400).json({
                status: false,
                message: "Resume PDF is required"
            })
        }
        const uint8Array = new Uint8Array(req.file.buffer)
        const parser = new PDFParse(uint8Array)
        const resumeText = await parser.getText()
        if (!resumeText) {
            return res.status(400).json({
                status: false,
                message: "Unable to extract text from PDF"
            })
        }
        const aihtml = await generateResumePdf({
            resumeContent :resumeText.text,
            selfDescription,
            jobDescription
        })
        const { html } = aihtml
        if (!html || typeof html !== "string") {
            return res.status(400).json({
                status: false,
                message: "Html content is Required there"
            })
        }
        // to launch puppeteer
        const browser = await puppeteer.launch({
            headless: "new",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        })
        const page = await browser.newPage()  //for a new blank page

        await page.setContent(html, {                 //to set html content
            waitUntil: ["load", "networkidle0"],
        })
        const pdfBuffer = await page.pdf({          //gnerate the page >>yhi hai
            format: "A4",
            printBackground: true,
            margin: {
                top: "20px",
                bottom: "20px",
                left: "20px",
                right: "20px",
            },
        })
        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=document.pdf",
            "Content-Length": pdfBuffer.length,
        })
        return res.status(200).send(pdfBuffer)
    } catch (error) {
        console.error("PDF generation error:", error)
        return res.status(500).json({
            success: false,
            message: "Failed to generate PDF",
        })
    } finally {
        if (browser) await browser.close()
    }
}
export { generateInterviewReport_api, getInterviewReportById, getAllInterviewReport, generateResumePdf_Api }