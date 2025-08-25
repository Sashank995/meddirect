import React, { useState, useEffect } from "react";
import { CalendarDays, Clock, User, MapPin, Edit, Trash, Search, Download } from "lucide-react";
import jsPDF from "jspdf";

export default function Appointments() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchTerm, setSearchTerm] = useState("");
  const [appointments, setAppointments] = useState([]);

  // Fetch from backend
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/appointments");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };
    fetchAppointments();
  }, []);

  // Filter by tab and search
  const filteredAppointments = appointments.filter(
    (a) =>
      a.status === activeTab &&
      (a.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.date.includes(searchTerm))
  );

  // Download appointment PDF
  const downloadPDF = (appt) => {
    const doc = new jsPDF();
    doc.text("Appointment Details", 10, 10);
    doc.text(`Doctor: ${appt.doctor}`, 10, 20);
    doc.text(`Hospital: ${appt.hospital}`, 10, 30);
    doc.text(`Date: ${appt.date}`, 10, 40);
    doc.text(`Time: ${appt.time}`, 10, 50);
    doc.text(`Type: ${appt.type}`, 10, 60);
    doc.save("appointment.pdf");
  };

  // Edit appointment placeholder
  const editAppointment = (appt) => {
    alert(`Editing appointment with ${appt.doctor} on ${appt.date}`);
  };

  // Cancel appointment (call backend DELETE)
  const cancelAppointment = async (appt) => {
    if (window.confirm(`Cancel appointment with ${appt.doctor} on ${appt.date}?`)) {
      try {
        await fetch(`https://medirectbackend.onrender.com/api/appointments/${appt.id}`, {
          method: "DELETE",
        });
        setAppointments((prev) => prev.filter((a) => a.id !== appt.id));
        alert("Appointment cancelled.");
      } catch (err) {
        console.error("Error deleting:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2">
          <CalendarDays size={28} /> Appointments
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "upcoming" ? "bg-green-600 text-white" : "bg-white border"
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "past" ? "bg-green-600 text-white" : "bg-white border"
          }`}
          onClick={() => setActiveTab("past")}
        >
          Past
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 mb-6 bg-white rounded-lg p-3 shadow">
        <Search size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by doctor, hospital or date..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* Appointment List */}
      <div className="space-y-4">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 md:p-5"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <CalendarDays size={16} /> {appt.date}
                    <Clock size={16} className="ml-3" /> {appt.time}
                  </p>
                  <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2 mt-1">
                    <User size={18} /> {appt.doctor}
                  </h2>
                  <p className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} /> {appt.hospital}
                  </p>
                  <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded mt-2 inline-block">
                    {appt.type}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => downloadPDF(appt)}
                    className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200"
                  >
                    <Download size={16} /> PDF
                  </button>
                  <button
                    onClick={() => editAppointment(appt)}
                    className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded hover:bg-yellow-200"
                  >
                    <Edit size={16} /> Edit
                  </button>
                  <button
                    onClick={() => cancelAppointment(appt)}
                    className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                  >
                    <Trash size={16} /> Cancel
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No appointments found.</p>
        )}
      </div>
    </div>
  );
}
