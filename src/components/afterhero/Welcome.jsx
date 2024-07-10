import React from "react";
import Logo from "../../assets/Logo2.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 lg:px-6 xl:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="flex items-center">
            <img src={Logo} alt="Illustrative Image" className="rounded-lg" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 mb-4">
              At Kwetu Computers, we specialize in delivering innovative
              technology solutions that drive your business forward. From
              advanced IT infrastructure to secure networking solutions and
              efficient software applications, we are committed to providing
              reliable products and services that empower you to achieve your
              goals.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to enhance your business operations through
              cutting-edge technology, ensuring you stay ahead in today's
              competitive landscape. Explore our website to discover how our
              solutions can benefit your organization.
            </p>
            <Link
              to="about"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
