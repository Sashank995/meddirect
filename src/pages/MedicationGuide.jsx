// import { useState } from "react";

// export default function MedicationGuide() {
//   const [search, setSearch] = useState("");
//   const [expanded, setExpanded] = useState(null);

//   const medications = [
//     {
//       id: 1,
//       name: "Paracetamol",
//       usage: "Pain relief, fever reduction",
//       dosage: "500mg every 4–6 hours, not exceeding 4g/day",
//       sideEffects: "Nausea, rash, liver damage (overdose)",
//     },
//     {
//       id: 2,
//       name: "Ibuprofen",
//       usage: "Pain relief, inflammation reduction",
//       dosage: "400–800mg every 6–8 hours, max 3200mg/day",
//       sideEffects: "Stomach upset, dizziness, kidney issues",
//     },
//     {
//       id: 3,
//       name: "Amoxicillin",
//       usage: "Bacterial infections",
//       dosage: "500mg every 8 hours or as prescribed",
//       sideEffects: "Diarrhea, rash, allergic reactions",
//     },
//     {
//       id: 4,
//       name: "Cetirizine",
//       usage: "Allergy relief",
//       dosage: "10mg once daily",
//       sideEffects: "Drowsiness, dry mouth",
//     },
//   ];

//   const filteredMeds = medications.filter((med) =>
//     med.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const toggleExpand = (id) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   return (
//     <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10 px-4">
//       <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
//         {/* Header */}
//         <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
//           Medication Guide
//         </h1>
//         <p className="text-gray-600 text-center mb-6">
//           Search and learn about common medications, their uses, dosage, and side effects.
//         </p>

//         {/* Search */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search medication..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Medication Cards */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredMeds.length > 0 ? (
//             filteredMeds.map((med) => (
//               <div
//                 key={med.id}
//                 className="bg-white border rounded-lg p-5 shadow hover:shadow-md transition-all"
//               >
//                 <h2 className="text-lg font-semibold text-gray-800">
//                   {med.name}
//                 </h2>
//                 <p className="text-gray-600 text-sm">{med.usage}</p>

//                 {/* Expand / Collapse */}
//                 <button
//                   onClick={() => toggleExpand(med.id)}
//                   className="mt-3 text-blue-500 hover:underline"
//                 >
//                   {expanded === med.id ? "Hide details" : "View details"}
//                 </button>

//                 {expanded === med.id && (
//                   <div className="mt-3 space-y-2 text-sm text-gray-700">
//                     <p>
//                       <span className="font-semibold">Dosage:</span> {med.dosage}
//                     </p>
//                     <p>
//                       <span className="font-semibold">Side Effects:</span>{" "}
//                       {med.sideEffects}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-center col-span-2">
//               No medications found.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }








import { useState, useEffect } from "react";

export default function MedicationGuide() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch medications from backend
  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const response = await fetch("https://medirectbackend.onrender.com/api/medications");
        const data = await response.json();
        setMedications(data);
      } catch (error) {
        console.error("Error fetching medications:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMedications();
  }, []);

  const filteredMeds = medications.filter((med) =>
    med.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
          Medication Guide
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Search and learn about common medications, their uses, dosage, and side effects.
        </p>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search medication..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Loading State */}
        {loading ? (
          <p className="text-center text-gray-500">Loading medications...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredMeds.length > 0 ? (
              filteredMeds.map((med) => (
                <div
                  key={med.id}
                  className="bg-white border rounded-lg p-5 shadow hover:shadow-md transition-all"
                >
                  <h2 className="text-lg font-semibold text-gray-800">
                    {med.name}
                  </h2>
                  <p className="text-gray-600 text-sm">{med.usage}</p>

                  {/* Expand / Collapse */}
                  <button
                    onClick={() => toggleExpand(med.id)}
                    className="mt-3 text-blue-500 hover:underline"
                  >
                    {expanded === med.id ? "Hide details" : "View details"}
                  </button>

                  {expanded === med.id && (
                    <div className="mt-3 space-y-2 text-sm text-gray-700">
                      <p>
                        <span className="font-semibold">Dosage:</span>{" "}
                        {med.dosage}
                      </p>
                      <p>
                        <span className="font-semibold">Side Effects:</span>{" "}
                        {med.sideEffects}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-2">
                No medications found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

