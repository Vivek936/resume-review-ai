import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5">
        <h1 className="text-2xl font-bold text-purple-400">ResumeAI</h1>
        <div className="space-x-6">
          <a href="/" className="hover:text-purple-400">Home</a>
          <a href="/about" className="hover:text-purple-400">About</a>
          <button className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600">
           <Link to="/login" >Login</Link> 
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Analyze. Improve. <span className="text-purple-400">Get Hired.</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl">
          Make your resume smarter with AI-powered insights, ATS scoring,
          and real-time feedback to stand out from the crowd.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-purple-500 px-6 py-3 rounded-xl hover:bg-purple-600 shadow-lg">
            <Link to="/upload">Upload Resume</Link>
          </button>
          <button className="border border-gray-500 px-6 py-3 rounded-xl hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-24 px-10 grid md:grid-cols-3 gap-8">

        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-purple-400">ATS Score</h3>
          <p className="mt-2 text-gray-400">
            Get real-time ATS score and know how recruiters see your resume.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-purple-400">AI Suggestions</h3>
          <p className="mt-2 text-gray-400">
            Improve your resume with smart AI-based recommendations.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-purple-400">Skill Analysis</h3>
          <p className="mt-2 text-gray-400">
            Identify missing skills and boost your profile instantly.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center mt-20 pb-10 text-gray-500">
        © 2026 ResumeAI. All rights reserved. created by Vivek-Kumar
      </div>

    </div>
  );
}
