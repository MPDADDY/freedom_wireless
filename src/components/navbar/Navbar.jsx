import React from "react";
import Logo from "../../assets/Logo2.png";
import { Link } from "react-router-dom";

const menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About Us",
    link: "/about",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Products",
    link: "/products",
  },
  {
    id: 5,
    name: "Contact Us",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="bg-blue-200 shadow-md duration-200 sticky top-0 z-50 ">
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side of navbar */}

          <Link
            to="/"
            className="flex justify-between items-center gap-2 text-2xl font-bold text-gray-800"
          >
            <img className="w-5 animate-bounce" src={Logo} alt="Logo" />
            <span>Kwetu computers</span>
          </Link>

          {/* Right side of navbar */}
          <ul className="hidden md:flex space-x-4 text-gray-800">
            {menu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="hover:text-blue-500 font-semibold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
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
            {menu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="block py-2 px-4 text-gray-800 hover:bg-blue-100 font-semibold"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
