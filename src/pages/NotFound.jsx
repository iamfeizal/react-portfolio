import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <h1 className="text-7xl md:text-9xl font-bold text-cyan-300 drop-shadow-lg">404</h1>
      <h2 className="mt-4 text-3xl md:text-4xl font-light text-neutral-300">
        Oops! Page Not Found
      </h2>
      <p className="mt-4 text-lg text-gray-400 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
        <button onClick={() => navigate("/")} className="mt-8 my-10 max-w-xl bg-transparent hover:bg-cyan-500 text-cyan-300 font-semibold hover:text-neutral-300 py-2 px-6 border border-cyan-300 hover:border-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded inline-flex transition-all duration-300">
          Go Back Home
        </button>
    </div>
  )
}

export default NotFound