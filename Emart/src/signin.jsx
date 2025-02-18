import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import axios from 'axios'
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password, "Remember Me:", rememberMe);
    axios.post('http://localhost:8081/login',{email,password})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700">E-Mart Sign In</h2>
        
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email Input */}
          <div>
            <label className="block text-gray-600 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="block text-gray-600 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mt-3">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full mt-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
          >
            Sign In
          </button>
        </form>

        {/* Sign-Up Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
