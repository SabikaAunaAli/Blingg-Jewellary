import React from "react";
import heroImage from "../assets/hero.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/product");
  };

  return (
    <div
      className="overflow-x-hidden font-sans bg-cover h-auto object-cover container-fluid mb-6"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container text-left mx-auto px-14 ">
        <h5 className="text-black text-1xl font-bold pl-3 pt-40 mb-3">New Collection </h5>
        <h1   data-aos="slide-right" data-aos-duration="1500" 
                   className="  text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-6xl mb-5">
          {" "}
          The NEW RING <br />SENSATION 
        </h1>
        <p className=" text-black mb-5 font-normal lg:w-1/3 w-3/4">
          Lorem ipsum, dolor sit amet consectetur adipisicing
          
          magni dolor doloribus , omnis sequi. Reiciendis, tempore recusandae.
        </p>
        <button
          onClick={handleButtonClick}
          className="text-white animate-bounce bg-orange-500 hover:bg-orange-600 rounded hover:text-white p-3 ml-5 mt-3 mb-32 transition duration-300 hover:rounded"
        >
          {" "}
          Shop Now{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
