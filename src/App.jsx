import React from "react";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [captcha, setCaptcha] = useState("");
  const [inputV, setInputV] = useState("")

  const generateCaptcha = useCallback(() => {
    let captcha = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#%^&*()`1234567890";
    for (let i = 0; i < 6; i++) {
      let char = Math.floor(Math.random() * str.length);
      captcha = captcha + str[char];
    }

    setCaptcha(captcha);
  }, [setCaptcha]);

  useEffect(() => {
    generateCaptcha();
  }, setCaptcha);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-xl text-center mb-3">Captcha Check</h1>
        <div className="block bg-white w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none sm:text-sm mb-3 text-cetre">
          <input className="text-xl text-center text-black" type="text" value={captcha} readOnly />
        </div>
        <div>
          <input className="mb-2 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" type="text"
          onChange={(e)=>setInputV(e.target.value)}
           />
          <button className="bg-gray-500 text-white px-4 py-2 rounded-full shadow active:bg-white active:text-black transition duration-300"
          onClick={(e)=>{
            if(inputV == captcha){
              alert("Captcha Matched")
            }
            else{
              alert("Not Matching")
            }
          }}>Check</button>
        </div>
      </div>
    </>
  );
}

export default App;
