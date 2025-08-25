// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import { Home, Activity, Pill, MapPin, User, FileText, Calendar, Heart, Book, Info, Phone } from "lucide-react";

// // // export default function Sidebar() {
// // //   return (
// // //     <div className="w-64 bg-white shadow h-screen p-4 fixed">
// // //       <h1 className="text-xl font-bold mb-6">MedDirect</h1>

// // //       <p className="text-gray-500 uppercase text-xs mb-2">Main Services</p>
// // //       <nav className="flex flex-col gap-2 mb-4">
// // //         <Link to="/" className="flex items-center gap-2"><Home size={18}/> Home</Link>
// // //         <Link to="/dashboard" className="flex items-center gap-2"><Activity size={18}/> Health Assessment</Link>
// // //         <Link to="/medication-guide" className="flex items-center gap-2"><Pill size={18}/> Medication Guide</Link>
// // //         <Link to="/hospital-finder" className="flex items-center gap-2"><MapPin size={18}/> Hospital Finder</Link>
// // //       </nav>

// // //       <p className="text-gray-500 uppercase text-xs mb-2">Personal</p>
// // //       <nav className="flex flex-col gap-2 mb-4">
// // //         <Link to="#"><User size={18}/> My Profile</Link>
// // //         <Link to="#"><FileText size={18}/> Health History</Link>
// // //         <Link to="#"><Calendar size={18}/> Appointments</Link>
// // //         <Link to="#"><Heart size={18}/> Emergency</Link>
// // //       </nav>

// // //       <p className="text-gray-500 uppercase text-xs mb-2">Information</p>
// // //       <nav className="flex flex-col gap-2">
// // //         <Link to="#"><Book size={18}/> Health Articles</Link>
// // //         <Link to="/about"><Info size={18}/> About</Link>
// // //         <Link to="/contact"><Phone size={18}/> Contact</Link>
// // //       </nav>
// // //     </div>
// // //   );
// // // }
// // import React from "react";
// // import { X } from "lucide-react";
// // import { Link } from "react-router-dom";

// // export default function Sidebar({ open, onClose }) {
// //   return (
// //     <div
// //       className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
// //         open ? "opacity-100" : "opacity-0 pointer-events-none"
// //       }`}
// //     >
// //       <div
// //         className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg transform transition-transform ${
// //           open ? "translate-x-0" : "-translate-x-full"
// //         }`}
// //       >
// //         <div className="flex justify-between items-center p-4 border-b">
// //           <h2 className="text-lg font-bold">Health Assessment</h2>
// //           <button onClick={onClose}>
// //             <X size={20} />
// //           </button>
// //         </div>
// //         <ul className="p-4 space-y-4">
// //           <li><Link to="/" onClick={onClose}>🏠 Dashboard</Link></li>
// //           <li><Link to="/services" onClick={onClose}>🩺 Symptom Checker</Link></li>
// //           <li><Link to="/services" onClick={onClose}>💊 Medication Suggestions</Link></li>
// //           <li><Link to="/services" onClick={onClose}>🏥 Find Hospitals</Link></li>
// //           <li><Link to="/about" onClick={onClose}>ℹ About Us</Link></li>
// //           <li><Link to="/contact" onClick={onClose}>📞 Contact</Link></li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }
// // src/components/Sidebar.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   X,
//   Home,
//   Activity,
//   Pill,
//   MapPin,
//   User,
//   FileText,
//   Calendar,
//   Heart,
//   Book,
//   Info,
//   Phone
// } from "lucide-react";

// export default function Sidebar({ open, onClose }) {
//   const menuSections = [
//     {
//       title: "Main Services",
//       items: [
//         { name: "Home", icon: <Home size={18} />, path: "/" },
//         { name: "Health Assessment", icon: <Activity size={18} />, path: "/assessment" },
//         { name: "Medication Guide", icon: <Pill size={18} />, path: "/medication-guide" },
//         { name: "Hospital Finder", icon: <MapPin size={18} />, path: "/hospital-finder" }
//       ]
//     },
//     {
//       title: "Personal",
//       items: [
//         { name: "My Profile", icon: <User size={18} />, path: "/profile" },
//         { name: "Health History", icon: <FileText size={18} />, path: "/history" },
//         { name: "Appointments", icon: <Calendar size={18} />, path: "/appointments" },
//         { name: "Emergency", icon: <Heart size={18} />, path: "/emergency" }
//       ]
//     },
//     {
//       title: "Information",
//       items: [
//         { name: "Health Articles", icon: <Book size={18} />, path: "/articles" },
//         { name: "About", icon: <Info size={18} />, path: "/about" },
//         { name: "Contact", icon: <Phone size={18} />, path: "/contact" }
//       ]
//     }
//   ];

//   return (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
//         open ? "opacity-100" : "opacity-0 pointer-events-none"
//       }`}
//     >
//       <div
//         className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg transform transition-transform duration-300 ${
//           open ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-bold text-green-600">MedDirect</h2>
//           <button
//             onClick={onClose}
//             className="hover:bg-gray-100 p-1 rounded-full"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Navigation */}
//         <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-60px)]">
//           {menuSections.map((section, i) => (
//             <div key={i}>
//               <p className="text-gray-500 uppercase text-xs mb-2">
//                 {section.title}
//               </p>
//               <nav className="flex flex-col gap-2">
//                 {section.items.map((item, idx) => (
//                   <Link
//                     key={idx}
//                     to={item.path}
//                     onClick={onClose}
//                     className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
//                   >
//                     {item.icon}
//                     <span>{item.name}</span>
//                   </Link>
//                 ))}
//               </nav>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { X, Home, Activity, Pill, MapPin, User, FileText, Calendar, Heart, Book, Info, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  const menuSections = [
    {
      title: "Main Services",
      items: [
        { name: "Home", icon: <Home size={18} />, path: "/" },
        { name: "Health Assessment", icon: <Activity size={18} />, path: "/assessment" },
        { name: "Medication Guide", icon: <Pill size={18} />, path: "/medication-guide" },
        { name: "Hospital Finder", icon: <MapPin size={18} />, path: "/hospital-finder" }
      ]
    },
    {
      title: "Personal",
      items: [
        { name: "My Profile", icon: <User size={18} />, path: "/profile" },
        { name: "Health History", icon: <FileText size={18} />, path: "/history" },
        { name: "Appointments", icon: <Calendar size={18} />, path: "/appointments" },
        { name: "Emergency", icon: <Heart size={18} />, path: "/emergency" }
      ]
    },
    {
      title: "Information",
      items: [
        { name: "Health Articles", icon: <Book size={18} />, path: "/articles" },
        { name: "About", icon: <Info size={18} />, path: "/about" },
        { name: "Contact", icon: <Phone size={18} />, path: "/contact" }
      ]
    }
  ];

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-green-600">MedDirect</h2>
          <button onClick={onClose} className="hover:bg-gray-100 p-1 rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-60px)]">
          {menuSections.map((section, i) => (
            <div key={i}>
              <p className="text-gray-500 uppercase text-xs mb-2">{section.title}</p>
              <nav className="flex flex-col gap-2">
                {section.items.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
