import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../components/context/data/MyContext'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';
import heroImage from "../../assets/hero.jpg";

function Login() {
    const context = useContext(myContext)
    const {loading, setLoading} = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth,email,password);
            toast.success("Login successful", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setLoading(loading)
            toast.error("Invalid User or password")
        }

    }
   
    return (
       
              <div className=" flex justify-center items-center h-screen overflow-hidden font-sans bg-cover object-cover container-fluid"
      style={{ backgroundImage: `url(${heroImage})` }}>
            {loading && <Loader/>}
        

            <div className=' bg-gray-700 overflow-hidden  px-10 py-10 rounded-xl '>
            <h1   data-aos="slide-right" data-aos-duration="1500" 
                   className=" text-center text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-4xl mb-5">
          {" "}
          Blingg Jewellery <br />SENSATION 
        </h1>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>

                <div className="">
                    <h3 className='text-center text-grey text-lg mb-4 font-bold'>For Admin Access: </h3>
                        <p>email: storeadmin@gmail.com</p>
                    <p>password: 123456</p>
                </div>

                
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={login}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login
