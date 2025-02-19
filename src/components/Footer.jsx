import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* TripPixie Info */}
          <div className="w-full">
            <h1 className="font-semibold text-2xl pb-4 text-brightColor">TripPixie</h1>
            <p className="text-sm text-gray-400">
              With TripPixie, you can experience new travel and explore the best
              tourist destinations that we have to offer.
            </p>
          </div>

          {/* Destination Links */}
          <div>
            <h1 className="font-medium text-xl pb-4 text-brightColor">Destination</h1>
            <nav className="flex flex-col gap-2">
              <a
                className="hover:text-brightColor transition-all cursor-pointer text-gray-400"
                href="/"
              >
                Paris, France
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer text-gray-400"
                href="/"
              >
                Dubai, UAE
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer text-gray-400"
                href="/"
              >
                Venice, Italy
              </a>
            </nav>
          </div>

          {/* About Links */}
          <div>
            <h1 className="font-medium text-xl pb-4 text-brightColor">About</h1>
            <nav className="flex flex-col gap-2">
              <a
                className="hover:text-brightColor transition-all cursor-pointer text-gray-400"
                href="/"
              >
                Contact Us
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer text-gray-400"
                href="/"
              >
                Testimonial
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer text-gray-400"
                href="/"
              >
                Rating
              </a>
            </nav>
          </div>

          {/* Social Icons */}
          <div>
            <h1 className="font-medium text-xl pb-4 text-brightColor">Follow Us</h1>
            <div className="flex gap-6 justify-start sm:justify-center md:justify-start">
              <BsFacebook
                size={30}
                className="hover:text-brightColor transition-all cursor-pointer text-gray-400"
              />
              <RiTwitterXFill
                size={30}
                className="hover:text-brightColor transition-all cursor-pointer text-gray-400"
              />
              <BsInstagram
                size={30}
                className="hover:text-brightColor transition-all cursor-pointer text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10">
          <p className="text-center text-sm text-gray-400">
            @copyright developed by{" "}
            <span className="text-brightColor font-semibold">Choco Boy Hemanth</span> | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
