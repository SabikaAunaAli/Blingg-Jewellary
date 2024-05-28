import React, { useContext, useEffect, useState } from 'react'
import myContext from './context/data/MyContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from './store/cartslice';
import { fireDB } from '../fireabase/FirebaseConfig';
import { Link } from 'react-router-dom';
import Review from './description/Review';

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [products, setProducts] = useState('')
    const params = useParams()
    // console.log(products.title)

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id))

            setProducts(productTemp.data());
            // console.log(productTemp.data())
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getProductData()

    }, [])



    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    // console.log(cartItems)

    // add to cart
    const addCart = (products) => {
        dispatch(addToCart(products))
        toast.success('add to cart', {
            position: "top-right",
            autoClose: 700,
           
        }

        );
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])




    return (
        <>
            <section className="container py-5  m-auto rounded">

                {products &&
                    <div className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 py-7">

                        <div className="overflow-hidden mx-10 ">

                            <img
                                alt="ecommerce"
                                className="w-full h-full cursor-pointer rounded hover:scale-125 overflow-hidden hover:rounded transition-all ease-in-out duration-300"
                                src={products.imageUrl}
                            />
                        </div>
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

                            <h2 className="ml-5 mt-3 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-3xl">

                                {products.title}
                            </h2>

                            <h2 className="text-transparent  bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold ml-5 mt-2 text-4xl pb-2">

                                ${products.price}
                            </h2>
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
                            <button onClick={() => addCart(products)} className="flex ml-5 mt-3 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                                Add To Cart
                            </button>
                            <hr className="mt-3" />

                        </div >



                    </div>}

                <div className="container m-auto">
                    <h3 className="ml-5 mt-5 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-3xl">
                        Product Description
                    </h3>
                    <p className="mt-5 mx-5 text-gray-400">
                        Nullam dapibus metus lacinia, vestibulum arcu vitae, fringilla
                        elit. Maecenas pellentesque justo a bibendum eleifend. Nunc metus
                        metus, bibendum at quam eget, congue fermentum diam. Cras rhoncus
                        ex a neque dictum pellentesque. Cras et placerat est, et feugiat
                        diam. Aliquam nec odio quis nibh fringilla euismod.
                    </p>
                    <hr className="mt-3" />
                </div>

                <div className='mx-10'>
                <Review />
                </div>
               

            </section >

        </>
    )
}

export default ProductInfo