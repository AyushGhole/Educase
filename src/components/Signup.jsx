import React, { useState } from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8  rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800 mt-3">
          Create your
          <br />
          <h4> PopX account </h4>
        </h1>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <TextField
              required
              id="outlined-required"
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              className="block  w-full text-sm font-medium text-purple-700  "
              onChange={handleChange}
              defaultValue="Marry Doe"
            />
          </div>

          {/* Phone Number */}
          <div>
            <TextField
              required
              id="outlined-required"
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="block  w-full text-sm font-medium text-purple-700  "
              defaultValue="Marry Doe"
            />
          </div>

          {/* Email Address */}
          <div>
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full text-sm font-medium text-purple-700  "
              defaultValue="asd@gmail.com"
            />
          </div>

          {/* Password */}
          <div>
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className=" text-purple-700 w-full"
              autoComplete="current-password"
            />
          </div>

          {/* Company Name */}
          <div>
            <TextField
              required
              id="outlined-required"
              label="Company Name"
              type="text"
              name="companyName"
              onChange={handleChange}
              value={formData.companyName}
              className=" text-purple-700 w-full"
              autoComplete="current-password"
            />
          </div>

          {/* Are you an Agency? */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mt-1">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                  className="form-radio text-purple-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                  className="form-radio text-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}

          <Link to="/Account">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
              Create Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
