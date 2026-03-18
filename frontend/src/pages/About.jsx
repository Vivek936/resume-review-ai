import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-10 py-10">

      <h1 className="text-4xl font-bold text-center text-purple-400">
        About ResumeAI
      </h1>

      <p className="text-center mt-4 text-gray-400 max-w-2xl mx-auto">
        ResumeAI is an AI-powered platform designed to help job seekers improve
        their resumes with real-time feedback, ATS scoring, and smart suggestions.
      </p>

      {/* Sections */}
      <div className="mt-16 grid md:grid-cols-2 gap-10">

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-400">Our Mission</h2>
          <p className="mt-3 text-gray-400">
            Our mission is to make job applications easier by helping users
            create resumes that stand out and get shortlisted faster.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-400">Our Vision</h2>
          <p className="mt-3 text-gray-400">
            We aim to revolutionize hiring by using AI to bridge the gap between
            candidates and recruiters.
          </p>
        </div>

      </div>

      {/* Extra Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-purple-400">
          Why Choose Us?
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <span className="bg-gray-800 px-6 py-3 rounded-xl">AI Powered</span>
          <span className="bg-gray-800 px-6 py-3 rounded-xl">Fast Analysis</span>
          <span className="bg-gray-800 px-6 py-3 rounded-xl">User Friendly</span>
        </div>
      </div>

    </div>
  );
}