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
              <form onSubmit={submitHandler}>
                <h1>Register Here</h1>

                <div>
                  <label className="block m-4">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    value={userInput.fullname}
                    onChange={changeEventHandle}
                    className="bg-white rounded-sm p-2"
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label className="block m-4">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userInput.email}
                    onChange={changeEventHandle}
                    className="bg-white rounded-sm p-2"
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label className="block m-4">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={userInput.phoneNumber}
                    onChange={changeEventHandle}
                    className="bg-white rounded-sm p-2"
                    autoComplete="tel"
                    required
                  />
                </div>

                <div>
                  <label className="block m-4">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={userInput.password}
                    onChange={changeEventHandle}
                    className="bg-white rounded-sm p-2"
                    autoComplete="new-password"
                    required
                  />
                </div>

                <div>
                  <label className="block m-4">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={userInput.role}
                    onChange={changeEventHandle}
                    className="bg-white rounded-sm p-2"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="m-4">
                  <button type="submit" className="btn btn-primary me-2">
                    Register
                  </button>
                  <Link to="/login">
                    <button type="button" className="btn btn-primary">
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
