import React, { useState,useEffect } from 'react'
import LoginHeader from '../../../layout/LoginHeader'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import HomeCarousel from './HomeCarousel';
import '../../../layout/header.css'
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import axios from "axios"
const AdminLogin = () => {

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const onSubmit = (event) => {
        event.preventDefault()
    }


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Make the login request to the API
      axios
        .post('https://cleankigaliapi.huzalabs.com/api/cleankigali/authentication_user', { email, password })
        .then((response) => {
          // Handle successful login
          console.log(response.data);
          const { token } = response.data;
          setToken(token);
          navigate('./home/waste_map')
        })
        .catch((error) => {
          // Handle login error
          console.log(error);
          // Display error message or perform necessary actions
        });
    };
  
    useEffect(() => {
      if (token) {
        localStorage.setItem('token', token);   
      }
    }, [token]);

    return (

        <div>
            <LoginHeader className="" />

            <div className='container overflow-auto'>
                <div className='lg:flex'>
                    <div className='lg:w-1/6'></div>
                    <div className='lg:w-2/6 lg:mt-44 mt-20 lg:mr-20 m-12 flex justify-center'>
                        <HomeCarousel />
                    </div>
                    <div className='lg:w-3/6 lg:mr-52 '>
                        <form onClick={onSubmit} class="bg-white shadow-md rounded-2xl  lg:mt-44  mt-8 px-8 pt-6 pb-8 mb-4">
                            <h2 className='text-sm mt-2 mb-2 '>Login as SuperAdmin</h2>


                            <div class="mb-4">

                                <input 
                                class="bg-[#fafbfd] form-control hover:border-green-500 hover:border-2" 
                                id="email" 
                                type="text" 
                                placeholder='Email Address or phone number' 
                                value={email} onChange={handleEmailChange}
                                />
                            </div>
                            <div class="input-group mb-4 bg-[#fafbfd] rounded focus:border-green-500 border hover:border-2 flex justify-between  py-2">
                                <input 
                                type={passwordType} 
                                onChange={handlePasswordChange} 
                                value={password} 
                                name="password" 
                                class="border-none outline-none bg-[#fafbfd] ml-2" 
                                placeholder="Password" />

                                <button className="mr-4 " onClick={togglePassword}>
                                    {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <div class="">
                            <Link to="/home/waste_map"> <button class=" w-full bg-[#05C605] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Login
                                </button></Link>
                                <div className='flex justify-around'>
                                    <h6 className='mt-4 ml-8'>Can't login?</h6>
                                    <h6 className='mt-4  '>-</h6>
                                    <Link to='/login'> <h6 className='mt-4 text-[#05C605]'>Login as User</h6></Link>
                                </div>
                            </div>
                        </form>

                    </div>


                </div>

            </div>


        </div>
    )
}

export default AdminLogin





