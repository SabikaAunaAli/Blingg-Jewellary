import React, { useContext } from 'react'
import {FaUserTie } from 'react-icons/fa';
import myContext from '../../context/data/MyContext';
import DashboardTab from './DashboardTab';
import { MdBorderColor } from "react-icons/md";
import { FaShop } from "react-icons/fa6";

function Dashboard() {
    const context = useContext(myContext)
    const { mode, product, order, user } = context
  return (
    <>
    {/* // <Layout> */}
        <section className="text-gray-600 body-font mt-10 mb-10">
            <div className="container px-5 mx-auto mb-10">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className=" border rounded border-gray-500 m-5 p-3  hover:bg-yellow-100 hover:shadow-black shadow-[offset_0_0_10px_rgba(0,0,0,0.6)] hover:scale-105 transition-colors ease-in-out" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                < FaShop size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{product.length}</h2>
                            <p className=" text-orange-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Products</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className=" border rounded border-gray-500 m-5 p-3  hover:bg-yellow-100 hover:shadow-black shadow-[offset_0_0_10px_rgba(0,0,0,0.6)] hover:scale-105 transition-colors ease-in-out" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                         color: mode === 'dark' ? 'white' : '', }}>
                            <div className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                < MdBorderColor size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{order.length}</h2>
                            <p className=" text-orange-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Orders</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border rounded border-gray-500 m-5 p-3  hover:bg-yellow-100 hover:shadow-black shadow-[offset_0_0_10px_rgba(0,0,0,0.6)] hover:scale-105 transition-colors ease-in-out" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{user.length}</h2>
                            <p className=" text-orange-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Users</p>
                        </div>
                    </div>
                 
                </div>
            </div>
            <DashboardTab/>
        </section>
    {/* </Layout> */}
    </>
  )
}

export default Dashboard