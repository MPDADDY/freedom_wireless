import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-200 shadow-md">
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side of navbar */}
          <div className="text-xl font-bold text-gray-800">
            <span>FREEDOM WIRELESS SOLUTIONS</span>
          </div>

          {/* Right side of navbar */}
          <ul className="hidden md:flex space-x-4 text-gray-800">
            <li>
              <a href="#" className="hover:text-blue-500">
                Internet Plans
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Terms of Service
              </a>
            </li>
          </ul>

          {/* Mobile menu button (hidden on larger screens) */}
          <button className="md:hidden block text-gray-800 hover:text-blue-500 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu (hidden by default) */}
        <div className="md:hidden hidden">
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 hover:bg-blue-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 hover:bg-blue-100"
              >
                Internet Plans
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 hover:bg-blue-100"
              >
                Customer Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 hover:bg-blue-100"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 hover:bg-blue-100"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 hover:bg-blue-100"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-800 hover:bg-blue-100"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
