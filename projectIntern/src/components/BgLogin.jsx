import React from "react";
import logo from "./img/logo.png";

export default function ExampleL() {
  return (
    <>
      <div className="bg-[#11111D] h-screen flex flex-col lg:flex-row justify-center items-center space-y-12 space-y-0 space-x-20 gap-20">
        {/* Logo Section (Transparent Background) */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-[200px] lg:w-[420px]" />
          <h2
            className="text-white mt-4 text-center text-2xl lg:text-xl"
            style={{ letterSpacing: "9px" }}
          >
            Data Collection System
          </h2>

          <p
            className="text-gray-400 text-center text-xl lg:text-sm mt-3"
            style={{ letterSpacing: "13.8px" }}
          >
            business value co.td
          </p>
        </div>

        {/* Login Form Section (White Background) */}
        <div className="flex flex-col justify-center px-8 py-12 lg:px-16 bg-white rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-center text-2xl font-semibold text-gray-900">
            Login
          </h1>

          <div className="mt-8">
            <form action="#" method="POST" className="space-y-6">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  placeholder="กรุณาใส่ Username"
                  className="border-b-2 focus:outline-none mt-2 block w-full rounded-md border-gray-300 shadow-sm py-2 px-4 text-gray-900 focus:ring-gray-900 focus:border-gray-900"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="กรุณาใส่ Password"
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm py-2 px-4 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center rounded-md bg-black py-2 text-white font-semibold shadow-sm hover:bg-gray-800 transition duration-300"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
