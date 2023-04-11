import React from 'react'
import { FaTwitter ,FaYoutube ,FaFlickr} from "react-icons/fa";

const footer = () => {
  return (
    <div className='lg:flex justify-between bg-[#011401] py-3'>
     <div className=' lg:ml-[70px] lg:ml-[70px] ml-[120px] '><h4 className='text-white'>© 2023 All right reserved</h4></div> 
     <div  className='text-white flex ml-[140px] lg:mt-0 mt-12'>
     <FaTwitter href='' className='text-[#05C605] text-xl' />
     <FaYoutube className='text-[#05C605] text-xl ml-4' />
     <FaFlickr className='text-[#05C605] text-xl ml-4'/>
     
     
     </div> 
     <div className='lg:mr-[70px] ml-[120px] lg:mt-0 mt-12'><h4 className='text-white'>Powered by <span className='text-[#05C605]'>Huza</span>Labs</h4></div> 
    </div>
  )
}

export default footer
