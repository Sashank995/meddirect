// // import React from "react";
// // import { CheckCircle, MapPin } from "lucide-react";

// // export default function Home() {
// //   return (
// //     <div className="font-sans">
// //       {/* Navbar */}
// //       <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
// //         <div className="flex items-center gap-2">
// //           <div className="bg-green-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">M</div>
// //           <span className="text-xl font-bold text-gray-800">MedDirect</span>
// //         </div>
// //         <div className="hidden md:flex gap-8 text-gray-700 font-medium">
// //           <a href="#services" className="hover:text-blue-600">Services</a>
// //           <a href="#about" className="hover:text-blue-600">About</a>
// //           <a href="#contact" className="hover:text-blue-600">Contact</a>
// //         </div>
// //         <div className="flex gap-4">
// //           <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">Sign In</button>
// //           <button className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</button>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-r from-blue-50 to-green-50 px-8 py-16 flex flex-col md:flex-row items-center gap-10">
// //         <div className="flex-1">
// //           <h1 className="text-5xl font-bold text-gray-800">
// //             Your Health, <span className="text-green-600">Simplified</span>
// //           </h1>
// //           <p className="mt-4 text-gray-600 text-lg leading-relaxed">
// //             Get personalized health advice, medication suggestions for minor ailments, and find trusted hospitals near you.
// //             MedDirect empowers you to make informed health decisions conveniently and efficiently.
// //           </p>
// //           <div className="flex gap-4 mt-6">
// //             <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-semibold">
// //               Start Health Assessment
// //             </button>
// //             <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50">
// //               Find Hospitals Nearby
// //             </button>
// //           </div>
// //           <div className="flex gap-6 mt-6 text-sm text-gray-600 items-center">
// //             <span className="flex items-center gap-1 text-green-600">
// //               <CheckCircle size={16} /> Trusted by 50K+ users
// //             </span>
// //             <span className="flex items-center gap-1 text-blue-600">
// //               <MapPin size={16} /> Available 24/7
// //             </span>
// //           </div>
// //         </div>
// //         <div className="flex-1">
// //           <img
// //             src="https://img.freepik.com/free-photo/medical-technology-concept-with-doctor-using-digital-tablet_1232-4001.jpg"
// //             alt="Doctor"
// //             className="rounded-2xl shadow-lg"
// //           />
// //         </div>
// //       </section>

// //       {/* Services Section */}
// //       <section id="services" className="px-8 py-16 bg-white">
// //         <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
// //           Comprehensive Healthcare Services
// //         </h2>
// //         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
// //           Access three essential healthcare services designed to support your health journey from prevention to treatment and everything in between.
// //         </p>
// //         <div className="grid md:grid-cols-3 gap-8">
// //           {[
// //             {
// //               title: "Personalized Health Advice",
// //               desc: "Get tailored health recommendations based on your symptoms, medical history, and lifestyle.",
// //               features: ["Symptom assessment", "Lifestyle recommendations", "Preventive care tips", "Health monitoring"],
// //               button: "Get Health Advice"
// //             },
// //             {
// //               title: "Medication Suggestions",
// //               desc: "Receive evidence-based tablet and medication suggestions for minor ailments.",
// //               features: ["Minor ailment treatment", "Dosage guidance", "Drug interactions", "Alternative options"],
// //               button: "Find Medications"
// //             },
// //             {
// //               title: "Hospital Recommendations",
// //               desc: "Locate nearby hospitals, clinics, and healthcare facilities based on your location.",
// //               features: ["Location-based search", "Specialty matching", "Emergency services", "Reviews & ratings"],
// //               button: "Find Hospitals"
// //             }
// //           ].map((service, index) => (
// //             <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
// //               <div className="text-center">
// //                 <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
// //                 <p className="text-gray-600 mt-2">{service.desc}</p>
// //               </div>
// //               <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
// //                 {service.features.map((feat, i) => (
// //                   <li key={i}>{feat}</li>
// //                 ))}
// //               </ul>
// //               <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
// //                 {service.button}
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-gray-800 text-white px-8 py-12">
// //         <div className="grid md:grid-cols-4 gap-8">
// //           <div>
// //             <div className="flex items-center gap-2 mb-4">
// //               <div className="bg-green-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">M</div>
// //               <span className="text-lg font-bold">MedDirect</span>
// //             </div>
// //             <p className="text-gray-300 text-sm">
// //               Empowering you to make informed health decisions with personalized advice, medication suggestions, and hospital recommendations.
// //             </p>
// //           </div>
// //           <div>
// //             <h4 className="font-bold mb-3">Services</h4>
// //             <ul className="text-gray-300 text-sm space-y-2">
// //               <li>Health Advice</li>
// //               <li>Medication Finder</li>
// //               <li>Hospital Locator</li>
// //               <li>Emergency Services</li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="font-bold mb-3">Company</h4>
// //             <ul className="text-gray-300 text-sm space-y-2">
// //               <li>About Us</li>
// //               <li>Contact</li>
// //               <li>Careers</li>
// //               <li>Privacy Policy</li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="font-bold mb-3">Support</h4>
// //             <ul className="text-gray-300 text-sm space-y-2">
// //               <li>Help Center</li>
// //               <li>Medical Disclaimer</li>
// //               <li>Terms of Service</li>
// //               <li>FAQs</li>
// //             </ul>
// //           </div>
// //         </div>
// //         <div className="mt-8 text-gray-400 text-xs text-center border-t border-gray-700 pt-4">
// //           © 2024 MedDirect. All rights reserved. This platform provides health information and should not replace professional medical advice.
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }
// import React from "react";
// import { CheckCircle, MapPin } from "lucide-react";

// export default function Home({ onStartAssessment }) {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-50 to-green-50 px-8 py-16 flex flex-col md:flex-row items-center gap-10">
//         <div className="flex-1">
//           <h1 className="text-5xl font-bold text-gray-800">
//             Your Health, <span className="text-green-600">Simplified</span>
//           </h1>
//           <p className="mt-4 text-gray-600 text-lg leading-relaxed">
//             Get personalized health advice, medication suggestions for minor ailments, and find trusted hospitals near you.
//           </p>
//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={onStartAssessment}
//               className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-semibold"
//             >
//               Start Health Assessment
//             </button>
//             <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50">
//               Find Hospitals Nearby
//             </button>
//           </div>
//           <div className="flex gap-6 mt-6 text-sm text-gray-600 items-center">
//             <span className="flex items-center gap-1 text-green-600">
//               <CheckCircle size={16} /> Trusted by 50K+ users
//             </span>
//             <span className="flex items-center gap-1 text-blue-600">
//               <MapPin size={16} /> Available 24/7
//             </span>
//           </div>
//         </div>
//         <div className="flex-1">
//         <img
//   src="https://images.pexels.com/photos/4021801/pexels-photo-4021801.jpeg"
//   alt="Doctor"
//   className="rounded-2xl shadow-lg object-cover"
//   style={{ height: "500px",width:"1000px" }}
// />

//         </div>
//       </section>
//     </div>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, Stethoscope, Pill, Hospital } from "lucide-react";

export default function Home({ onStartAssessment }) {
  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="px-8 py-16 flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Your Health,{" "}
            <span className="text-green-600 bg-green-100 px-2 rounded-lg">
              Simplified
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Get personalized health advice, AI-powered assessments, medication
            suggestions for minor ailments, and locate trusted hospitals near
            you — all in one place.
          </p>
          <div className="flex gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStartAssessment}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
            >
              Start Health Assessment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Find Hospitals Nearby
            </motion.button>
          </div>
          <div className="flex gap-6 mt-6 text-sm text-gray-600 items-center">
            <span className="flex items-center gap-1 text-green-600">
              <CheckCircle size={16} /> Trusted by 50K+ users
            </span>
            <span className="flex items-center gap-1 text-blue-600">
              <MapPin size={16} /> Available 24/7
            </span>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.pexels.com/photos/4021801/pexels-photo-4021801.jpeg"
            alt="Doctor"
            className="rounded-2xl shadow-2xl object-cover"
            style={{ height: "500px", width: "1000px" }}
          />
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="px-8 py-16 max-w-7xl mx-auto"
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Comprehensive Healthcare Services
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Everything you need to manage your health — from early prevention to
          professional care — with just a few clicks.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized Health Advice",
              desc: "Get tailored health recommendations based on your symptoms, medical history, and lifestyle.",
              icon: <Stethoscope className="text-green-500" size={32} />,
              button: "Get Health Advice",
            },
            {
              title: "Medication Suggestions",
              desc: "Receive safe, evidence-based tablet and medication suggestions for minor ailments.",
              icon: <Pill className="text-blue-500" size={32} />,
              button: "Find Medications",
            },
            {
              title: "Hospital Recommendations",
              desc: "Locate nearby hospitals, clinics, and healthcare facilities instantly.",
              icon: <Hospital className="text-red-500" size={32} />,
              button: "Find Hospitals",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-md border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mt-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-center">{service.desc}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg hover:shadow-md"
              >
                {service.button}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-8 py-12 mt-16">
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div>
            <h4 className="text-lg font-bold mb-3">MedDirect</h4>
            <p className="text-gray-400 text-sm">
              Empowering you to make informed health decisions with personalized
              advice, medication suggestions, and hospital recommendations.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Services</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Health Advice</li>
              <li>Medication Finder</li>
              <li>Hospital Locator</li>
              <li>Emergency Services</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Company</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Support</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Help Center</li>
              <li>Medical Disclaimer</li>
              <li>Terms of Service</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-gray-500 text-xs text-center border-t border-gray-800 pt-4">
          © 2025 MedDirect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
