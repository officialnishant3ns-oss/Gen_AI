import React, { useState } from "react";

const Home = () => {
    const [resumeName, setResumeName] = useState("");

    return (
        <div className="min-h-screen bg-gray-900 p-7 flex flex-col gap-6">

            <div className="text-center mb-2 mt-3">
                <h1 className="text-4xl sm:text-5xl font-semibold text-white">
                    Create Your Custom{" "}
                    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-600">
                        Interview Plan
                    </span>
                </h1>
                <p className="mt-2 text-gray-300">
                    Build a plan tailored to your career goals and strengths.
                </p>
            </div>

            <div className="border-2 border-gray-500 rounded-xl bg-gray-800 p-7 flex flex-col md:flex-row gap-10">

                <div className="flex flex-col flex-1 gap-6 ">
                    <label htmlFor="jobDescription" className="text-white mb-2 font-semibold text-xl">
                        🔴  Target Job Description
                    </label>
                    <textarea
                        id="jobDescription"
                        name="jobDescription"
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
                            className="text-white text-lg h-27  w-120 flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-400 rounded-xl bg-gradient-to-r from-gray-600 to-gray-800 cursor-pointer text-gray-900 font-medium text-center"
                        >
                            Choose File or Drag & Drop
                        </label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            className="hidden"
                            onChange={(e) => setResumeName(e.target.files[0]?.name || "")}
                        />
                        {resumeName && (
                            <span className="text-sm text-white break-all">{resumeName}</span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="selfDescription" className="text-white mb-2 font-semibold">
                            🔴 Self Description
                        </label>
                        <textarea
                            id="selfDescription"
                            name="selfDescription"
                            placeholder="Enter Self description here"
                            className="p-3 h-70 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 h-48 w-full resize-none"
                        />
                    </div>

                    <button className="mt-4 p-3 rounded-xl font-semibold text-black text-lg bg-gradient-to-r from-blue-400 to-red-500 hover:from-blue-500 hover:to-red-600 transition">
                        Generate Interview Data
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;