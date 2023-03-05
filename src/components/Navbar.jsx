import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout, signinWithGoogle } = userAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="bg-slate-400 fixed right-0 left-0 z-20 h-20">
      <div className="flex justify-between pt-5 px-5 md:px-20">
        <div
          className="text-black cursor-pointer font-bold text-xl"
          onClick={goToHome}>
          ChatAPP
        </div>
        {currentUser ? (
          <div
            className="text-black font-bold text-xl cursor-pointer"
            onClick={handleLogout}>
            Logout
          </div>
        ) : (
          <div
            className="text-black font-bold text-xl cursor-pointer"
            onClick={handleLogin}>
            Login
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
