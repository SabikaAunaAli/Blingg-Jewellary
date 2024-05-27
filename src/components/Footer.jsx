import React from "react";
import logoimage from "../assets/logo-regular.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdDarkMode } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri"; // Changed the light mode icon
import myContext from "./context/data/MyContext";
import { useContext } from "react";
import { useState } from "react";

export default function Footer() {
  const user = JSON.parse(localStorage.getItem('user'));
  const context = useContext(myContext);
  const { mode, toggleMode } = context;
  const items = useSelector((state) => state.cart);
  const [toggle, setToggle] = useState(true);



  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setToggle(!toggle);
  };


  const navigate = useNavigate();
  const navigatetohome = () => {
    navigate("/");
  };


  return (
    <>
      <div className=" m-auto">
        <div className="bg-gradient-to-br from-yellow-300 to-orange-400 ">
          <div className="container m-auto flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
            <div className="flex justify-center">
              <img
                onClick={navigatetohome}
                className="mt-20 mb-20  cursor-pointer"
                src={logoimage}
                alt="logo"
                style={{ width: 150, height: 100 }}
              />
            </div>
            {/* about us */}
            <div>
              <h2 className="text-white font-bold mt-10 mb-5 text-center hover:text-orange-500">
                ABOUT US
              </h2>

              <ul>
                <Link to="/">
                  <li className="pb-5 text-black font-semibold text-center cursor-pointer  hover:text-orange-500">
                    Home
                  </li>
                </Link>
                <Link to="about">
                  <li className="pb-5 text-black font-semibold text-center cursor-pointer  hover:text-orange-500">
                    About
                  </li>
                </Link>
                <Link to="contact">
                  <li className="pb-5 text-black font-semibold  text-center cursor-pointer  hover:text-orange-500">
                    Contact
                  </li>
                </Link>

                {/* <li className="pb-5 text-black font-semibold  text-center cursor-pointer  hover:text-orange-500">
                  <Link to="/cart">
                    <FaShoppingCart className="mt-1  inline-block  text-2xl  hover:text-orange-400 cursor-pointer transition duration-300" />
                    <sup className="rounded-full bg-red-500 text-white p-1">
                      {items.length}
                    </sup>
                  </Link>
                </li> */}
                   {user?.user?.email !== 'storeadmin@gmail.com' && (
                  <li>
                    <Link to="/cart" onClick={toggleMenu}>
                      <FaShoppingCart className="mx-auto text-2xl relative text-center hover:text-orange-400 cursor-pointer transition duration-300" />
                      <span className="relative bottom-8 left-4 text-sm rounded-full bg-red-500 p-1 w-6 h-6 text-white text-center">
                        {items.length}
                      </span>
                    </Link>
                  </li>
                   )}
              </ul>
            </div>
            {/* shop */}
            <div>
              <ul>
                <li className="text-white font-bold text-center mt-10 mb-5">
                  SHOP
                </li>
                <Link to="rings">
                  <li className="pb-5 text-black text-center font-semibold cursor-pointer hover:text-orange-500">
                    Rings
                  </li>
                </Link>
                <Link to="brace">
                  <li className="pb-5 text-black font-semibold text-center cursor-pointer  hover:text-orange-500">
                    Bracelet
                  </li>
                </Link>
                <Link to="earings">
                  <li className="pb-5 text-black font-semibold text-center cursor-pointer hover:text-orange-500">
                    Earings
                  </li>
                </Link>
                <Link to="necklace">
                  <li className="pb-5 text-black font-semibold text-center cursor-pointer hover:text-orange-500">
                    Necklace
                  </li>
                </Link>
                <Link to="products">
                  <li className="pb-5 text-black font-semibold text-center cursor-pointer hover:text-orange-500">
                    All Products
                  </li>
                </Link>
              </ul>
            </div>
            {/* address */}
            <div>
              <ul>
                <li className="text-white font-bold text-center mt-10 mb-5">
                  ADDRESS
                </li>

                <li className="pb-5 text-black text-center font-semibold cursor-pointer hover:text-orange-500">
                  123 Fifth Avenue, New York.
                </li>           
               
               <a
                href="mailto:contact@info.com"
                className=" text-center block text-black font-semibold pb-5 hover:text-orange-500 cursor-pointer"
              >
                <li>
                contact@info.com
                </li>
                
              </a>
                 
             
              <a
                href="tel:929-242-6868"
                className="pb-5 text-center text-black block font-semibold  hover:text-orange-500 cursor-pointer"
              >
                 <li>
                 929-242-6868
                 </li>
               
              </a>
              
            

              </ul>
           
            </div>
          </div>
          <hr className="mb-5 mt-5" />

          <h3 className="text-center font-bold mt-5 pb-5">
            Copyright © 2024 Blingg Jewelry | Created by:{" "}
            <a
              className="cursor-pointer underline"
              href="# "
              target="_blank"
            >
              Sabika AunAli
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}
