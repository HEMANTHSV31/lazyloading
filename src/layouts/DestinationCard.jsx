import React from "react";
import Button from "../layouts/Button";

const DestinationCard = (props) => {
  const backgroundColor = `bg-yellow-500`; // Change if needed

  return (
    <div className="w-full cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-72">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={props.img}
          alt={props.title}
        />
        {/* Overlay and Title */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h3 className="text-2xl text-white font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 p-3 rounded-lg shadow-lg">
            {props.title}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white p-6 rounded-b-lg shadow-md">
        <p className="text-sm text-gray-700 text-center mb-5">{props.para}</p>

        {/* Button Section */}
        <div className="flex justify-center">
          <Button
            title="Book Tickets"
            backgroundColor={backgroundColor}
            className="px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-yellow-600 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
