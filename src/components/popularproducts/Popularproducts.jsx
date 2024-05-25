import React, { useRef, useState } from "react";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { add } from "../store/cartslice.js";
import { useDispatch } from "react-redux";
import products from '../description/desc.js'
import { Link } from "react-router-dom";

export default function Popularproducts() {
  const { pro } = products;
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const containerRef = useRef(null); // Ref for the container element
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/desc/${id}`);
  }; 

  const addProductToCart = (product) => {
    dispatch(add(product));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // message hidden after two seconds

    // Scroll to the top of the component's container
    containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container px-10  m-auto" ref={containerRef}>
    
      <h2 className="text-center mb-5 font-bold text-4xl text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text mt-10">
        Popular Products
      </h2>
      {showMessage && (
        <div className="bg-green-500 text-white text-center py-2 mb-4">
          Product added to cart successfully!
        </div>
      )}
      <div data-aos="zoom-in-up" data-aos-duration="1000" className="container cursor-pointer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pro.map((product, index) => (
          <div key={index} className="m-3 ml-2 border shadow rounded relative">
            <div  className="overflow-hidden rounded shadow-lg relative">
              <img
                className="rounded shadow-lg hover:scale-125 transition-all w-full ease-in-out"
                src={product.imageUrl}
                alt={product.tittle}
              />
              <div className="inline-block rounded-full shadow-lg font-bold p-2 pl-3 pr-3 pt-3 pb-3 border border-orange-500 absolute  top-32 left-3 sm:top-4 sm:left-56 md:left-40 lg:left-40 xl:left-56   2xl:left-72   hover:border-gray-600 bg-white hover:text-orange-400 cursor-pointer">
              <Link to={`/desc/${product.id}`}>
                    <FaEye onClick={() => handleClick(product.id)} />
                  </Link>
              </div>
              <div className="inline-block rounded-full shadow-lg font-bold p-2 pl-3 pr-3 pt-3 pb-3 border border-orange-500 absolute top-[78px] left-[12px] sm:left-56 sm:top-16 md:left-40 lg:left-40 xl:left-56  2xl:left-72    hover:border-gray-600 bg-white hover:text-orange-400 cursor-pointer">
                <FaShoppingCart onClick={() => addProductToCart(product)} />
              </div>
            </div>
            <h3 className="text-orange-500 text-2xl font-semibold text-center pt-3">
              {product.tittle}
            </h3>
            <p className="mt-2 text-gray-400 font-bold text-center pb-1 ml-2">{product.productdesc}</p>
            <p className="text-transparent text-2xl bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-center pb-2">
              ${product.price}
            </p>
            <div className="inline-block rounded-full bg-white shadow-lg font-bold p-2 pl-3 pr-3 pt-3 pb-3 border border-orange-500 absolute top-2 left-3">
              sale
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
