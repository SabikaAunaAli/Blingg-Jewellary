import React from "react";
import aboutimage from "../assets/about.jpg";
import { useNavigate } from "react-router-dom";

export default function Aboutus() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/products");
  };

  return (
    <>
      <div className="container mx-auto my-10 px-10 flex-wrap h-fit flex  justify-between gap-4">
        <div className=" flex flex-col justify-start gap-3 w-full lg:w-1/4">
          <h3 className="text-gray-400 text-xl font-bold mt-48 text-left">
            Unique Prices
          </h3>
          <h2 className=" text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-6xl text-left mb-5">
            BE <br /> ALWAYS <br />ON <br /> TREND
          </h2>

          <p className="text-gray-600  mt-2 text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit harum ea inventore dolores perferendis doloremque,
            sit, quam numquam atque facere non, sequi illum odit est.
          </p>
          <button
            onClick={handleButtonClick}
            className="w-1/2 animate-bounce text-white bg-orange-500 hover:bg-orange-600 rounded hover:text-white p-3  mt-5 mb-3 transition  duration-300 hover:rounded"
          >
            Shop Now
          </button>
        </div>
        <div className="  flex  ">
          <div className=" flex  items-center -mr-24 z-20">
            <img data-aos="flip-left" className="rounded" src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bg-02.jpg"
              alt="" />
          </div>
          <div className="">
            <img data-aos="flip-right"
              className="rounded hover:translate-x-16 hover:translate-y-5 transition-all ease-in-out"  src={aboutimage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
