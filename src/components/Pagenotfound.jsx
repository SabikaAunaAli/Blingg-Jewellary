import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

export default function Pagenotfound() {
  const navigate = useNavigate();

  const homePage = () => {
    navigate("/");
  };
  return (
    <>
      <div
        className=" font-sans bg-cover h-auto object-cover container-fluid "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container m-auto">
          <h5 className="text-black text-1xl pl-3 pt-40 mb-3">
            Opps ! We regret the inconvenience
          </h5>
          <h1 className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-6xl pl-3 mb-5">
            Page Not Found <pre>Error 404 </pre>
          </h1>
          <p className="pl-3 text-black mb-5 font-semibold">
            We are Working on it, and it will be rendered soon
            <pre className="text-black font-semibold">
              thanks ! for your patience and <pre></pre>
              Co operation.
            </pre>
          </p>
          <button
            onClick={homePage}
            className="text-white bg-orange-500 hover:bg-orange-600 rounded hover:text-white p-3 ml-5 mt-3 mb-32 transition duration-300 hover:rounded"
          >
            Home Page
          </button>
        </div>
      </div>
    </>
  );
}
