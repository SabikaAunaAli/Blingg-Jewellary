import React, { useState } from "react";
import { Link } from "react-router-dom";
import Review from "./Review";
import { useParams } from "react-router-dom";
import allproducts from "./desc.js";
import { add } from "../store/cartslice.js";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../store/cartslice"; // Add this import

export default function Desc() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const containerRef = useRef(null); // Ref for the container element

  // get the product based on productId and its category
  const allProductsArray = Object.values(allproducts).flat();

  const item = allProductsArray.find((p) => p.id === parseInt(productId));

  const addProductToCart = (productItem) => {
    dispatch(add(productItem));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // message hidden after two seconds

    // Scroll to the top of the component's container
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {item && (
        <div className="container pt-5 m-auto rounded" ref={containerRef}>
          {showMessage && (
            <div className="bg-green-500 mt-3 text-white rounded text-center py-2 mb-4">
              Product added to cart successfully!
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {/* image div */}
            <div className="container p-4 mt-1 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  className="w-full h-full cursor-pointer rounded hover:scale-105 hover:rounded transition-all duration-300"
                  src={item.imageUrl}
                  alt="img"
                />
              </div>
            </div>
            {/* description div */}
            <div>
              <h3 className="text-gray-400 mt-5 ml-5">
                Go to{" "}
                <span className="text-orange-500 cursor-pointer">
                  <Link to="/"> Home </Link>{" "}
                </span>{" "}
              </h3>
              <h3 className="text-gray-400 mt-5 ml-5">
                {" "}
                Category --{" "}
                <span className="text-orange-500 cursor-pointer">
                  {" "}
                  <Link to="/products"> All Products </Link>{" "}
                </span>
              </h3>

              <div>
                <h2 className="ml-5 mt-3 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-3xl">
                  {item.title}
                </h2>
                <h2 className="text-transparent  bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold ml-5 mt-2 text-4xl pb-2">
                  {item.price ? `$ ${item.price}` : "Price not available"}
                </h2>
              </div>

              <p className="ml-5 mt-3 text-gray-400 font-bold mb-2">
                Ut non elit lorem. Duis pharetra odio vitae nisl luctus, at
                volutpat arcu lacinia. Aliquam id ullamcorper augue. Fusce
                feugiat nibh et nisl mollis hendrerit. Mauris sit amet nulla in
                augue laoreet lobortis ac eleifend nunc. Quisque eleifend
                sollicitudin nulla, et consequat eros. Donec pellentesque
                dapibus massa ut cursus. Quisque ut augue eu dui semper
                eleifend. Aliquam imperdiet nisl libero, vitae vulputate lectus
                fringilla eget.
              </p>

              <button
                onClick={() => addProductToCart(item)}
                className="ml-5 mt-3 text-white bg-orange-500 hover:bg-orange-600 rounded hover:text-white p-3 mb-5 transition duration-300 hover:rounded"
              >
                Add To Cart
              </button>

              <hr />
            </div>
          </div>
          {/* description div */}
          <div className="container m-auto">
            <h3 className="ml-5 mt-5 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-3xl">
              Product Description
            </h3>
            <p className="ml-5 mt-5 text-gray-400">
              Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla
              elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus
              metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus
              ex a neque dictum pellentesque. Cras et placerat est, et feugiat
              diam. Aliquam nec odio quis nibh fringilla euismod.
            </p>
            <hr className="mt-3" />
          </div>
          {/* Review Div */}

          <Review />
        </div>
      )}
    </>
  );
}
