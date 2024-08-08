import React, { useState } from "react";

export default function Hero() {
  // states 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  function generateUsername() {
    // incase input is nothing
    if (!firstName || !lastName) return;
    // ramdom number genetator using math
    const randomNum = Math.floor(Math.random() * 1000);
    // username 
    setUsername(`${firstName}${lastName}${randomNum}`);
    setIsGenerated(true);
  }
  return (
    <div className="h-svh">
      {/* Upper Hero */}
      <div className="h-[550px] w-full bg-slate-200 flex flex-col items-center justify-center p-8 gap-5">
        {/* Input */}
        <div className="h-60 w-96 flex flex-col justify-around items-center p-4">
          <input
            type="text"
            placeholder="Enter your first Name"
            className="border-black p-2 w-4/5 rounded-xl outline-none placeholder:text-center px-16"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your last Name"
            className="border p-2 w-4/5 rounded-xl outline-none placeholder:text-center px-16"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {/* Button */}
        <button
          onClick={generateUsername}
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-8 rounded-xl transition-transform duration-300 ease-in-out hover:from-purple-500 hover:via-pink-600 hover:to-red-600 hover:scale-100"
        >
          Generate Username
        </button>
        {/* Output */}
        <div className="output h-32 w-full mt-12 text-md font-bold text-center">
          {isGenerated && (
            <p>
              You can use <span className="text-red-500">@{username}</span> as your username.
            </p>
          )}
        </div>
      </div>
      {/* Footer */}
      <div className="bg-gray-200 h-[250px] border-2">
      </div>
    </div>
  );
}
