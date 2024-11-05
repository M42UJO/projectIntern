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
          <div className="flex items-center space-x-2 ">
            <input
              type="text"
              placeholder="ค้นหา"
              className="border py-4 pl-4 rounded-md w-96 shadow-md"
            />
            <button className="bg-gray-200 py-4 rounded-md w-40 shadow-md">
              กรองข้อมูล
            </button>
            <button className="bg-slate-950 text-white py-4 rounded-md w-40 shadow-md">
              Spaces +
            </button>
          </div>
        </header>

        <section
          className=" rounded-lg shadow-md"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="grid grid-cols-4 gap-4 text-gray-900 bg-gray-50 font-semibold border-b-2 border-gray-300 pb-5 p-6">
            <div>รายการเอกสาร</div>
            <div>แท็กเอกสาร</div>
            <div>ผู้สร้างเอกสาร</div>
            <div>วันที่อัปโหลด</div>
          </div>
        

          <div className="space-y-4 p-6">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="flex items-center space-x-4 font-bold">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User Avatar"
                  className=" w-12 rounded-full"
                />
                <span>PPE API setting</span>
              </div>
              <div className="flex space-x-2">
                <span className="bg-gray-900 text-xs text-white px-2 py-1 rounded">
                  API
                </span>
                <span className="bg-gray-900 text-xs text-white px-2 py-1 rounded">
                  website
                </span>
              </div>
              <div className="flex items-center space-x-4 font-bold">
                <img
                  src="https://via.placeholder.com/24"
                  alt="Avatar"
                  className="w-12 rounded-full"
                />
                <div>
                  <p className="">Mala_C</p>
                  <p className="text-xs text-gray-400">Accounting department</p>
                </div>
              </div>
              <div>01 January 2024</div>
            </div>
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="flex items-center space-x-4 font-bold">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User Avatar"
                  className="w-12 rounded-full"
                />
                <span>PaperTest</span>
              </div>
              <div className="flex space-x-2">
                <span className="bg-gray-900 text-xs text-white px-2 py-1 rounded">
                  API
                </span>
                <span className="bg-gray-900 text-xs text-white px-2 py-1 rounded">
                  application
                </span>
              </div>
              <div className="flex items-center space-x-4 font-bold">
                <img
                  src="https://via.placeholder.com/24"
                  alt="Avatar"
                  className="w-12 rounded-full"
                />
                <div>
                  <p className="">UserName</p>
                  <p className="text-xs text-gray-400">Role</p>
                </div>
              </div>
              <div >01 January 2024</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
