
import React, { useState } from 'react';

import Select from 'react-select';



import { FaBars, FaBell, FaAngleDown } from "react-icons/fa";
import SiderB from '../../dashboard/SiderB'
import Notifications from '../Navbar/Notifications';
import InfoDropdown from '../Navbar/InfoDropdown';
import Locations from '../Navbar/Locations';
import Types from '../Navbar/Types';
import TrashLevel from '../Navbar/TrashLevel';
import {locationList} from '../Navbar/DataLocation'


const Waste_map = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (

    <div className=" d-flex p-0">
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
            <p className='pl-8 text-[15px] text-black font-bold'>C.Waste Map</p>
          </div>

          <div className="navbar-nav  ms-auto">
            <div className='nav-item flex mr-8'>
              <div className='mt-2'>
                <Notifications />
              </div>
              <div className='mt-2'>
                <InfoDropdown />
              </div>


            </div>

          </div>
        </nav>
        {/* Navbar End */}

        <div className='flex '>
          <div className='bg-[#fafbfd]  pl-5'>
          
         
            <Locations  />
         
                 
          </div>
          <div className='ml-6'>
            <Types />
          </div>
          <div className='ml-6'>
            <TrashLevel />
          </div>
        </div>

        <hr className='mt-3 ml-5 mr-5' />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3 ">
              <div className="bg-white rounded shadow d-flex align-items-center justify-content-between p-2 ">
                <div className="ms-3">
                  <p className="h-24 text-black"> Estimated Total Waste
                    Collection</p>
                  <h4 className="mb-0 text-primary" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white rounded shadow d-flex align-items-center justify-content-between p-2">
                <div className="ms-3">
                  <p className="h-24 text-black">Number of Active Smart Bins </p>
                  <h4 className="mb-0 text-primary" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white rounded shadow d-flex align-items-center justify-content-between p-2">
                <div className="ms-3">
                  <p className="h-24 text-black"> Total Collection 
                  </p>
                  <h4 className="mb-0 text-primary" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white rounded shadow d-flex align-items-center justify-content-between p-2">
                <div className="ms-3">
                  <p className="h-24 text-black"> Upcoming Schedules</p>
                  <h4 className="mb-0 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Waste_map