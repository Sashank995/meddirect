// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Brain, Users, PhoneCall } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <HeartPulse className="w-10 h-10 text-red-500" />,
      title: "Healthcare Access",
      desc: "Easily connect with trusted hospitals, doctors, and emergency services."
    },
    {
      icon: <Brain className="w-10 h-10 text-blue-500" />,
      title: "AI-Powered Tools",
      desc: "Get quick and accurate health assessments with our intelligent system."
    },
    {
      icon: <Users className="w-10 h-10 text-green-500" />,
      title: "Community Support",
      desc: "Share and learn from a growing community of healthcare seekers."
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-purple-500" />,
      title: "24/7 Assistance",
      desc: "Emergency help and guidance whenever you need it."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6 md:p-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-green-700">About MedDirect</h1>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          MedDirect is your companion for healthcare guidance and support. 
          We aim to simplify healthcare access for everyone, making it 
          easier to find help when you need it most.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md border"
      >
        <h2 className="text-2xl font-semibold text-green-600">Our Mission</h2>
        <p className="mt-2 text-gray-600 leading-relaxed">
          Our mission is to connect patients with trusted medical resources 
          and provide AI-powered health tools for quick, accurate assessments.
          We believe healthcare should be accessible, reliable, and stress-free for all.
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white border rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            {f.icon}
            <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="max-w-3xl mx-auto mt-16 bg-green-600 p-6 rounded-xl text-center text-white"
      >
        <h2 className="text-2xl font-bold">Join Us in Revolutionizing Healthcare</h2>
        <p className="mt-2 text-green-100">
          Start exploring MedDirect today and take control of your health with confidence.
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-100 transition">
          Get Started
        </button>
      </motion.div>
    </div>
  );
}
