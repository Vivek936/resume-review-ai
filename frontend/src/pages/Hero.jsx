import React from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white">

            {/* Navbar */}
            <nav className="flex justify-between items-center px-10 py-6">
                <h1 className="text-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">Analyze | Improve | Get Hired</h1>

                <ul className="hidden md:flex gap-10 text-sm">
                    <li className="font-bold px-4 py-2 rounded-lg cursor-pointer 
                                     transition-all duration-300 
                                    hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500
                                    hover:shadow-lg"><Link to="/home">Home</Link></li>
                    <li className="font-bold px-4 py-2 rounded-lg cursor-pointer 
                                     transition-all duration-300 
                                    hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500
                                    hover:shadow-lg"><Link to="/history">History</Link></li>
                    <li className="font-bold px-4 py-2 rounded-lg cursor-pointer 
                                     transition-all duration-300 
                                    hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500
                                    hover:shadow-lg"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="font-bold px-4 py-2 rounded-lg cursor-pointer 
                                     transition-all duration-300 
                                    hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500
                                    hover:shadow-lg"><Link to="/about">About</Link></li>
                </ul>

                <div className="flex gap-4 items-center">
                    <button className="text-sm hover:text-green-400">
                    <Link to="/login">Log-In</Link> 
                    </button>

                    <button className="bg-green-500 px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition">
                        <Link to="/register">Registration</Link>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="grid md:grid-cols-2 items-center px-10 md:px-20 mt-10">

                {/* Left */}
                <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-600 to-red-600 bg-clip-text text-transparent leading-tight">
                        Turn Your Resume Into
                        <br /> A Job-Winning Machine
                    </h1>

                    <p className="font-bold bg-gradient-to-r from-orange-500 via-pink-600 to-red-600 bg-clip-text text-transparent mt-6 max-w-lg">
                        Stop guessing what recruiters want. Get instant insights, ATS scores, and actionable feedback to make your resume impossible to ignore.
                    </p>

                    <button className="mt-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-3 rounded-lg  font-extrabold text-black hover:text-green-400">
                       <Link to="/upload">Upload-Resume</Link>
                    </button>
                </div>

                {/* Right Illustration */}
                <div className="flex justify-center mt-10 md:mt-0">
                    <img
                        src="https://i.ibb.co/G3HjfBMd/centre.jpg"
                        alt="illustration"
                        className=" h-[280px] w-[310px]"
                    />
                </div>
            </div>

            {/* Company Logos */}
            <div className="bg-white rounded-t-3xl mt-20 py-10">
                <div className="flex justify-center gap-16 text-gray-600 font-semibold text-lg">
                    <span><img className="relative -top-9 left-0 w-32 h-20" src="https://i.ibb.co/spPTK6fF/intrax.jpg" alt="intrax" border="0"></img></span>
                    <span className="w-32 h-30 overflow-hidden"><img className="relative -top-12 left-1 " src="https://i.ibb.co/Kcg69mL5/Logitech.jpg" alt="Logitech" border="0"></img></span>
                    <span className="overflow-hidden relative left-9"><img className="relative -top-12 right-4 w-42 h-32" src="https://i.ibb.co/WXsLvdm/Dropbox.jpg" alt="Dropbox" border="0"></img></span>
                    <span className="overflow-hidden relative left-10 w-30"><img className="relative -top-9 right-14 w-52 h-30" src="https://i.ibb.co/Qv56khsk/Amazon.jpg" alt="Amazon" border="0"></img></span>
                    <span className=" relative right-12 overflow-hidden "><img className="relative right-5 -top-12 w-42 h-32" src="https://i.ibb.co/fz5ms6TF/Space-X.jpg" alt="Space-X" border="0"></img></span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
