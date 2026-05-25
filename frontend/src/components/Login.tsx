import { useState } from "react";
import { FaEyeSlash, FaEye, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    /* Page Container */
    <div className="bg-[#4b6fec] h-screen flex justify-center items-center">
      {/* Signin card */}
      <div className="bg-white w-full max-w-sm rounded-xl p-8 shadow-lg">
        {/* Title Section */}
        <h1 className="text-2xl font-medium text-center mb-6">Login</h1>

        {/* Form Section */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-200 p-3 rounded-md 
            transition focus:outline-none
            focus:border-blue-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="
          w-full border rounded-md p-3 border-gray-200 transition focus: outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-center mt-3">
          <a
            href="#"
            className="text-[#306fcc] font-medium text-sm hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login button */}
        <button
          type="button"
          className="bg-[#306fcc] w-full text-white font-medium rounded-md p-3 mt-4 hover:bg-[#1564da] transition duration-200"
        >
          Login
        </button>

        {/* Signup Redirect Section */}
        <div className="flex text-sm items-center mt-4 justify-center gap-1 text-gray-600">
          <p>Don't have an account?</p>
          <Link
            to="/signup"
            className="text-[#306fcc] font-medium hover:underline"
          >
            Signup
          </Link>
        </div>

        {/* Divider Section */}
        <div className="flex mt-6 items-center gap-3">
          <hr className="flex-1 border-gray-300" />
          <p className="text-gray-500 text-sm">OR</p>
          <hr className="flex-1  border-gray-300" />
        </div>

        {/* Social Login Section */}
        <div className="flex flex-col gap-4 mt-6">
          {/* Facebook Login */}
          <button className="bg-[#4966ad] text-white rounded-md p-3 flex justify-center items-center gap-2 font-medium hover:bg-[#3d5798] transition duration-200">
            <FaFacebookF className="text-lg" />
            <span>Login with Facebook</span>
          </button>
          <button className="rounded-md p-3 border border-gray-300 flex justify-center items-center gap-2 font-medium hover:bg-gray-100 transition duration-200">
            <FcGoogle className="text-xl" />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
