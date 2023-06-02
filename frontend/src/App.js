import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./abi/FundRaiser.json";

import Donate from "./MyComponents/Donate";
import Memos from "./MyComponents/Memos";

import "./App.css";
import Navbar from "./MyComponents/Navbar";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("None");

  const connectWallet = async () => {
    const contractAddress = "0x4E61cD50b8A4eD73162953841eAc460a4E92658c"; //your contract address here
    const contractABI = abi.abi;
    try {
      const { ethereum } = window;
      if (ethereum) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setAccount(account);
        setState({ provider, signer, contract });
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" sm: mx-10 lg:mx-16 my-2 ">
      <Navbar connectWallet={connectWallet} account={account} />
      <div className=" my-auto w-full bg-neutral-800 bg-opacity-60 rounded h-14 p-2 px-5 flex items-center justify-center">
        <p className=" font-thin text-neutral-300 sm:text-sm text-center lg:text-xl font-roboto ">{`Connected Account : ${
          account ? account : "No account connected"
        }`}</p>
      </div>

      <div className=" text-center my-3 text-neutral-300 relative text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-600">
        Made by Priyanshu Bartwal
      </div>

      <Donate state={state} />
      <Memos state={state} />
    </div>
  );
}

export default App;
