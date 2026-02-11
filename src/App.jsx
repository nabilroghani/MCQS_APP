import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Layout/Navbar'

const App = () => {
  return (
    <div>
      {/* Navbar ko Routes se bahar rakha hai taake ye har page par dikhe */}
      <Navbar />

      <main>
        <Routes>
          {/* Har path ke liye alag component/page yahan aayega */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/app" element={<PakApp />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/past-papers" element={<PastPapers />} />
          <Route path="/submit" element={<SubmitMcqs />} />
        </Routes>
      </main>
    </div>
  )
}

// Dummy Components 
const Home = () => <div className="p-10 text-center text-2xl">Home Page - Welcome to PakMCQS</div>;
const About = () => <div className="p-10 text-center text-2xl">About Us Page</div>;
const Contact = () => <div className="p-10 text-center text-2xl">Contact Us Page</div>;
const PakApp = () => <div className="p-10 text-center text-2xl">Download Our App</div>;
const Quiz = () => <div className="p-10 text-center text-2xl">Start Quiz Section</div>;
const PastPapers = () => <div className="p-10 text-center text-2xl">Past Papers Collection</div>;
const SubmitMcqs = () => <div className="p-10 text-center text-2xl">Submit Your MCQs</div>;

export default App