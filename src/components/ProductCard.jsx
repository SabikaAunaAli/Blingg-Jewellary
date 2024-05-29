import React, { useContext, useEffect } from 'react'
import myContext from './context/data/MyContext'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart, deleteFromCart } from './store/cartslice'
import {  useNavigate } from 'react-router-dom'

function ProductCard() {
    const context = useContext(myContext)
    let navigate = useNavigate();
    const { mode, product, searchkey, filterType,
        filterPrice } = context;

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    console.log(cartItems)

    // add to cart
    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success('add to cart',
        {
            autoClose: 800
          }
        );
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])







    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class=" w-full mb-6 lg:mb-10">
                    <h3 className=" mt-3 text-center text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold  text-4xl">

                        Our Latest Collection
                    </h3>



                </div>

                <div className="flex flex-wrap -m-4">
                    {product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
                        .filter((obj) => obj.category.toLowerCase().includes(filterType))
                         .filter((obj) => obj.price.includes(filterPrice)).slice(0, 8).map((item, index) => {
                            const { title, price, description, category, imageUrl } = item;
                            return (
                                <div onClick={() => navigate = `/productinfo/${item.id}`} className="p-4 md:w-1/4  drop-shadow-lg " >
                                    <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                        <div className="flex justify-center cursor-pointer" >
                                            <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={imageUrl} alt="blog" />
                                        </div>
                                        <div className="p-5 border-t-2">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>BlingJewellary</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{category}</h1>

                                            {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                            <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>$ {price}</p>
                                            <div className=" flex justify-center">
                                                <button onClick={() => addCart(item)} type="button" className="focus:outline-none text-white hover:bg-orange-600 bg-orange-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                </div>

            </div>
        </section >

    )
}

export default ProductCard