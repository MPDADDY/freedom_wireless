// import React from "react";

// const Contacts = () => {
//   return (
//     <div className="bg-white py-12">
//       <div className="container mx-auto px-4 lg:px-6 xl:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-blue-500 font-bold text-3xl">Contact Us</h2>
//           <p className="text-gray-700 mt-4">
//             We'd love to hear from you! Please fill out the form below to get in
//             touch.
//           </p>
//         </div>
//         <div className="flex justify-center">
//           <form className="w-full max-w-lg">
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 type="text"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 placeholder="Your Email"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="message"
//               >
//                 Message
//               </label>
//               <textarea
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="message"
//                 rows="5"
//                 placeholder="Your Message"
//               ></textarea>
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="button"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contacts;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-500 font-bold text-3xl">Contact Us</h2>
          <p className="text-gray-700 mt-4">
            We'd love to hear from you! Here’s how you can reach us:
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-blue-500 text-4xl mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Our Address
              </h3>
              <p className="text-gray-700">200 Main Street, Voi, Kenya</p>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-blue-500 text-4xl mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-700">+254 (723) 099-465</p>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-blue-500 text-4xl mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-700">info@kwetucomputers.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
