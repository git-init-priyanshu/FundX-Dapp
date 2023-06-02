import React, { useState } from "react";
import logo from "./assets/logo.png";
import metamask from "./assets/MetaMask_Fox.svg.png";

export default function Navbar({ connectWallet, account }) {
  return (
    <>
      <div className="w-full flex justify-between border-b border-neutral-500 items-center sm: mb-4 p-2">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-8 h-8 opacity-80 mr-3" />
          <p className="logo opacity-80">FundX</p>
        </div>
        <div>
          <button
            onClick={connectWallet}
            className="flex bg-blue-900 disabled:opacity-80 hover:bg-blue-950 sm: w-32 p-1 rounded-sm items-center"
            disabled={account != null}
          >
            <img
              src={metamask}
              alt="metamask"
              className="w-8 mr-1  text-neutral-300"
            />
            {`${account ? "Connected" : "Connect"}`}
          </button>
        </div>
      </div>
    </>
  );
}
