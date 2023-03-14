import React from 'react'
import './landingPages.css'
import Header from '../layout/Header'
import image from '../components/images/intro-system.4eead058de03f8a73a16.png'
// import Section from './Section'
import doted_image from '../components/images/intro-dotted.png'


const LandingPages = () => {



  return (
    <div >
      <Header className="absolute z-20" />
      <div className="-mt-[20px] line-dotted "  >
        <img className='' src={doted_image} />
        <div className='flex flex-wrap justify-center '><h1 className=' mt-[120px] text-[60px] -mt-2  font-nunito  '>AI & IOT </h1><h1 className=' lg:mt-[120px] text-[60px] -mt-2 pl-4 font-nunito' > empowered,</h1></div>
        <div className='flex flex-wrap justify-center '> <h1 className=' text-[60px]  -mt-2 text-[#05C605] font-nunito '> Smart waste </h1><h1 className=' text-[60px]  -mt-4 pl-4 font-nunito ' >Collection </h1></div>
      </div>
      <div className='flex justify-center  '>
        <img src={image} className="w-[1000px]  mt-32 -sm:mt-2 absolute rounded-[20px] z-10" />
      </div>
      <div class="location mt-[530px]">
        <div class="container">


          <div className='absolute w-full left-0 right-0  z-0 h-50 bg-no-repeat bg-cover from-gray-600' >
            <h1 className='flex justify-center -mt-2  text-4xl'>Regions Covered</h1>
            <span className='text-[#05C605] flex justify-center text-4xl '>Summary</span>
            <br />
            <p className='flex justify-center text-gray-600 mb-16'>Various regions covered below have been equiped with an AI & <br />
              IoT empowered waste gathering and collection monitoring<br />
              system, to enable a world class timely waste management process</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPages
