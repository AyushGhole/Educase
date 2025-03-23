import React from "react";
import "../App.css";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div
        className="w-full  mt-3 max-w-sm p-8 rounded-lg shadow-md"
        style={{ position: "relative", top: "0" }}>
        <h1 className="text-2xl fs-4 font-semibold text-gray-800">
          Sign in to your
          <br /> PopX account
        </h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="mt-6 space-y-4">
          <div className="text-left">
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              className="block  w-full text-sm font-medium text-purple-700  "
            />
          </div>

          <div className="text-left">
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              className=" text-purple-700 w-full"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-gray-500 rounded-md cursor-not-allowed"
            disabled>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
