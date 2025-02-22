import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Contact us if any queries</h1>
      <input className="border border-b-black m-4" placeholder="name"></input>
      <input className="border border-b-black m-4" placeholder="age"></input>
      <button className="border border-b-black m-4 px-1 rounded-lg bg-gray-100" >submit</button>
    </div>
  );
};

export default Contact;
