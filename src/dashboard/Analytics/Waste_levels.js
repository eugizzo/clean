
import React, { useState } from 'react';



import { FaBars } from "react-icons/fa";
import SiderB from '../SideBar/SiderB'
import Notifications from '../Navbar/Notifications';
import InfoDropdown from '../Navbar/InfoDropdown';
import Locations from '../Navbar/Locations';
import Types from '../Navbar/Types';
import TrashLevel from '../Navbar/TrashLevel';
import PickDates from '../Navbar/PickDates';
import LineChart from './LineChart';
import { WasteLevelData } from './WasteLevelData'
const Waste_map = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
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
            <p className='pl-8 text-[15px] font-bold text-black'>waste_levels</p>
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
            <Locations />
          </div>
          <div className='ml-6'>
            <Types />
          </div>
          <div className='ml-6'>
            <TrashLevel />
          </div>
          <div className='ml-6'>
            <PickDates />
          </div>
        </div>
        <hr className='mt-3 ml-5 mr-5' />
        <nav className='mt-4 ml-5'>
        <ul className='flex'>
          <li>
            <button className={`pr-5  ${activeTab === 'home' ? 'active-tab' : ''}`} onClick={() => handleTabClick('home')}>Waste levels</button>
          </li>
          <li>
            <button className={`pr-5  ${activeTab === 'about' ? 'active-tab' : ''}`} onClick={() => handleTabClick('about')}>waste collection</button>
          </li>
          
        </ul>
      </nav>
      <hr className='ml-3 mr-5' />

        
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3 ">
              <div className="bg-white  rounded shadow d-flex align-items-center justify-content-between p-2 ">
                <div className="ms-3">
                  <p className=" h-16"> Estimated Total Waste Collection</p>

                  <h4 className="mb-0 text-primary" />
                  <h1 className="mb-0 text-[#05C605] text-2xl flex pl-16" >9751452.48 L</h1>
                 
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white h-28 rounded shadow d-flex align-items-center justify-content-between p-2">
                <div className="ms-3">
                  <p className="h-20 pt-2">Number of Active Smart Bins </p>
                  <h4 className="mb-0 text-primary" />
                  <h1 className="mb-0 text-[#05C605] text-2xl flex pl-32" >717</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white rounded shadow d-flex align-items-center justify-content-between p-2">
                <div className="ms-3">
                  <p className="h-16"> Total Collection
                  </p>
                  <h4 className="mb-0 text-primary" />
                  <h1 className="mb-0 text-[#05C605] text-2xl flex pl-32" >975145L</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white rounded shadow d-flex align-items-center justify-content-between p-2">
                <div className="ms-3">
                  <p className="h-16">Upcoming Schedules</p>
                  <h4 className="mb-0 text-primary" />
                  <h1 className="mb-0 text-[#05C605] text-2xl flex pl-32" >13600L</h1>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='container flex col-sm-12 ml-3 mt-4'>
          <div className='w-1/3 pr-3'>
            <div className="bg-white shadow rounded">
              <div className="p-3">
                <h3 className='text-black font-bold'>Top 5 aggregate waste levels</h3>
              </div>
              <div className="flex justify-center">
                <LineChart />
              </div>
              <div className="card-body">
                {WasteLevelData.map((lev) => {
                  return (
                    <div className='flex p-2 justify-between' key={lev.name}>
                      <div className='text-sm'>{lev.name}</div>
                      <div className='text-sm text-[#05c605]'>{lev.level}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className='w-1/3 pr-3'>
            <div className="bg-white shadow rounded">
              <div className="p-3">
                <h3 className='text-black font-bold'>Top 5 number of collections</h3>
              </div>
              <div className="flex justify-center">
                <LineChart />
              </div>
              <div className="card-body">
                {WasteLevelData.map((lev) => {
                  return (
                    <div className='flex p-2 justify-between' key={lev.name}>
                      <div className='text-sm'>{lev.name}</div>
                      <div className='text-sm text-[#05c605]'>{lev.number}</div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
          <div className='w-1/3 pr-6'>
            <div className="bg-white shadow rounded">
              <div className="p-3">
                <h3 className='text-black font-bold'>Top 5 fill level per collection</h3>
              </div>
              <div className="flex justify-center">
                <LineChart />
              </div>
              <div className="card-body">
                {WasteLevelData.map((lev) => {
                  return (
                    <div className='flex p-2 justify-between' key={lev.name}>
                      <div className='text-sm'>{lev.name}</div>
                      <div className='text-sm text-[#05c605]'>{lev.percentage}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Waste_map
