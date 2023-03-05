import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { userAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { currentUser, signinWithGoogle } = userAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const togglePasswordVisiblity = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chatroom");
    }
  }, [currentUser]);

  console.log(currentUser);
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div className="p-5 border rounded-lg min-w-1/2 min-h-40">
        <h1 className="text-2xl font-bold leading-tight tracking-normal text-orange-300 ">
          Sign In To Your Account
        </h1>
        <form
          className="space-y-4 md:space-y-6 mt-4 h-full w-full"
          action="submit"
          onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-gray">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-form border-none focus:ring-0 rounded-lg w-full h-9 p-2"
              placeholder="name@mail.com"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-base font-medium text-gray">
              Password
            </label>
            <div className="flex bg-[#3B3B3B] rounded-lg pr-2">
              {/* how can add icon to input */}
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="••••••••"
                className="border-none input-form rounded-lg w-full h-9 pl-2 mr-2"
                required=""
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="max-w-[24px] mt-2 cursor-pointer"
                onClick={togglePasswordVisiblity}>
                {showPassword ? (
                  <Icon
                    icon="ic:sharp-remove-red-eye"
                    className="w-[24px] h-[24px] text-graybg-gray-800 "
                  />
                ) : (
                  <Icon
                    icon="mdi:eye-off"
                    className="w-[24px] h-[24px] text-graybg-gray-800 "
                  />
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-orange-300 mt-5 bg-gray-800 p-3 rounded-3xl font-bold tracking-wide">
            Sign in
          </button>
          <button
            onClick={handleLogin}
            // type="submit"
            className="w-full text-orange-300 mt-5 bg-gray-800 p-3 rounded-3xl font-bold tracking-wide">
            Google
          </button>
          <p className="text-base font-light text-white">
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              className="font-medium text-orange-300 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
