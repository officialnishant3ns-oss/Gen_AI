import React, { useContext, useEffect, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import useInterview from '../hooks/useInterview'
import { useParams } from 'react-router'
import Loader from '../../auth/components/Loader'

const Response = () => {
    const { report, getReportById, loading } = useInterview()
    const [tab, setTab] = useState("technical")

    const { id } = useParams()
    useEffect(() => {
        if (!id) return
        getReportById(id)
    }, [id]
    )
    if (loading) {
        return <Loader />
    }

    return (
        <div className='grid grid-cols-[290px_1fr_319px] h-screen text-white gap-1 p-2 bg-gradient-to-r from-gray-800 to-gray-900'>
            <div className="bg-gray-900 rounded-xl shadow p-4">
                <div className="flex items-center gap-2 mb-4">
                    <img
                        src="https://img.icons8.com/?size=100&id=nOtuLRvxfgru&format=png&color=8B5CF6"
                        alt="PrepAI"
                        className="w-8 h-8"
                    />
                    <h2 className="text-xl font-semibold text-purple-400">PrepAI</h2>
                </div>
                <button
                    onClick={() => setTab('technical')}
                    className="group w-full mb-2 p-3 rounded-xl bg-gray-800 hover:bg-purple-600 flex items-center gap-3 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-5 h-5 text-gray-300 group-hover:text-white"
                    >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M9 10l-3 2 3 2M15 10l3 2-3 2M11 16l2-8" />
                    </svg>

                    <span className="text-gray-300 group-hover:text-white">
                        Technical Questions
                    </span>
                </button>

                <button
                    onClick={() => setTab('behavioural')}
                    className="group w-full mb-2 p-3 rounded-xl bg-gray-800 hover:bg-purple-600 flex items-center gap-3 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-5 h-5 text-gray-300 group-hover:text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-6l-4 3V6a2 2 0 012-2h6"
                        />
                    </svg>

                    <span className="text-gray-300 group-hover:text-white">
                        Behavioral Questions
                    </span>
                </button>

                <button
                    onClick={() => setTab('skillGap')}
                    className="group w-full mb-2 p-3 rounded-xl bg-gray-800 hover:bg-purple-600 flex items-center gap-3 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-5 h-5 text-gray-300 group-hover:text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5h6M9 9h6M9 13h6M5 5h.01M5 9h.01M5 13h.01M5 17h.01M9 17h6"
                        />
                    </svg>

                    <span className="text-gray-300 group-hover:text-white">
                        Preparation Plan
                    </span>
                </button>
            </div>

            <div className=" rounded-xl shadow p-4 overflow-y-auto  bg-gradient-to-r from-gray-900 to-black">
                <div>
                    {tab === 'technical' && <h1 className='mb-3 indent-2 text-purple-400 text-2xl font-semibold'>Technical Question</h1>}
                    {tab === 'behavioural' && <h1 className='mb-3 indent-2 text-purple-400 text-2xl font-semibold'>Behavioural Question</h1>}
                    {tab === 'skillGap' && <h1 className='mb-3 indent-2 text-purple-400 text-2xl font-semibold'>Preparation Plan For Interview</h1>}
                </div>
                {tab === "technical" &&
                    report?.technicalQuestion?.map((q, i) => (
                        <QuestionCard key={i} q={q} />
                    ))}
                {tab === "behavioural" &&
                    report?.behaviouralQuestion?.map((q, i) => (
                        <QuestionCard key={i} q={q} />
                    ))}

                {tab === 'skillGap' &&
                    report?.preparationPlan?.map((p) => (
                        <div key={p.day} className="bg-gray-800 p-5 rounded-xl shadow mb-4 ">
                            <div className='flex align-center gap-5'>
                                <h3 className="font-semibold text-xl  text-red-400">Day {p.day}</h3>
                                <p className=" text-amber-400">{p.focus}</p>
                            </div>
                            <div className="mt-3 space-y-2">
                                {p.tasks.map((v, i) => {
                                    return (
                                        <p key={i} className="text-gray-200 flex items-center gap-2">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4">
                                                <circle cx="12" cy="12" r="6" fill="#8B5CF6" />
                                                <circle cx="12" cy="12" r="10" fill="#8B5CF6" opacity="0.2" />
                                            </svg>

                                            {v}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
            </div>

            <div className="bg-gray-900 rounded-xl shadow-lg p-3">
                <div className="mb-6">
                    <h2 className="text-gray-400 font-semibold uppercase tracking-wide">
                        Match Score
                    </h2>
                    <p className="text-3xl font-bold text-purple-400">
                        {report?.matchScore}%
                    </p>
                </div>
                <div className="space-y-3">
                    <h3 className="text-purple-200 font-semibold text-lg mb-2">
                        Skill Gaps
                    </h3>

                    {report?.skillGaps?.map((s, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 hover:bg-gray-750 transition p-4 rounded-lg flex justify-between items-center mb-2"
                        >
                            <span className="text-gray-200 font-medium">
                                {s.skill}
                            </span>

                            <span
                                className={`px-3 capitalize py-1 rounded-full text-xs font-semibold 
                           ${s.severity === "easy" ? "bg-green-500/20 text-green-400" : ""}
                           ${s.severity === "medium" ? "bg-yellow-500/20 text-yellow-400" : ""}
                           ${s.severity === "high" ? "bg-red-500/20 text-red-400" : ""}
                          `}
                            >
                                {s.severity}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Response
