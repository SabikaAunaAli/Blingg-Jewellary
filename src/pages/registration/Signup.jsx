

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import myContext from '../../components/context/data/MyContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import heroImage from "../../assets/hero.jpg";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const signup = async () => {
        setLoading(true);
        if (name === "" || email === ""  || password === "") {
            return toast.error("All fields are required"
                ,   {
                    autoClose: 800
                  }
            )
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            // console.log(users)

            const user = {
                name: name,
            
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now()

            }
            const userRef = collection(fireDB, "users")
            await addDoc(userRef, user);
            toast.success("Signup Succesfully",   {
                autoClose: 800
              })
            setTimeout(() => {
                window.location.href = '/login'
            }, 400);
            setName("");
            setEmail("");
           
            setPassword("");
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div className=" flex justify-center items-center h-screen overflow-hidden font-sans bg-cover object-cover container-fluid"
        style={{ backgroundImage: `url(${heroImage})` }}>
            {loading && <Loader />}
            <div className=' bg-gray-700 overflow-hidden  px-10 py-10 rounded-xl '>
            <h1   data-aos="slide-right" data-aos-duration="1500" 
                   className=" text-center text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-4xl mb-5">
          {" "}
          Blingg Jwellery <br />SENSATION 
        </h1>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div>

                <div>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>

        
       


                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={signup}
                        className=' bg-orange-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-orange-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup