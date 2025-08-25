// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="font-sans">
//       <Navbar onStartAssessment={() => setSidebarOpen(true)} />
//       <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

//       <Routes>
//         <Route path="/" element={<Home onStartAssessment={() => setSidebarOpen(true)} />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Home from "./pages/Home";
// import HealthAssessment from "./pages/HealthAssessment";
// import MedicationGuide from "./pages/MedicationGuide";
// import HospitalFinder from "./pages/HospitalFinder";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Sidebar from "./components/Sidebar";

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <Router>
//       {/* Sidebar */}
//       <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home onStartAssessment={() => setSidebarOpen(true)} />} />
//         <Route path="/health-assessment" element={<HealthAssessment />} />
//         <Route path="/medication-guide" element={<MedicationGuide />} />
//         <Route path="/hospital-finder" element={<HospitalFinder />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

// Import your pages
import Home from "./pages/Home";
import HealthAssessment from "./pages/HealthAssessment";
import MedicationGuide from "./pages/MedicationGuide";
import HospitalFinder from "./pages/HospitalFinder";
import Profile from "./pages/MyProfile";
import HealthHistory from "./pages/HealthHistory";
import Appointments from "./pages/Appointments";
import Emergency from "./pages/Emergency";
import HealthArticals from "./pages/HealthArticals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HealthAdvice from "./pages/Health-service";
import './App.css'
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <button
        className="p-2 m-4 bg-green-600 text-white rounded"
        onClick={() => setSidebarOpen(true)}
      >
        Open Menu
      </button>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<HealthAssessment />} />
           <Route path="/medication-guide" element={<MedicationGuide />} />
           <Route path="/hospital-finder" element={<HospitalFinder />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<HealthHistory />} />
          <Route path="/appointments" element={<Appointments />} />
           <Route path="/emergency" element={<Emergency />} /> 
          <Route path="/articles" element={<HealthArticals />} /> 
          <Route path="/about" element={<About />} />
      
          <Route path="/contact" element={<Contact />} />
          <Route path="/health-service" element={<HealthAdvice />} />
          
        </Routes>
      </div>
    </Router>
  );
}
