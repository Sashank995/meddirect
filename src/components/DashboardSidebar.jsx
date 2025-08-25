import { Link } from "react-router-dom";
import React from "react";
export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-4 hidden md:block">
      <h2 className="text-lg font-bold mb-4">Main Services</h2>
      <ul className="space-y-2">
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/dashboard/health-assessment">Health Assessment</Link></li>
        <li>Medication Guide</li>
        <li>Hospital Finder</li>
      </ul>
    </aside>
  );
}
