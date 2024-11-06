import React, { useState } from "react";
import Sidebar from "./sidebar";

export default function Spaces() {
  const [activeTab, setActiveTab] = useState("รายการ"); // State to track active tab

  return (
    <div className="flex h-screen p-4">
      <Sidebar />

      <main className="flex-grow p-6 rounded-md shadow-lg" style={{ backgroundColor: "#F5F6FB" }}>
        {/* Header */}
        <header className="border-b border-gray-300 pb-4 mb-6">
          <h1 className="text-2xl font-semibold">PPE API setting</h1>
          
          {/* Tab Buttons */}
          <div className="flex items-center space-x-4 mt-4">
            <button
              className={`px-6 py-2 font-semibold ${
                activeTab === "รายการ"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("รายการ")}
            >
              รายการ
            </button>
            <button
              className={`px-6 py-2 font-semibold ${
                activeTab === "ตั้งค่าเอกสาร"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("ตั้งค่าเอกสาร")}
            >
              ตั้งค่าเอกสาร
            </button>
          </div>
        </header>

        {/* Content Section */}
        <section className="rounded-lg shadow-md p-6" style={{ backgroundColor: "#FFFFFF" }}>
          {/* Add Item Button */}
          <div className="mb-4">
            <button className="bg-black text-white py-2 px-4 rounded-md shadow-md">
              + เพิ่มรายการ
            </button>
          </div>

          {/* List of Items */}
          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200">
                {/* API Setting Name */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-medium">API Setting V1</span>
                  <button className="bg-black text-white p-2 rounded-md">
                    👁️
                  </button>
                </div>

                {/* Date Fields */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-2 rounded-md text-gray-600 text-sm">01/01/2024</div>
                  <div className="bg-gray-100 p-2 rounded-md text-gray-600 text-sm">16/01/2024</div>
                </div>

                {/* Edit and Delete Buttons */}
                <div className="flex space-x-2">
                  <button className="bg-gray-400 text-white py-2 px-4 rounded-md">แก้ไข</button>
                  <button className="bg-black text-white py-2 px-4 rounded-md">ลบ</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
