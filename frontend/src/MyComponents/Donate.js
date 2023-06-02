import React from "react";
import { ethers } from "ethers";
import ethlogo from "./assets/Eth-icon.png";

export default function Donate(props) {
  const Donatefun = async () => {
    const { contract } = props.state;
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const amt = {
      value: ethers.utils.parseEther("0.001"),
      gasLimit: ethers.utils.parseEther("0.00000000001"),
    };
    const txn = await contract.donate(name, message, amt);
    await txn.wait();
    console.log("transaction sucessfull");
  };

  return (
    <div className=" w-full flex flex-wrap lg:items-center flex-row mt-12">
      <div className="flex sm:my-6 flex-col lg:w-1/2 pr-10">
        <h1 className="relative text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-600 sm: text-5xl lg:text-6xl my-6 ">
          Fueling Dreams, Empowering Innovators
        </h1>
        <p className=" text-neutral-300 ">
          Be a catalyst for change. Fund our project and power innovation. Your
          contribution drives progress and shapes a better tomorrow. Join us in
          making an impact!
        </p>
      </div>
      <form
        className=" bg-neutral-900 bg-opacity-40 rounded sm: w-full p-5 mt-10 lg:w-1/2"
        onSubmit={() => Donatefun()}
      >
        <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-900 sm: text-4xl mb-5">
          Send Eth
        </div>
        <div className="w-auto sm: mb-3">
          <label className="block">Name</label>
          <input
            type="text"
            className="block w-full rounded-sm bg-neutral-800 border-0 outline-none text-gray-900 sm: p-1.5"
            placeholder=""
            id="name"
          />
        </div>
        <div className="mb-3">
          <label className="block">Amount</label>
          <input
            type="text"
            className="block w-full rounded-sm bg-neutral-800 border-0 outline-none text-gray-900 sm: p-1.5"
            placeholder=""
            id="message"
          />
        </div>
        <div className="mb-3">
          <label className="block">Message</label>
          <input
            type="text"
            className="block w-full rounded-sm bg-neutral-800 border-0 outline-none text-gray-900 sm: p-1.5"
            placeholder=""
            id="message"
          />
        </div>
        <button
          type="submit"
          className="flex bg-blue-900 hover:bg-blue-950 sm: w-32 p-1 rounded-sm items-center"
          onClick={() => Donatefun()}
          disabled={!props.state.contract}
        >
          <img src={ethlogo} alt="eth icon" className=" w-8 mr-2" />
          Send Eth
        </button>
      </form>
    </div>
  );
}
