import React from 'react';
import Logo from "../../assets/Logo2.png";
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
      <div className="bg-white">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="flex items-center">
              <img
                src={Logo}
                alt="Illustrative Image"
                className="rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to Our Website
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vel lectus vehicula, dignissim ipsum nec, lacinia ex.
                Suspendisse potenti. Sed et suscipit odio. Nullam gravida id
                justo sit amet fermentum. Nullam ornare lacus eget nisi dapibus,
                nec fermentum libero lacinia.
              </p>
              <p className="text-gray-600 mb-4">
                In hac habitasse platea dictumst. Vivamus lobortis orci libero,
                vitae interdum erat tempus in. Cras ullamcorper malesuada
                tellus, sit amet auctor ligula sodales eu. Nam vehicula lectus
                ac leo imperdiet, et cursus arcu fermentum.
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
}

export default Welcome;
