import React, { useState } from 'react';

import {  FaBell } from "react-icons/fa";
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Notifications() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center ">
      <div className="relative ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 block rounded-md p-2 focus:outline-none"
        >
        <FontAwesomeIcon icon={farBell} className='text-xl font-bold'/>
        </button>

        {isOpen && (
          <div>
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 h-full w-full z-10"
            ></div>

            <div
              className="absolute right-0 mt-2 bg-white rounded-md shadow-sm overflow-hidden z-20"
              style={{ width: '10rem' }}
            >
            <h3 className='flex justify-center pt-4 font-bold'>Notifications</h3>
              <div className="py-32">

              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}
export default Notifications