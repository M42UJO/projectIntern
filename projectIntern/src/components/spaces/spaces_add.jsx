import React, { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Select from "react-select";
import { Link } from "react-router-dom";

export default function AddSpaces() {
  const options = [
    { value: "API", label: "API" },
    { value: "WEBSITE", label: "WEBSITE" },
    { value: "MOBILE", label: "MOBILE" },
  ];

  const [preview, setPreview] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen p-4">
      <Sidebar />

      <main
        className="flex-grow  rounded-md shadow-lg"
        style={{ backgroundColor: "#F5F6FB" }}
      >
        <header
          className="rounded-md shadow-lg bg-white w-full p-6 pt-8 border-b border-gray-300"
          style={{ marginBottom: "24px" }}
        >
          <Link to={"/"} className="text-lg font-bold text-gray-700">
            ← Spaces
          </Link>
        </header>

        <section className="p-6 rounded-lg shadow-md m-6 bg-[#FFFFFF]">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Image Upload Section */}
            <div className="flex flex-col items-center justify-end bg-gray-100 rounded-lg w-full md:w-1/3 h-[28rem]">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-fit max-h-[375px] rounded-t-md  object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="bg-slate-950 text-white rounded-b-md w-full py-6 text-center cursor-pointer"
              >
                อัพโหลดรูปภาพ
              </label>
            </div>

            {/* Input Fields Section */}
            <div className="flex flex-col w-full md:w-2/3 space-y-4">
              <div>
                <label className="text-gray-700 font-medium text-lg">
                  Spaces Name :
                </label>
                <input
                  type="text"
                  placeholder="กรุณาใส่ชื่อ Spaces name"
                  className="mt-2 p-6 border border-gray-300 rounded-md w-full py-4"
                />
              </div>
              <div>
                <label className="text-gray-700 font-medium text-lg">
                  Tags:
                </label>
                <Select
                  options={options}
                  placeholder="กรุณาเลือก Tags"
                  classNamePrefix="custom-select"
                  className="mt-2 w-full"
                  styles={{
                    control: (base) => ({
                      ...base,
                      padding: "12px", // ใช้ค่าเดียวกับ py-4
                      borderRadius: "0.375rem", // ใช้ค่าเดียวกับ rounded-md
                      borderColor: "rgba(209, 213, 219)", // ใช้สีเดียวกับ border-gray-300
                    }),
                  }}
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-12 mb-2 flex justify-center">
            <button className="bg-slate-950 text-white py-4 px-8 rounded-md w-full">
              บันทึก
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}