import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen flex justify-around items-center">
    <div className="w-[450px] bg-white rounded-lg shadow-sm p-10 border-2 border-gray-200 shadow-2xl">
      <h1 className="text-center text-[#2962ff] font-pacifico text-5xl m-0">Get Shoppy</h1>
      <p className="text-center mt-6 text-gray-700 text-xl">Sign in with one of accounts</p>
      <hr className="my-8 border-t border-gray-100" />
      <div className="flex justify-center gap-4">
        <button className="flex items-center bg-[#4267B2] text-white border-none rounded px-6 py-3 text-base cursor-pointer w-[220px]">
          <span className="text-2xl mr-2.5">f</span> Continue with Facebook
        </button>
        <button className="flex items-center bg-[#4285F4] text-white border-none rounded px-6 py-3 text-base cursor-pointer w-[220px]">
          <span className="text-2xl mr-2.5">G</span> Continue with Google
        </button>
      </div>
      <div className="flex items-center my-8">
        <hr className="flex-1 border-t border-gray-100" />
        <span className="mx-4 text-gray-500">or</span>
        <hr className="flex-1 border-t border-gray-100" />
      </div>
      <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter email" 
          className="w-[400px] px-4 py-3.5 rounded border border-gray-100 text-lg italic outline-none bg-gray-50" 
        />
        <input 
          type="password" 
          placeholder="Enter password" 
          className="w-[400px] px-4 py-3.5 rounded border border-gray-100 text-lg italic outline-none bg-gray-50" 
        />
        <div className="w-[400px] flex justify-between items-center mt-2">
          <a href="#" className="text-gray-500 no-underline text-base">Forgot password?</a>
          <button 
            type="submit" 
            className="bg-[#1a2edb] text-white border-none rounded px-8 py-2.5 text-lg cursor-pointer "
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login; 