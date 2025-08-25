import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import React from "react";
export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
