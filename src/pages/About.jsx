// import React from "react";
// import "animate.css/animate.min.css";

// const About = () => {
//   return (
//     <div className="bg-white">
//       <div className="container mx-auto px-4 lg:px-6 xl:px-8 py-8">
//         <div className="flex items-center justify-center bg-slate-100 mt-3 mb-6">
//           <h2 className="text-blue-500 font-bold text-3xl py-9">Who We Are</h2>
//         </div>
//         <div className="flex flex-wrap justify-center gap-8">
//           <div className="bg-blue-100 shadow-md p-6 border-2 border-t-blue-500 hover:border-t-4 rounded-lg w-full md:w-1/3 lg:w-1/4 animate__animated animate__slideInLeft">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               Our Mission
//             </h3>
//             <p className="text-gray-700">
//               Our mission is to deliver high-quality products and services that
//               empower our customers to achieve their goals.
//             </p>
//           </div>
//           <div className="bg-blue-100 shadow-md p-6 border-2 border-t-blue-500 hover:border-t-4 rounded-lg w-full md:w-1/3 lg:w-1/4 animate__animated animate__slideInUp">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               Our Vision
//             </h3>
//             <p className="text-gray-700">
//               Our vision is to be a leader in the tech industry, known for
//               innovation, integrity, and excellence.
//             </p>
//           </div>
//           <div className="bg-blue-100 shadow-md p-6 border-2 border-t-blue-500 hover:border-t-4 rounded-lg w-full md:w-1/3 lg:w-1/4 animate__animated animate__slideInRight">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               Our Values
//             </h3>
//             <p className="text-gray-700">
//               We value customer satisfaction, continuous improvement, and
//               teamwork as the pillars of our success.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import "animate.css/animate.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEye,
  faStar,
  faHeart,
  faLightbulb,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 lg:px-6 xl:px-8 py-8">
        <div className="flex items-center justify-center bg-slate-100 mt-3 mb-6">
          <h2 className="text-blue-500 font-bold text-3xl py-9">Who We Are</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-blue-100 shadow-md p-6 border-2 border-t-blue-500 hover:border-t-4 rounded-lg w-full md:w-1/3 lg:w-1/4 animate__animated animate__slideInLeft">
            <FontAwesomeIcon
              icon={faBullseye}
              className="text-blue-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              Our mission is to deliver high-quality products and services that
              empower our customers to achieve their goals.
            </p>
          </div>
          <div className="bg-blue-100 shadow-md p-6 border-2 border-t-blue-500 hover:border-t-4 rounded-lg w-full md:w-1/3 lg:w-1/4 animate__animated animate__slideInUp">
            <FontAwesomeIcon
              icon={faEye}
              className="text-blue-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              Our vision is to be a leader in the tech industry, known for
              innovation, integrity, and excellence.
            </p>
          </div>
          <div className="bg-blue-100 shadow-md p-6 border-2 border-t-blue-500 hover:border-t-4 rounded-lg w-full md:w-1/3 lg:w-1/4 animate__animated animate__slideInRight">
            <FontAwesomeIcon
              icon={faStar}
              className="text-blue-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Values
            </h3>
            <p className="text-gray-700">
              We value customer satisfaction, continuous improvement, and
              teamwork as the pillars of our success.
            </p>
          </div>
          <div className="bg-blue-100 shadow-md p-6 border-2 border-t-blue-500 hover:border-t-4 rounded-lg w-full md:w-1/3 lg:w-1/4 animate__animated animate__slideInLeft">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-blue-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-700">
              Integrity, Innovation, and Excellence are at the heart of
              everything we do.
            </p>
          </div>
          <div className="bg-blue-100 shadow-md p-6 border-2 border-t-blue-500 hover:border-t-4 rounded-lg w-full md:w-1/3 lg:w-1/4 animate__animated animate__slideInUp">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-blue-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Motto
            </h3>
            <p className="text-gray-700">
              "Innovate with Passion, Deliver with Excellence."
            </p>
          </div>
          <div className="bg-blue-100 shadow-md p-6 border-2 border-t-blue-500 hover:border-t-4 rounded-lg w-full md:w-1/3 lg:w-1/4 animate__animated animate__slideInRight">
            <FontAwesomeIcon
              icon={faChartLine}
              className="text-blue-500 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Strategic Objectives
            </h3>
            <p className="text-gray-700">
              To drive growth through innovation and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

