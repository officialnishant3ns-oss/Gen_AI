import React from 'react'

const Card = ({ data }) => {
    return (
        <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-purple-400">
                {data?.jobDescription?.slice(0, 50)}...
            </h2>

            <p className="text-gray-300">
                Match Score: {data?.matchScore}%
            </p>
        </div>
    )
}

export default Card
