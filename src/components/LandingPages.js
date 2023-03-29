import React from 'react'
import './landingPages.css'

import Footer from '../layout/Footer'
import image from '../components/images/intro-system.4eead058de03f8a73a16.png'
// import Section from './Section'
import doted_image from '../components/images/intro-dotted.png'
import feature from '../components/images/feature.png'
import phone from '../components/images/phone-mockups.png'
import google from '../components/images/app (3).png'
import app from '../components/images/app.png'
import risa from '../components/images/parterner/RISA.18041d1b569c9e286600.png'
import minict from '../components/images/parterner/minict.a9d9d3eb77ad0479f7c7.png'
import giz from './images/parterner/GIZ.525d1f85f4b5d2aad826.png'
import digicenter from './images/parterner/digicenter.be983b7aa5a854cbc2c1.png'
import cok from './images/parterner/cok.7d04350cfa6e331624cb.png'
import { FaCheckCircle,FaEyeSlash } from "react-icons/fa";
import Header from '../layout/Header'

const LandingPages = () => {
  return (
    <div >
      <div>
      <Header className="" />
      <div className="-mt-[20px] line-dotted " id="home" >
        <img id='home' className='' src={doted_image} />
        <div className='flex flex-wrap justify-center '><h1 className=' mt-[120px] text-[60px] -mt-2  font-nunito  '>AI & IOT </h1><h1 className=' lg:mt-[120px] text-[60px] -mt-2 pl-4 font-nunito' > empowered,</h1></div>
        <div className='flex flex-wrap justify-center '> <h1 className=' text-[60px]  -mt-2 text-[#05C605] font-nunito '> Smart waste </h1><h1 className=' text-[60px]  -mt-4 pl-4 font-nunito ' >Collection </h1></div>
      </div>
      <div className='flex justify-center '>
        <img src={image} className="w-[1000px]  mt-32 -sm:mt-2  rounded-[20px] " />
      </div>
      <div class="location " id="zone">
        <div class="container">

          <div className='w-full  bg-no-repeat bg-cover' >
            <h1 className='flex justify-center -mt-2  text-4xl'>Regions Covered</h1>
            <span className='text-[#05C605] flex justify-center text-4xl '>Summary</span>
            <br />
            <p className='flex justify-center text-gray-600 m-2 mb-16'>Various regions covered below have been equiped with an AI & <br />
              IoT empowered waste gathering and collection monitoring<br />
              system, to enable a world class timely waste management process</p>

          </div>
          <div className='flex justify-center'>
            <div className='flex lg:flex-no-wrap sm:flex-wrap'>
              <ul className=''>

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
                  <i className=''></i>
                  <span className='locations'>Muhima</span>
                  <span className='site-counter text-[#05C605]'>2 site(s)</span>
                </li>
                <li className='flex'>
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

      <div className='bg-white -mt-[300px] ' id="Features">
        <div className='lg:flex  justify-around -mt-[60px] '>
          <div className='lg:w-1/2 feature features  mt-[70px] lg:ml-[100px] ml-[40px]  m-8  '>
            <img src={feature} />
          </div>
          <div className='lg:w-1/2'>

            <h1 className='flex-no-wrap text-4xl lg:mt-[140px] mt-[30px] ml-[40px] lg:ml-[10px]  '>Features <span className='text-[#05C605]'>Covered</span></h1>

            <p className='ml-[40px] lg:ml-[10px] mt-5 mr-[80px]'>
              CleanKigali enables the city of kigali to automatically monitor and
              predict wast levels and collect them ontime using artificial intelligence and internet of things, the main features are:
            </p>

            <ul className='ml-[25px] lg:ml-[0px] mt-3 '>
              <div className='flex'>
                <FaCheckCircle className='text-[#05C605] text-sm ml-4 mr-2 mt-3' />
                <li className=' font-bold text-sm mt-3 '>Monitoring of Waste Levels</li>
              </div>
              <div className='flex'>
                <FaCheckCircle className='text-[#05C605] text-sm ml-4 mr-2 mt-3' />
                <li className='mt-3 font-bold text-sm'>Automatically Scheduled Waste Collection</li>
              </div>
              <div className='flex'>
                <FaCheckCircle className='text-[#05C605] text-sm ml-4 mr-2 mt-3' />
                <li className='mt-3 font-bold text-sm'>Waste gathering and collection analytics</li>
              </div>
              <div className='flex'>
                <FaCheckCircle className='text-[#05C605] text-sm ml-4 mr-2 mt-3' />
                <li className='mt-3 font-bold text-sm '>Real time map based insights </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className='download ' id='Download'>
        <div className='container'>
          <div className='lg:flex download justify-center lg:ml-[100px]  ml-[40px] gap-2'>
            <div className='lg:w-1/2 lg:mt-[100px] '>
              <div className='download-info'>
                <h2 className='text-4xl fill-mode-both duration-1000 delay-0 repeat-1 opacity-100 pb-4'>Smart City
                  <span className='text-[#05C605]'> Waste <br /> collection </span>App</h2>

                <div>
                  <p className=' fill-mode-both duration-3000 delay-0 repeat-1 opacity-100 '>Download the app on Google Play or App Store and start enjoying a world-class AI empowered waste collection management features at the tip of your fingers</p>
                </div>
                <div className='flex pt-8'>
                  <div> <img className='w-[150px]' src={google} /></div>
                  <div> <img className='w-[150px]' src={app} /></div>
                  <div></div>

                </div>
              </div>
            </div>
            <div className='lg:w-1/2'>
              <img src={phone} className='w-[500px] fill-mode-both duration-1000 delay-0 repeat-1 opacity-100' />
            </div>
          </div>

        </div>

      </div>
      <section id='partner'>
        <div className='lg:flex bg-[#fafbfd] '>
        <div className='flex'>
          <div className='lg:w-[380px] w-[190px] bg-white'>
            <h2 className='text-4xl lg:ml-[100px] lg:mr-8 lg:pt-[100px] lg:pb-[60px]'>Partners &
              <br /><span className='text-[#05C605]'>Stakeholders</span></h2>
          </div>
          <div className='lg:w-[150px] w-[70px] bg-[#fafbfd]  lg:ml-12'>
            <img className='w-[180px] lg:pt-[130px] lg:pb-[130px]' src={minict} />
          </div>
          </div>
          <div>
            <div className='lg:w-[150px] bg-[#f7f7f7]  lg:ml-12'>
              <img className='w-[130px] lg:pt-[130px] lg:pb-[130px] ' src={giz} />
            </div>
          </div>
          <div className='lg:w-[150px] bg-[#fafbfd] justify-center lg:ml-12'>
            <img className='w-[80px] lg:pt-[130px] lg:pb-[130px]' src={cok} />
          </div>
          <div className='lg:w-[150px] bg-[#f7f7f7] lg:ml-12'>
            <img className='w-[130px] lg:pt-[130px] lg:pb-[130px]' src={risa} />
          </div>
          <div className='lg:w-[150px]  lg:ml-12'>
            <img className='w-[130px] lg:pt-[130px] lg:pb-[130px]' src={digicenter} />
          </div>
          <div className='lg:w-[150px] bg-white' ></div>



        </div>
      </section>
    
      <section id="ContactUs" className='bg-[#fafbfd] pb-8'>

        <div className='container'>
          <div className='lg:flex'>
            <div className='lg:w-1/3'></div>
            <div className='lg:w-1/3 m-3 '>
              <form class="bg-white shadow-md rounded-2xl  mt-20 px-8 pt-6 pb-8 mb-4">
                <h2 className='text-4xl mt-10 mb-6 '>Get in touch
                  <br />with us</h2>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm  mb-2" for="username">
                    Names: <span className='text-red-500'>*</span>
                  </label>
                  <input class="bg-[#fafbfd] form-control hover:border-green-500 hover:border-2" id="name" type="text" />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm  mb-2" for="email">
                    Email Address:<span className='text-red-500'>*</span>
                  </label>
                  <input class="bg-[#fafbfd] form-control hover:border-green-500 hover:border-2" id="email" type="text" />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm mb-2" for="Message">
                    Message: <span className='text-red-500 hover:border-green-500 hover:border-2'>*</span>
                  </label>
                  <textarea class="bg-[#fafbfd] py-2 form-control" id="Message" type="text" />
                </div>
                <div class="">
                  <button class=" w-full bg-[#05C605]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit
                  </button>

                </div>
              </form>

            </div>


          </div>
          <div className='w-1/3'></div>
        </div>


      </section>
      <section>
        <Footer />

      </section>
    </div></div>
  )
}

export default LandingPages
