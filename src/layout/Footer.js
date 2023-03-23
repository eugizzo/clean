import React from 'react'
import { FaTwitter ,FaYoutube ,FaFlickr ,FaCheckCircle} from "react-icons/fa";

const footer = () => {
  return (
    <div className='lg:flex justify-between bg-[#011401] py-3'>
     <div className='text-white lg:ml-[70px]'><h4>© 2023 All right reserved</h4></div> 
     <div  className='text-white flex justify-around'>
     <FaTwitter href='' className='text-[#05C605] text-xl' />
     <FaYoutube className='text-[#05C605] text-xl ml-4' />
     <FaFlickr className='text-[#05C605] text-xl ml-4'/>
     
     
     </div> 
     <div className='lg:mr-[70px]'><h4 className='text-white'>Powered by <span className='text-[#05C605]'>Huza</span>Labs</h4></div> 
    </div>
  )
}

export default footer
