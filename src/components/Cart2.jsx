import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import heroIMAGE from "../assets/hero.jpg";
import { Link, useNavigate } from "react-router-dom";
import { remove, updateQuantity } from "./store/cartslice";

export default function Cart2() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const removeProduct = (productId) => {
    dispatch(remove(productId));
  };
  const navigateToShop = () => {
    navigate("/products");
  };
  const navigateToNotFound = () => {
    navigate("/checkout");
  };
  // Calculate total price
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  // Function to update quantity
  const updateProductQuantity = (productId, newQuantity) => {
    newQuantity = Math.max(newQuantity, 1);
    dispatch(updateQuantity({ productId, newQuantity }));
  };
  return (
    <>
      <div className="container m-auto overflow-hidden">
        <div
          className="bg-cover bg-no-repeat rounded container-fluid h-96 h-100"
          style={{ backgroundImage: `url(${heroIMAGE})` }}
        >
          <p className="text-center pl-5 pt-40 pb-3"> </p>
          <h2 className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text text-1xl text-center text-5xl font-bold mb-3 pb-3">
            Products Cart
          </h2>
        </div>
        <div className="container m-auto p-3 flex items-center ">
          <Link to="/">
            <h3 className="text-gray-400">
              Go Back to : 
              <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
                 Home
              </span>
            </h3>
          </Link>
          <Link to="/products">
            <h3 className="ml-5">
              <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
                Shop
              </span>
            </h3>
          </Link>
        </div>
        <div>
          <h3 className="text-center text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-3xl">
            My Products
          </h3>
          <div className="flex justify-between">
            <h3 className=" text-gray-400 text-center  w-40 border rounded p-2 ml-3 mt-2">
              Items in Cart :
              <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
                {products.length}
              </span>
            </h3>
            <h3 className=" text-gray-400 text-center font-bold mr-3 w-40 border rounded p-2 ml-3 mt-2">
              
              Total :
              <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
                ${totalPrice.toFixed(2)}{" "}
              </span>
            </h3>
          </div>
        </div>
        {products.length === 0 ? (
          <div className="text-center text-gray-400 text-2xl mt-5 border border-orange-500 p-3 m-3 rounded">
            Your cart is empty
            <br />
            <button
              onClick={navigateToShop}
              className="text-white text-sm bg-orange-500 hover:bg-orange-600 rounded hover:text-white p-2 mt-3 transition duration-300 hover:rounded"
            >
              Visit shop
            </button>
          </div>
        ) : (
          <div className=" border border-orange-500 p-1 rounded mt-3 m-1">
            {products.map((product, index) => (
              <div
                key={index}
                className=" grid grid-cols-5  mb-1 sm:grid-cols-5 gap-4  rounded border p-1 "
              >
                <div className="grid-cols-1">
                  <img
                    className="w-14 mt-4 sm: col-span-1 rounded m-auto"
                    src={product.imageUrl}
                    alt="Product"
                  />
                </div>
                <h5 className="text-gray-400 text-center mt-2 font-bold">
                  Name:
                  <br />
                  <span className=" text-center mt-5 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
                    {product.title}
                  </span>
                </h5>
                <p className="text-gray-400  font-bold text-center mt-2 ">
                  Price:
                  <br />
                  <span className="text-center mt-5 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
                    $ {product.price}
                  </span>
                </p>
                <div>
                  <p className="text-gray-400 font-bold mr-2 text-center mt-2">
                    Quantity:
                  </p>
                  <div className="flex justify-center items-center mt-2">
                    <button
                      className="bg-orange-400  rounded text-white text-xs pb-1 px-2  hover:bg-orange-600"
                      onClick={() =>
                        updateProductQuantity(product.id, product.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold mx-2">
                      {product.quantity}
                    </span>
                    <button
                      className="bg-orange-500  rounded text-white text-xs pb-1 px-2  hover:bg-orange-600"
                      onClick={() =>
                        updateProductQuantity(product.id, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                 {/* Pass product.id to removeProduct */}
                <div className="flex justify-center items-center">
                  <button
                    className="bg-orange-500  rounded text-white hover:bg-orange-600 w-16"
                    onClick={() => removeProduct(product.id)}
                  >
                    Remove
                  </button>
              
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-col justify-end mt-3 w-60 ml-auto ">
          <div className="rounded border m-3">
            <p className="text-center text-gray-400 font-bold">
              Total Price:{" "}
              <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text text-2xl font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </p>
            <div className="m-auto">
              <button
                onClick={navigateToNotFound}
                className="bg-orange-500 mt-1 ml-1 mb-2 w-52 rounded text-white hover:bg-orange-600"
              >
                Proceed to Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}