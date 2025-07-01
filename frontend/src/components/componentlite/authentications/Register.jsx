import React, { useState } from "react";
import NavBar from "../NavBar";
import "./style.css";
import { Link, useNavigate } from "react-router-dom"; // fixed import
import axios from "axios";
import { toast } from "sonner";

const Register = () => {
  const navigator = useNavigate();
  const [userInput, setUserInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
  });

  const changeEventHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { fullname, email, phoneNumber, password, role } = userInput;
    try {
      const result = await axios.post(
        "http://localhost:5050/api/user/register",
        {
          fullname,
          email,
          phoneNumber,
          password,
          role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (result.data.success) {
        toast.success(result.data.message);
        navigator("/login");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="cart fluid">
          <div className="row">
            <div className="col-12 header">
              <form
                onSubmit={submitHandler}
                className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
              >
                <h1 className="text-3xl font-bold text-center text-purple-700 mb-4">
                  Register Here
                </h1>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    value={userInput.fullname}
                    onChange={changeEventHandle}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userInput.email}
                    onChange={changeEventHandle}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={userInput.phoneNumber}
                    onChange={changeEventHandle}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoComplete="tel"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={userInput.password}
                    onChange={changeEventHandle}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoComplete="new-password"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={userInput.role}
                    onChange={changeEventHandle}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition"
                  >
                    Register
                  </button>
                  <Link to="/login">
                    <button
                      type="button"
                      className="bg-gray-200 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-300 transition"
                    >
                      Login
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
