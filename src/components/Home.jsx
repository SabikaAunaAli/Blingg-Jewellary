import React, { useContext } from "react";
import Herosection from "./Herosection";
import Popularproducts2 from "./popularproducts/Popularproducts2";
import Popularproducts from "./popularproducts/Popularproducts";
import Aboutus from "./Aboutus";
import WhyUsfor from "./WhyUsfor";
import MySlider from "./Myslider";
import myContext from "./context/data/MyContext";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import Allproducts from "./AllProducts";
import FilteredProducts from "./FilteredProducts";




export default function Home() {

  return (
    <div className="text-center">




      <Herosection />
      <Popularproducts />
      <MySlider />
      <Aboutus />
      <Popularproducts2 />

      <WhyUsfor />
    </div>
  );
}
