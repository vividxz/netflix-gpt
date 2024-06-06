import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import {validateLogin} from "../utils/validateLogin"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [sign, setSign] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSign = () => {
    setSign(!sign);
  };

  const email = useRef(null)
  const password = useRef(null)

  const handleClick = () => {
    const message = validateLogin(email.current.value, password.current.value)
    setErrorMessage(message);
    if(message) return;

    if(!sign){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
    
        const user = userCredential.user;
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-"+errorMessage);
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-"+errorMessage);
  });

    }

      
  }
  
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
      <div className="absolute  w-3/12 sm:w6/12 bg-opacity-75 rounded-2xl bg-black h-fit mx-auto top-0 bottom-0 my-auto right-0 left-0 px-10 py-14">
        <h1 className="text-white text-4xl font-bold mb-6">
          {sign ? "Sign In" : "Sign Up"}
        </h1>
        <form onSubmit={(e)=>e.preventDefault()}>
          {!sign && (
            <input
              placeholder="Name"
              type="text"
              required
              className="bg-opacity-75 w-full my-2 px-4 text-xl bg-gray-900 rounded-md h-12"
            ></input>
          )}
          <input
            ref={email}
            placeholder="Email address"
            type="text"
            required
            className="bg-opacity-75 w-full my-2 px-4 text-xl bg-gray-900 rounded-md h-12"
          ></input>
          <input
            ref={password}
            placeholder="Password"
            type="password"
            required
            className="bg-opacity-75 w-full my-2 px-4 text-xl bg-gray-900 rounded-md h-12"
          ></input>
          <button type="s" className="bg-red-800 opacity-100 text-xl font-bold w-full my-2 h-14 rounded-lg text-white"
            onClick={handleClick}
          >
            {sign ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-red-700 p-2 font-bold">{errorMessage}</p>
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
