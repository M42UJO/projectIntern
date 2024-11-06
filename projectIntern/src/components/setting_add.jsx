import React, { useState } from "react";
import Sidebar from "./sidebar";
import { Editor } from "@tinymce/tinymce-react";

export default function AddSetting() {
  const [activeTab, setActiveTab] = useState("เพิ่มรายการ");
  const [content, setContent] = useState("");

  const handleEditorChange = (content) => {
    setContent(content);
  };

  return (
    <div className="flex h-screen p-4">
      <Sidebar />

      <main
        className="flex-grow p-0 rounded-md shadow-lg"
        style={{ backgroundColor: "#F5F6FB" }}
      >
        <div className="p-0 ">
          {/* Header */}
          <header
            className="rounded-md shadow-lg bg-white w-full px-6 pt-6 pb-0 border-b border-gray-300"
            style={{ marginBottom: "24px" }}
          >
            <h1 className="text-2xl font-semibold">PPE API setting</h1>

            {/* Tab Buttons */}
            <div className="flex items-center space-x-4 mt-4">
              <button
                className={`px-6 py-2 font-semibold ${
                  activeTab === "เพิ่มรายการ"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("เพิ่มรายการ")}
              >
                เพิ่มรายการ
              </button>
            </div>
          </header>
          {/* Content Section */}
          <section className="p-6">
            {/* Input Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                ชื่อรายการ:
              </label>
              <input
                type="text"
                placeholder="กรุณาใส่ชื่อรายการ"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* TinyMCE Editor */}
            <div className="mb-6">
              <Editor
                apiKey="YOUR_TINYMCE_API_KEY" // Replace with your TinyMCE API key
                value={content}
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help",
                }}
                onEditorChange={handleEditorChange}
              />
            </div>

            {/* Save and Cancel Buttons */}
            <div className="flex justify-end space-x-4">
              <button className="bg-gray-400 text-white py-2 px-6 rounded-md hover:bg-gray-500">
                ยกเลิก
              </button>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
                บันทึก
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
