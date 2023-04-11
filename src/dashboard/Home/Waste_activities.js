import React, { useState } from 'react';

import { FaBars, FaBell, FaAngleDown } from "react-icons/fa";
import SiderB from '../SiderB';
import Locations from '../Navbar/Locations';
import Types from '../Navbar/Types';
import TrashLevel from '../Navbar/TrashLevel';

const Waste_activities = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="bg-white d-flex p-0">
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
            <p className='pl-8 text-xl font-bold'>C.Waste Activities</p>
          </div>

          <div className="navbar-nav  ms-auto">
            <div className='nav-item flex mr-8'>

              <FaBell className='mt-3 mr-16 text-xl' />

              <a href="#" className="nav-link dropdown " data-bs-toggle="dropdown">
                info
              </a>
              <span className=' mt-[19px]' data-bs-toggle="dropdown">
                <FaAngleDown className='text-sm' />
              </span>

              <div className="bg-white dropdown-menu dropdown-menu-end border-1 shadow rounded-0 rounded-bottom  " >
                <a href="#" className="dropdown-item">My Accounts</a>
                <a href="#" className="dropdown-item">Log Out</a>
              </div>
            </div>

          </div>
        </nav>
        {/* Navbar End */}

        <div className='flex '>
        <div className='bg-[#fafbfd]  pl-5'>
          <Locations />
        </div>
        <div className='ml-6'>
          <Types/>
        </div>
        <div className='ml-6'>
          <TrashLevel/>
        </div>
      </div>



        <hr className='mt-3 ml-5 mr-5' />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3 ">
              <div className="bg-white rounded shadow d-flex align-items-center justify-content-between p-2 ">
                <div className="ms-3">
                  <p className="xl:mb-10 lg:mb-16"> Estimated Total Waste
                    Collection</p>
                  <h4 className="mb-0 text-primary" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white rounded shadow d-flex align-items-center justify-content-between p-2">
                <div className="ms-3">
                  <p className="mb-10">Number of Active Smart Bins </p>
                  <h4 className="mb-0 text-primary" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white rounded shadow d-flex align-items-center justify-content-between p-2">
                <div className="ms-3">
                  <p className="mb-16"> Upcoming Schedules
                  </p>
                  <h4 className="mb-0 text-primary" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white rounded shadow d-flex align-items-center justify-content-between p-2">
                <div className="ms-3">
                  <p className="mb-16">Total users</p>
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

export default Waste_activities 
