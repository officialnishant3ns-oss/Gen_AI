import React from 'react'

const Response = () => {
    return (
        <div className='grid grid-cols-[290px_1fr_260px] h-screen text-white gap-6 p-6 bg-gradient-to-r from-gray-800 to-gray-900'>
            {/* left */}
            <div className="bg-gray-900 rounded-xl shadow p-4">
                <h2 className="text-lg  font-semibold mb-4">Sections</h2>
                <button
                    className="w-full mb-2 p-2 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer"
                >
                    Technical Questions
                </button>
                <button
                    className="w-full mb-2 p-2 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer"
                >
                    Behavioral Questions
                </button>
                <button
                    className="w-full mb-2 p-2 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer"
                >
                    Preparation Plan
                </button>
            </div>

            {/* middle */}
            <div className="bg-gray-900 rounded-xl shadow p-4">
ff
            </div>
            {/* right */}
            <div className="bg-gray-900 rounded-xl shadow p-4">
ff
            </div>
        </div>
    )
}

export default Response
