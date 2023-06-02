import React from "react";
import logo from "./assets/logo.png";
import metamask from "./assets/MetaMask_Fox.svg.png";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between border-b border-neutral-500 items-center sm: mb-4 p-2">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-8 h-8 opacity-80 mr-3" />
        <p className="logo opacity-80">Fund Raiser</p>
      </div>
      <div>
        <button className="flex bg-blue-900 hover:bg-blue-950 sm: w-28 p-1 rounded-sm items-center">
          <img src={metamask} alt="metamask" className="w-8 mr-2" />
          Connect
        </button>
      </div>
    </div>
  );
}
