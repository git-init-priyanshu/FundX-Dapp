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
      {memos.length !== 0 ? (
        <>
          <p className="relative text-center text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-600 mt-10 sm: text-5xl lg:text-6xl my-6 ">
            Memo
          </p>
          <div className="memo overflow-x-scroll bg-neutral-900 bg-opacity-40 sm:rounded-sm sm:overflow-x-scroll lg:rounded-lg lg:overflow-hidden">
            <table className="table w-full sm:table-auto  text-neutral-300">
              <thead className="justify-between text-left">
                <tr>
                  <th className="px-4 py-2 w-5/12">S no.</th>
                  <th className="px-4 py-2 w-5/12">Name</th>
                  <th className="px-4 py-2 w-5/12">Message</th>
                  <th className="px-4 py-2 w-5/12">Address</th>
                  <th className="px-4 py-2 w-5/12">Date, Time</th>
                </tr>
              </thead>
              <tbody>
                {memos.map((memo, index) => (
                  <tr key={memo.timestamp} className="text-left">
                    <td className="px-4 py-2 w-5/12">{index + 1}</td>
                    <td className="px-4 py-2 w-5/12">{memo.name}</td>
                    <td className="px-4 py-2 w-5/12">{memo.message}</td>
                    <td className="px-4 py-2 w-5/12 overflow-hidden">
                      {memo.from}
                    </td>
                    <td className="px-4 py-2 w-5/12">
                      {new Date(memo.timestamp * 1000).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
