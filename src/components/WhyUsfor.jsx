import React from "react";
import us from "./why";

export default function WhyUsfor() {
  return (
    <div className="container px-10  m-auto">
      <div className="container mt-20">
        <p className="text-center text-gray-600 font-semibold">
          BEST IN BUSINESS
        </p>
        <h1 data-aos="zoom-in-up" className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text text-center font-bold text-6xl pl-5 mb-5">
         
          Why Choose Us ?
        </h1>
        <p className="text-center text-3xl text-gray-500 mt-10">
          CRAS MALESUADA DOLOR SIT AMET EST <pre></pre>EGESTAS ULLAMCORPER.
          NULLAM IN TORTOR MI. <pre></pre> MAECENAS VULPUTATE LIBERO
        </p>
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 ml-2 justify-center items-center ">
          {us.map((item, index) => (
            <div
              key={index}
              className="border rounded border-gray-500 m-5 p-3 shadow-lg hover:bg-slate-200  
              hover:scale-105 transition-colors ease-in-out"
            >
              <img
                src={item.image}
                alt={item.heading}
                className="mx-auto my-auto pl-8 logoimage"
              />
              <h3 className="text-center text-orange-500 font-bold pb-5">
                {item.heading}
              </h3>
              <p className="text-center text-gray-500 font-semibold">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
