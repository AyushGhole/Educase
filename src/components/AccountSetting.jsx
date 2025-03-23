import React from "react";
import "../App.css";

const AccountSettings = () => {
  return (
    <div className="flex justify-center  h-screen bg-gray-100">
      <div className="w-full max-w-sm rounded-lg">
        <h1 className="text-xl w-full p-4 fs-3 font-semibold bg-white text-gray-800">
          Account Settings
        </h1>

        {/* Profile Section */}
        <div className="mt-4 flex p-4 items-center space-x-4">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/50.jpg" // Placeholder Image
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-gray-300"
            />
            {/* Camera Icon for Changing Profile */}
            <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-4.553a2 2 0 10-2.828-2.828L12 7.172 7.275 2.447a2 2 0 00-2.828 2.828L9 10m6 0h3m-3 0v3m0-3v-3"></path>
              </svg>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900">Marry Doe</h2>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-2  text-gray-800 p-5 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
