import Home from "./components/componentlite/authentications/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/componentlite/authentications/Login";
import Register from "./components/componentlite/authentications/Register";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
