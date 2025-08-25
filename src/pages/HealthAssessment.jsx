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








// import { useState } from "react";
// import API_BASE_URL from "../config";

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
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const nextStep = () => {
//     if (step < totalSteps) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE_URL}/assessment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       alert("✅ Assessment Submitted:\n" + JSON.stringify(data, null, 2));
//     } catch (err) {
//       alert("❌ Error: " + err.message);
//     } finally {
//       setLoading(false);
//     }
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
//               disabled={loading}
//               className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// src/pages/HealthAssessment.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  User,
  Calendar,
  Heart,
  Bell,
  Download,
  Save,
  CheckCircle2,
  AlertCircle,
  XCircle,
} from "lucide-react";
import jsPDF from "jspdf";

/**
 * Frontend-only Health Assessment
 * - Multi-step wizard (4 steps)
 * - Client-side validation per-step
 * - Save / Load draft via localStorage
 * - Simulated submit with success / failure (demo)
 * - In-app toasts + optional Browser Notification
 * - Results summary (BMI, risk level) + Download PDF
 */

const LS_DRAFT = "health_assessment_draft_v1";
const LS_HISTORY = "health_assessment_history_v1";

/* --- lightweight toast system --- */
function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = (msg, variant = "info", ttl = 4000) => {
    const id = crypto.randomUUID();
    setToasts((s) => [...s, { id, msg, variant }]);
    setTimeout(() => setToasts((s) => s.filter((t) => t.id !== id)), ttl);
  };
  const remove = (id) => setToasts((s) => s.filter((t) => t.id !== id));
  return { toasts, push, remove };
}
function ToastStack({ toasts, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`flex items-center gap-3 rounded-xl px-4 py-2 shadow border bg-white max-w-xs ${
            t.variant === "success" ? "border-green-200" : t.variant === "error" ? "border-red-200" : "border-gray-200"
          }`}
        >
          {t.variant === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          ) : t.variant === "error" ? (
            <AlertCircle className="w-5 h-5 text-red-600" />
          ) : (
            <Bell className="w-5 h-5 text-gray-600" />
          )}
          <div className="text-sm text-gray-800">{t.msg}</div>
          <button className="ml-auto text-gray-400" onClick={() => onClose(t.id)}>
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

/* --- utility --- */
const totalSteps = 4;
const initialForm = {
  name: "",
  age: "",
  gender: "",
  weight: "",
  height: "",
  bpSys: "",
  bpDia: "",
  heartRate: "",
  smoker: false,
  diabetic: false,
  symptoms: "",
  durationDays: "",
  severity: 3,
};

export default function HealthAssessment() {
  const { toasts, push, remove } = useToasts();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(() => {
    try {
      const saved = localStorage.getItem(LS_DRAFT);
      return saved ? JSON.parse(saved) : { ...initialForm };
    } catch {
      return { ...initialForm };
    }
  });
  const [result, setResult] = useState(null);
  const reminderRef = useRef(null);

  useEffect(() => {
    // save draft auto
    localStorage.setItem(LS_DRAFT, JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    // cleanup reminder
    return () => {
      if (reminderRef.current) clearTimeout(reminderRef.current);
    };
  }, []);

  const update = (patch) => setForm((f) => ({ ...f, ...patch }));

  const progressPct = Math.round((step / totalSteps) * 100);

  /* --- validations per step --- */
  const validateStep = (s) => {
    if (s === 1) {
      if (!form.name.trim()) return "Please enter your name.";
      if (!form.age || Number(form.age) <= 0) return "Please enter a valid age.";
      return null;
    }
    if (s === 2) {
      if (!form.weight || Number(form.weight) <= 0) return "Enter valid weight.";
      if (!form.height || Number(form.height) <= 0) return "Enter valid height.";
      return null;
    }
    if (s === 3) {
      if (!form.symptoms.trim()) return "Please describe your symptoms.";
      return null;
    }
    return null;
  };

  const next = () => {
    const err = validateStep(step);
    if (err) {
      push(err, "error");
      return;
    }
    if (step < totalSteps) setStep((s) => s + 1);
  };
  const prev = () => setStep((s) => Math.max(1, s - 1));

  /* --- Draft actions --- */
  const saveDraft = () => {
    localStorage.setItem(LS_DRAFT, JSON.stringify(form));
    push("Draft saved locally.", "success");
  };
  const loadDraft = () => {
    const saved = localStorage.getItem(LS_DRAFT);
    if (saved) {
      setForm(JSON.parse(saved));
      push("Draft loaded.", "success");
    } else push("No saved draft found.", "info");
  };
  const clearDraft = () => {
    localStorage.removeItem(LS_DRAFT);
    setForm({ ...initialForm });
    push("Draft cleared.", "success");
  };

  /* --- simulate submit --- */
  const submit = () => {
    const err = validateStep(step);
    if (err) {
      push(err, "error");
      return;
    }
    setLoading(true);
    push("Processing assessment...", "info");
    // simulate async processing
    setTimeout(() => {
      // 85% success, 15% failure to demonstrate both notifications
      const success = Math.random() > 0.15;
      setLoading(false);
      if (!success) {
        push("Failed to generate assessment. Try again.", "error");
        setResult(null);
        return;
      }

      // compute simple metrics
      const w = Number(form.weight);
      const h = Number(form.height) / 100;
      const bmi = w && h > 0 ? +(w / (h * h)).toFixed(1) : null;

      // compute risk: simple heuristic
      let riskScore = 0;
      if (bmi) {
        if (bmi >= 30) riskScore += 3;
        else if (bmi >= 25) riskScore += 2;
        else if (bmi >= 23) riskScore += 1;
      }
      if (Number(form.age) >= 60) riskScore += 2;
      if (form.smoker) riskScore += 2;
      if (form.diabetic) riskScore += 2;
      if (Number(form.bpSys) >= 140 || Number(form.bpDia) >= 90) riskScore += 2;
      if (Number(form.severity) >= 7) riskScore += 2;
      // map to level
      let riskLevel = "Low";
      if (riskScore >= 7) riskLevel = "High";
      else if (riskScore >= 4) riskLevel = "Medium";

      const recs = [];
      if (riskLevel === "High") {
        recs.push("Consult a physician promptly — consider visiting an ER if symptoms worsen.");
      } else if (riskLevel === "Medium") {
        recs.push("Book a doctor's appointment within a few days and monitor vitals.");
      } else {
        recs.push("Rest, hydrate, and monitor symptoms. Self-care is appropriate for now.");
      }
      if (form.symptoms.toLowerCase().includes("fever")) {
        recs.push("If fever > 38.5°C or persistent for 48+ hours, see a doctor.");
      }
      if (form.symptoms.toLowerCase().includes("cough")) {
        recs.push("Avoid cold drinks, use warm fluids, and isolate if contagious.");
      }
      if (form.smoker) recs.push("Consider smoking cessation resources — they lower health risks.");

      const generated = {
        timestamp: new Date().toISOString(),
        bmi,
        riskLevel,
        riskScore,
        recommendations: recs,
        formSnapshot: { ...form },
      };

      // store to history
      try {
        const existing = JSON.parse(localStorage.getItem(LS_HISTORY) || "[]");
        existing.unshift(generated);
        localStorage.setItem(LS_HISTORY, JSON.stringify(existing.slice(0, 50))); // keep last 50
      } catch {}

      setResult(generated);
      push("Assessment complete — results ready.", "success");
      // show browser notification if permission granted/ask for it
      if ("Notification" in window) {
        if (Notification.permission === "granted") {
          new Notification("Health Assessment Ready", { body: `Risk: ${generated.riskLevel}` });
        } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then((perm) => {
            if (perm === "granted") new Notification("Health Assessment Ready", { body: `Risk: ${generated.riskLevel}` });
          });
        }
      }
      // go to results view (step = totalSteps + 1)
      setStep(totalSteps + 1);
    }, 1400);
  };

  const downloadPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(14);
      doc.text("Health Assessment Summary", 12, 18);
      doc.setFontSize(11);
      doc.text(`Name: ${form.name}`, 12, 32);
      doc.text(`Age: ${form.age}`, 12, 40);
      doc.text(`Gender: ${form.gender}`, 12, 48);
      doc.text(`BMI: ${result?.bmi ?? "—"}`, 12, 56);
      doc.text(`Risk Level: ${result?.riskLevel ?? "—"}`, 12, 64);
      doc.text("Recommendations:", 12, 78);
      (result?.recommendations || []).forEach((r, i) => {
        doc.text(`${i + 1}. ${r}`, 14, 90 + i * 8);
      });
      doc.save(`assessment_${form.name || "user"}.pdf`);
      push("PDF generated.", "success");
    } catch (err) {
      push("PDF generation failed.", "error");
    }
  };

  const scheduleReminder = () => {
    push("Reminder scheduled (demo: fires in 10s).", "info");
    reminderRef.current = setTimeout(() => {
      push("⏰ Reminder: Check your health assessment recommendations.", "info");
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Reminder: Health Check", { body: "Check your assessment recommendations." });
      }
    }, 10000);
  };

  /* --- Small UI components for steps --- */
  const StepHeader = () => (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">Step {Math.min(step, totalSteps)} of {totalSteps}</div>
        <div className="text-sm text-gray-500">{progressPct}%</div>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
        <div className="h-2 rounded-full bg-green-500 transition-all" style={{ width: `${progressPct}%` }} />
      </div>
    </div>
  );

  /* --- small helpers --- */
  const numeric = (v) => (v === "" ? null : Number(v));

  return (
    <div className="min-h-screen bg-green-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-green-700 flex items-center gap-2">
              <Heart className="text-red-500" /> Health Assessment
            </h1>
            <p className="text-gray-600 text-sm">Answer a few quick questions — instant frontend assessment (demo).</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={saveDraft} className="px-3 py-2 bg-white border rounded-md text-sm flex items-center gap-2"><Save className="w-4 h-4" /> Save Draft</button>
            <button onClick={loadDraft} className="px-3 py-2 bg-white border rounded-md text-sm">Load</button>
            <button onClick={clearDraft} className="px-3 py-2 bg-white border rounded-md text-sm">Clear</button>
          </div>
        </header>

        {!result && step <= totalSteps && (
          <div className="bg-white rounded-xl p-6 shadow">
            <StepHeader />

            {/* Step content */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700">Full name</label>
                  <input value={form.name} onChange={(e) => update({ name: e.target.value })} className="w-full px-3 py-2 border rounded-md" placeholder="e.g., Sashank Valmiki" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-700">Age</label>
                    <input type="number" value={form.age} onChange={(e) => update({ age: e.target.value })} className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Gender</label>
                    <select value={form.gender} onChange={(e) => update({ gender: e.target.value })} className="w-full px-3 py-2 border rounded-md">
                      <option value="">Select</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-700">Weight (kg)</label>
                    <input type="number" value={form.weight} onChange={(e) => update({ weight: e.target.value })} className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Height (cm)</label>
                    <input type="number" value={form.height} onChange={(e) => update({ height: e.target.value })} className="w-full px-3 py-2 border rounded-md" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm text-gray-700">BP Systolic</label>
                    <input type="number" value={form.bpSys} onChange={(e) => update({ bpSys: e.target.value })} className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">BP Diastolic</label>
                    <input type="number" value={form.bpDia} onChange={(e) => update({ bpDia: e.target.value })} className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Heart Rate</label>
                    <input type="number" value={form.heartRate} onChange={(e) => update({ heartRate: e.target.value })} className="w-full px-3 py-2 border rounded-md" />
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={form.smoker} onChange={(e) => update({ smoker: e.target.checked })} /> Smoker
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={form.diabetic} onChange={(e) => update({ diabetic: e.target.checked })} /> Diabetic
                  </label>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700">Main symptoms</label>
                  <textarea value={form.symptoms} onChange={(e) => update({ symptoms: e.target.value })} rows={4} className="w-full px-3 py-2 border rounded-md" placeholder="e.g. cough, fever, headache..." />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-700">Duration (days)</label>
                    <input type="number" value={form.durationDays} onChange={(e) => update({ durationDays: e.target.value })} className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Severity (1-10)</label>
                    <input type="range" min="1" max="10" value={form.severity} onChange={(e) => update({ severity: e.target.value })} className="w-full" />
                    <div className="text-sm text-gray-500">Severity: {form.severity}</div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">Review & Submit</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                  <div><strong>Name:</strong> {form.name}</div>
                  <div><strong>Age:</strong> {form.age}</div>
                  <div><strong>Gender:</strong> {form.gender}</div>
                  <div><strong>Weight / Height:</strong> {form.weight} kg / {form.height} cm</div>
                  <div><strong>BP:</strong> {form.bpSys}/{form.bpDia}</div>
                  <div><strong>Heart Rate:</strong> {form.heartRate}</div>
                  <div className="col-span-2"><strong>Symptoms:</strong> {form.symptoms}</div>
                  <div><strong>Smoker:</strong> {form.smoker ? "Yes" : "No"}</div>
                  <div><strong>Diabetic:</strong> {form.diabetic ? "Yes" : "No"}</div>
                </div>
                <div className="text-sm text-gray-500 mt-2">When you submit, the assessment will be generated locally (demo).</div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button onClick={prev} disabled={step === 1 || loading} className={`px-4 py-2 rounded-md ${step === 1 ? "bg-gray-200" : "bg-white border hover:bg-gray-50"}`}>Back</button>
                {step < totalSteps && <button onClick={next} disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded-md">Next</button>}
                {step === totalSteps && <button onClick={submit} disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded-md">{loading ? "Processing..." : "Submit"}</button>}
              </div>

              <div className="flex items-center gap-2">
                <button onClick={scheduleReminder} className="px-3 py-2 bg-white border rounded-md text-sm flex items-center gap-2"><Bell className="w-4 h-4" /> Remind me</button>
                <button onClick={() => { localStorage.setItem(LS_HISTORY, JSON.stringify([])); push("History cleared (demo).", "info"); }} className="px-3 py-2 bg-white border rounded-md text-sm">Clear History</button>
              </div>
            </div>
          </div>
        )}

        {/* result */}
        {step > totalSteps && result && (
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-green-700 flex items-center gap-2"><CheckCircle2 /> Assessment Results</h2>
                <p className="text-sm text-gray-600">Generated: {new Date(result.timestamp).toLocaleString()}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={downloadPDF} className="px-3 py-2 bg-white border rounded-md flex items-center gap-2"><Download className="w-4 h-4" /> Export PDF</button>
                <button onClick={() => { setStep(1); setResult(null); }} className="px-3 py-2 bg-white border rounded-md">Start Over</button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border">
                <div className="text-sm text-gray-500">BMI</div>
                <div className="text-2xl font-semibold">{result.bmi ?? "—"}</div>
                <div className="text-xs text-gray-500 mt-1">Weight / height used</div>
              </div>
              <div className="p-4 rounded-lg border">
                <div className="text-sm text-gray-500">Risk Level</div>
                <div className={`text-2xl font-semibold ${result.riskLevel === "High" ? "text-red-600" : result.riskLevel === "Medium" ? "text-yellow-600" : "text-green-600"}`}>
                  {result.riskLevel}
                </div>
                <div className="text-xs text-gray-500 mt-1">Score: {result.riskScore}</div>
              </div>
              <div className="p-4 rounded-lg border">
                <div className="text-sm text-gray-500">Quick Tip</div>
                <div className="text-sm text-gray-700 mt-2">{result.recommendations[0]}</div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Recommendations</h3>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                {result.recommendations.map((r, i) => (
                  <li key={i} className="py-1">{r}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* If submit failed and no result, show retry hint */}
        {!result && step > totalSteps && (
          <div className="mt-4 text-center text-gray-600">
            If assessment failed earlier, try submitting again or save a draft and come back.
          </div>
        )}
      </div>

      {/* Toasts */}
      <ToastStack toasts={toasts} onClose={remove} />
    </div>
  );
}
