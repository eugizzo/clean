import React, { useState } from 'react';
import { FaHome, FaClock, FaRegTrashAlt, FaAngleDown } from "react-icons/fa";
import { FiUsers } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Logo from '../components/images/logo/download.png'
const SiderB = () => {
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
       
            <nav className="navbar pt-2 navbar-light">

                <div className=" ms-4 mb-4">
                    <div className='fixed bg-white z-1'>
                        <div className='flex mb-4 '>
                            <img className="w-[30px]" src={Logo} />
                            <a href className="d-flex align-items-center mx-4">
                                <p className="text-[18px] text-black">Clean<span className='font-bold'>Kigali</span></p>
                            </a>
                        </div>
                        <hr className='text-[10px] w-full mb-4' />

                    </div>
                    <div className="navbar-nav w-100 mt-16  z-0">
                        <div className="nav-item dropdown" >
                            <div style={{ display: 'flex' }}>
                                <FaHome className='mt-2 text-sm text-[#05C605]' />
                                <a href="#" className="nav-link text-black flex text-[17px] font-bold active" onClick={toggleMenu}>

                                    Home
                                </a><span className='pl-[85px] mt-2' onClick={toggleMenu}>
                                    <FaAngleDown className='text-sm' />
                                </span>

                            </div>
                            <div className={`dropdown-menu bg-transparent border-0 ${dropdownOpen ? "show" : ""}`}>
                                <Link to="/home/waste_map" className="dropdown-item hover:text-[#05C605] text-[#05C605]">

                                    C.Waste Map
                                </Link>
                                <Link to="/home/waste_activities" className="dropdown-item hover:text-[#05C605] text-[#797575]">

                                    C.Waste Activities
                                </Link>
                            </div>
                        </div>

                        <div className="nav-item dropdown" >
                            <div style={{ display: 'flex' }}>
                                <Icon icon="oi:grid-two-up" className='text-sm mt-2' />
                                <a href="#" className="nav-link text-black  flex text-[17px] font-bold " onClick={toggleMenu}>

                                    Analytics
                                </a><span className='pl-16 mt-2' onClick={toggleMenu}>
                                </span>

                            </div>
                            <div className={`dropdown-menu bg-transparent border-0 ${dropdownOpen ? "show" : ""}`}>
                                <Link to="/Waste_levels" className=" dropdown-item  pl-10 hover:text-[#05C605] text-[#797575]">

                                    Waste Levels
                                </Link>
                                <Link to="#" className="pl-8 dropdown-item hover:text-[#05C605] text-[#797575]">

                                    Sensor Activities
                                </Link>
                            </div>
                        </div>

                        <div className="nav-item dropdown" >
                            <div style={{ display: 'flex' }}>
                                <FaClock className='mt-2 text-sm' />
                                <a href="#" className="nav-link flex text-black  text-[17px] font-bold" onClick={toggleMenu}>

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
                                <a href="#" className="nav-link text-black text-[17px] font-bold" onClick={toggleMenu}>

                                    Alerts

                                </a>
                                <a onClick={toggleMenu} className='pl-[87px] mt-2'><span >
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
                                <a href="#" className="nav-link text-black text-[17px] font-bold" onClick={toggleMenu}>

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
                                <a href="#" className="nav-link  flex text-black text-[17px] font-bold" onClick={toggleMenu}>

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
      
    )
}

export default SiderB
