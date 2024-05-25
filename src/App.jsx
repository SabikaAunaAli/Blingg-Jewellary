import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Rings from "./components/popularproducts/rings/Rings";
import Brace from "./components/popularproducts/bracelets/Brace.jsx";
import Earings from "./components/popularproducts/earings/Earings.jsx";
import Necklace from "./components/popularproducts/necklace/Necklace.jsx";
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Product from "./components/Product.jsx";
import Desc from "./components/description/Desc.jsx";
import Pagenotfound from "./components/Pagenotfound.jsx";
import { Provider } from "react-redux";
import store from "./components/store/store.js";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Ordersummary from "./components/Ordersummary.jsx";
import Mystate from "./components/context/data/Mystate.jsx";
import Login from "./pages/registration/Login.jsx";
import Signup from "./pages/registration/Signup.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Dashboard from "./components/admin/dashboard/Dashboard.jsx";
import AddProduct from "./components/admin/pages/AddProduct.jsx";
import UpdateProduct from "./components/admin/pages/UpdateProduct.jsx";
import Order from "./components/Order.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import Allproducts from "./components/AllProducts.jsx";
import Cart2 from "./components/Cart2.jsx";


function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>

      <Mystate>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="rings" element={<Rings />} />
              <Route path="brace" element={<Brace />} />
              <Route path="earings" element={<Earings />} />
              <Route path="necklace" element={<Necklace />} />
              <Route path="/allproducts" element={<Allproducts />} />
              <Route path="/products" element={<Product />} />
              <Route path="desc/:productId" element={<Desc />} />
              <Route path='/productinfo/:id' element={<ProductInfo />} />
              <Route path="cart" element={

                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              } />

              <Route path="cart2" element={

                <ProtectedRoute>
                  <Cart2 />
                </ProtectedRoute>
              } />
              <Route path="checkout" element={<Checkout />} />
              <Route path="ordersummary" element={
                <ProtectedRoute>
                  <Ordersummary />
                </ProtectedRoute>
              } />
              <Route path="order" element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              } />
              <Route path="/dashboard" element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              } />

              <Route path="*" element={<Pagenotfound />} />

            </Route>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path="/addproduct" element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>} />
            <Route path="/updateproduct" element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>} />
          </Routes>
        </Provider>
        <ToastContainer />
      </Mystate>


    </div>
  );
}

export default App;

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  } else {
    return <Navigate to={'/singup'} />
  }
}

// admin 

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))

  if (admin.user.email === 'storeadmin@gmail.com') {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }

}