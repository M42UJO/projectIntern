import React, { useState } from "react";
import Sidebar from "./sidebar";

export default function Spaces() {
  const [activeTab, setActiveTab] = useState("รายการ"); // State to track active tab

  return (
    <div className="flex h-screen p-4">
      <Sidebar />

      <main className="flex-grow p-6 rounded-md shadow-lg" style={{ backgroundColor: "#F5F6FB" }}>
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">PPE API setting</h1>
          
          {/* Tab Buttons */}
          <div className="flex items-center space-x-4 mt-4">
            <button
              className={`px-6 py-2 font-semibold rounded-md ${
                activeTab === "รายการ"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("รายการ")}
            >
              รายการ
            </button>
            <button
              className={`px-6 py-2 font-semibold rounded-md ${
                activeTab === "ตั้งค่าเอกสาร"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("ตั้งค่าเอกสาร")}
            >
              ตั้งค่าเอกสาร
            </button>
            <button className="bg-slate-950 text-white py-2 px-4 rounded-md shadow-md ml-auto">
              เพิ่มรายการ +
            </button>
          </div>
        </header>

        {/* Content Section */}
        <section className="rounded-lg shadow-md" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="p-6">
            <p className="text-center text-gray-500">No items found</p>
          </div>
        </section>
      </main>
    </div>
  );
}
