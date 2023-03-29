import React, {useState} from 'react'
import Header from '../layout/Header'
import { FaEyeSlash,FaEye } from "react-icons/fa";
import Carousel from './HomeCarousel';
import HomeCarousel from './HomeCarousel';

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
     <Header className="" />


     <div className='container'>
       <div className='lg:flex'>
       <div className='lg:w-1/6'></div>
         <div className='lg:w-2/6 mt-52 mr-20'>
         <HomeCarousel />
         </div>
         <div className='lg:w-3/6 mr-20 '>
           <form onClick={onSubmit} class="bg-white shadow-md rounded-2xl  mt-52 px-8 pt-6 pb-8 mb-4">
             <h2 className='text-sm mt-2 mb-2 '>login</h2>
               
            
             <div class="mb-4">
               
               <input class="bg-[#fafbfd] form-control hover:border-green-500 hover:border-2" id="email" type="text" placeholder='Email Address or phone number' />
             </div>
             <div class="input-group mb-4 bg-[#e8f0fe] focus:border-green-500 border hover:border-2 flex justify-between  py-2">
               <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="border-none outline-none bg-[#e8f0fe] ml-2" placeholder="Password" />
                    
                     <button className="mr-4 " onClick={togglePassword}>
                     { passwordType==="password"? <FaEyeSlash/> :<FaEye/> }
                     </button>
             </div>
             <div class="">
               <button class=" w-full bg-[#05C605] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                 Login
               </button>
               <div className='flex'>
               <h6 className='mt-4 ml-20'>Can't login?</h6>
               <h6 className='mt-4  pl-4 pr-4'>-</h6>
               <h6 className=' mt-4 text-[#05C605]'>Login as SuperAdmin</h6>
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
