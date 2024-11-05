import React from "react";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
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
          <h1 className="text-center text-4xl font-bold text-black mt-5">
            Login
          </h1>

          <div className="mt-8">
            <form action="#" method="POST" className="space-y-6">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-lg font-bold text-black"
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
                  className="border-b-2 focus:outline-none mt-2 block w-full px-0 pb-1 border-gray-600 py-2 px-4 text-gray-900 focus:border-gray-900 text-xs"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-black"
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
                  className="border-b-2 focus:outline-none mt-2 block w-full px-0 pb-1 border-gray-600  py-2 px-4 text-gray-900 focus:border-gray-900 text-xs"
                />
              </div>

              {/* Remember Me */}
              <div className="flex">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4  rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-xs text-gray-900"
                >
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center rounded-xl bg-black py-4 text-white font-bold shadow-sm hover:bg-gray-800 transition duration-300 mb-5"
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
