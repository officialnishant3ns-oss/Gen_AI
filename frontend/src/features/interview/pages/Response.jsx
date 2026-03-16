import React, { useContext, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import { InterviewContext } from '../Interview.context'

const Response = () => {
    // const data = {
    //     "matchScore": 85,
    //     "technicalQuestion": [
    //         {
    //             "question": "Explain the reconciliation process in React and how the Virtual DOM improves performance.",
    //             "intention": "To assess deep understanding of React internals beyond basic usage.",
    //             "answer": "React creates a Virtual DOM tree. When state changes, a new tree is created. The 'diffing' algorithm compares the new tree with the previous one. It identifies the minimum number of changes needed and batches updates to the real DOM to minimize expensive layout recalculations."
    //         },
    //         {
    //             "question": "How do you handle large-scale data migrations or schema changes in a production MongoDB environment?",
    //             "intention": "To evaluate experience with database reliability and production-grade maintenance.",
    //             "answer": "I use a versioned migration strategy. This involves writing migration scripts (using tools like 'migrate-mongo'), performing 'expand and contract' patterns where the code supports both old and new schemas simultaneously, and always backing up data before execution."
    //         },
    //         {
    //             "question": "Describe how you would design a rate-limiting middleware in Express.js for a public API.",
    //             "intention": "To test knowledge of Node.js middleware, security, and system design.",
    //             "answer": "I would use a sliding window counter or token bucket algorithm. I'd implement it as a middleware using a fast-access store like Redis to track IP addresses and request counts, returning a 429 status code when limits are exceeded."
    //         }
    //     ],
    //     "behaviouralQuestion": [
    //         {
    //             "question": "Describe a time you had to balance building a new feature with fixing technical debt. How did you prioritize?",
    //             "intention": "To evaluate judgment, communication, and understanding of long-term project health.",
    //             "answer": "I categorize debt into 'high-impact' and 'low-impact.' I communicate the risks of debt to stakeholders, proposing a 20% allocation of sprint time to refactoring critical paths while ensuring feature delivery targets are met."
    //         },
    //         {
    //             "question": "Tell me about a complex technical challenge you solved and how you explained it to non-technical stakeholders.",
    //             "intention": "To test problem-solving skills and the ability to bridge the gap between engineering and business.",
    //             "answer": "I focus on the 'Why' and the 'Impact' rather than the 'How.' For instance, when optimizing a slow database query, I explain it as 'reducing the time customers wait for their dashboard' rather than discussing indexing strategies."
    //         }
    //     ],
    //     "skillGaps": [
    //         {
    //             "skill": "Cloud Deployment (AWS/Azure/GCP)",
    //             "severity": "high"
    //         },
    //         {
    //             "skill": "System Design Patterns",
    //             "severity": "medium"
    //         },
    //         {
    //             "skill": "Unit and Integration Testing (Jest/Cypress)",
    //             "severity": "medium"
    //         }
    //     ],
    //     "preparationPlan": [
    //         {
    //             "day": 1,
    //             "focus": "Cloud Deployment & DevOps",
    //             "tasks": [
    //                 "Study Docker basics and containerizing a MERN app",
    //                 "Review CI/CD pipeline concepts (GitHub Actions/CircleCI)",
    //                 "Research AWS services like EC2, S3, and Lambda"
    //             ]
    //         },
    //         {
    //             "day": 2,
    //             "focus": "System Design & Scalability",
    //             "tasks": [
    //                 "Study Load Balancers, Caching (Redis), and Horizontal vs Vertical scaling",
    //                 "Practice drawing architectural diagrams for a scalable social media feed",
    //                 "Review CAP theorem and its application to MongoDB"
    //             ]
    //         },
    //         {
    //             "day": 3,
    //             "focus": "Clean Code & Testing",
    //             "tasks": [
    //                 "Refactor a previous project using SOLID principles",
    //                 "Write unit tests for a Node.js controller using Jest",
    //                 "Review React Design Patterns (HOCs, Render Props, Custom Hooks)"
    //             ]
    //         },
    //         {
    //             "day": 4,
    //             "focus": "Deep Dive Node.js & MongoDB",
    //             "tasks": [
    //                 "Study Node.js Event Loop and Thread Pool",
    //                 "Review MongoDB indexing strategies and aggregation frameworks",
    //                 "Practice advanced SQL vs NoSQL trade-off discussions"
    //             ]
    //         },
    //         {
    //             "day": 5,
    //             "focus": "Mock Interviews & Soft Skills",
    //             "tasks": [
    //                 "Practice the STAR method for behavioural questions",
    //                 "Record a mock technical explanation of your most complex project",
    //                 "Prepare questions to ask the interviewer about their engineering culture"
    //             ]
    //         }
    //     ],
    // }
    const {} = useContext(InterviewContext)

    const [tab, setTab] = useState("technical")
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
                    data.technicalQuestion.map((q, i) => (
                        <QuestionCard key={i} q={q} />
                    ))}
                {tab === "behavioural" &&
                    data.behaviouralQuestion.map((q, i) => (
                        <QuestionCard key={i} q={q} />
                    ))}

                {tab === 'skillGap' &&
                    data.preparationPlan.map((p) => (
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
                        {data.matchScore}%
                    </p>
                </div>
                <div className="space-y-3">
                    <h3 className="text-purple-200 font-semibold text-lg mb-2">
                        Skill Gaps
                    </h3>

                    {data.skillGaps.map((s, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 hover:bg-gray-750 transition p-4 rounded-lg flex justify-between items-center mb-2"
                        >
                            <span className="text-gray-200 font-medium">
                                {s.skill}
                            </span>

                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400">
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
