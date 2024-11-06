import React from "react";
import Sidebar from "./sidebar";


export default function Spaces() {
  return (
    <div className="flex h-screen p-4" >

      <Sidebar />
 

      <main
        className="flex-grow p-6 rounded-md shadow-lg"
        style={{ backgroundColor: "#F5F6FB" }}
      >
        <header className="flex items-center justify-between mb-10 ">
          <button className="text-lg font-semibold text-gray-700">
            ← Spaces
          </button>
        </header>

        <section
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Upload Section */}
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg w-full md:w-1/2 h-64">
              <div className="w-24 h-24 mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 1 1 8 0M7 15v4m4-4a4 4 0 1 0 8 0m-4 0v4m1 4h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6"
                  />
                </svg>
              </div>
              <button className="bg-slate-950 text-white py-2 px-4 rounded-md w-40">
                อัพโหลดรูปภาพ
              </button>
            </div>

            {/* Input Fields Section */}
            <div className="flex flex-col w-full md:w-1/2 space-y-4">
              <div>
                <label className="text-gray-700 font-medium">
                  Spaces Name :
                </label>
                <input
                  type="text"
                  placeholder="กรุณาใส่ชื่อ Spaces name"
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label className="text-gray-700 font-medium">Tags :</label>
                <input
                  type="text"
                  placeholder="กรุณาเลือก Tags"
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-center">
            <button className="bg-slate-950 text-white py-2 px-8 rounded-md w-40">
              บันทึก
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}