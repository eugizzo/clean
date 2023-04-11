import React, { useState } from 'react';
import { FaBars, FaHome, FaClock, FaRegTrashAlt, FaBell, FaAngleDown } from "react-icons/fa";
import { FiUsers } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Logo from '../components/images/logo/download.png'


const SideBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [isDropdown, setIsDropdown]=useState(false)

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  const toggleMenu = (e) => {
    e.preventDefault()
    setDropdownOpen(!dropdownOpen);
  };
  function dropdownHandle() {
    setIsDropdown(!isDropdown);
  }

  return (



    <div className="container-xl position-relative bg-white d-flex p-0">
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>

        <nav className="navbar pt-2 navbar-light">

          <div className=" ms-4 mb-4">
            <div className='fixed bg-white z-1'>
              <div className='flex mb-4 '>
                <img className="w-[30px]" src={Logo} />
                <a href className="d-flex align-items-center mx-4">
                  <p className="text-[18px]">Clean<span className='font-bold'>Kigali</span></p>
                </a>
              </div>
              <hr className='text-[10px] w-full mb-4' />

            </div>
            <div className="navbar-nav w-100 mt-16  z-0">



              <div className="nav-item dropdown" >
                <div style={{ display: 'flex' }}>
                  <FaHome className='mt-2 text-sm text-[#05C605]' />
                  <a href="#" className="nav-link  flex text-[17px] font-bold active" onClick={toggleMenu}>

                    Home
                  </a><span className='pl-[85px] mt-2' onClick={toggleMenu}>
                    <FaAngleDown className='text-sm' />
                  </span>

                </div>
                <div className={`dropdown-menu bg-transparent border-0 ${dropdownOpen ? "show" : ""}`}>
                  <Link to="#" className="dropdown-item hover:text-[#05C605] text-[#05C605]">

                    C.Waste Map
                  </Link>
                  <Link to="#" className="dropdown-item hover:text-[#05C605] text-[#797575]">

                    C.Waste Activities
                  </Link>
                </div>
              </div>



              <div className="nav-item dropdown" >
                <div style={{ display: 'flex' }}>
                  <Icon icon="oi:grid-two-up" className='text-sm mt-2' />
                  <a href="#" className="nav-link  flex text-[17px] font-bold " onClick={toggleMenu}>

                    Analytics
                  </a><span className='pl-14 mt-2' onClick={toggleMenu}>
                    <FaAngleDown />
                  </span>

                </div>
                <div className={`dropdown-menu bg-transparent border-0 ${dropdownOpen ? "show" : ""}`}>
                  <Link to="#" className="dropdown-item hover:text-[#05C605] text-[#797575]">

                    Waste Levels
                  </Link>
                  <Link to="#" className="dropdown-item hover:text-[#05C605] text-[#797575]">

                    Sensor Activities
                  </Link>
                </div>
              </div>








              <div className="nav-item dropdown" >
                <div style={{ display: 'flex' }}>
                  <FaClock className='mt-2 text-sm' />
                  <a href="#" className="nav-link  flex text-[17px] font-bold" onClick={toggleMenu}>

                    Schedules
                    <span className='pl-[70px] mt-2'>
                      <FaAngleDown />
                    </span>
                  </a>
                </div>
                <div className={`dropdown-menu bg-transparent border-0 ${dropdownOpen ? "show" : ""}`}>
                  <Link to="#" className="dropdown-item text-[#797575]">

                    Pending Schedule
                  </Link>
                  <Link to="#" className="dropdown-item text-[#797575]">

                    Served Schedules
                  </Link>
                </div>
              </div>


              <div className="nav-item dropdown ">

                <div className='flex'>
                  <FontAwesomeIcon icon={faExclamationTriangle} className='text-sm mt-2' />
                  <a href="#" className="nav-link text-[17px] font-bold" onClick={toggleMenu}>

                    Alerts

                  </a>
                  <a onClick={toggleMenu} className='pl-[80px] mt-2'><span >
                    <FaAngleDown />
                  </span></a>

                </div>
                <div className={`dropdown-menu bg-transparent border-0 ${dropdownOpen ? "show" : ""}`} >
                  <Link to="#" className="dropdown-item text-[#797575]">

                    Waste Bin Levels
                  </Link>
                  <Link to="#" className="dropdown-item text-[#797575]">

                    Sensor State
                  </Link>
                </div>
              </div>


              <div className="nav-item dropdown ">

                <div className='flex'>
                  <FontAwesomeIcon icon={faExclamationTriangle} className='text-sm mt-2' />
                  <a href="#" className="nav-link text-[17px] font-bold" onClick={toggleMenu}>

                    Incidents
                  </a>
                  <span className='pl-[62px] mt-2'>
                    <FaAngleDown />
                  </span>

                </div>
                <div className={`dropdown-menu bg-transparent border-0 ${dropdownOpen ? "show" : ""}`} >
                  <Link to="#" className="dropdown-item text-[17px] text-[#797575]">

                    Waste Bin Levels
                  </Link>
                  <Link to="#" className="dropdown-item text-[17px] text-[#797575]">

                    Sensor State
                  </Link>
                </div>
              </div>


              <div className="nav-item dropdown" >
                <div style={{ display: 'flex' }}>
                  <FaRegTrashAlt className='mt-[10px] text-sm' />
                  <a href="#" className="nav-link  flex text-[17px] font-bold" onClick={toggleMenu}>

                    Bins & Devices

                  </a>
                </div>

              </div>

              <div className="nav-item dropdown" >
                <div style={{ display: 'flex' }}>
                  <FiUsers className='mt-[10px] text-sm' />
                  <a href="#" className="nav-link  flex text-[17px] font-bold" onClick={toggleMenu}>

                    Accounts

                  </a>
                </div>

              </div>












            </div>
          </div></nav>
      </div >
      {/* Sidebar End */}


      {/* Content Start */}
      <div className={`content ${isOpen ? 'open' : ''}`}>
        {/* Navbar Start */}
        <nav className="navbar   px-2 py-0">
          <div className='p-2 flex'>
            <a href="#" className="flex-shrink-0">
              <FaBars onClick={toggleSidebar} />

            </a>
            <p className='pl-8 text-xl font-bold'>C.Waste Map</p>
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
            <a href="profile/profile.php" className="dropdown-item">My Accounts</a>
            <a href="login/signout.php" className="dropdown-item">Log Out</a>
          </div>
          </div>

          </div>
        </nav>
        {/* Navbar End */}
        <div className='flex '>
          <div className=' border w-[150px] py-2 rounded-2 ml-6 pl-2'>Location  :  <span className='font-bold'>All</span></div>
          <div className=' border w-[100px] py-2 rounded-2 ml-6 pl-2'>Type  :  <span className='font-bold'>All</span></div>
          <div className=' border w-[150px] py-2 rounded-2 ml-6 pl-2'>Trash levels  :  <span className='font-bold'>All</span></div>
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
                  <p className="mb-16">Number of Active Smart Bins </p>
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
    </div >
  )
}

export default SideBar








