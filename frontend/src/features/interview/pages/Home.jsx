import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { InterviewContext } from "../Interview.context";
import Loader from "../../auth/components/Loader";
import useInterview from "../hooks/useInterview";
import Card from "../components/Card";
const Home = () => {

    const { loading, setLoading, GenerateReport, getAllReports, reports, } = useInterview()
    const navigate = useNavigate()
    console.log("ougyucu",reports)

    const [resumeName, setResumeName] = useState("")
    const [jobDescription, setjobDescription] = useState("")
    const [selfDescription, setSelfDescription] = useState("")
    const fileRef = useRef(null)

    const HandleResponseReport = async () => {
        const resumeFile = fileRef.current.files[0]
        if (!jobDescription.trim()) {
            toast.error("Job description is required")
            return
        }
        if (!selfDescription.trim()) {
            toast.error("Self description is required")
            return
        }
        if (!resumeFile) {
            toast.error("Please upload your resume")
            return
        }
        try {
            const response = await GenerateReport({ resumeFile, jobDescription, selfDescription })
            // console.log("Generated Report:", response)
            if (response?._id) {
                navigate(`/response/${response._id}`)
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }
    useEffect(() => {
        getAllReports()
    }, []
    )
    return (
        <div className="min-h-screen bg-gray-900 pl-5 pr-5 pt-1 flex flex-col gap-6">

            <div className="text-center ">
                <h1 className="text-4xl sm:text-5xl font-semibold text-white mt-1">
                    Create Your Custom{" "}
                    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-700">
                        Interview Plan
                    </span>
                </h1>
                <p className=" text-gray-300">
                    Build a plan tailored to your career goals and strengths.
                </p>
            </div>

            <div className="border-2 border-gray-500 rounded-xl bg-gray-800 pt-5 pl-9 pr-9 pb-1 flex flex-col md:flex-row gap-10">

                <div className="flex flex-col flex-1 gap-6 ">
                    <label htmlFor="jobDescription" className="text-white mb-2 font-semibold text-xl">
                        🔴  Target Job Description
                    </label>
                    <textarea
                        onChange={(e) => setjobDescription(e.target.value)}
                        id="jobDescription"
                        name="jobDescription"
                        value={jobDescription}
                        placeholder="Enter Job description here"
                        className="p-3 rounded-md bg-gray-700 text-white focus:outline-none h-130 focus:ring-2 focus:ring-blue-300 h-48 w-full resize-none"

                    />
                </div>

                <div className="flex flex-col flex-1 gap-6">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="resume" className="text-white mb-2 font-semibold">
                            🔴 Upload Resume
                        </label>
                        <label
                            htmlFor="resume"
                            className="text-white text-lg h-27 flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-400 rounded-xl bg-gradient-to-r from-gray-600 to-gray-800 cursor-pointer text-gray-900 font-medium text-center"
                        >
                            Choose File or Drag & Drop
                        </label>
                        <input
                            type="file"
                            accept="application/pdf"
                            ref={fileRef}
                            id="resume"
                            name="resume"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files[0]
                                if (file) setResumeName(file.name)
                            }}
                        />
                        {resumeName && (
                            <span className="text-green-400 text-sm">{resumeName}</span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="selfDescription" className="text-white mb-2 font-semibold">
                            🔴 Self Description
                        </label>
                        <textarea
                            onChange={(e) => setSelfDescription(e.target.value)}
                            value={selfDescription}
                            id="selfDescription"
                            name="selfDescription"
                            placeholder="Enter Self description here"
                            className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 h-48 w-full resize-none"
                        />
                    </div>

                    <button
                        onClick={HandleResponseReport}
                        className="mt-4 p-3 rounded-xl font-semibold text-black text-lg bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-red-600 transition">
                        {loading ? "Generating..." : "Generate Interview Data"}
                    </button>
                </div>
            </div>

            <div className="text-white border-2 border-gray-500 rounded-xl">
                {reports && reports.map((h, i) => (
                    <Card key={i} data={h} />
                ))}
            </div>
        </div>

    );
};

export default Home;