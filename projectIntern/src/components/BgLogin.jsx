import React from "react";
import logo from "./img/logo.png";

export default function ExampleL() {
  return (
    <>
      <div class="bg-[#11111D] h-screen flex justify-center items-center">
        <div style={{ display: "flex", gap: "30rem" }}>
          <div class="flex gap-[30rem]">
            <div class="flex flex-col items-center">
              <img src={logo} alt="Logo" class="w-[389px]" />
              <h2 class="text-white font-bold mt-4 text-center">
                Data Collection System
              </h2>
              <p class="text-white text-center">business value co.td</p>
            </div>
          </div>


          <div className="flex min-h-full flex-1 flex-col justify-center px-12 py-12 lg:px-12 bg-white">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Login
              </h1>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="ma zr">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="oi sp ael agy azv bpp mr-2"
                  />
                  <label htmlFor="remember-me" className="ka lx axq azi ">
                    Remember me
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="custom-button flex w-full justify-center rounded-md bg-black py-2.5 font-semibold text-white shadow-sm "
                  >
                    เข้าสู่ระบบ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
