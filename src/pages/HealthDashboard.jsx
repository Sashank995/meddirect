import React from "react";
import Sidebar from "../components/Sidebar";

export default function HealthDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-8">
        <h2 className="text-3xl font-bold mb-2">Health Assessment</h2>
        <p className="text-gray-500 mb-6">Get personalized health recommendations based on your symptoms</p>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Step 1: Symptoms</h3>
          <p className="mb-4">What symptoms are you experiencing? (Select all that apply)</p>

          <div className="grid grid-cols-3 gap-4">
            {["Headache", "Fever", "Cough", "Fatigue", "Nausea", "Dizziness", "Chest Pain", "Shortness of Breath", "Joint Pain", "Stomach Pain", "Skin Rash", "Sleep Issues"].map((symptom) => (
              <button key={symptom} className="border rounded-full px-4 py-2 hover:bg-blue-100">
                {symptom}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button className="border px-4 py-2 rounded">Previous</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
