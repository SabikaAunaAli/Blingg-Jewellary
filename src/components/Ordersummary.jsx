import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  // Use useLocation hook to access route state
  const location = useLocation();
  const formData = location.state;

  // Get the order details from the Redux store
  const products = useSelector((state) => state.cart);

  // Calculate total price
  let totalPrice = 0;
  if (products.length > 0) {
    totalPrice = products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  // Naivigate to Home Page
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const homePage = () => {
    setShowAlert(true);
    navigate("/");
    window.location.reload();
  };

  // Check if formData exists before accessing its properties
  const firstName = formData ? formData.firstName : "";
  const lastName = formData ? formData.lastName : "";
  const address = formData ? formData.address : "";
  const city = formData ? formData.city : "";
  const zip = formData ? formData.zip : "";

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="max-w-md mx-auto mt-10 shadow shadow-slate-300 rounded p-10">
          <h2 className="text-center text-2xl  mb-4 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
            Order Summary
          </h2>
          <div className="mb-4">
            <p className="text-lg text-gray-400 font-semibold mb-2">Customer Information:</p>
            <p className="text-gray-400 font-semibold">
              
              Name:{" "}
              <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
                {firstName} {lastName}{" "}
              </span>{" "}
            </p>
            <p className="text-gray-400 font-semibold">
              Address:{" "}
              <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
                {address}, {city}, {zip}{" "}
              </span>
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold mb-2 text-gray-400">Total Amount:</p>
            <p className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          {showAlert && (
            <div
              className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
              role="alert"
            >
              <p className="font-bold">Success:</p>
              <p>Order has been placed successfully!</p>
            </div>
          )}
          <button
            onClick={homePage}
            className="border rounded bg-orange-500 hover:bg-orange-600 text-white text-xs m-auto p-1"
          >
            Home
          </button>
        </div>
      </div>
    </>
  );
}
