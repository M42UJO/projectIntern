import React from "react";
import Sidebar from "../sidebar/sidebar";
import DashboardHeader from "./dashboard_header";
import DashboardSestion from "./dashboard_sestion";

export default function Dashboard() {
  return (
    <div className="flex h-screen p-4">
      <Sidebar />

      <main className="flex-grow p-6 rounded-md shadow-lg bg-[#F5F6FB]">
        <DashboardHeader />

        <DashboardSestion />
        
      </main>
    </div>
  );
}
