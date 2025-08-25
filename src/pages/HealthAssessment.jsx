// // import React from "react";

// // // export default function HealthAssessment() {
// // //     return (
// // //       <div>
// // //         <h1 className="text-2xl font-bold mb-6">Health Assessment</h1>
// // //         <form className="space-y-4">
// // //           <input type="text" placeholder="Enter Symptoms" className="w-full p-3 border rounded" />
// // //           <button className="bg-blue-600 text-white px-4 py-2 rounded">Check Now</button>
// // //         </form>
// // //       </div>
// // //     );
// // //   }

// //   export default function HealthAssessment() {
// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
// //       <h1 className="text-3xl font-bold">Health Assessment Page</h1>
// //       <p className="mt-4 text-gray-700">Here is where your assessment will begin.</p>
// //     </div>
// //   );
// // }
// import { useState } from "react";

// export default function HealthAssessment() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     age: "",
//     gender: "",
//     weight: "",
//     height: "",
//     symptoms: "",
//   });
//   const totalSteps = 3;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const nextStep = () => {
//     if (step < totalSteps) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleSubmit = () => {
//     alert(`Assessment Submitted:\n${JSON.stringify(formData, null, 2)}`);
//   };

//   const progressWidth = `${(step / totalSteps) * 100}%`;

//   return (
//     <div className="min-h-screen bg-green-50 flex flex-col items-center py-10 px-4">
//       <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
//         {/* Header */}
//         <h1 className="text-2xl font-bold text-green-600 text-center mb-4">
//           Health Assessment
//         </h1>
//         <p className="text-gray-600 text-center mb-6">
//           Answer a few quick questions to get your personalized health insights.
//         </p>

//         {/* Progress Bar */}
//         <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
//           <div
//             className="bg-green-500 h-2 rounded-full transition-all"
//             style={{ width: progressWidth }}
//           ></div>
//         </div>

//         {/* Steps */}
//         {step === 1 && (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-gray-700">Age</label>
//               <input
//                 type="number"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 placeholder="Enter your age"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Gender</label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//               >
//                 <option value="">Select gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-gray-700">Weight (kg)</label>
//               <input
//                 type="number"
//                 name="weight"
//                 value={formData.weight}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 placeholder="Enter your weight"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Height (cm)</label>
//               <input
//                 type="number"
//                 name="height"
//                 value={formData.height}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 placeholder="Enter your height"
//               />
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-gray-700">
//                 Describe any symptoms
//               </label>
//               <textarea
//                 name="symptoms"
//                 value={formData.symptoms}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 placeholder="E.g., fever, headache..."
//               />
//             </div>
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-6">
//           <button
//             onClick={prevStep}
//             disabled={step === 1}
//             className={`px-4 py-2 rounded-lg ${
//               step === 1
//                 ? "bg-gray-300 cursor-not-allowed"
//                 : "bg-gray-200 hover:bg-gray-300"
//             }`}
//           >
//             Back
//           </button>

//           {step < totalSteps ? (
//             <button
//               onClick={nextStep}
//               className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               onClick={handleSubmit}
//               className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }








import { useState } from "react";
import API_BASE_URL from "../config";

export default function HealthAssessment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    symptoms: "",
  });
  const totalSteps = 3;
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/assessment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert("✅ Assessment Submitted:\n" + JSON.stringify(data, null, 2));
    } catch (err) {
      alert("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const progressWidth = `${(step / totalSteps) * 100}%`;

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-green-600 text-center mb-4">
          Health Assessment
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Answer a few quick questions to get your personalized health insights.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ width: progressWidth }}
          ></div>
        </div>

        {/* Steps */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your age"
              />
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your weight"
              />
            </div>
            <div>
              <label className="block text-gray-700">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your height"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">
                Describe any symptoms
              </label>
              <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="E.g., fever, headache..."
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-4 py-2 rounded-lg ${
              step === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Back
          </button>

          {step < totalSteps ? (
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
