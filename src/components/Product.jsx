import React from "react";
import Rings from "./popularproducts/rings/Rings";
import Brace from "./popularproducts/bracelets/Brace.jsx";
import Earings from "./popularproducts/earings/Earings.jsx";
import Necklace from "./popularproducts/necklace/Necklace.jsx";
import MySlider from "./Myslider";
import Popularproducts from "./popularproducts/Popularproducts.jsx";
import Popularproducts2 from "./popularproducts/Popularproducts2.jsx";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <>
      <div data-aos="fade-up" className="container m-auto">
        <h3 className="font-bold  text-transparent text-2xl bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text ml-8 mt-10 ">
          --SHOP--
        </h3>
        <h3 className="text-gray-500 mt-5 ml-5">
          Go to
          <span className="text-orange-500 cursor-pointer">
            <Link to="/"> Home </Link>{" "}
          </span>
        </h3>
        <h3 className="font-bold text-gray-500 text-3xl mt-10 ml-3 text-center mb-10">
          Products --
          <span className="text-transparent text-2xl bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
            That Binds Love
          </span>
        </h3>
        <Rings />
        <Brace />
        <Earings />
        <Necklace />
        <MySlider />
        <Popularproducts />
        <Popularproducts2 />
      </div>
    </>
  );
}
