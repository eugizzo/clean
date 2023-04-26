import React, { useState } from 'react';
import { FaHome, FaClock, FaRegTrashAlt, FaAngleDown ,FaCopy} from "react-icons/fa";
import { FiUsers } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './Tab.css'
import Logo from '../../components/images/logo/download.png'
const SiderB = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const [isDropdown, setIsDropdown]=useState(false)
    const [activeSubNav, setActiveSubNav] = useState(1);

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
    const activeTab1=(e) => {
        e.preventDefault()
        setActiveSubNav(1)
        
    }
    const activeTab2=(e) => {
        e.preventDefault()
        setActiveSubNav(2)
        
    }
    const activeTab3=(e) => {
        e.preventDefault()
        setActiveSubNav(3)
        
    }
    const activeTab4=(e) => {
        e.preventDefault()
        setActiveSubNav(4)
        
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
                            <div  className={activeSubNav === 1 ? 'NavActive' : ''} style={{ display: 'flex' }} onClick={toggleMenu}>
                                <FaHome className='mt-[12px] text-sm ' />
                                <a href="#" onClick={activeTab1} className={`nav-link text-black flex text-[14px] font-bold text-[#05C605] ${activeSubNav === 1 ? 'NavActive' : ''}`}>

                                    Home
                                </a>
                                <span className='pl-[85px] mt-2' onClick={toggleMenu}>
                                    <FaAngleDown className='text-sm' />
                                </span>

                            </div>
                            <div className={`dropdown-menu -pt-1 bg-transparent border-0 ${dropdownOpen ? "show" : ""}`}>
                                <div onClick={activeTab1} className={`dropdown-item hover:text-[#05C605] text-[14px] ${activeSubNav === 1 ? 'NavActive' : ''}`}>
                                <Link to="/home/waste_map">
                                    C.Waste Map
                                </Link>
                               </div>
                               <div onClick={activeTab2} className={`dropdown-item hover:text-[#05C605] text-[14px] ${activeSubNav === 2 ? 'NavActive' : ''}`}>
                                <Link to="/home/waste_activities">
                                C.Waste Activities
                                </Link>
                               </div>
                                
                            </div>
                        </div>

                        <div className="nav-item dropdown" >
                            <div style={{ display: 'flex' }}>
                                <Icon icon="oi:grid-two-up" className='text-sm mt-[12px]' />
                                <a href="#" className="nav-link text-black  flex text-[14px] font-bold " onClick={toggleMenu}>

                                    Analytics
                                </a><span className='pl-16 mt-2' onClick={toggleMenu}>
                                <FaAngleDown className='text-sm' />
                                </span>

                            </div>
                            <div className={`dropdown-menu bg-transparent border-0 ${dropdownOpen ? "show" : ""}`}>
                               

                                <div onClick={activeTab3} className={`dropdown-item text-[14px] pl-10 hover:text-[#05C605] text-[#797575]  ${activeSubNav === 3 ? 'NavActive' : ''}`}>
                                <Link to="/analytics/Waste_levels">
                                Waste Levels
                                </Link>
                               </div>

                               <div onClick={activeTab4} className={`pl-8 dropdown-item hover:text-[#05C605] text-[14px] text-[#797575]  ${activeSubNav === 4 ? 'NavActive' : ''}`}>
                               <Link to="/analytics/sensor_activities">
                               Sensor Activities
                               </Link>
                              </div>

                            </div>
                        </div>

                        <div className="nav-item dropdown" >
                            <div style={{ display: 'flex' }}>
                                <FaClock className='mt-[12px] text-sm' />
                                <a href="#" className="nav-link flex text-black  text-[14px] font-bold" onClick={toggleMenu}>

                                    Schedules
                                    <span className='pl-[70px] mt-2'>
                                        <FaAngleDown />
                                    </span>
                                </a>
                            </div>
                            <div className={`dropdown-menu bg-transparent border-0 ${dropdownOpen ? "show" : ""}`}>
                                <Link to="/schedules/pending_schedules" className="dropdown-item text-[#797575] text-[14px]">

                                    Pending Schedule
                                </Link>
                                <Link to="/schedules/served_schedules" className="dropdown-item text-[#797575] text-[14px]">

                                    Served Schedules
                                </Link>
                            </div>
                        </div>


                        <div className="nav-item dropdown ">

                            <div className='flex'>
                                <FontAwesomeIcon icon={faExclamationTriangle} className='text-sm mt-[12px]' />
                                <a href="#" className="nav-link text-black text-[14px] font-bold" onClick={toggleMenu}>

                                    Alerts

                                </a>
                                <a onClick={toggleMenu} className='pl-[87px] mt-2'><span >
                                    <FaAngleDown />
                                </span></a>
                            </div>
                            <div className={`dropdown-menu bg-transparent border-0 ${dropdownOpen ? "show" : ""}`} >
                                <Link to="#" className="dropdown-item text-[#797575] text-[14px]">

                                    Waste Bin Levels
                                </Link>
                                <Link to="#" className="dropdown-item text-[#797575] text-[14px]">

                                    Sensor State
                                </Link>
                            </div>
                        </div>


                        <div className="nav-item dropdown ">

                            <div className='flex'>
                                <FaCopy className='text-sm mt-[12px]' />
                                <a href="#" className="nav-link text-black text-[14px] font-bold" onClick={toggleMenu}>

                                    Incidents
                                </a>
                                <span className='pl-[72px] mt-2'>
                                    <FaAngleDown />
                                </span>

                            </div>
                            <div className={`dropdown-menu bg-transparent border-0 ${dropdownOpen ? "show" : ""}`} >
                                <Link to="#" className="dropdown-item text-[14px] text-[#797575]">

                                    Waste Bin Levels
                                </Link>
                                <Link to="#" className="dropdown-item text-[14px] text-[#797575]">

                                    Sensor State
                                </Link>
                            </div>
                        </div>


                        <div className="nav-item dropdown" >
                            <div style={{ display: 'flex' }}>
                                <FaRegTrashAlt className='mt-[12px] text-sm' />
                                <a href="#" className="nav-link  flex text-black text-[14px] font-bold" onClick={toggleMenu}>

                                    Bins & Devices

                                </a>
                            </div>

                        </div>

                        <div className="nav-item dropdown" >
                            <div style={{ display: 'flex' }}>
                                <FiUsers className='mt-[12px] text-sm' />
                                <a href="#" className="nav-link  flex text-[14px] font-bold" onClick={toggleMenu}>
                                    Accounts

                                </a>
                            </div>

                        </div>

                    </div>
                </div></nav>
      
    )
}

export default SiderB
