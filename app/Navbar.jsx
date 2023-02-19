"use client";

import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <div className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b-2 border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-5 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a
              className="text-2xl text-indigo-600 font-bold hover:text-indigo-700"
              href="/"
            >
              Turkey SafeZone Locator
            </a>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              ariaExpanded="false"
              onClick={() => setNavOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                ariaHidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden space-x-10 lg:flex">
            <a
              href="#facts"
              className="text-md font-medium text-gray-500 hover:text-gray-900"
            >
              Facts
            </a>
            <a
              href="#map"
              className="text-md font-medium text-gray-500 hover:text-gray-900"
            >
              Prone Zone
            </a>
            <a
              href="#news"
              className="text-md font-medium text-gray-500 hover:text-gray-900"
            >
              Latest News
            </a>
          </nav>
          <div className="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-md font-medium text-gray-500 hover:text-gray-900"
            >
              Helpline &#9742;
            </a>
            <a
              href="#donate"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-md font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Donate $
            </a>
          </div>
        </div>
      </div>

      <div
        className={`${
          isNavOpen ? "absolute" : "hidden"
        } inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden`}
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <a className="text-xl text-indigo-600 font-bold" href="/">
                  Turkey SafeZone Locator
                </a>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setNavOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    ariaHidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a
                  href="#facts"
                  className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Facts
                  </span>
                </a>

                <a
                  href="#map"
                  className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Prone Zone
                  </span>
                </a>

                <a
                  href="#news"
                  className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Latest News
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div className="space-y-6 py-6 px-5">
            <div>
              <a
                href="#donate"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Donate $
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Need help?{" "}
                <a
                  href="#helpline"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Call
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
