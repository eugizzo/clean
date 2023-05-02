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
    // const activeTab1=(e) => {
    //     e.preventDefault()
    //     setActiveSubNav(1)
        
    // }
   


    return (
       
            <nav className="navbar pt-2 navbar-light">
              <div className='fixed bg-white z-40 top-0 pt-2'>
                        <div className='flex mb-4 w-full px-2'>
                            <img className="w-[30px] ml-4" src={Logo} />
                            <a href className="d-flex align-items-center mx-4">
                                <p className="text-[16px] text-black">Clean<span className='font-bold'>Kigali</span></p>
                            </a>
                        </div>
                        <hr className='text-[10px] w-full px-8' />

                    </div>
                <div className=" ms-4 mb-4">
                    
                    <div className="navbar-nav  w-100 mt-16 z-30">
                    {SidebarData.map((item, index) => {
                      return (
                        <div className="nav-item dropdown pt-0" key={index}>
                          <div className={`flex justify between ${activeSubNav === index + 1 ? 'NavActive' : ''}`} onClick={toggleMenu}>
                            {item.icon}
                            <a href="#" onClick={() => setActiveSubNav(index + 1)} className={`nav-link text-black flex text-[14px]  font-bold w-1/2 ${activeSubNav === index + 1 ? 'NavActive' : ''}`}>
                              {item.title}
                            </a>
                            <span className='mt-2 w-1/2 pl-[70px]' onClick={toggleMenu}>
                              <FaAngleDown className='text-sm' />
                            </span>
                          </div>
                          <div className={`dropdown-menu pt-[2px] bg-transparent border-0 ${dropdownOpen ? "show" : ""}`}>
                            {item.subNav && item.subNav.map((subItem, subIndex) => (
                              <div key={subIndex} onClick={() => setActiveSubNav(index + 1)}  className={`dropdown-item hover:text-[#05C605] text-[14px] ${activeSubNav === index + 1 ? 'NavActive' : ''}`}>
                                <Link to={subItem.path}>
                                <div className=''> {subItem.title}</div> 
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
