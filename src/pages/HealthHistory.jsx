// // import React, { useState, useEffect } from "react";
// // import {
// //   Calendar,
// //   FileText,
// //   Download,
// //   ChevronDown,
// //   ChevronUp,
// //   Search,
// // } from "lucide-react";
// // import jsPDF from "jspdf";

// // export default function HealthHistory() {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [expanded, setExpanded] = useState(null);
// //   const [healthRecords, setHealthRecords] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // ✅ Fetch data from backend
// //   useEffect(() => {
// //     fetch("https://medirectbackend.onrender.com/api/health-history") // <-- your backend URL
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setHealthRecords(data);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         console.error("Error fetching health history:", err);
// //         setLoading(false);
// //       });
// //   }, []);

// //   // Filter records based on search
// //   const filteredRecords = healthRecords.filter(
// //     (record) =>
// //       record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       record.type.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   // Toggle expand/collapse
// //   const toggleExpand = (id) => {
// //     setExpanded(expanded === id ? null : id);
// //   };

// //   // Download PDF
// //   const downloadPDF = () => {
// //     const doc = new jsPDF();
// //     doc.text("Health History Records", 10, 10);
// //     healthRecords.forEach((record, index) => {
// //       doc.text(
// //         `${index + 1}. ${record.date} - ${record.title} (${record.type})`,
// //         10,
// //         20 + index * 10
// //       );
// //     });
// //     doc.save("health-history.pdf");
// //   };

// //   return (
// //     <div className="min-h-screen bg-green-50 p-6">
// //       {/* Header */}
// //       <div className="flex flex-col md:flex-row items-center justify-between mb-6">
// //         <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2">
// //           <FileText size={28} /> Health History
// //         </h1>
// //         <button
// //           onClick={downloadPDF}
// //           className="mt-3 md:mt-0 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
// //         >
// //           <Download size={18} /> Download PDF
// //         </button>
// //       </div>

// //       {/* Search Bar */}
// //       <div className="flex items-center gap-2 mb-6 bg-white rounded-lg p-3 shadow">
// //         <Search size={20} className="text-gray-500" />
// //         <input
// //           type="text"
// //           placeholder="Search by type or title..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="w-full outline-none"
// //         />
// //       </div>

// //       {/* Timeline */}
// //       {loading ? (
// //         <p className="text-gray-500 text-center">Loading health records...</p>
// //       ) : (
// //         <div className="space-y-4">
// //           {filteredRecords.length > 0 ? (
// //             filteredRecords.map((record) => (
// //               <div
// //                 key={record._id || record.id}
// //                 className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 md:p-5"
// //               >
// //                 <div className="flex items-start justify-between gap-3">
// //                   <div>
// //                     <p className="text-sm text-gray-500 flex items-center gap-1">
// //                       <Calendar size={16} /> {record.date}
// //                     </p>
// //                     <h2 className="text-lg font-semibold text-green-700">
// //                       {record.title}
// //                     </h2>
// //                     <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded">
// //                       {record.type}
// //                     </span>
// //                   </div>
// //                   <button
// //                     onClick={() => toggleExpand(record._id || record.id)}
// //                     className="text-gray-600 hover:text-green-600"
// //                   >
// //                     {expanded === (record._id || record.id) ? (
// //                       <ChevronUp />
// //                     ) : (
// //                       <ChevronDown />
// //                     )}
// //                   </button>
// //                 </div>

// //                 {/* Expanded Details */}
// //                 {expanded === (record._id || record.id) && (
// //                   <div className="mt-3 text-gray-700 border-t pt-3">
// //                     {record.details}
// //                   </div>
// //                 )}
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-gray-500 text-center">
// //               No matching records found.
// //             </p>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import {
//   Calendar,
//   FileText,
//   Download,
//   ChevronDown,
//   ChevronUp,
//   Search,
//   Filter,
// } from "lucide-react";
// import jsPDF from "jspdf";

// export default function HealthHistory() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [expanded, setExpanded] = useState(null);
//   const [filterType, setFilterType] = useState("All");
//   const [sortOrder, setSortOrder] = useState("newest");

//   // ✅ Dummy health history data (frontend only)
//   const healthRecords = [
//     {
//       id: 1,
//       date: "2025-08-20",
//       title: "Annual Health Checkup",
//       type: "Checkup",
//       details: "General health examination with blood test, BP check, and ECG.",
//     },
//     {
//       id: 2,
//       date: "2025-05-12",
//       title: "Dental Surgery",
//       type: "Surgery",
//       details: "Wisdom tooth removal under local anesthesia.",
//     },
//     {
//       id: 3,
//       date: "2025-03-08",
//       title: "Eye Prescription Update",
//       type: "Prescription",
//       details: "New glasses prescribed due to vision change.",
//     },
//     {
//       id: 4,
//       date: "2024-12-15",
//       title: "Physiotherapy Session",
//       type: "Therapy",
//       details: "Back pain treatment with stretching and exercises.",
//     },
//     {
//       id: 5,
//       date: "2024-10-02",
//       title: "Covid-19 Vaccination",
//       type: "Vaccination",
//       details: "Received booster dose of COVID-19 vaccine.",
//     },
//   ];

//   // ✅ Filter + Search
//   const filteredRecords = healthRecords
//     .filter(
//       (record) =>
//         (filterType === "All" || record.type === filterType) &&
//         (record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           record.type.toLowerCase().includes(searchTerm.toLowerCase()))
//     )
//     .sort((a, b) =>
//       sortOrder === "newest"
//         ? new Date(b.date) - new Date(a.date)
//         : new Date(a.date) - new Date(b.date)
//     );

//   // ✅ Toggle expand/collapse
//   const toggleExpand = (id) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   // ✅ Download PDF
//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text("Health History Records", 10, 10);
//     healthRecords.forEach((record, index) => {
//       doc.text(
//         `${index + 1}. ${record.date} - ${record.title} (${record.type})`,
//         10,
//         20 + index * 10
//       );
//     });
//     doc.save("health-history.pdf");
//   };

//   // ✅ Badge color by type
//   const badgeColors = {
//     Checkup: "bg-blue-100 text-blue-700",
//     Surgery: "bg-red-100 text-red-700",
//     Prescription: "bg-purple-100 text-purple-700",
//     Therapy: "bg-orange-100 text-orange-700",
//     Vaccination: "bg-green-100 text-green-700",
//   };

//   return (
//     <div className="min-h-screen bg-green-50 p-6">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row items-center justify-between mb-6">
//         <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2">
//           <FileText size={28} /> Health History
//         </h1>
//         <button
//           onClick={downloadPDF}
//           className="mt-3 md:mt-0 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
//         >
//           <Download size={18} /> Download PDF
//         </button>
//       </div>

//       {/* Search + Filters */}
//       <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
//         {/* Search Bar */}
//         <div className="flex items-center gap-2 bg-white rounded-lg p-3 shadow w-full md:w-1/2">
//           <Search size={20} className="text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search by type or title..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full outline-none"
//           />
//         </div>

//         {/* Filters */}
//         <div className="flex items-center gap-2">
//           <Filter className="text-gray-500 w-5 h-5" />
//           <select
//             value={filterType}
//             onChange={(e) => setFilterType(e.target.value)}
//             className="p-2 rounded-lg border bg-white"
//           >
//             <option value="All">All Types</option>
//             <option value="Checkup">Checkup</option>
//             <option value="Surgery">Surgery</option>
//             <option value="Prescription">Prescription</option>
//             <option value="Therapy">Therapy</option>
//             <option value="Vaccination">Vaccination</option>
//           </select>

//           {/* Sort */}
//           <select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//             className="p-2 rounded-lg border bg-white"
//           >
//             <option value="newest">Newest First</option>
//             <option value="oldest">Oldest First</option>
//           </select>
//         </div>
//       </div>

//       {/* Timeline */}
//       <div className="space-y-4">
//         {filteredRecords.length > 0 ? (
//           filteredRecords.map((record) => (
//             <div
//               key={record.id}
//               className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 md:p-5"
//             >
//               <div className="flex items-start justify-between gap-3">
//                 <div>
//                   <p className="text-sm text-gray-500 flex items-center gap-1">
//                     <Calendar size={16} /> {record.date}
//                   </p>
//                   <h2 className="text-lg font-semibold text-green-700">
//                     {record.title}
//                   </h2>
//                   <span
//                     className={`text-xs font-medium px-2 py-1 rounded ${badgeColors[record.type]}`}
//                   >
//                     {record.type}
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => toggleExpand(record.id)}
//                   className="text-gray-600 hover:text-green-600"
//                 >
//                   {expanded === record.id ? <ChevronUp /> : <ChevronDown />}
//                 </button>
//               </div>

//               {/* Expanded Details */}
//               {expanded === record.id && (
//                 <div className="mt-3 text-gray-700 border-t pt-3">
//                   {record.details}
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 text-center">
//             No matching records found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Calendar,
  FileText,
  Download,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Plus,
  Bell,
  CheckCircle2,
  AlertCircle,
  Star,
  StarOff,
  Trash2,
  Edit3,
  Upload,
  Printer,
} from "lucide-react";
import jsPDF from "jspdf";

/**
 * HealthHistory.jsx (frontend‑only)
 * - No backend calls. Persists to localStorage.
 * - Step‑by‑step Add‑Record wizard (Basic → Date/Place → Details/Files → Review)
 * - In‑app toasts + optional browser notifications
 * - Search, multi‑filter (type chips + date range), sort, expand all
 * - Edit/Delete with Undo, Star/Favorite, Bulk select & export
 * - Export to PDF/CSV/JSON, Import JSON
 */

const LS_KEYS = {
  records: "health_history_records_v1",
  notifHistory: "health_history_notifs_v1",
};

const TYPE_COLORS = {
  Checkup: "bg-blue-100 text-blue-700",
  Surgery: "bg-red-100 text-red-700",
  Prescription: "bg-purple-100 text-purple-700",
  Therapy: "bg-orange-100 text-orange-700",
  Vaccination: "bg-green-100 text-green-700",
};

const DEFAULT_DATA = [
  {
    id: crypto.randomUUID(),
    date: "2025-08-20",
    title: "Annual Health Checkup",
    type: "Checkup",
    details: "General health examination with blood test, BP check, and ECG.",
    doctor: "Dr. Meera Verma",
    place: "CityCare Hospital",
    starred: true,
    attachments: [],
  },
  {
    id: crypto.randomUUID(),
    date: "2025-05-12",
    title: "Dental Surgery",
    type: "Surgery",
    details: "Wisdom tooth removal under local anesthesia.",
    doctor: "Dr. R. Kulkarni",
    place: "SmileBright Dental",
    starred: false,
    attachments: [],
  },
  {
    id: crypto.randomUUID(),
    date: "2025-03-08",
    title: "Eye Prescription Update",
    type: "Prescription",
    details: "New glasses prescribed due to vision change.",
    doctor: "Dr. A. Chawla",
    place: "Vision Plus Clinic",
    starred: false,
    attachments: [],
  },
  {
    id: crypto.randomUUID(),
    date: "2024-12-15",
    title: "Physiotherapy Session",
    type: "Therapy",
    details: "Back pain treatment with stretching and exercises.",
    doctor: "Dr. P. Rao",
    place: "Flex Rehab Center",
    starred: false,
    attachments: [],
  },
  {
    id: crypto.randomUUID(),
    date: "2024-10-02",
    title: "Covid‑19 Vaccination (Booster)",
    type: "Vaccination",
    details: "Received booster dose of COVID‑19 vaccine.",
    doctor: "Nurse Station",
    place: "Community Health Camp",
    starred: false,
    attachments: [],
  },
];

function clsx(...xs) {
  return xs.filter(Boolean).join(" ");
}

/** -------- Toasts (light) -------- */
function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = (msg, variant = "info", ttl = 3000) => {
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
          className={clsx(
            "flex items-start gap-2 rounded-xl px-3 py-2 shadow border bg-white max-w-sm",
            t.variant === "success"
              ? "border-green-200"
              : t.variant === "error"
              ? "border-red-200"
              : "border-gray-200"
          )}
        >
          {t.variant === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
          ) : t.variant === "error" ? (
            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
          ) : (
            <Bell className="w-4 h-4 text-gray-600 mt-0.5" />
          )}
          <div className="text-sm text-gray-800">{t.msg}</div>
          <button className="ml-2 text-gray-400 hover:text-gray-600" onClick={() => onClose(t.id)}>✕</button>
        </div>
      ))}
    </div>
  );
}

/** -------- Modal -------- */
function Modal({ open, onClose, title, children, footer }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full md:w-[680px] bg-white rounded-t-2xl md:rounded-2xl shadow-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>✕</button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto">{children}</div>
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
}

/** -------- Main -------- */
export default function HealthHistory() {
  const { toasts, push, remove } = useToasts();

  // data (localStorage)
  const [records, setRecords] = useState(() => {
    try {
      const saved = localStorage.getItem(LS_KEYS.records);
      return saved ? JSON.parse(saved) : DEFAULT_DATA;
    } catch {
      return DEFAULT_DATA;
    }
  });
  useEffect(() => localStorage.setItem(LS_KEYS.records, JSON.stringify(records)), [records]);

  // search / filters / sort
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTypes, setActiveTypes] = useState(["All"]);
  const [sortOrder, setSortOrder] = useState("newest");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  // selection
  const [selectedIds, setSelectedIds] = useState([]);

  // add/edit wizard
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardStep, setWizardStep] = useState(0);
  const emptyDraft = {
    id: crypto.randomUUID(),
    date: new Date().toISOString().slice(0, 10),
    title: "",
    type: "Checkup",
    details: "",
    doctor: "",
    place: "",
    starred: false,
    attachments: [], // {name, size, type}
  };
  const [draft, setDraft] = useState(emptyDraft);

  // undo delete
  const undoRef = useRef(null);

  // browser notifications
  const requestNotif = async () => {
    if (!("Notification" in window)) {
      push("Notifications not supported.", "error");
      return;
    }
    const perm = await Notification.requestPermission();
    if (perm === "granted") {
      new Notification("Health History", { body: "Notifications enabled." });
      push("Notifications enabled.", "success");
    } else {
      push("Notification permission not granted.", "info");
    }
  };

  // helpers
  const toggleType = (t) => {
    if (t === "All") return setActiveTypes(["All"]);
    setActiveTypes((xs) => {
      const next = xs.includes("All") ? [] : [...xs];
      const i = next.indexOf(t);
      if (i >= 0) next.splice(i, 1);
      else next.push(t);
      return next.length ? next : ["All"];
    });
  };

  const visible = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const withinDate = (d) => {
      if (startDate && d < startDate) return false;
      if (endDate && d > endDate) return false;
      return true;
    };
    const filtered = records.filter((r) => {
      const textMatch =
        !term ||
        r.title.toLowerCase().includes(term) ||
        r.type.toLowerCase().includes(term) ||
        (r.doctor || "").toLowerCase().includes(term) ||
        (r.place || "").toLowerCase().includes(term);

      const typeMatch = activeTypes.includes("All") || activeTypes.includes(r.type);
      const dateMatch = withinDate(r.date);
      return textMatch && typeMatch && dateMatch;
    });

    filtered.sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

    return filtered;
  }, [records, searchTerm, activeTypes, sortOrder, startDate, endDate]);

  const groupedByYear = useMemo(() => {
    return visible.reduce((acc, r) => {
      const y = r.date.slice(0, 4);
      (acc[y] ||= []).push(r);
      return acc;
    }, {});
  }, [visible]);

  const types = ["Checkup", "Surgery", "Prescription", "Therapy", "Vaccination"];

  // actions
  const toggleStar = (id) => setRecords((xs) => xs.map((r) => (r.id === id ? { ...r, starred: !r.starred } : r)));
  const toggleExpand = (id) => setExpandedId((cur) => (cur === id ? null : id));

  const beginEdit = (rec) => {
    setDraft({ ...rec, attachments: rec.attachments || [] });
    setWizardStep(0);
    setWizardOpen(true);
  };

  const beginAdd = () => {
    setDraft({ ...emptyDraft, id: crypto.randomUUID() });
    setWizardStep(0);
    setWizardOpen(true);
  };

  const saveDraft = () => {
    setRecords((xs) => {
      const exists = xs.some((r) => r.id === draft.id);
      return exists ? xs.map((r) => (r.id === draft.id ? draft : r)) : [draft, ...xs];
    });
    push("Record saved.", "success");
    setWizardOpen(false);
  };

  const deleteRecord = (id) => {
    const rec = records.find((r) => r.id === id);
    setRecords((xs) => xs.filter((r) => r.id !== id));
    push("Record deleted. Undo?", "info", 5000);
    undoRef.current = () => setRecords((xs) => [rec, ...xs]);
    setTimeout(() => (undoRef.current = null), 5000);
  };

  const undo = () => {
    if (undoRef.current) {
      undoRef.current();
      push("Delete undone.", "success");
      undoRef.current = null;
    }
  };

  const selectToggle = (id) =>
    setSelectedIds((xs) => (xs.includes(id) ? xs.filter((x) => x !== id) : [...xs, id]));

  const selectAllVisible = () => setSelectedIds(visible.map((v) => v.id));
  const clearSelection = () => setSelectedIds([]);

  // exports
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Health History Records", 10, 12);
    let y = 20;
    visible.forEach((r, i) => {
      const line = `${i + 1}. ${r.date} — ${r.title} (${r.type})`;
      doc.text(line, 10, y);
      y += 8;
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });
    doc.save("health-history.pdf");
  };

  const exportCSV = () => {
    const header = ["id", "date", "title", "type", "doctor", "place", "details", "starred"]; 
    const rows = visible.map((r) => header.map((k) => JSON.stringify(r[k] ?? "")).join(","));
    const csv = [header.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "health-history.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(records, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "health-history.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJSON = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!Array.isArray(parsed)) throw new Error("Invalid file.");
        // Basic normalization
        const cleaned = parsed.map((r) => ({
          id: r.id || crypto.randomUUID(),
          date: r.date || new Date().toISOString().slice(0, 10),
          title: r.title || "Untitled",
          type: r.type || "Checkup",
          details: r.details || "",
          doctor: r.doctor || "",
          place: r.place || "",
          starred: !!r.starred,
          attachments: Array.isArray(r.attachments) ? r.attachments : [],
        }));
        setRecords((xs) => [...cleaned, ...xs]);
        push("Imported records.", "success");
      } catch (e) {
        push("Failed to import JSON.", "error");
      }
    };
    reader.readAsText(file);
  };

  const printPage = () => window.print();

  // quick stats
  const stats = useMemo(() => {
    const totals = types.reduce((acc, t) => ({ ...acc, [t]: 0 }), {});
    let starred = 0;
    records.forEach((r) => {
      totals[r.type] = (totals[r.type] || 0) + 1;
      if (r.starred) starred += 1;
    });
    return { totals, starred, total: records.length };
  }, [records]);

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-6">
        <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2">
          <FileText size={28} /> Health History
        </h1>
        <div className="flex flex-wrap gap-2">
          <button onClick={requestNotif} className="flex items-center gap-2 bg-white border px-3 py-2 rounded-lg hover:bg-gray-50">
            <Bell size={18} /> Enable Notifications
          </button>
          <button onClick={beginAdd} className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700">
            <Plus size={18} /> Add Record
          </button>
          <button onClick={exportPDF} className="flex items-center gap-2 bg-white border px-3 py-2 rounded-lg hover:bg-gray-50">
            <Download size={18} /> PDF
          </button>
          <button onClick={exportCSV} className="flex items-center gap-2 bg-white border px-3 py-2 rounded-lg hover:bg-gray-50">
            <Download size={18} /> CSV
          </button>
          <button onClick={exportJSON} className="flex items-center gap-2 bg-white border px-3 py-2 rounded-lg hover:bg-gray-50">
            <Download size={18} /> JSON
          </button>
          <button onClick={printPage} className="flex items-center gap-2 bg-white border px-3 py-2 rounded-lg hover:bg-gray-50">
            <Printer size={18} /> Print
          </button>
          <label className="flex items-center gap-2 bg-white border px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer">
            <Upload size={18} /> Import JSON
            <input type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files?.[0] && importJSON(e.target.files[0])} />
          </label>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-white border rounded-xl p-3">
          <div className="text-sm text-gray-600">Total Records</div>
          <div className="text-2xl font-semibold">{stats.total}</div>
        </div>
        <div className="bg-white border rounded-xl p-3">
          <div className="text-sm text-gray-600">Starred (Important)</div>
          <div className="text-2xl font-semibold">{stats.starred}</div>
        </div>
        {types.slice(0, 2).map((t) => (
          <div key={t} className="bg-white border rounded-xl p-3">
            <div className="text-sm text-gray-600">{t}</div>
            <div className="text-2xl font-semibold">{stats.totals[t]}</div>
          </div>
        ))}
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex items-center gap-2 bg-white rounded-lg p-3 shadow w-full md:w-2/5">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search title, type, doctor or place..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Filter className="text-gray-500 w-5 h-5" />
          {/* Type chips */}
          <button
            onClick={() => toggleType("All")}
            className={clsx(
              "px-3 py-1 rounded-full border text-sm",
              activeTypes.includes("All") ? "bg-green-600 text-white border-green-600" : "bg-white"
            )}
          >
            All
          </button>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => toggleType(t)}
              className={clsx(
                "px-3 py-1 rounded-full border text-sm",
                activeTypes.includes(t) ? "bg-green-600 text-white border-green-600" : "bg-white"
              )}
            >
              {t}
            </button>
          ))}

          {/* Date range */}
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="px-2 py-1 rounded-lg border bg-white" />
          <span className="text-sm text-gray-500">to</span>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="px-2 py-1 rounded-lg border bg-white" />

          {/* Sort */}
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="p-2 rounded-lg border bg-white">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

          {/* Expand */}
          <button onClick={() => setExpandAll((v) => !v)} className="px-3 py-1 rounded-lg border bg-white">
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>
      </div>

      {/* Bulk actions when selected */}
      {selectedIds.length > 0 && (
        <div className="mb-3 p-3 bg-green-100 border border-green-200 rounded-xl flex items-center justify-between">
          <div className="text-sm text-green-900">{selectedIds.length} selected</div>
          <div className="flex gap-2">
            <button onClick={selectAllVisible} className="px-3 py-1 rounded bg-white border">Select All</button>
            <button onClick={clearSelection} className="px-3 py-1 rounded bg-white border">Clear</button>
            <button onClick={exportPDF} className="px-3 py-1 rounded bg-white border">Export PDF</button>
            <button onClick={exportCSV} className="px-3 py-1 rounded bg-white border">Export CSV</button>
          </div>
        </div>
      )}

      {/* Timeline grouped by year */}
      <div className="space-y-6">
        {Object.keys(groupedByYear)
          .sort((a, b) => (sortOrder === "newest" ? b.localeCompare(a) : a.localeCompare(b)))
          .map((year) => (
            <div key={year}>
              <div className="sticky top-0 z-10 bg-green-50/80 backdrop-blur supports-[backdrop-filter]:bg-green-50/50 mb-2">
                <h3 className="text-xl font-semibold text-green-800">{year}</h3>
              </div>
              <div className="space-y-4">
                {groupedByYear[year].map((record) => {
                  const open = expandAll || expandedId === record.id;
                  return (
                    <div key={record.id} className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 md:p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <input type="checkbox" className="mt-1" checked={selectedIds.includes(record.id)} onChange={() => selectToggle(record.id)} />
                          <div>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <Calendar size={16} /> {record.date}
                            </p>
                            <h2 className="text-lg font-semibold text-green-700">{record.title}</h2>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className={clsx("text-xs font-medium px-2 py-1 rounded", TYPE_COLORS[record.type])}>{record.type}</span>
                              {record.doctor && <span className="text-xs text-gray-600">Doctor: {record.doctor}</span>}
                              {record.place && <span className="text-xs text-gray-600">Place: {record.place}</span>}
                              {record.attachments?.length > 0 && (
                                <span className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded">{record.attachments.length} file(s)</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => toggleStar(record.id)} className="px-2 py-1 rounded bg-white border hover:bg-yellow-50" title={record.starred ? "Unstar" : "Star"}>
                            {record.starred ? <Star className="w-4 h-4 text-yellow-600" /> : <StarOff className="w-4 h-4 text-gray-500" />}
                          </button>
                          <button onClick={() => beginEdit(record)} className="px-2 py-1 rounded bg-white border hover:bg-gray-50" title="Edit">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button onClick={() => deleteRecord(record.id)} className="px-2 py-1 rounded bg-white border hover:bg-red-50" title="Delete">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                          <button onClick={() => toggleExpand(record.id)} className="text-gray-600 hover:text-green-600" title="Toggle details">
                            {open ? <ChevronUp /> : <ChevronDown />}
                          </button>
                        </div>
                      </div>

                      {open && (
                        <div className="mt-3 text-gray-700 border-t pt-3">
                          {record.details || <span className="text-gray-500">No additional details.</span>}
                          {record.attachments?.length > 0 && (
                            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
                              {record.attachments.map((f, idx) => (
                                <div key={idx} className="border rounded-lg p-2 text-xs text-gray-600 truncate">{f.name} • {Math.round((f.size || 0) / 1024)} KB</div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </div>

      {/* Undo bar */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-4 z-40">
        <button onClick={undo} className="px-4 py-2 rounded-full bg-gray-900 text-white shadow-lg hidden md:inline-block">Undo delete</button>
      </div>

      {/* Add/Edit Wizard */}
      <Modal
        open={wizardOpen}
        onClose={() => setWizardOpen(false)}
        title="Add / Edit Health Record"
        footer={
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">Step {wizardStep + 1} of 4</div>
            <div className="flex gap-2">
              <button className="px-3 py-2 rounded-lg bg-white border" onClick={() => setWizardOpen(false)}>Cancel</button>
              {wizardStep > 0 && (
                <button className="px-3 py-2 rounded-lg bg-white border" onClick={() => setWizardStep((s) => s - 1)}>Back</button>
              )}
              {wizardStep < 3 ? (
                <button className="px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700" onClick={() => setWizardStep((s) => s + 1)}>Next</button>
              ) : (
                <button className="px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700" onClick={saveDraft}>Save</button>
              )}
            </div>
          </div>
        }
      >
        {wizardStep === 0 && (
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Title</label>
              <input className="w-full rounded-lg border px-3 py-2" value={draft.title} onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))} placeholder="e.g., Annual Health Checkup" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Type</label>
              <select className="w-full rounded-lg border px-3 py-2" value={draft.type} onChange={(e) => setDraft((d) => ({ ...d, type: e.target.value }))}>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Mark as Important</label>
              <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={draft.starred} onChange={(e) => setDraft((d) => ({ ...d, starred: e.target.checked }))} /> Star this record</label>
            </div>
          </div>
        )}
        {wizardStep === 1 && (
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Date</label>
              <input type="date" className="w-full rounded-lg border px-3 py-2" value={draft.date} onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Doctor / Provider</label>
              <input className="w-full rounded-lg border px-3 py-2" value={draft.doctor} onChange={(e) => setDraft((d) => ({ ...d, doctor: e.target.value }))} placeholder="e.g., Dr. Meera Verma" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Hospital / Clinic</label>
              <input className="w-full rounded-lg border px-3 py-2" value={draft.place} onChange={(e) => setDraft((d) => ({ ...d, place: e.target.value }))} placeholder="e.g., CityCare Hospital" />
            </div>
          </div>
        )}
        {wizardStep === 2 && (
          <div className="grid gap-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Details / Notes</label>
              <textarea rows={4} className="w-full rounded-lg border px-3 py-2" value={draft.details} onChange={(e) => setDraft((d) => ({ ...d, details: e.target.value }))} placeholder="Add relevant notes, medications, outcomes..." />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Attachments (optional)</label>
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files || []).map((f) => ({ name: f.name, size: f.size, type: f.type }));
                  setDraft((d) => ({ ...d, attachments: [...(d.attachments || []), ...files] }));
                }}
              />
              {draft.attachments?.length > 0 && (
                <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                  {draft.attachments.map((f, idx) => (
                    <div key={idx} className="border rounded-lg p-2 text-xs text-gray-600 truncate">{f.name} • {Math.round((f.size || 0) / 1024)} KB</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        {wizardStep === 3 && (
          <div className="space-y-2 text-sm text-gray-700">
            <div><strong>Title:</strong> {draft.title || <span className="text-gray-400">(untitled)</span>}</div>
            <div><strong>Type:</strong> {draft.type}</div>
            <div><strong>Date:</strong> {draft.date}</div>
            <div><strong>Doctor:</strong> {draft.doctor || <span className="text-gray-400">—</span>}</div>
            <div><strong>Place:</strong> {draft.place || <span className="text-gray-400">—</span>}</div>
            <div><strong>Details:</strong> {draft.details || <span className="text-gray-400">—</span>}</div>
            <div><strong>Attachments:</strong> {draft.attachments?.length || 0}</div>
          </div>
        )}
      </Modal>

      {/* Toasts */}
      <ToastStack toasts={toasts} onClose={remove} />
    </div>
  );
}

