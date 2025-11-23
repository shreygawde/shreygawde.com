import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shrey from "./pages/Shrey"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Music from "./pages/Music";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shrey><Home /></Shrey>} />
        <Route path="/shrey" element={<Shrey />} />
        <Route path="/about" element={<Shrey><About /></Shrey>} />
        <Route path="/projects" element={<Shrey><Projects /></Shrey>} />
        <Route path="/music" element={<Shrey><Music /></Shrey>} />
        <Route path="/contact" element={<Shrey><Contact /></Shrey>} />
      </Routes>
    </Router>
  );
}
