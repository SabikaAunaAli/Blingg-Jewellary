import React, { useRef, useState } from "react";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { add } from "../store/cartslice.js";
import { useDispatch } from "react-redux";
import products from '../description/desc.js'
import { Link } from "react-router-dom";

export default function Popularproducts2() {
  const { product } = products;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const containerRef = useRef(null); // Ref for the container element

  const handleClick = (id) => {
    navigate(`/desc/${id}`);
  }; 

  const addProductToCart = (productItem) => {
    dispatch(add(productItem));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // message hidden after two seconds

    // Scroll to the top of the component's container
    containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container px-10  m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 relative" ref={containerRef}>
      <h2 className="text-center mb-5 font-bold text-4xl text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text mt-10">
        Best Selling Products
      </h2>
      {showMessage && (
        <div className="bg-green-500 text-white text-center py-2 mb-4">
          Product added to cart successfully!
        </div>
      )}
      <div className="container cursor-pointer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map((productItem, index) => (
          <div  data-aos="zoom-out" key={index} className="m-2 ml-2 relative border shadow rounded">
            <div className="overflow-hidden rounded shadow-lg relative">
            <div className=" flex justify-between  z-10 relative m-2">
              <div className="h-fit rounded-full shadow-lg font-bold p-1 bg-white border border-orange-500 ">
              sale
            </div>

            <div className="flex flex-col gap-2">
            <div className="hover:border-gray-600 hover:text-orange-400 bg-white rounded-full shadow-lg font-bold p-2  border border-orange-500  cursor-pointer">
              <Link to={`/desc/${productItem.id}`}>
                    <FaEye onClick={() => handleClick(productItem.id)} />
                  </Link>
              </div>
              <div className="  bg-white rounded-full shadow-lg font-bold p-2  border border-orange-500   hover:border-gray-600 hover:text-orange-400 cursor-pointer">
                <FaShoppingCart onClick={() => addProductToCart(productItem)} />
              </div>


            </div>


              </div>
              <img
                className="rounded shadow-lg h-64 w-96 hover:scale-125 -mt-24 transition-all ease-in-out"
                src={productItem.imageUrl}
                alt={productItem.title}
              />

         
          
            </div>
            <h3 className="text-orange-500 text-2xl font-semibold text-center pt-3">
              {productItem.title}
            </h3>
            <p className="mt-2 text-gray-400 font-bold text-center pb-1 ml-2">{productItem.description}</p>
            <p className="text-transparent text-2xl bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-center pb-2">
              ${productItem.price}
            </p>
        

          </div>
        ))}
      </div>
    </div>
  );
}
