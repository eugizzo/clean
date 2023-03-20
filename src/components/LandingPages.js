import React from 'react'
import './landingPages.css'
import Header from '../layout/Header'
import image from '../components/images/intro-system.4eead058de03f8a73a16.png'
// import Section from './Section'
import doted_image from '../components/images/intro-dotted.png'
import feature from '../components/images/feature.png'


const LandingPages = () => {

  return (
    <div >
      <Header className="absolute z-20" />
      <div className="-mt-[20px] line-dotted "  >
        <img className='' src={doted_image} />
        <div className='flex flex-wrap justify-center '><h1 className=' mt-[120px] text-[60px] -mt-2  font-nunito  '>AI & IOT </h1><h1 className=' lg:mt-[120px] text-[60px] -mt-2 pl-4 font-nunito' > empowered,</h1></div>
        <div className='flex flex-wrap justify-center '> <h1 className=' text-[60px]  -mt-2 text-[#05C605] font-nunito '> Smart waste </h1><h1 className=' text-[60px]  -mt-4 pl-4 font-nunito ' >Collection </h1></div>
      </div>
      <div className='flex justify-center '>
        <img src={image} className="w-[1000px]  mt-32 -sm:mt-2 absolute rounded-[20px] z-10" />
      </div>
      <div class="location mt-[530px]" id="zone">
        <div class="container">


          <div className='absolute w-full left-0 right-0  z-0 h-50 bg-no-repeat bg-cover from-gray-600' >
            <h1 className='flex justify-center -mt-2  text-4xl'>Regions Covered</h1>
            <span className='text-[#05C605] flex justify-center text-4xl '>Summary</span>
            <br />
            <p className='flex justify-center text-gray-600 m-2 mb-16'>Various regions covered below have been equiped with an AI & <br />
              IoT empowered waste gathering and collection monitoring<br />
              system, to enable a world class timely waste management process</p>

          </div>
          <div className='flex justify-center'>
            <div className='flex lg:flex-no-wrap sm:flex-wrap'>
              <ul className='pt-[230px]'>

                <li>
                  <i class="fa fa-thumb-tack"></i>
                  <span className='locations'>Muhima</span>
                  <span className='site-counter text-[#05C605]'>2 site(s)</span>
                </li>
                <li>
                  <i class="fa fa-thumb-tack"></i>
                  <span className='locations'>Muhima</span>
                  <span className='site-counter text-green-400'>2 site(s)</span>
                </li>

                <li className='flex flex-wrap'>
                  <i className='bx bxs-pin'></i>
                  <span className='locations'>Muhima</span>
                  <span className='site-counter text-[#05C605]'>2 site(s)</span>
                </li>
                <li className='flex flex-wrap'>
                  <i class="fa fa-user " aria-hidden="true"></i>
                  <span className='locations'>Muhima</span>
                  <span className='site-counter text-[#05C605]'>2 site(s)</span>
                </li>

              </ul>

            </div>

          </div>
          <div className='available'>
            <a href='' className='pt-12 flex justify-center '>5 Available Zones</a>
          </div>
        </div>
      </div>

      <div className='bg-white -mt-[300px] h-[400px]' id="Features">
        <div className='lg:flex  justify-around -mt-[60px] '>
          <div className='lg:w-1/2 feature features  mt-[30px] lg:ml-[100px] ml-[40px] m-8  '><img src={feature} />
          </div>
          <div className='lg:w-1/2'>

            <h1 className='flex-no-wrap text-4xl lg:mt-[140px] mt-[30px] ml-[40px] lg:ml-[10px]  '>Features <span className='text-[#05C605]'>Covered</span></h1>

            <p className='ml-[40px] lg:ml-[10px] mt-5 mr-[60px]'>
              CleanKigali enables the city of kigali to automatically monitor and 
              predict wast levels and collect them ontime using artificial intelligence and internet of things, the main features are:
            </p>

            <ul className='ml-[40px] lg:ml-[10px] mt-3'>
            <i class="fa fa-check text-green" aria-hidden="true"></i>
              <li className='mt-4 font-bold text-sm'>Monitoring of Waste Levels</li>
              <li className='mt-4 font-bold text-sm'>Automatically Scheduled Waste Collection</li>
              <li className='mt-4 font-bold text-sm'>Waste gathering and collection analytics</li>
              <li className='mt-4 font-bold text-sm'>Real time map based insights </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPages
