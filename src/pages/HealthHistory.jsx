import React, { useState, useEffect } from "react";
import {
  Calendar,
  FileText,
  Download,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";
import jsPDF from "jspdf";

export default function HealthHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [healthRecords, setHealthRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch data from backend
  useEffect(() => {
    fetch("https://medirectbackend.onrender.com/api/health-history") // <-- your backend URL
      .then((res) => res.json())
      .then((data) => {
        setHealthRecords(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching health history:", err);
        setLoading(false);
      });
  }, []);

  // Filter records based on search
  const filteredRecords = healthRecords.filter(
    (record) =>
      record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle expand/collapse
  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  // Download PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Health History Records", 10, 10);
    healthRecords.forEach((record, index) => {
      doc.text(
        `${index + 1}. ${record.date} - ${record.title} (${record.type})`,
        10,
        20 + index * 10
      );
    });
    doc.save("health-history.pdf");
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2">
          <FileText size={28} /> Health History
        </h1>
        <button
          onClick={downloadPDF}
          className="mt-3 md:mt-0 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          <Download size={18} /> Download PDF
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-6 bg-white rounded-lg p-3 shadow">
        <Search size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by type or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* Timeline */}
      {loading ? (
        <p className="text-gray-500 text-center">Loading health records...</p>
      ) : (
        <div className="space-y-4">
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record) => (
              <div
                key={record._id || record.id}
                className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 md:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar size={16} /> {record.date}
                    </p>
                    <h2 className="text-lg font-semibold text-green-700">
                      {record.title}
                    </h2>
                    <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded">
                      {record.type}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleExpand(record._id || record.id)}
                    className="text-gray-600 hover:text-green-600"
                  >
                    {expanded === (record._id || record.id) ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </button>
                </div>

                {/* Expanded Details */}
                {expanded === (record._id || record.id) && (
                  <div className="mt-3 text-gray-700 border-t pt-3">
                    {record.details}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              No matching records found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
