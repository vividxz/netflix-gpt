import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [sign, setSign] = useState(true);

  const toggleSign = () => {
    setSign(!sign);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute w-3/12 opacity-75 rounded-2xl bg-black h-fit mx-auto top-0 bottom-0 my-auto right-0 left-0 px-10 py-14">
        <h1 className="text-white text-4xl font-bold mb-6">
          {sign ? "Sign In" : "Sign Up"}
        </h1>
        <form>
          { !sign
            && <input placeholder='Name' type="text" className="w-full my-2 px-4 text-xl bg-gray-900 rounded-md h-12"></input>            
          }
          <input
            placeholder="Email address"
            type="email"
            className="w-full my-2 px-4 text-xl bg-gray-900 rounded-md h-12"
          ></input>
          <input
            placeholder="Password"
            type="password"
            className="w-full my-2 px-4 text-xl bg-gray-900 rounded-md h-12"
          ></input>
          <button className="bg-red-700 text-xl font-bold w-full my-2 h-14 rounded-lg text-white">
          {sign ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <button
          className="text-white text-lg  mt-6 cursor-pointer mb-9"
          onClick={toggleSign}
        >
          New to Netflix ? Sign up now
        </button>
      </div>
    </div>
  );
};

export default Login;
