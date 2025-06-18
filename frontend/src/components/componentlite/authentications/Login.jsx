import React, { useState } from "react";
import NavBar from "../NavBar";
import "./style.css";
import { Link, useNavigate } from "react-router-dom"; // fixed router import
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../reduxstore/authSlice";
import store from "../inputfileds";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch(); // fixed dispatch import
  const { loading } = useSelector((store) => auth);

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
              <form onSubmit={submitHandler}>
                <h1>Login here</h1>

                <div>
                  <label className="label m-4">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={changeEventHandle}
                    className="bg-white rounded-sm p-2"
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label className="label m-4">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={input.role}
                    onChange={changeEventHandle}
                    className="bg-white rounded-sm p-2"
                    autoComplete="organization"
                    required
                  />
                </div>

                <div>
                  <label className="label m-4">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={changeEventHandle}
                    className="bg-white rounded-sm p-2"
                    autoComplete="current-password"
                    required
                  />
                </div>

                <div className="m-4">
                  <button type="submit" className="btn btn-primary me-2">
                    Login
                  </button>
                  <Link to="/register">
                    <button type="button" className="btn btn-primary">
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
