import React from 'react'
import './landingPages.css'
import Header from '../../../layout/Header'
import image from '../../images/intro-system.4eead058de03f8a73a16.png'
import Section from './Section'
import doted_image from './intro-dotted.png'


const LandingPages = () => {

 

  return (
    <div >
      <Header className="absolute z-50"/>
      <div className="-mt-[20px] line-dotted"  >
      <img className='' src={doted_image}/>
        <div className='flex flex-wrap justify-center '><h1 className='mt-[120px] md:ml-4 text-[60px]  -mt-2 font-nunito  '>AI & IOT </h1><h1 className=' mt-[120px] text-[60px] -mt-2 pl-4 font-nunito' > empowered,</h1></div>
        <div className='flex flex-wrap justify-center '> <h1 className=' text-[60px]  -mt-2 text-[#05C605]'> Smart waste </h1><h1 className=' text-[60px]  -mt-4 pl-4' >Collection </h1></div>
      </div>
      <div className='flex justify-center '>
        <img src={image} className="w-[1000px] sm:w-[1000px] mt-32 -sm:mt-2 absolute rounded-[20px] z-10" />
      </div>
      <Section />
    </div>
  )
}

export default LandingPages
