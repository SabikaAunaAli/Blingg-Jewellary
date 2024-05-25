import React from 'react'
import { useState } from 'react';

export default function Review() {
 // review

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");

 const handleNameChange = (e) => {
   setName(e.target.value);
 };

 const handleEmailChange = (e) => {
   setEmail(e.target.value);
 };

 const handleMessageChange = (e) => {
   setMessage(e.target.value);
 };

 const handleSubmit = (e) => {
   e.preventDefault();

   console.log("Submitted:", { name, email, message });

   setName("");
   setEmail("");
   setMessage("");
 };

  return (
    <>
     {/* Review Div */}
     <div className="container m-auto shadow-lg p-6 mt-10 bg-gray-100  rounded-md">
          <h2 className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-3xl text-center mb-4">
            Leave a Review
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Review
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>   
    </>
  )
}
