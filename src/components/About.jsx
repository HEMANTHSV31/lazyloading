import React from "react";
import img from "..//assets/img/about.jpg";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const About = () => {
  const backgroundColor = `bg-yellow-500`;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 bg-[#1a1a1a] gap-10 py-20">
      <div className="w-full lg:w-2/4 space-y-5 text-center lg:text-left">
        <h1 className="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          At TripPixie, we are ready to provide you with the best trip of your life!
        </h1>
        <p className="text-lg text-gray-400 pb-5">
          Your dream vacation awaits, and we're here to make it a reality.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button
            title="Contact Now"
            backgroundColor={backgroundColor}
            className="transition-all duration-300 ease-in-out py-3 px-6 rounded-full font-semibold text-white hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 transform hover:scale-105 hover:shadow-2xl"
          />
        </Link>
      </div>
      <div className="w-full lg:w-2/4">
        <img
          className="rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500"
          src={img}
          alt="TripPixie Adventure"
        />
      </div>
    </div>
  );
};

export default About;
