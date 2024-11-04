import React from "react";
import logo from "./img/logo.png";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-slate-950 text-white flex flex-col">
        <div className="flex items-center space-x-2 px-4 py-5 ">
          <div className="bg-slate-50 rounded-full h-8 w-8 flex items-center justify-center">
            <span className="text-black font-bold">B</span>
          </div>
          <div>
            <p className="text-lg font-semibold leading-tight">BSV</p>
            <p className="text-xs text-gray-400">Data Collection System</p>
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-4">
          <a href="#" className="block text-gray-300 hover:text-white">
            Dashboard
          </a>
          <a href="#" className="block text-gray-300 hover:text-white">
            Spaces
          </a>
          <a href="#" className="block text-gray-300 hover:text-white">
            Setting
          </a>
        </nav>
        <div className="p-4 bg-gray-800 flex items-center space-x-2 border-t border-gray-700">
          <img
            src="https://via.placeholder.com/30"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">User Name</p>
            <p className="text-xs text-gray-400">Role</p>
          </div>
        </div>
      </aside>

    
      <main className="flex-grow p-6">
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

        <section className="bg-white p-6 rounded-lg shadow-md">
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
