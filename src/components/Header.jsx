import React, { useContext, useState } from "react";
import myImage from "../assets/logo-regular.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri"; // Changed the light mode icon
import myContext from "./context/data/MyContext";

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const context = useContext(myContext);
  const { mode, toggleMode  } = context;
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
    window.location.href = '/signup'
  }

  return (
    <>
      <div className="container m-auto  headerdiv ">
        {items.length === 0 ? (
          <>{/* JSX structure for when items.length is 0 */}</>
        ) : (
          <div className="fixed top-[700px] sm:top-[500px] headerdiv left-0">
            <FaShoppingCart
              onClick={navigateToCart}
              className="ml-5 text-3xl text-orange-600 relative hover:text-orange-400 cursor-pointer transition duration-300"
            />
            <sup className="rounded-full absolute top-0 right-[-20px] bg-red-500 text-white p-2">
              {items.length}
            </sup>
          </div>
        )}

        <div className="flex justify-between items-center ml-5 mr-5 mt-5 mb-5 ">
          {/* header categories */}
          <div className="w-1/4">
            {/* categories */}
            {toggle ? (
              <>
                <div className="flex items-center">
                  <AiOutlineMenu
                    onClick={toggleMenu}
                    className="ml-5 text-gray-400 cursor-pointer  text-xl font-bold lg:hidden block"
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

            {/* <ul className="hidden lg:flex ">
          
           
                <li className="hidden md:block ml-5">
                  <button onClick={toggleMode} className="focus:outline-none">
                    {mode === "light" ? (
                      <MdDarkMode className="font-bold hover:text-orange-500 cursor-pointer hover:underline  transition duration-300" />
                    ) : (
                      <RiLightbulbFlashLine />
                    )}
                  </button>
                </li>
            
                <Link to="/allproducts">
                  <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline whitespace-nowrap transition duration-300 mr-4">
                  ALL PRODUCTS
                  </li>
                </Link>
             
              {user ? "" : <Link to={'/signup'} ><li className= "pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
                SIGNUP
              </li>
              </Link>}
             
              {user?.user?.email === 'storeadmin@gmail.com' ?
                <Link to={'/dashboard'} ><li className="pl-3  mr-5 bg-black font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
                ADMIN
              </li>
                </Link> : <Link to={'/cart'} ><li className="pl-3  mr-5 bg-black font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
                ORDER
              </li>
                </Link>}
                {user ? <li onClick={logout} className="pl-3  mr-5 bg-black font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
                  LOGOUT
                </li>  : ""}


              {user && (
                <li className="pl-3 mr-5 bg-black font-bold text-transparent text-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300">
                  {user.user.email}
                </li>
              )}
              
            </ul> */}

            <div className=" w-1/4  hidden lg:flex">
            <ul className="flex justify-center text-decoration-none">
              <Link to="/">
                <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
                  HOME
                </li>
              </Link>
              <Link to="/about">
                <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
                  ABOUT
                </li>
              </Link>
              <Link to="/contact">
                <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
                  CONTACT
                </li>
              </Link>
             
             
                <Link to="/cart">
                <li className="flex">
                  <FaShoppingCart
                    onClick={navigateToCart}
                    className="ml-5 text-2xl   hover:text-orange-400 cursor-pointer transition duration-300"
                  
                  />
                   <span className="rounded-full  bg-red-500 text-white w-6 h-6 text-center  ">
                    {items.length}
                  </span>
                  </li>
                </Link>
               
             
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
                    className="ml-5 cursor-pointer inline-block mt-5 text-xl font-bold  lg:block"
                  />
                ) : (
                  <AiOutlineClose
                    onClick={toggleMenu}
                    className="ml-5 rounded-full border-black inline-block cursor-pointer mt-5 text-xl font-bold  lg:block"
                  />
                )}
                {/* Mode Switch */}
              </div>
              <ul>
                <li
                  className="mr-5 inline-block text-xl cursor-pointer focus:outline-none"
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




                <Link to="/" onClick={toggleMenu}>
                  <li className="pl-3 p-5  hover:text-orange-400  cursor-pointer hover:underline transition duration-300">
                    HOME
                  </li>
                </Link>
                <Link to="/about" onClick={toggleMenu}>
                  <li className="pl-3 p-5 hover:text-orange-400 cursor-pointer hover:underline transition duration-300">
                    ABOUT
                  </li>
                </Link>
                <Link to="/contact" onClick={toggleMenu}>
                  <li className="pl-3 p-5 hover:text-orange-400 cursor-pointer hover:underline transition duration-300">
                    CONTACT
                  </li>
                </Link>
              
                <Link to="/rings" onClick={toggleMenu}>
                  <li className="pl-3 p-5 hover:text-orange-400 cursor-pointer hover:underline transition duration-300">
                    RINGS
                  </li>
                </Link>
                <Link to="/brace" onClick={toggleMenu}>
                  <li className="pl-3 p-5 hover:text-orange-400 cursor-pointer hover:underline transition duration-300">
                    BRACELETS
                  </li>
                </Link>

                <Link to="/earings" onClick={toggleMenu}>
                  <li className="pl-3 p-5 hover:text-orange-400 cursor-pointer hover:underline transition duration-300">
                    EARINGS
                  </li>
                </Link>
                <Link to="/necklace" onClick={toggleMenu}>
                  <li className="pl-3 p-5  hover:text-orange-400 cursor-pointer hover:underline transition duration-300">
                    NECKLACE
                  </li>
                </Link>
                <li>
                  <Link to="/cart" onClick={toggleMenu}>
                    <FaShoppingCart
                     className="mx-auto text-2xl relative  text-center hover:text-orange-400 cursor-pointer transition duration-300"/>
                      <span className=" relative bottom-8 left-4 text-sm rounded-full  bg-red-500 p-1 w-6 h-6 text-white  text-center  ">
                       {items.length}
                     </span>
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col ">


                {user ? "" : <Link to={'/signup'} onClick={toggleMenu} className="pl-3 p-5 hover:text-orange-400 cursor-pointer hover:underline transition duration-300" style={{ color: mode === 'dark' ? 'white' : '', }}>
                  SIGNUP
                </Link>}

                {user?.user?.email === 'storeadmin@gmail.com' ?
                  <Link to={'/dashboard'} onClick={toggleMenu} className="pl-3 p-5 hover:text-orange-400 cursor-pointer hover:underline transition duration-300 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : <Link to={'/order'} onClick={toggleMenu} className="pl-3 p-5 hover:text-orange-400 cursor-pointer hover:underline transition duration-300 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link>}


                {user ? <a onClick={logout} className="pl-3 p-5 hover:text-orange-400 cursor-pointer hover:underline transition duration-300  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Logout
                </a> : ""}
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

          <ul className="hidden lg:flex ">
          
          {/* Mode Switch */}
          <li className="hidden md:block ml-5">
            <button onClick={toggleMode} className="focus:outline-none">
              {mode === "light" ? (
                <MdDarkMode className="font-bold hover:text-orange-500 cursor-pointer hover:underline  transition duration-300" />
              ) : (
                <RiLightbulbFlashLine />
              )}
            </button>
          </li>
      
          <Link to="/allproducts">
            <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline whitespace-nowrap transition duration-300 mr-4">
            ALL PRODUCTS
            </li>
          </Link>
       
        {user ? "" : <Link to={'/signup'} ><li className= "pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
          SIGNUP
        </li>
        </Link>}
       
        {user?.user?.email === 'storeadmin@gmail.com' ?
          <Link to={'/dashboard'} ><li className="pl-3  mr-5 bg-black font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
          ADMIN
        </li>
          </Link> : <Link to={'/cart'} ><li className="pl-3  mr-5 bg-black font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
          ORDER
        </li>
          </Link>}
          {user ? <li onClick={logout} className="pl-3  mr-5 bg-black font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
            LOGOUT
          </li>  : ""}


        {user && (
          <li className="pl-3 mr-5 bg-black font-bold text-transparent text-orange-400 bg-clip-text cursor-pointer hover:underline transition duration-300">
            {user.user.email}
          </li>
        )}
        
      </ul>
          {/* <div className=" w-1/4  hidden lg:flex">
            <ul className="flex justify-center text-decoration-none">
              <Link to="/">
                <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
                  HOME
                </li>
              </Link>
              <Link to="/about">
                <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
                  ABOUT
                </li>
              </Link>
              <Link to="/contact">
                <li className="pl-3 font-bold hover:text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text cursor-pointer hover:underline  transition duration-300">
                  CONTACT
                </li>
              </Link>
             
             
                <Link to="/cart">
                <li className="flex">
                  <FaShoppingCart
                    onClick={navigateToCart}
                    className="ml-5 text-2xl   hover:text-orange-400 cursor-pointer transition duration-300"
                  
                  />
                   <span className="rounded-full  bg-red-500 text-white w-6 h-6 text-center  ">
                    {items.length}
                  </span>
                  </li>
                </Link>
               
             
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}
