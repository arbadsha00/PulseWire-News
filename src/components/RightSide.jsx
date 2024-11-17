import React from "react";
import { ImGoogle } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
import AuthContext from "../Provider/AuthContext";
import { useContext } from "react";
const RightSide = () => {
  const { googleSignIn } = useContext(AuthContext);
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Login With</h3>
      <div>
        <button onClick={()=>googleSignIn()} className="btn rounded-none shadow-md bg-base-100 shadow-pink-500 text-pink-500 w-full text-lg mb-2" >
          <ImGoogle />
          Google
              </button>
              <button className="btn rounded-none shadow-md bg-base-100 shadow-cyan-500 text-cyan-500 w-full text-lg " >
          <ImGithub />
          Github
        </button>
          </div>
          <h3 className="text-xl font-semibold">Find Us On</h3>
          <div className="join join-vertical  w-full *:bg-base-100 *:text-gray-500">
  <button className="btn join-item justify-start text-lg"><ImFacebook className="text-indigo-500" /> Facebook</button>
  <button className="btn join-item justify-start text-lg"><AiFillInstagram className="text-pink-500"/> Instagram</button>
  <button className="btn join-item justify-start text-lg"><ImTwitter className="text-cyan-500" /> Twitter</button>
</div>
    </div>
  );
};

export default RightSide;
