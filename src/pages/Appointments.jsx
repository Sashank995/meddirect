// import React, { useState, useEffect } from "react";
// import { CalendarDays, Clock, User, MapPin, Edit, Trash, Search, Download } from "lucide-react";
// import jsPDF from "jspdf";

// export default function Appointments() {
//   const [activeTab, setActiveTab] = useState("upcoming");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [appointments, setAppointments] = useState([]);

//   // Fetch from backend
//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/appointments");
//         const data = await res.json();
//         setAppointments(data);
//       } catch (err) {
//         console.error("Error fetching appointments:", err);
//       }
//     };
//     fetchAppointments();
//   }, []);

//   // Filter by tab and search
//   const filteredAppointments = appointments.filter(
//     (a) =>
//       a.status === activeTab &&
//       (a.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         a.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         a.date.includes(searchTerm))
//   );

//   // Download appointment PDF
//   const downloadPDF = (appt) => {
//     const doc = new jsPDF();
//     doc.text("Appointment Details", 10, 10);
//     doc.text(`Doctor: ${appt.doctor}`, 10, 20);
//     doc.text(`Hospital: ${appt.hospital}`, 10, 30);
//     doc.text(`Date: ${appt.date}`, 10, 40);
//     doc.text(`Time: ${appt.time}`, 10, 50);
//     doc.text(`Type: ${appt.type}`, 10, 60);
//     doc.save("appointment.pdf");
//   };

//   // Edit appointment placeholder
//   const editAppointment = (appt) => {
//     alert(`Editing appointment with ${appt.doctor} on ${appt.date}`);
//   };

//   // Cancel appointment (call backend DELETE)
//   const cancelAppointment = async (appt) => {
//     if (window.confirm(`Cancel appointment with ${appt.doctor} on ${appt.date}?`)) {
//       try {
//         await fetch(`https://medirectbackend.onrender.com/api/appointments/${appt.id}`, {
//           method: "DELETE",
//         });
//         setAppointments((prev) => prev.filter((a) => a.id !== appt.id));
//         alert("Appointment cancelled.");
//       } catch (err) {
//         console.error("Error deleting:", err);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-green-50 p-6">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row items-center justify-between mb-6">
//         <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2">
//           <CalendarDays size={28} /> Appointments
//         </h1>
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-4 mb-6">
//         <button
//           className={`px-4 py-2 rounded-lg ${
//             activeTab === "upcoming" ? "bg-green-600 text-white" : "bg-white border"
//           }`}
//           onClick={() => setActiveTab("upcoming")}
//         >
//           Upcoming
//         </button>
//         <button
//           className={`px-4 py-2 rounded-lg ${
//             activeTab === "past" ? "bg-green-600 text-white" : "bg-white border"
//           }`}
//           onClick={() => setActiveTab("past")}
//         >
//           Past
//         </button>
//       </div>

//       {/* Search */}
//       <div className="flex items-center gap-2 mb-6 bg-white rounded-lg p-3 shadow">
//         <Search size={20} className="text-gray-500" />
//         <input
//           type="text"
//           placeholder="Search by doctor, hospital or date..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full outline-none"
//         />
//       </div>

//       {/* Appointment List */}
//       <div className="space-y-4">
//         {filteredAppointments.length > 0 ? (
//           filteredAppointments.map((appt) => (
//             <div
//               key={appt.id}
//               className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 md:p-5"
//             >
//               <div className="flex flex-col md:flex-row justify-between gap-4">
//                 <div>
//                   <p className="text-sm text-gray-500 flex items-center gap-1">
//                     <CalendarDays size={16} /> {appt.date}
//                     <Clock size={16} className="ml-3" /> {appt.time}
//                   </p>
//                   <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2 mt-1">
//                     <User size={18} /> {appt.doctor}
//                   </h2>
//                   <p className="flex items-center gap-2 text-gray-600">
//                     <MapPin size={16} /> {appt.hospital}
//                   </p>
//                   <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded mt-2 inline-block">
//                     {appt.type}
//                   </span>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex flex-wrap gap-2">
//                   <button
//                     onClick={() => downloadPDF(appt)}
//                     className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200"
//                   >
//                     <Download size={16} /> PDF
//                   </button>
//                   <button
//                     onClick={() => editAppointment(appt)}
//                     className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded hover:bg-yellow-200"
//                   >
//                     <Edit size={16} /> Edit
//                   </button>
//                   <button
//                     onClick={() => cancelAppointment(appt)}
//                     className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
//                   >
//                     <Trash size={16} /> Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 text-center">No appointments found.</p>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  CalendarDays,
  Clock,
  User,
  MapPin,
  Edit,
  Trash,
  Search,
  Download,
  Bell,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  PlusCircle,
  Filter,
} from "lucide-react";
import jsPDF from "jspdf";

/** ---------- helpers ---------- */
const STORAGE_KEY = "appointments_data_v1";

const defaultAppointments = [
  {
    id: "A-1001",
    status: "upcoming", // upcoming | past | cancelled
    doctor: "Dr. Ananya Rao",
    hospital: "Apollo Hospitals, Jubilee Hills",
    date: "2025-09-01",
    time: "10:00",
    type: "Consultation",
    notes: "Bring last year blood reports.",
    address: "Road No. 72, Film Nagar, Hyderabad",
  },
  {
    id: "A-1002",
    status: "upcoming",
    doctor: "Dr. Karthik Menon",
    hospital: "Fortis, Bannerghatta",
    date: "2025-08-30",
    time: "16:30",
    type: "Follow-up",
    notes: "Discuss MRI results.",
    address: "Bannerghatta Main Rd, Bengaluru",
  },
  {
    id: "A-1003",
    status: "past",
    doctor: "Dr. Meera Shah",
    hospital: "AIIMS, New Delhi",
    date: "2025-07-10",
    time: "11:15",
    type: "Physiotherapy",
    notes: "Lower back routine, 30 mins.",
    address: "Ansari Nagar, New Delhi",
  },
  {
    id: "A-1004",
    status: "cancelled",
    doctor: "Dr. Arvind Iyer",
    hospital: "Manipal Hospital",
    date: "2025-06-22",
    time: "09:00",
    type: "Surgery",
    notes: "Cancelled by patient.",
    address: "Old Airport Rd, Bengaluru",
  },
];

function toDate(appt) {
  return new Date(`${appt.date}T${appt.time}:00`);
}
function formatLongDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

/** ---------- Toasts (notifications) ---------- */
function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = (msg, variant = "info", ttl = 3500) => {
    const id = crypto.randomUUID();
    const t = { id, msg, variant, ts: Date.now() };
    setToasts((s) => [...s, t]);
    setTimeout(() => {
      setToasts((s) => s.filter((x) => x.id !== id));
    }, ttl);
  };
  const remove = (id) => setToasts((s) => s.filter((x) => x.id !== id));
  return { toasts, push, remove };
}

function ToastStack({ toasts, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 z-[80] space-y-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`flex items-start gap-2 rounded-xl px-3 py-2 shadow border bg-white ${
            t.variant === "success"
              ? "border-green-200"
              : t.variant === "error"
              ? "border-red-200"
              : "border-gray-200"
          }`}
          role="status"
        >
          {t.variant === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
          ) : t.variant === "error" ? (
            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
          ) : (
            <Bell className="w-4 h-4 text-gray-600 mt-0.5" />
          )}
          <div className="text-sm text-gray-800">{t.msg}</div>
          <button
            className="ml-2 text-gray-400 hover:text-gray-600"
            onClick={() => onClose(t.id)}
            aria-label="Dismiss notification"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

/** ---------- Modal ---------- */
function Modal({ open, onClose, title, children, footer }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full md:w-[520px] bg-white rounded-t-2xl md:rounded-2xl shadow-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto">{children}</div>
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
}

/** ---------- Stepper (inline details) ---------- */
function Stepper({ steps }) {
  return (
    <div className="relative pl-5">
      <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-200" />
      <ul className="space-y-3">
        {steps.map((s, i) => (
          <li key={i} className="relative">
            <div
              className={`absolute -left-[6px] top-0 w-3 h-3 rounded-full ${
                s.done ? "bg-green-600" : "bg-gray-300"
              }`}
            />
            <div className="text-sm">
              <div className="font-medium text-gray-800">{s.label}</div>
              {s.note && <div className="text-gray-500">{s.note}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** ---------- Main Component ---------- */
export default function Appointments() {
  const { toasts, push, remove } = useToasts();

  const [activeTab, setActiveTab] = useState("upcoming"); // upcoming | past | cancelled
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("soonest"); // soonest | oldest
  const [expandedIds, setExpandedIds] = useState(new Set());
  const [notifPanelOpen, setNotifPanelOpen] = useState(false);

  // notification center (history)
  const [notifications, setNotifications] = useState([]);

  // edit modal
  const [editOpen, setEditOpen] = useState(false);
  const [draft, setDraft] = useState(null);

  // state: appointments (persist in localStorage)
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultAppointments;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
  }, [appointments]);

  // derived filtered/sorted list
  const list = useMemo(() => {
    let arr = appointments.filter(
      (a) =>
        a.status === activeTab &&
        (a.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          a.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
          a.date.includes(searchTerm))
    );
    if (typeFilter !== "All") arr = arr.filter((a) => a.type === typeFilter);
    arr.sort((a, b) =>
      sortOrder === "soonest" ? toDate(a) - toDate(b) : toDate(b) - toDate(a)
    );
    return arr;
  }, [appointments, activeTab, searchTerm, sortOrder, typeFilter]);

  // Expand/Collapse all for current list
  const expandAll = () => setExpandedIds(new Set(list.map((x) => x.id)));
  const collapseAll = () => setExpandedIds(new Set());

  const toggleExpand = (id) =>
    setExpandedIds((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });

  // PDF
  const downloadPDF = (appt) => {
    const doc = new jsPDF();
    doc.text("Appointment Details", 10, 10);
    doc.text(`ID: ${appt.id}`, 10, 20);
    doc.text(`Doctor: ${appt.doctor}`, 10, 30);
    doc.text(`Hospital: ${appt.hospital}`, 10, 40);
    doc.text(`Date: ${formatLongDate(appt.date)}`, 10, 50);
    doc.text(`Time: ${appt.time}`, 10, 60);
    doc.text(`Type: ${appt.type}`, 10, 70);
    if (appt.address) doc.text(`Address: ${appt.address}`, 10, 80);
    if (appt.notes) doc.text(`Notes: ${appt.notes}`, 10, 90);
    doc.save(`appointment-${appt.id}.pdf`);
    push("PDF ready for download.", "success");
    addNotification(`Downloaded PDF for ${appt.doctor} • ${appt.date}`);
  };

  // Edit / Reschedule
  const openEdit = (appt) => {
    setDraft({ ...appt });
    setEditOpen(true);
  };
  const saveEdit = () => {
    setAppointments((prev) => prev.map((p) => (p.id === draft.id ? draft : p)));
    setEditOpen(false);
    push("Appointment updated.", "success");
    addNotification(`Rescheduled ${draft.doctor} to ${draft.date} at ${draft.time}`);
  };

  // Cancel
  const cancelAppointment = (appt) => {
    if (!confirm(`Cancel appointment with ${appt.doctor} on ${appt.date}?`)) return;
    setAppointments((prev) =>
      prev.map((p) => (p.id === appt.id ? { ...p, status: "cancelled" } : p))
    );
    push("Appointment cancelled.", "error");
    addNotification(`Cancelled appointment with ${appt.doctor} • ${appt.date}`);
  };

  // Reminders (demo)
  const reminderTimers = useRef({});
  const remindIn10s = (appt) => {
    if (reminderTimers.current[appt.id]) {
      push("Reminder already scheduled.", "info");
      return;
    }
    reminderTimers.current[appt.id] = setTimeout(() => {
      push(`Reminder: ${appt.doctor} at ${appt.time} today`, "success");
      addNotification(`Reminder fired for ${appt.doctor} • ${appt.time}`);
      delete reminderTimers.current[appt.id];
    }, 10000);
    push("Reminder scheduled (fires in ~10 seconds).", "info");
    addNotification(`Reminder scheduled for ${appt.doctor}`);
  };
  useEffect(() => {
    return () => {
      // cleanup timers on unmount
      Object.values(reminderTimers.current).forEach(clearTimeout);
    };
  }, []);

  // Notification history
  const addNotification = (text) =>
    setNotifications((s) => [{ id: crypto.randomUUID(), text, read: false, ts: Date.now() }, ...s]);
  const markAllRead = () => setNotifications((s) => s.map((n) => ({ ...n, read: true })));

  const typeColors = {
    Consultation: "bg-blue-100 text-blue-700",
    "Follow-up": "bg-purple-100 text-purple-700",
    Surgery: "bg-red-100 text-red-700",
    Physiotherapy: "bg-amber-100 text-amber-700",
    Vaccination: "bg-green-100 text-green-700",
  };
  const statusBadge = {
    upcoming: "bg-emerald-100 text-emerald-700",
    past: "bg-gray-100 text-gray-700",
    cancelled: "bg-rose-100 text-rose-700",
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-6">
        <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2">
          <CalendarDays size={28} /> Appointments
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className="px-3 py-2 rounded-lg bg-white border hover:bg-gray-50"
            title="Expand all details"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-2 rounded-lg bg-white border hover:bg-gray-50"
            title="Collapse all details"
          >
            Collapse All
          </button>
          <button
            onClick={() => {
              // quick add demo
              const n = {
                id: `A-${Math.floor(Math.random() * 9000 + 1000)}`,
                status: "upcoming",
                doctor: "Dr. New Demo",
                hospital: "Demo Clinic",
                date: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
                time: "12:00",
                type: "Consultation",
                notes: "Demo added from + button.",
                address: "123 Demo Street",
              };
              setAppointments((prev) => [n, ...prev]);
              push("New appointment added.", "success");
              addNotification(`Added appointment ${n.id}`);
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            <PlusCircle className="w-4 h-4" /> New
          </button>

          {/* Notification bell */}
          <div className="relative">
            <button
              onClick={() => setNotifPanelOpen((v) => !v)}
              className="relative p-2 rounded-lg bg-white border hover:bg-gray-50"
              aria-label="Open notifications"
            >
              <Bell className="w-5 h-5" />
              {notifications.some((n) => !n.read) && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1 rounded">
                  {notifications.filter((n) => !n.read).length}
                </span>
              )}
            </button>
            {notifPanelOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white border rounded-xl shadow-lg z-40">
                <div className="flex items-center justify-between p-3 border-b">
                  <div className="font-medium">Notifications</div>
                  <button className="text-sm text-green-700" onClick={markAllRead}>
                    Mark all read
                  </button>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.length ? (
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`px-3 py-2 text-sm ${
                          n.read ? "text-gray-600" : "text-gray-900"
                        }`}
                      >
                        {n.text}
                        <div className="text-[11px] text-gray-400">
                          {new Date(n.ts).toLocaleTimeString()}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-3 py-6 text-sm text-gray-500 text-center">
                      No notifications yet.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {["upcoming", "past", "cancelled"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg capitalize ${
              activeTab === tab ? "bg-green-600 text-white" : "bg-white border"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
        <div className="flex items-center gap-2 bg-white rounded-lg p-3 shadow w-full md:flex-1">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by doctor, hospital or date..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="p-2 rounded-lg border bg-white"
            aria-label="Filter by type"
          >
            <option>All</option>
            <option>Consultation</option>
            <option>Follow-up</option>
            <option>Physiotherapy</option>
            <option>Surgery</option>
            <option>Vaccination</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 rounded-lg border bg-white"
            aria-label="Sort by time"
          >
            <option value="soonest">Soonest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Appointment List */}
      <div className="space-y-4">
        {list.length ? (
          list.map((appt) => {
            const expanded = expandedIds.has(appt.id);
            const steps = [
              { label: "Booked", done: true, note: `ID ${appt.id}` },
              {
                label: "Reminder",
                done: false,
                note: "Optional: schedule a reminder",
              },
              {
                label: activeTab === "past" ? "Visited" : "Check-in",
                done: activeTab === "past",
                note:
                  activeTab === "past"
                    ? "Marked as completed"
                    : "Arrive 15 mins early",
              },
              {
                label: activeTab === "past" ? "Completed" : "Awaiting visit",
                done: activeTab === "past",
              },
            ];

            return (
              <div
                key={appt.id}
                className="bg-white rounded-xl border shadow-sm hover:shadow-md transition"
              >
                <div className="p-4 md:p-5">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-500 flex items-center gap-3">
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays size={16} /> {formatLongDate(appt.date)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={16} /> {appt.time}
                        </span>
                      </p>
                      <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2 mt-1">
                        <User size={18} /> {appt.doctor}
                      </h2>
                      <p className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} /> {appt.hospital}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded ${typeColors[appt.type] || "bg-gray-100 text-gray-700"}`}
                        >
                          {appt.type}
                        </span>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded ${statusBadge[appt.status]}`}
                        >
                          {appt.status}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 md:items-start">
                      {appt.status !== "cancelled" && (
                        <button
                          onClick={() => downloadPDF(appt)}
                          className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200"
                        >
                          <Download size={16} /> PDF
                        </button>
                      )}
                      {appt.status === "upcoming" && (
                        <>
                          <button
                            onClick={() => openEdit(appt)}
                            className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded hover:bg-yellow-200"
                          >
                            <Edit size={16} /> Reschedule
                          </button>
                          <button
                            onClick={() => cancelAppointment(appt)}
                            className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                          >
                            <Trash size={16} /> Cancel
                          </button>
                          <button
                            onClick={() => remindIn10s(appt)}
                            className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded hover:bg-emerald-200"
                          >
                            <Bell size={16} /> Remind me (demo)
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Expand control */}
                  <div className="mt-3 border-t pt-3">
                    <button
                      onClick={() => toggleExpand(appt.id)}
                      className="text-gray-700 hover:text-green-700 inline-flex items-center gap-1"
                      aria-expanded={expanded}
                      aria-controls={`details-${appt.id}`}
                    >
                      {expanded ? <ChevronUp /> : <ChevronDown />}
                      {expanded ? "Hide details" : "Show details"}
                    </button>

                    {expanded && (
                      <div id={`details-${appt.id}`} className="mt-3 grid md:grid-cols-2 gap-4">
                        <div className="rounded-xl border p-3">
                          <div className="text-sm font-medium text-gray-700 mb-2">
                            Visit Details
                          </div>
                          <dl className="text-sm text-gray-700 space-y-1">
                            <div className="flex justify-between">
                              <dt>Doctor</dt>
                              <dd className="font-medium">{appt.doctor}</dd>
                            </div>
                            <div className="flex justify-between">
                              <dt>Hospital</dt>
                              <dd className="font-medium">{appt.hospital}</dd>
                            </div>
                            <div className="flex justify-between">
                              <dt>Date & Time</dt>
                              <dd className="font-medium">
                                {formatLongDate(appt.date)}, {appt.time}
                              </dd>
                            </div>
                            {appt.address && (
                              <div className="flex justify-between">
                                <dt>Address</dt>
                                <dd className="font-medium text-right ml-4">{appt.address}</dd>
                              </div>
                            )}
                            {appt.notes && (
                              <div className="pt-2">
                                <div className="text-gray-500">Notes</div>
                                <div className="text-gray-800">{appt.notes}</div>
                              </div>
                            )}
                          </dl>
                        </div>

                        <div className="rounded-xl border p-3">
                          <div className="text-sm font-medium text-gray-700 mb-2">
                            Step-by-step
                          </div>
                          <Stepper steps={steps} />
                          <div className="mt-3 text-xs text-gray-500">
                            Tip: tap <Bell className="inline w-3 h-3" /> **Remind me** to get a demo
                            notification in ~10 seconds.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center">No appointments found.</p>
        )}
      </div>

      {/* Edit / Reschedule modal */}
      <Modal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        title="Reschedule Appointment"
        footer={
          <div className="flex justify-end gap-2">
            <button className="px-3 py-2 rounded-lg bg-white border" onClick={() => setEditOpen(false)}>
              Cancel
            </button>
            <button
              className="px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              onClick={saveEdit}
            >
              Save
            </button>
          </div>
        }
      >
        {draft && (
          <form
            className="grid grid-cols-1 gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              saveEdit();
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Date</label>
                <input
                  type="date"
                  value={draft.date}
                  onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))}
                  className="w-full rounded-lg border px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Time</label>
                <input
                  type="time"
                  value={draft.time}
                  onChange={(e) => setDraft((d) => ({ ...d, time: e.target.value }))}
                  className="w-full rounded-lg border px-3 py-2"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Notes</label>
              <textarea
                value={draft.notes || ""}
                onChange={(e) => setDraft((d) => ({ ...d, notes: e.target.value }))}
                className="w-full rounded-lg border px-3 py-2"
                rows={3}
                placeholder="Any preparation, documents to bring, etc."
              />
            </div>
          </form>
        )}
      </Modal>

      {/* Toasts */}
      <ToastStack toasts={toasts} onClose={remove} />
    </div>
  );
}
