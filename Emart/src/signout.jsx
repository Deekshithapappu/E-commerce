import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session (for example, remove token from local storage)
    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");

    // Redirect to Sign-In page after 2 seconds
    setTimeout(() => {
      navigate("/signin");
    }, 2000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-700">You have been signed out</h2>
        <p className="text-gray-600 mt-2">Thank you for shopping with E-Mart!</p>

        {/* Redirect message */}
        <p className="text-sm text-gray-500 mt-3">Redirecting to Sign-In page...</p>

        {/* Manual Sign-In Button (if user wants to sign in immediately) */}
        <button
          onClick={() => navigate("/signin")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
        >
          Sign In Again
        </button>
      </div>
    </div>
  );
};

export default SignOut;
