import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateQuantity } from "./store/cartslice";

export default function Checkout() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate("/products");
  };

  // Initialize formData with default values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (products.length === 0) {
      alert("No Items Added were added to cart!");
      navigate("/products");
    } else {
      // form submission logic here
      alert("Order placed!");

      navigate("/ordersummary", { state: formData });
    }
  };

  // Function to update quantity
  const updateProductQuantity = (productId, newQuantity) => {
    // newQuantity is not less than 1
    newQuantity = Math.max(newQuantity, 1);
    dispatch(updateQuantity({ productId, newQuantity }));
  };

  // Calculate total price
  let totalPrice = 0;
  if (products.length > 0) {
    totalPrice = products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  return (
    <>
      <div className="container m-auto mt-10">
        <h2 className="text-center mt-3 mb-4 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text text-2xl font-bold">
          Proceed to Checkout
        </h2>
        <div className="flex justify-between">
          <h3 className=" text-gray-400 font-bold text-center  w-40 border rounded p-2 ml-3 mt-2">
            Items in Cart :
            <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
              {products.length}
            </span>
          </h3>
          <h3 className=" text-gray-400 font-bold text-center mr-3 w-40 border rounded p-2 ml-3 mt-2">
            
            Total :
            <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
              ${totalPrice.toFixed(2)}
            </span>
          </h3>
        </div>
        <div>
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
            <div className="border border-orange-500 p-1 rounded mt-3 m-1">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4  mb-1 sm:grid-cols-4 gap-4 rounded border p-1"
                >
                  <div className="grid-cols-1">
                    <img
                      className="w-14 sm: col-span-1 rounded m-auto"
                      src={product.imageUrl}
                      alt="Product"
                    />
                  </div>
                  <h5 className="text-gray-400 font-bold text-center mt-2">
                    Name: <br />
                    <span className="text-center mt-5 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold">
                      {product.tittle}
                    </span>
                  </h5>
                  <p className="text-gray-400 font-bold text-center mt-2 ">
                    Price: <br />
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
                        className="bg-orange-500 rounded text-white text-xs pb-1 px-2 hover:bg-orange-600"
                        onClick={() =>
                          updateProductQuantity(
                            product.id,
                            product.quantity - 1
                          )
                        }
                      >
                        -
                      </button>
                      <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold mx-2">
                        {product.quantity}
                      </span>
                      <button
                        className="bg-orange-500 rounded text-white text-xs pb-1 px-2 hover:bg-orange-600"
                        onClick={() =>
                          updateProductQuantity(
                            product.id,
                            product.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mx-auto mt-10 shadow shadow-slate-300 rounded p-10">
          <p className="text-center text-gray-400 font-semibold">
            Total Price:{" "}
            <span className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text text-2xl font-bold">
              ${totalPrice.toFixed(2)}
            </span>
          </p>
          <h2 className="text-center text-2xl mt-3 mb-4 text-gray-400 font-bold">
            Checkout
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4"></div>
            <div className="mb-4">
              <p className=" mb-2 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text text-2xl font-bold">
                Delivery Address:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="col-span-2 p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="col-span-2 p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP Code"
                  value={formData.zip}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <p className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text text-2xl font-bold mb-2">
                Payment Method:
              </p>
              <p className="font-bold text-gray-400">Cash on Delivery</p>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-300 hover:text-black transition-all ease-in-out cursor-pointer text-white font-semibold py-2 px-4 rounded-md"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
