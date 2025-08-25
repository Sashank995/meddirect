// src/pages/HealthAdvice.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Stethoscope, Heart, Activity, Smile } from "lucide-react";

export default function HealthAdvice() {
  const [symptom, setSymptom] = useState("");
  const [age, setAge] = useState("");
  const [lifestyle, setLifestyle] = useState("normal");
  const [advice, setAdvice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy AI-like logic (frontend only)
    let result = "";
    if (symptom.toLowerCase().includes("cough")) {
      result =
        "It seems like you may have a mild respiratory issue. Drink warm fluids, avoid cold drinks, and rest. If persistent, consult a doctor.";
    } else if (symptom.toLowerCase().includes("fever")) {
      result =
        "A fever may indicate infection. Stay hydrated, take paracetamol if necessary, and monitor your temperature.";
    } else if (symptom.toLowerCase().includes("headache")) {
      result =
        "Your headache might be caused by stress or dehydration. Drink water, rest in a quiet room, and avoid screen time.";
    } else {
      result =
        "Based on your input, we recommend resting, staying hydrated, and monitoring your health. If symptoms persist, consult a doctor.";
    }

    if (age && age > 60) {
      result += " ⚠️ Since you are above 60, please take extra care and consider consulting a physician sooner.";
    }

    if (lifestyle === "active") {
      result += " ✅ Your active lifestyle is a great support to faster recovery.";
    } else if (lifestyle === "sedentary") {
      result += " 🛋️ Try light activity like walking to improve overall well-being.";
    }

    setAdvice(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex flex-col items-center py-12 px-6">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Personalized Health Advice
      </motion.h1>
      <p className="text-gray-600 text-center max-w-2xl mb-10">
        Enter your symptoms and details below to get instant, personalized
        health tips.  
        <span className="text-green-600 font-semibold"> *No backend needed*</span>.
      </p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6 border border-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Enter your main symptom
          </label>
          <input
            type="text"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            placeholder="e.g., Cough, Fever, Headache..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Age
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="e.g., 25"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Lifestyle
          </label>
          <select
            value={lifestyle}
            onChange={(e) => setLifestyle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          >
            <option value="normal">Normal</option>
            <option value="active">Active</option>
            <option value="sedentary">Sedentary</option>
          </select>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
        >
          Get Advice
        </motion.button>
      </motion.form>

      {/* Advice Box */}
      {advice && (
        <motion.div
          className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6 shadow-md max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl font-bold text-green-700 flex items-center gap-2 mb-3">
            <Stethoscope /> Your Health Advice
          </h2>
          <p className="text-gray-700 leading-relaxed">{advice}</p>
          <div className="flex gap-6 mt-4 text-gray-500">
            <span className="flex items-center gap-1">
              <Heart size={18} /> Stay Healthy
            </span>
            <span className="flex items-center gap-1">
              <Activity size={18} /> Be Active
            </span>
            <span className="flex items-center gap-1">
              <Smile size={18} /> Stay Positive
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
