import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex justify-center  bg-gray items-end h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 rounded-lg  mb-10">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome to PopX
        </h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-6 space-y-4">
          <Link to="/signup">
            <button className="w-full px-4 py-2 text-white bg-purple-600 mb-5  rounded-md hover:bg-purple-700">
              Create Account
            </button>
          </Link>
          <Link to="/login">
            <button className="w-full px-4 py-2 text-purple-700 bg-purple-200 rounded-md hover:bg-purple-300">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
