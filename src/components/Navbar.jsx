// // import { useState } from "react";
// // import React from "react";
// // export default function Navbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <nav className="bg-white shadow-md">
// //       <div className="container mx-auto px-4 flex justify-between items-center h-16">
// //         {/* Logo */}
// //         <div className="text-xl font-bold text-blue-600">MedDirect</div>

// //         {/* Desktop Menu */}
// //         <div className="hidden md:flex space-x-6">
// //           <a href="#services" className="hover:text-blue-500">Services</a>
// //           <a href="#about" className="hover:text-blue-500">About</a>
// //           <a href="#contact" className="hover:text-blue-500">Contact</a>
// //         </div>

// //         {/* Buttons */}
// //         <div className="hidden md:flex space-x-3">
// //           <button className="border border-blue-500 px-4 py-1 rounded hover:bg-blue-50">
// //             Sign In
// //           </button>
// //           <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
// //             Get Started
// //           </button>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <button
// //           onClick={() => setMenuOpen(!menuOpen)}
// //           className="md:hidden text-gray-700"
// //         >
// //           ☰
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {menuOpen && (
// //         <div className="md:hidden bg-white border-t p-4 space-y-3">
// //           <a href="#services">Services</a>
// //           <a href="#about">About</a>
// //           <a href="#contact">Contact</a>
// //           <div className="flex space-x-3">
// //             <button className="border border-blue-500 px-4 py-1 rounded">
// //               Sign In
// //             </button>
// //             <button className="bg-blue-500 text-white px-4 py-1 rounded">
// //               Get Started
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }





// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
//       <div className="flex items-center gap-2">
//         <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">
//           M
//         </div>
//         <span className="font-bold text-lg">MedDirect</span>
//       </div>
//       <div className="flex gap-6">
//         <Link to="/services">Services</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//       <div className="flex gap-3">
//         <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded">Sign In</button>
//         <button className="bg-blue-600 text-white px-4 py-1 rounded">Get Started</button>
//       </div>
//     </nav>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onStartAssessment }) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <div className="bg-green-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">M</div>
        <span className="text-xl font-bold text-gray-800">MedDirect</span>
      </div>
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <Link to="/services" className="hover:text-blue-600">Services</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
      <div className="flex gap-4">
        <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">Sign In</button>
        <button
          onClick={onStartAssessment}
          className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Start Assessment
        </button>
      </div>
    </nav>
  );
}
