import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    /* Page Container */
    <div className="bg-[#4b6fec] h-screen flex justify-center items-center">
      {/* Signup Card */}
      <div className="bg-white w-full max-w-sm rounded-xl p-8 shadow-lg">
        {/* Title Section */}
        <h1 className="text-2xl font-medium text-center mb-6">Signup</h1>

        {/* Form Section */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-200 rounded-md p-3 transition focus:outline-none focus:border-blue-500"
          />

          {/* Create Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="w-full border border-gray-200 rounded-md p-3 transition focus:outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full border border-gray-200 p-3 rounded-md transition focus:outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Signup Button */}
        <button className="w-full mt-4 bg-[#306fcc] text-white p-3 rounded-md font-medium hover:bg-[#1564da] transition duration-200">
          Signup
        </button>

        {/* Login Redirect Section */}
        <div className="flex justify-center mt-4 gap-1 text-sm text-gray-600">
          <p>Already have an account?</p>

          <Link to="/" className="text-[#306fcc] font-medium hover:underline">
            Login
          </Link>
        </div>

        {/* Divider Section */}
        <div className="flex items-center gap-3 mt-6">
          <hr className="flex-1 border-gray-300" />

          <p className="text-sm text-gray-500">OR</p>

          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Login Section */}
        <div className="flex flex-col gap-4 mt-6">
          {/* Facebook Login */}
          <button className="flex justify-center items-center gap-2 bg-[#4966ad] rounded-md p-3 text-white font-medium hover:bg-[#3d5798] transition duration-200">
            <FaFacebookF className="text-lg" />
            <span>Login with Facebook</span>
          </button>

          {/* Google Login */}
          <button className="flex justify-center items-center gap-2 border border-gray-300 p-3 rounded-md font-medium hover:bg-gray-100 transition duration-200">
            <FcGoogle className="text-xl" />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
