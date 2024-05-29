

import React, { useContext, useState } from "react";
import myImage from "../assets/logo-regular.png";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri"; // Changed the light mode icon
import myContext from "./context/data/MyContext";

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const context = useContext(myContext);
  const { mode, toggleMode } = context;
  const items = useSelector((state) => state.cart);
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const logout = () => {
    localStorage.clear('user');
  navigate = '/signup'
  }

  return (
    <>
      <div className="container m-auto headerdiv">
        {items.length === 0 ? (
          <>{/* JSX structure for when items.length is 0 */}</>
        ) : (
          user?.user?.email !== 'storeadmin@gmail.com' && (
            <div className="fixed top-[700px] sm:top-[500px] headerdiv left-0">
              <FaShoppingCart
                onClick={navigateToCart}
                className="ml-5 text-3xl text-orange-600 relative hover:text-orange-400 cursor-pointer transition duration-300"
              />
              <sup className="rounded-full absolute top-0 right-[-20px] bg-red-500 text-white p-2">
                {items.length}
              </sup>
            </div>
          )
        )}

        <div className="flex justify-between items-center ml-5 mr-5 mt-5 mb-5">
          {/* header categories */}
          <div className="w-1/4">
            {/* categories */}
            {toggle ? (
              <>
                <div className="flex items-center">
                  <AiOutlineMenu
                    onClick={toggleMenu}
                    className="ml-5 text-gray-400 cursor-pointer text-xl font-bold lg:hidden block"
                  />
                  {/* Mode Switch */}
                  <div className="hidden lg:block ml-5"></div>
                </div>
              </>
            ) : (
              <li className="flex items-center">
                <AiOutlineClose
                  onClick={toggleMenu}
                  className="ml-5 cursor-pointer text-xl font-bold lg:hidden block"
                />
              </li>
            )}

            <div className="w-1/4 hidden lg:flex">
              <ul className="flex justify-center text-decoration-none">
                <NavLink to="/"   
                 className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-300  scale-110 underline "
                      : "px-2 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300"
                  }>
                  <li>
                    HOME
                  </li>
                </NavLink>
                <NavLink to="/about"
                 className={({ isActive }) =>
                  isActive
                    ? "px-2 font-extrabold text-orange-300  scale-110 underline "
                    : "px-2 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300"
                }>
                  <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300">
                    ABOUT
                  </li>
                </NavLink>
                <NavLink to="/contact"
                 className={({ isActive }) =>
                  isActive
                    ? "px-2 font-extrabold text-orange-300  scale-110 underline "
                    : "px-2 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300"
                }>
                  <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300">
                    CONTACT
                  </li>
                </NavLink>

                {user?.user?.email !== 'storeadmin@gmail.com' && (
                  <NavLink to="/cart"  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-500 "
                      : "px-2 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300"
                  }>
                    <li className="flex">
                      <FaShoppingCart
                        onClick={navigateToCart}
                        className="ml-5 text-2xl hover:text-orange-400 cursor-pointer transition duration-300"
                      />
                      <span className="rounded-full bg-red-500 text-white w-5 h-5 text-center">
                        {items.length}
                      </span>
                    </li>
                  </NavLink>
                )}
              </ul>
            </div>

            {/* responsive menu from md size */}
            <div
              className={`headerdiv overflow-y-scroll fixed w-full text-center h-screen pt-5 bg-gradient-to-br from-yellow-300 to-orange-300 top-0 left-0 text-black font-bold transition-all ease-in-out duration-1000 
              ${toggle ? "left-[-100%] opacity-0" : "left-[0] opacity-1"}
            `}
            >
              <div className="flex items-center toggle-mode">
                {toggle ? (
                  <AiOutlineMenu
                    onClick={toggleMenu}
                    className="ml-5 cursor-pointer inline-block mt-5 text-xl font-bold lg:block"
                  />
                ) : (
                  <AiOutlineClose
                    onClick={toggleMenu}
                    className="ml-5 rounded-full border-black inline-block cursor-pointer mt-5 text-xl font-bold lg:block"
                  />
                )}
                {/* Mode Switch */}
              </div>
              <ul>
                <li
                  className="p-2 inline-block text-xl cursor-pointer focus:outline-none"
                  onClick={() => {
                    toggleMode();
                    toggleMenu();
                  }}
                >
                  {mode === "light" ? <MdDarkMode /> : <RiLightbulbFlashLine />}
                </li>

                <div className="hidden lg:block ml-5">
                  <li className="focus:outline-none">
                    {mode === "light" ? "" : <RiLightbulbFlashLine />}
                  </li>
                </div>

                <NavLink to="/" onClick={toggleMenu}  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-600  scale-125 underline "
                      : "px-2 font-bold hover:text-white cursor-pointer hover:underline transition duration-300"
                  }>
                  <li >
                    HOME
                  </li>
                </NavLink>
                <NavLink to="/about" onClick={toggleMenu}  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-600   scale-110 underline "
                      : "px-2 font-bold hover:text-white cursor-pointer hover:underline transition duration-300"
                  }>
                  <li >
                    ABOUT
                  </li>
                </NavLink>
                <NavLink to="/contact" onClick={toggleMenu}  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-600   scale-110 underline "
                      : "px-2 font-bold hover:text-white cursor-pointer hover:underline transition duration-300"
                  }>
                  <li >
                    CONTACT
                  </li>
                </NavLink>

                <NavLink to="/rings" onClick={toggleMenu}  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-600   scale-110 underline "
                      : "px-2 font-bold hover:text-white cursor-pointer hover:underline transition duration-300"
                  }>
                  <li >
                    RINGS
                  </li>
                </NavLink>
                <NavLink to="/brace" onClick={toggleMenu}  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-600   scale-110 underline "
                      : "px-2 font-bold hover:text-white cursor-pointer hover:underline transition duration-300"
                  }>
                  <li>
                    BRACELETS
                  </li>
                </NavLink>

                <NavLink to="/earings" onClick={toggleMenu}  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-600   scale-110 underline "
                      : "px-2 font-bold hover:text-white cursor-pointer hover:underline transition duration-300"
                  }>
                  <li >
                    EARINGS
                  </li>
                </NavLink>
                <NavLink to="/necklace" onClick={toggleMenu}  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-600   scale-110 underline "
                      : "px-2 font-bold hover:text-white cursor-pointer hover:underline transition duration-300"
                  }>
                  <li >
                    NECKLACE
                  </li>
                </NavLink>

                {user?.user?.email !== 'storeadmin@gmail.com' && (
                  <li>
                    <NavLink to="/cart" onClick={toggleMenu}  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-600 "
                      : "px-2 font-bold hover:text-orange-600 bg-clip-text cursor-pointer"
                  }>
                      <FaShoppingCart className="mx-auto text-2xl relative text-center hover:text-white cursor-pointer transition duration-300" />
                      <span className="relative bottom-8 left-4 text-sm rounded-full bg-red-500 px-1 w-5 text-white text-center">
                        {items.length}
                      </span>
                    </NavLink>
                  </li>
                )}
              </ul>
              <div className="flex flex-col gap-5">
                {user ? "" : (
                  <NavLink to={'/signup'} onClick={toggleMenu}  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-600  scale-110 underline "
                      : "px-2 font-bold hover:text-white cursor-pointer hover:underline transition duration-300"
                  } style={{ color: mode === 'dark' ? 'white' : '' }}>
                    SIGNUP
                  </NavLink>
                )}

                {user?.user?.email === 'storeadmin@gmail.com' ? (
                  <NavLink to={'/dashboard'} onClick={toggleMenu} 
                  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-600   scale-110 underline "
                      : "px-2 font-bold hover:text-white cursor-pointer hover:underline transition duration-300"
                  } style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Admin
                  </NavLink>) 
                  : <NavLink to={'/cart'} onClick={toggleMenu} 
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 font-extrabold text-orange-600  scale-110 underline "
                      : "p-2 font-bold hover:text-white cursor-pointer hover:underline transition duration-300"
                  } style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Order
                  </NavLink>}

                {user && (
                <div onClick={toggleMenu} className="pl-3 mr-5 bg-black font-bold text-black underline bg-clip-text cursor-pointer hover:underline transition duration-300">
                  {user.user.email}
                </div>
              )}

                {user ? (
                  <div onClick={logout}  className= "px-2 font-bold hover:text-orange-600 cursor-pointer hover:underline transition duration-300"
                   style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Logout
                  </div>
                ) : ""}
              </div>
              <h3 className="text-center font-bold m-auto mt-5 pb-5 p-5">
                Copyright © 2024 Blingg Jewelry | Created by:
                <a
                  className="cursor-pointer underline"
                  href="#"
                  target="_blank"
                >
                  Sabika AunAli Wasaya
                </a>
              </h3>
            </div>
          </div>

          {/* header logo */}
          <div className="w-2/4 flex justify-center">
            <img
              onClick={navigateToHome}
              className="cursor-pointer logoimage"
              src={myImage}
              alt="Description of the image"
            />
          </div>

          {/* header cart */}
          <ul className="hidden lg:flex items-center align-middle">
            {/* Mode Switch */}
            <li className="hidden md:block ml-5">
              <button onClick={toggleMode} className="focus:outline-none">
                {mode === "light" ? (
                  <MdDarkMode className="font-bold hover:text-orange-500 cursor-pointer hover:underline transition duration-300" />
                ) : (
                  <RiLightbulbFlashLine />
                )}
              </button>
            </li>

            <NavLink to="/allproducts"  className={({ isActive }) =>
                    isActive
                      ? "px-2 font-extrabold text-orange-300  scale-110 underline "
                      : "px-2 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300"
                  }>
              <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline whitespace-nowrap transition duration-300 mr-4">
                ALL PRODUCTS
              </li>
            </NavLink>

            {user ? "" : (
              <NavLink to={'/signup'}  className={({ isActive }) =>
                isActive
                  ? "px-2 font-extrabold text-orange-300  scale-110 underline "
                  : "px-2 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300"
              }>
                <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300">
                  SIGNUP
                </li>
              </NavLink>
            )}

            {user?.user?.email === 'storeadmin@gmail.com' ? (
              <NavLink to={'/dashboard'}  className={({ isActive }) =>
                isActive
                  ? "px-2 font-extrabold text-orange-300  scale-110 underline "
                  : "px-2 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300"
              }>
                <li className="pl-3 mr-5 bg-black font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300">
                  ADMIN
                </li>
              </NavLink>
            ) : (
              <NavLink to={'/cart'}  className={({ isActive }) =>
                isActive
                  ? "px-2 font-extrabold text-orange-300  scale-110 underline "
                  : "px-2 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300"
              }>
                <li className="pl-3 mr-5 bg-black font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300">
                  ORDER
                </li>
              </NavLink>
            )}
            {user ? (
              <li onClick={logout} className="pl-3 mr-5 bg-black font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300">
                LOGOUT
              </li>
            ) : ""}

            {user && (
              <li className=" text-xl  font-bold  text-orange-400 cursor-pointer hover:underline transition duration-300">
                {user.user.email}
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

