import React from "react";
import Button from "../layouts/Button";
import videoFile from "../assets/video/hero.mp4";
import { Link } from "react-scroll";

const Home = () => {
  const backgroundColor = `bg-yellow-500`;

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      <div className="bg-amber-50"></div>
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted
          className="object-cover w-full h-full opacity-100"
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 text-center px-4 lg:px-24">
        <h1 className="text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">
          Discover the Best Destinations
        </h1>
        <p className="text-lg lg:text-2xl font-light mb-8 text-gray-200">
          With TripPixie, embark on unforgettable journeys to the world’s most beautiful and exciting destinations. Let’s explore together!
        </p>

        <Link to="destination" spy={true} smooth={true} duration={500}>
          <Button
            title="Explore Destinations"
            backgroundColor={backgroundColor}
            className="py-3 px-8 rounded-full text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
