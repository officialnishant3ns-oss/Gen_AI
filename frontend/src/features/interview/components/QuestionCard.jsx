import React from 'react'

const QuestionCard = ({q}) => {
  return (
     <div className="bg-gray-800 p-5 rounded-xl shadow mb-4">
            <h3 className="font-semibold text-amber-400 text-lg">{q.question}</h3>

            <p className="mt-2 text-gray-300">
                <span className="text-red-400 font-semibold">Intention:</span> {q.intention}
            </p>

            <p className="mt-2 text-gray-300">
                <span className="text-green-400 font-semibold">Answer:</span> {q.answer}
            </p>
        </div>
  )
}

export default QuestionCard
