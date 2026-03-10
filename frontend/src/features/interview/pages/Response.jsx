import React, { useState } from 'react'

const Response = () => {
    const data = {
        "matchScore": 85,
        "technicalQuestion": [
            {
                "question": "Explain the reconciliation process in React and how the Virtual DOM improves performance.",
                "intention": "To assess deep understanding of React internals beyond basic usage.",
                "answer": "React creates a Virtual DOM tree. When state changes, a new tree is created. The 'diffing' algorithm compares the new tree with the previous one. It identifies the minimum number of changes needed and batches updates to the real DOM to minimize expensive layout recalculations."
            },
            {
                "question": "How do you handle large-scale data migrations or schema changes in a production MongoDB environment?",
                "intention": "To evaluate experience with database reliability and production-grade maintenance.",
                "answer": "I use a versioned migration strategy. This involves writing migration scripts (using tools like 'migrate-mongo'), performing 'expand and contract' patterns where the code supports both old and new schemas simultaneously, and always backing up data before execution."
            },
            {
                "question": "Describe how you would design a rate-limiting middleware in Express.js for a public API.",
                "intention": "To test knowledge of Node.js middleware, security, and system design.",
                "answer": "I would use a sliding window counter or token bucket algorithm. I'd implement it as a middleware using a fast-access store like Redis to track IP addresses and request counts, returning a 429 status code when limits are exceeded."
            }
        ],
        "behaviouralQuestion": [
            {
                "question": "Describe a time you had to balance building a new feature with fixing technical debt. How did you prioritize?",
                "intention": "To evaluate judgment, communication, and understanding of long-term project health.",
                "answer": "I categorize debt into 'high-impact' and 'low-impact.' I communicate the risks of debt to stakeholders, proposing a 20% allocation of sprint time to refactoring critical paths while ensuring feature delivery targets are met."
            },
            {
                "question": "Tell me about a complex technical challenge you solved and how you explained it to non-technical stakeholders.",
                "intention": "To test problem-solving skills and the ability to bridge the gap between engineering and business.",
                "answer": "I focus on the 'Why' and the 'Impact' rather than the 'How.' For instance, when optimizing a slow database query, I explain it as 'reducing the time customers wait for their dashboard' rather than discussing indexing strategies."
            }
        ],
        "skillGaps": [
            {
                "skill": "Cloud Deployment (AWS/Azure/GCP)",
                "severity": "high"
            },
            {
                "skill": "System Design Patterns",
                "severity": "medium"
            },
            {
                "skill": "Unit and Integration Testing (Jest/Cypress)",
                "severity": "medium"
            }
        ],
        "preparationPlan": [
            {
                "day": 1,
                "focus": "Cloud Deployment & DevOps",
                "tasks": [
                    "Study Docker basics and containerizing a MERN app",
                    "Review CI/CD pipeline concepts (GitHub Actions/CircleCI)",
                    "Research AWS services like EC2, S3, and Lambda"
                ]
            },
            {
                "day": 2,
                "focus": "System Design & Scalability",
                "tasks": [
                    "Study Load Balancers, Caching (Redis), and Horizontal vs Vertical scaling",
                    "Practice drawing architectural diagrams for a scalable social media feed",
                    "Review CAP theorem and its application to MongoDB"
                ]
            },
            {
                "day": 3,
                "focus": "Clean Code & Testing",
                "tasks": [
                    "Refactor a previous project using SOLID principles",
                    "Write unit tests for a Node.js controller using Jest",
                    "Review React Design Patterns (HOCs, Render Props, Custom Hooks)"
                ]
            },
            {
                "day": 4,
                "focus": "Deep Dive Node.js & MongoDB",
                "tasks": [
                    "Study Node.js Event Loop and Thread Pool",
                    "Review MongoDB indexing strategies and aggregation frameworks",
                    "Practice advanced SQL vs NoSQL trade-off discussions"
                ]
            },
            {
                "day": 5,
                "focus": "Mock Interviews & Soft Skills",
                "tasks": [
                    "Practice the STAR method for behavioural questions",
                    "Record a mock technical explanation of your most complex project",
                    "Prepare questions to ask the interviewer about their engineering culture"
                ]
            }
        ],
    }

    const [tab, setTab] = useState("technical")
    return (
        <div className='grid grid-cols-[290px_1fr_319px] h-screen text-white gap-6 p-6 bg-gradient-to-r from-gray-800 to-gray-900'>
            {/* left */}
            <div className="bg-gray-900 rounded-xl shadow p-4">
                <h2 className="text-lg  font-semibold mb-4">Sections</h2>
                <button
                    onClick={() => setTab('technical')}
                    className="w-full mb-2 p-2 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer"
                >
                    Technical Questions
                </button>
                <button
                    onClick={() => setTab('behavioural')}
                    className="w-full mb-2 p-2 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer"
                >
                    Behavioral Questions
                </button>
                <button
                    onClick={() => setTab('skillGap')}
                    className="w-full mb-2 p-2 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer"
                >
                    Preparation Plan
                </button>
            </div>

            {/* middle */}
            <div className="bg-gray-900 rounded-xl shadow p-4 overflow-y-auto">

                {tab === "technical" &&
                    data.technicalQuestion.map((q, i) => (
                        <div key={i} className="bg-gray-800 p-5 rounded-xl shadow mb-4">
                            <h3 className="font-semibold  text-amber-200 text-lg">{q.question}</h3>

                            <p className="mt-2 text-gray-300">
                                <span className="font-semibold"><span className='text-red-400 font-semibold'>Intention:</span></span> {q.intention}
                            </p>

                            <p className="mt-2 text-gray-300">
                                <span className="font-semibold"><span className='text-red-400 font-semibold'>Answer:</span></span> {q.answer}
                            </p>
                        </div>
                    ))}
                {tab === "behavioural" &&
                    data.behaviouralQuestion.map((q, i) => (
                        <div key={i} className="bg-gray-800 p-5 rounded-xl shadow mb-4">
                            <h3 className="font-semibold  text-amber-200 text-lg">{q.question}</h3>

                            <p className="mt-2 text-gray-300">
                                <span className="font-semibold"><span className='text-red-400 font-semibold'>Intention:</span></span> {q.intention}
                            </p>

                            <p className="mt-2 text-gray-300">
                                <span className="font-semibold"><span className='text-red-400 font-semibold'>Answer:</span></span> {q.answer}
                            </p>
                        </div>
                    ))}
                {tab === 'skillGap' &&
                    data.preparationPlan.map((p) => (
                        <div key={p.day} className="bg-gray-800 p-5 rounded-xl shadow mb-4 ">
                            <div className='flex align-center gap-5'>
                                <h3 className="font-semibold text-xl  text-red-400">Day {p.day}</h3>
                                <p className=" text-amber-300">{p.focus}</p>
                            </div>
                            <div className="mt-3 space-y-2">
                                {p.tasks.map((v, i) => {
                                    return (
                                        <p key={i} className="text-gray-200 ">
                                            🔴  {v}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
            </div>

            <div className="bg-gray-900 rounded-xl shadow-lg p-6">
                <div className="mb-6">
                    <h2 className="text-gray-400 text-sm uppercase tracking-wide">
                        Match Score
                    </h2>
                    <p className="text-3xl font-bold text-green-400">
                        {data.matchScore}%
                    </p>
                </div>
                <div className="space-y-3">
                    <h3 className="text-white font-semibold text-lg mb-2">
                        Skill Gaps
                    </h3>

                    {data.skillGaps.map((s, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-3 rounded-lg flex justify-between items-center"
                        >
                            <span className="text-gray-200 font-medium">
                                {s.skill}
                            </span>

                            <span className="text-red-400 text-sm font-semibold">
                                🔴 {s.severity}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Response
