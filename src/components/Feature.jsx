import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Check icon

const Feature = ({ icon, title, subText, listItems, imageSrc }) => {
  return (
    <div className="flex flex-col lg:flex-row  lg:ml-24 lg:mr-24 mt-10 justify-around items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 py-12">
      {/* Left Column (Icon, Title, List) */}
      <div className="flex flex-col  items-center  lg:items-start space-y-6 mt-16">
        {/* Icon with faded orange background */}
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
          <span className="text-orange-500 text-3xl">
            <img src= {icon}  className="h-8 w-8" /></span>
        </div>

        {/* Big Title */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center lg:text-left">
          {title}
        </h2>
        <p className="text-gray-600">{subText}</p>

        {/* List with custom check icons */}
        <ul className="list-none space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <FaCheckCircle className="text-orange-400" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column (Image) */}
      <div className="w-full lg:w-5/6">
        <img src={imageSrc} alt="Feature" className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default Feature;
