import React, { useState, useEffect } from "react";
import image1 from "../../assets/heroImages/image1.png";
import image9 from "../../assets/heroImages/image9.png";
import image2 from "../../assets/heroImages/image2.png";
import image5 from "../../assets/heroImages/image5.png";
import image6 from "../../assets/heroImages/image6.png";
import image8 from "../../assets/heroImages/image8.png";
import wifi from "../../assets/heroImages/wifi.png";

const heroImages = [
  image1,
  image2,
  image5,
  image6,
  image8,
  image9,
  wifi,
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to cycle through images
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    };

    // Set interval to change image every 5 seconds (5000 ms)
    const interval = setInterval(nextImage, 30000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-slate-100 flex justify-center items-center">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-blue-100/70 absolute -top-1/10 rounded-0 rounded-3xl rotate-45  -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div className="p-4">
            <h1 className="text-5xl">Lorem ipsum dolor sit amet.</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              doloremque maiores accusamus vel eveniet ad ut ducimus quia,
              obcaecati aperiam earum doloribus enim!
            </p>
          </div>
          {/* text content section */}
        </div>
      </div>

      {/* Slideshow background */}
      <div className="w-10 h-6">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover annimate-pulse delay-200 motion-reduce:transition-all duration-1000"
          style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            opacity: 0.2,
          }}
        ></div>
      </div>
      {/* Animated overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-1000 group-hover:opacity-50"></div>
    </div>
  );
};

export default Hero;
