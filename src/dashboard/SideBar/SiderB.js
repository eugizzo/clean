import React, { useState } from 'react';
import {  FaAngleDown } from "react-icons/fa";

import { Link } from 'react-router-dom';
import './Tab.css'
import Logo from '../../components/images/logo/download.png'
import {SidebarData} from './SidebarData'
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
                    <div className="navbar-nav w-100 mt-16 z-0">
                    {SidebarData.map((item, index) => {
                      return (
                        <div className="nav-item dropdown" key={index}>
                          <div className={`flex ${activeSubNav === index + 1 ? 'NavActive' : ''}`} onClick={toggleMenu}>
                            {item.icon}
                            <a href="#" onClick={() => setActiveSubNav(index + 1)} className={`nav-link text-black flex text-[14px] font-bold  ${activeSubNav === index + 1 ? 'NavActive' : ''}`}>
                              {item.title}
                            </a>
                            <span className='pl-[85px] mt-2' onClick={toggleMenu}>
                              <FaAngleDown className='text-sm' />
                            </span>
                          </div>
                          <div className={`dropdown-menu -pt-1 bg-transparent border-0 ${dropdownOpen ? "show" : ""}`}>
                            {item.subNav && item.subNav.map((subItem, subIndex) => (
                              <div key={subIndex} onClick={() => setActiveSubNav(index + 1)} className={`dropdown-item hover:text-[#05C605] text-[14px] ${activeSubNav === index + 1 ? 'NavActive' : ''}`}>
                                <Link to={subItem.path} >
                                  {subItem.title}
                                </Link>
                                
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div></nav>
      
    )
}

export default SiderB
