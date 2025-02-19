import React from "react";
import img1 from "../assets/img/dest1.png";
import img2 from "../assets/img/dest2.png";
import img3 from "../assets/img/dest3.jpg";
import DestinationCard from "../layouts/DestinationCard";

const Destination = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-800 flex flex-col items-center py-16 px-4">
      <h1 className="font-extrabold text-4xl lg:text-5xl text-center text-white mb-12 animate__animated animate__fadeIn">
        Most Popular Destinations
      </h1>

      {/* Destination Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <DestinationCard
          img={img1}
          title="Paris, France"
          para="Paris offers iconic landmarks like the Eiffel Tower and world-class art at the Louvre Museum."
        />
        <DestinationCard
          img={img2}
          title="Dubai, UAE"
          para="A city of superlatives, Dubai boasts towering skyscrapers, luxury shopping, and desert adventures."
        />
        <DestinationCard
          img={img3}
          title="Venice, Italy"
          para="Explore the romantic canals and historic architecture of Venice, a city built on water."
        />
      </div>
    </div>
  );
};

export default Destination;
