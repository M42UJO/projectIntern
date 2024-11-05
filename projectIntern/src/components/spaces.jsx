import React from "react";
import logo from "./img/logo.png";

export default function Spaces() {
  return (
    <div className="flex h-screen p-4" style={{ backgroundColor: "#272727" }}>
      <aside
        className="w-60 text-white flex flex-col rounded-md shadow-lg mr-4"
        style={{ backgroundColor: "#11111D" }}
      >
        <div className="flex items-center space-x-2 px-4 py-5 ">
          <div className="bg-slate-50 rounded-lg h-8 w-8 flex items-center justify-center">
            <span className="text-black font-bold">B</span>
          </div>
          <div>
            <p className="text-lg font-semibold leading-tight">BSV</p>
            <p className="text-xs text-gray-400">Data Collection System</p>
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-4">
          <a href="#" className="block text-gray-300 button flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            Dashboard
          </a>

          <a href="#" className="block text-gray-300 button flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={1.5}
              stroke="currentColor"
              class="size-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
              />
            </svg>
            Spaces
          </a>

          <a href="#" className="block text-gray-300 button flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Setting
          </a>
        </nav>
        <div
          className="p-4 flex items-center space-x-2 border-t border-gray-700"
          style={{ backgroundColor: "#221E37" }}
        >
          <img
            src="https://via.placeholder.com/30"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <div class="flex items-center">
            <div>
              <p className="text-sm font-medium">User Name</p>
              <p className="text-xs text-gray-400">Role</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 ml-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </div>
          </div>
        </div>
      </aside>

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
