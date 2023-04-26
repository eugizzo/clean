import React, { useState } from 'react';
import { FaBars} from "react-icons/fa";
import SiderB from '../SideBar/SiderB'
import Notifications from '../Navbar/Notifications';
import InfoDropdown from '../Navbar/InfoDropdown';
import Locations from '../Navbar/Locations';
import PickDates from '../Navbar/PickDates';
import Chart from './Chart';
const Sensor_activities = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleSidebar() {
      setIsOpen(!isOpen);
    }
  
    return (
  
  
  
      <div className=" bg-white d-flex p-0">
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
  
          <SiderB />
        </div>
  
        <div className={`content ${isOpen ? 'open' : ''}`}>
          {/* nav Start */}
          <nav className="navbar   px-2 py-0">
            <div className='p-2 flex'>
              <a href="#" className="flex-shrink-0">
                <FaBars onClick={toggleSidebar} />
  
              </a>
              <p className='pl-8 text-[15px] font-bold text-black'>Sensor Activities</p>
            </div>
  
            <div className="navbar-nav  ms-auto">
            <div className='nav-item flex mr-8'>
              <div className='mt-2'>
                <Notifications/>
              </div>
              <div className='mt-2'>
                <InfoDropdown/>
              </div>
  
  
            </div>
  
          </div>
          </nav>
          {/* Navbar End */}
  
          <div className='flex '>
          <div className='bg-[#fafbfd]  pl-5'>
            <Locations/>
          </div>
          
          
          <div className='ml-6'>
            <PickDates/>
          </div>
        </div>
  
  
  
          <hr className='mt-3 ml-5 mr-5' />
          <div className="container-fluid pt-4 px-4">
            <div className="row ">
              <div className="col-sm-4 ">
              
                <div className="bg-white p-4 rounded shadow  align-items-center justify-content-between pt-2 pb-2 pr-2">
                 <p className="text-black font-bold "> Sensor Status</p>
                    
                      <div className='flex justify-between mt-2 mb-2 mr-2'>
                      
                            <div className='col-sm-6  bg-[#e6f9e6] mt-3 ml-1 mr-2 rounded-xl'>
                                <h1 className='flex justify-center pt-12  font-bold text-[#05C605]'>Up</h1>
                                <h1 className='flex justify-center pt-3 text-2xl pb-10'>3</h1>
                            </div>
                            <div className='col-sm-6 bg-[#f9f1f1]  mt-3 ml-2 mr-2 rounded-xl'>
                                <h1 className='pt-12 pl-12 pr-15  font-bold text-[#fe2525]'>Down</h1>
                                <h1 className='pl-[55px] pt-3 text-2xl pb-10'>7</h1>
                            </div>
                      </div>
                    
                 
                </div>
              </div>

              <div className="col-sm-8 ">
                <div className="bg-white h-56 rounded shadow align-items-center justify-content-between p-2">
                  <div className="ms-3">
                    <p className=" text-black font-bold">Sensor Monitoring </p>
                    

<Chart/>


                  </div>
                </div>
              </div>
             
    
            </div>
          </div>
  
        </div>
  
      </div>
  )
}

export default Sensor_activities
