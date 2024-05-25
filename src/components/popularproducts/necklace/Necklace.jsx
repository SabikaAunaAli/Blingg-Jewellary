import React from "react";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { add } from '../../store/cartslice.js';
import { useDispatch } from "react-redux";
import { useState } from "react";
import hero from '../../../assets/hero.jpg'
import { useRef } from "react";
import products from '../../description/desc.js'
import { Link } from "react-router-dom";

export default function Necklace() {
  const { necklace } = products; // Destructure only the necessary data
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const containerRef = useRef(null);

  const handleClick = (id) => {
    navigate(`/desc/${id}`);
  }; 

  const addProductToCart = (product) => {
    dispatch(add(product));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="container m-auto"  ref={containerRef}>
        <div className="bg-cover bg-no-repeat rounded container-fluid h-96 h-100" style={{ backgroundImage: `url(${hero})` }}>
          <h2 className="text-transparent bg-gradient-to-br from-yellow-300 pt-40 to-orange-400 bg-clip-text text-1xl text-center text-5xl font-bold mb-3 pb-3">Necklace</h2>
        </div>
        {showMessage && (
          <div className="bg-green-500 mt-3 text-white text-center py-2 mb-4">
            Product added to cart successfully!
          </div>
        )}
        <h3 className="font-bold text-gray-400 mt-10 ml-10">Categories -- <span className="text-transparent text-2xl bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold ">Necklace</span></h3>
        <h3 className="font-bold text-gray-500 text-3xl mt-10 ml-10 sm:text-center mb-10">Necklace - <i className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold ">that displays Love ! </i></h3>
        <div className="cursor-pointer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {necklace.map((necklace, index) => (
            <div key={index} className="border-gray-400 border p-4 rounded-lg shadow-lg">
              <div className="overflow-hidden relative">
                <img src={necklace.imageUrl} alt={necklace.tittle} className="w-full h-auto rounded hover:scale-125 transition-all ease-in-out object-left shadow-lg" />
                <div className="inline-block rounded-full shadow-lg font-bold p-2 pl-3 pr-3 pt-3 pb-3 border border-orange-500 absolute top-32 left-4 sm:top-4 sm:left-56 md:left-40 lg:left-40 xl:left-56 2xl:left-72 hover:border-gray-600 hover:text-orange-400 cursor-pointer">
                  <Link to={`/desc/${necklace.id}`}>
                    <FaEye onClick={() => handleClick(necklace.id)} />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg font-bold p-2 pl-3 pr-3 pt-3 pb-3 border border-orange-500 absolute top-20 left-4 sm:left-56 sm:top-16 md:left-40 lg:left-40 xl:left-56 2xl:left-72 hover:border-gray-600 hover:text-orange-400 cursor-pointer">
                  <FaShoppingCart onClick={() => addProductToCart(necklace)} />
                </div>
                <div className="inline-block rounded-full shadow-lg font-bold p-2 pl-2 pr-2 pt-3 pb-3 border bg-white border-orange-500 absolute top-3 left-3">sale</div>
              </div>
              <div className="mt-2">
                <h2 className="text-lg text-orange-500 text-center font-semibold">{necklace.tittle}</h2>
                <p className="text-transparent text-2xl bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-center">{necklace.price}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-8" />
      </div>
    </>
  );
}
