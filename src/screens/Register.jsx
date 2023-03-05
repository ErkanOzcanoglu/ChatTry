import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const togglePasswordVisiblity = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div className="p-5 border rounded-lg min-w-1/2 min-h-40">
        <h1 className="text-2xl font-bold leading-tight tracking-normal text-orange-300 ">
          Create An Account
        </h1>
        <form
          className="space-y-4 md:space-y-6 mt-4 h-full w-full"
          action="submit"
          onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-gray">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="bingchilling@sheesh.com"
              className="input-form border-none focus:ring-0 rounded-lg w-full h-9 p-2"
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
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                required=""
                onChange={(e) => setChecked(e.target.checked)}
              />
            </div>
            <div className="ml-3 text-base">
              <label htmlFor="terms" className="font-light text-white">
                I accept the{" "}
                <a
                  className="font-medium hover:underline text-orange-300 hover:text-orange-300/90 cursor-pointer"
                  onClick={() => setShowModal(true)}>
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-orange-300 mt-5 bg-gray-800 p-3 rounded-3xl font-bold tracking-wide">
            {" "}
            Create an account
          </button>
          <p className="text-base font-light text-white ">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-orange-300 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
