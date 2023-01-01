import { useState, useEffect } from "react";
import React from "react";

export default function Memos(props) {
  const [memos, setMemos] = useState([]);
  const { contract } = props.state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <>
    <p className="text-center fs-3 fw-medium">Memo</p>
    {/* {memos.map((memo)=>{
      return(
        <table key={memos.indexOf(memo)}>
          <tbody>
            <tr>
              <td>{memos.indexOf(memo)+1}</td>
              <td>{memo.name}</td>
              <td>{memo.message}</td>
              <td>{memo.from}</td>
              <td>{String(memo.timestamp)}</td>
            </tr>
          </tbody>
        </table>
      )
    })} */}
    <table className="table table-primary">
      <tbody>
        <tr>
          <td className="fw-medium">Serial No.</td>
          <td className="fw-medium">Name</td>
          <td className="fw-medium">Message</td>
          <td className="fw-medium">Address</td>
          <td className="fw-medium">Date,Time</td>
        </tr>
        {memos.map((memo)=>{
          return(
            <tr key={memos.timestamp}>
              <td className="fw-medium">{memos.indexOf(memo)+1}</td>
              <td>{memo.name}</td>
              <td>{memo.message}</td>
              <td>{memo.from}</td>
              <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  );
}
