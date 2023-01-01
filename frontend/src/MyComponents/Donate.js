import React from "react";
import { ethers } from "ethers";


export default function Donate(props) {

  const Donatefun = async()=>{
    const {contract} = props.state;
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const amt = {
      value:ethers.utils.parseEther("0.001"),
      gasLimit: ethers.utils.parseEther("0.00000000001")
    };
    const txn = await contract.donate(name,message,amt);
    await txn.wait();
    console.log("transaction sucessfull")
  }

  return(
    <>
    {/* <div>
    <form onSubmit={()=>Donatefun()}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input className="from-control" type="text" id="name" placeholder="Enter Your Name" />

      </div>
      <label>Message</label>
      <input type="text" id="message" placeholder="Enter Your Message" />
      <button type="submit">Donate</button>
      <button className="btn btn-primary btn-outline" onClick={()=>Donatefun()}>check</button>
    </form>
    </div> */}

    <form className="my-3 px-5" onSubmit={()=>Donatefun()}>
      <div className="mb-3">
        <label className="form-label fw-medium">Name</label>
        <input type="text" className="form-control" placeholder="Enter Your Name"  id="name"/>
      </div>
      <div className="mb-3">
        <label className="form-label fw-medium">Message</label>
        <input type="text" className="form-control" placeholder="Enter Your Message" id="message"/>
      </div>
    </form>
      <button type="submit" className="btn btn-outline-primary px-5 mx-5" onClick={()=>Donatefun()} disabled={!props.state.contract}>Submit</button>
    </>
  );
}
