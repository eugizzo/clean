
import React, { useState } from 'react';



import { FaBars } from "react-icons/fa";
import SiderB from '../../dashboard/SiderB';
import Notifications from '../Navbar/Notifications';
import InfoDropdown from '../Navbar/InfoDropdown';
import Locations from '../Navbar/Locations';
import Types from '../Navbar/Types';
import TrashLevel from '../Navbar/TrashLevel';
import PickDates from '../Navbar/PickDates';

const Pending_schedules= () => {
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
          <Types/>
        </div>
        <div className='ml-6'>
          <TrashLevel/>
        </div>
        <div className='ml-6'>
          <PickDates/>
        </div>
      </div>



        <hr className='mt-3 ml-5 mr-5' />


        <nav className='mt-4 ml-5'>
        <ul className='flex'>
          <li>
            <button className='pr-5' onClick={() => handleTabClick('home')}>All</button>
          </li>
          <li>
            <button className='pr-5' onClick={() => handleTabClick('about')}>On Time</button>
          </li>
          <li>
            <button onClick={() => handleTabClick('contact')}>Over Due</button>
          </li>
        </ul>
      </nav>
      <hr className=' ml-3 mr-5' />
      <div className='ml-4  bg-white  rounded mr-4'>
      {activeTab === 'home' && (
        <div>
        <div className='col-sm-4'>
        <input type="text" placeholder='Search Trash Types...' className='mt-3 bg-[#fafbfd] form-control border-1 rounded-sm hover:border-green-500' /> 
      </div>
    
        </div>
      )}
      {activeTab === 'about' && (
        <div>
          <h1>About me</h1>
          <p>I am a web developer based in San Francisco.</p>
        </div>
      )}
      {activeTab === 'contact' && (
        <div>
          <h1>Contact me</h1>
          <p>You can email me at example@example.com.</p>
        </div>
      )}
      </div>
      </div>

    </div>
  )
}

export default Pending_schedules
