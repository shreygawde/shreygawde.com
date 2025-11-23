import React, { useEffect, useState } from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Music from './pages/Music.jsx'
import Contact from './pages/Contact.jsx'
import Navigation from './assets/components/Navigation.jsx';
import Foot from './assets/components/Foot.jsx';

export default function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen">
    

      <div
        className="fixed pointer-events-none z-[100]"
        style={{
          top: pos.y,
          left: pos.x,
          width: 150,
          height: 150,
          marginLeft: -75,
          marginTop: -75,
          borderRadius: "50%",
          background: "rgba(8,0,255,0.77)",
          filter: "blur(30px)",
          mixBlendMode: "screen",
          animation: "pulse 2s infinite",
          
        }}
      ></div>
      <img
        src="/flashlight.png"
        alt="Flashlight cursor"
        className="fixed pointer-events-none z-[112]"
        style={{
          top: pos.y,
          left: pos.x,
          transform: "translate(-50%, -50%)",
          width: "32px",
          height: "32px",
          
        }}
      />
      
          <Router>
            <Navigation/>
            <main className="px-0 py-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/music" element={<Music />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
             <Foot />
          </Router>
          
         </div>
        
       
  );
}
