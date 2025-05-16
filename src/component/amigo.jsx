import React from "react";
import Pic from "../assets/pic.png"
import { useNavigate, Link } from "react-router-dom";

export default function AmigoCloneUI() {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/camera")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-700 text-white font-sans">
      <header className="flex justify-between items-center p-6 bg-slate-800/70 backdrop-blur-md shadow-md z-40">
        <h1 className="text-2xl font-bold text-blue-400">DeloAI</h1>
        <nav className="space-x-6 hidden md:block">
          <Link to="#features" className="hover:text-blue-300">Photo</Link>
          <Link to="#demo" className="hover:text-blue-300">Call</Link>
          <Link to="#contact" className="hover:text-blue-300">Swap</Link>
        </nav>
        <button onClick={handleClick} className="bg-gradient-to-r from-blue-500 
        to-indigo-500 px-4 py-2 rounded-full text-white shadow-md hover:scale-105 transition">Get Started</button>
      </header>

      <main className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 gap-12">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">AI FaceSwap Video Chat</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Chat, swap faces in real time, and have fun with AI magic in live video calls.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-3 rounded-full text-white shadow-lg hover:scale-105 transition">Try Demo</button>
        </div>

        <div className="flex-1">
          <div className="relative w-full max-w-lg z-10">
            <img
              src={Pic}
              alt="Face Swap Demo"
              className="w-full max-w-md mx-auto rounded-3xl shadow-xl border border-blue-400"
            />
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-center py-6 mt-12 text-sm text-slate-400">
        &copy; 2025 Delo AI Clone. Built for Swapping face making video calls intriguing.
      </footer>
    </div>
  );
}