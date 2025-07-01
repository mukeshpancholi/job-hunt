import React, { useState } from "react";
import NavBar from "../NavBar";
import "./style.css";
import { Link, useNavigate } from "react-router-dom"; // fixed router import
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../reduxstore/authSlice";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch(); // fixed dispatch import
  const { loading } = useSelector((state) => state.auth); // fixed selector import

  const changeEventHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password, role } = input;
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "http://localhost:5050/api/user/login",
        { email, password, role },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Login failed. Please check your credentials.");
    } finally {
      dispatch(setLoading(false));
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
                className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
              >
                <h1 className="text-3xl font-bold text-center text-purple-700 mb-4">
                  Login Here
                </h1>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={changeEventHandle}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoComplete="email"
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
                    value={input.role}
                    onChange={changeEventHandle}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoComplete="organization"
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
                    value={input.password}
                    onChange={changeEventHandle}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoComplete="current-password"
                    required
                  />
                </div>

                <div className="flex justify-between items-center mt-6">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition"
                  >
                    Login
                  </button>
                  <Link to="/register">
                    <button
                      type="button"
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                    >
                      Create an Account
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

export default Login;
