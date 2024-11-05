import React from "react";
import Sidebar from "./sidebar";



export default function Dashboard() {
  return (
    <div className="flex h-screen p-4">
      
      <Sidebar />


      <main
        className="flex-grow p-6 rounded-md shadow-lg"
        style={{ backgroundColor: "#F5F6FB" }}
      >
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold"></h1>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="ค้นหา"
              className="border p-2 rounded-md w-80"
            />
            <button className="bg-gray-200 py-4 rounded-md w-40">
              กรองข้อมูล
            </button>
            <button className="bg-slate-950 text-white py-4 rounded-md w-40">
              Spaces +
            </button>
          </div>
        </header>

        <section
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="grid grid-cols-4 gap-4 mb-4 text-gray-500 font-semibold">
            <div>รายการเอกสาร</div>
            <div>แท็กเอกสาร</div>
            <div>ผู้สร้างเอกสาร</div>
            <div>วันที่อัปโหลด</div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User Avatar"
                  className="h-8 w-8 rounded-full"
                />
                <span>PaperTest</span>
              </div>
              <div className="flex space-x-2">
                <span className="bg-gray-200 text-xs px-2 py-1 rounded">
                  API
                </span>
                <span className="bg-gray-200 text-xs px-2 py-1 rounded">
                  website
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/24"
                  alt="Avatar"
                  className="h-6 w-6 rounded-full"
                />
                <div>
                  <p className="text-sm">UserName</p>
                  <p className="text-xs text-gray-400">Role</p>
                </div>
              </div>
              <div>01 xxxxx 2077</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
