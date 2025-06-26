import React, { useState } from "react";
import { message } from "antd";

function Login() {
  const [currentState, setCurrentState] = useState("sign up");
  const handleSubmit = (e) => {
    e.preventDefault();
    message.success(`You have successfully ${currentState}!`);
  };
  return (
    <form
      className="flex flex-col items-center w-[90%] sm:max-w-96 mx-auto mt-16 gap-4"
      onSubmit={handleSubmit}
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-2xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState !== "login" && (
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 p-2 rounded-md w-full"
          required
        />
      )}
      <input
        type="email"
        placeholder="Email Address"
        className="border border-gray-300 p-2 rounded-md w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 p-2 rounded-md w-full"
        required
        max={8}
      />
      <div className="w-full flex justify-between mt-2 text-sm">
        <p> Forget Password?</p>
        {currentState === "login" ? (
          <p
            onClick={() => setCurrentState("sign up")}
            className="cursor-pointer"
          >
            create an account?
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("login")}
            className="cursor-pointer"
          >
            Already have an account?
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-black text-white text-lg px-6 py-2 mt-4 rounded-md hover:bg-gray-700 transition-colors"
      >
        {currentState === "login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
