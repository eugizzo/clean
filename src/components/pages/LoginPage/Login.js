import React, {useState} from 'react'
import LoginHeader from '../../../layout/LoginHeader'
import { FaEyeSlash,FaEye } from "react-icons/fa";
import HomeCarousel from './HomeCarousel';
import '../../../layout/header.css'
import { Link } from 'react-router-dom';

const Login = () => {


    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

    const onSubmit =(event)=>{
    event.preventDefault()
    }


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
             <h2 className='text-sm mt-2 mb-2 '>login</h2>
               
            
             <div class="mb-4">
               
               <input class="bg-[#fafbfd] form-control hover:border-green-500 hover:border-2" id="email" type="text" placeholder='Email Address or phone number' />
             </div>
             <div class="input-group mb-4 bg-[#fafbfd] rounded focus:border-green-500 border hover:border-2 flex justify-between  py-2">
               <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="border-none outline-none bg-[#fafbfd] ml-2" placeholder="Password" />
                    
                     <button className="mr-4 " onClick={togglePassword}>
                     { passwordType==="password"? <FaEyeSlash/> :<FaEye/> }
                     </button>
             </div>
             <div class="">
               <Link to="/home/waste_map"><button class=" w-full bg-[#05C605] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                 Login
               </button></Link>
               <div className='flex justify-around'>
               <h6 className='mt-4 ml-8'>Can't login?</h6>
               <h6 className='mt-4  '>-</h6>
               <Link to='/SuperAdmin'><h6 className=' mt-4 text-[#05C605]'>Login as SuperAdmin</h6></Link>
               </div>
             </div>
           </form>

         </div>


       </div>

     </div>



     
    </div>
  )
}

export default Login