import React from "react"

const Loader = ({ fullScreen = true, text = "Loading..." }) => {
  return (
    <div
      className={`${
        fullScreen ? "fixed inset-0" : "w-full h-full"
      } flex flex-col items-center justify-center bg-gray-900`}
    >
      <div className="w-14 h-14 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>

      {text && (
        <p className="mt-4 text-gray-600 text-sm tracking-wide">
          {text}
        </p>
      )}
    </div>
  )
}

export default Loader