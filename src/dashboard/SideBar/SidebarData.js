import React from 'react';
import { FaHome, FaClock, FaRegTrashAlt,FaCopy} from "react-icons/fa";
import { FiUsers } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome className='mt-2 text-sm text-[#05C605]' />,
    
    

    subNav: [
      {
        title: 'C.Waste Map',
        path: '/home/waste_map',
       
      },
      {
        title: 'C.Waste Activities',
        path: '/home/waste_activities',
       
      }
    ]
  },
  {
    title: ' Analytics',
    path: '/Analytics',
    icon: <Icon icon="oi:grid-two-up" className='text-sm mt-2' />,

    subNav: [
      {
        title: ' Waste Levels',
        path: '/analytics/Waste_levels',
        
      },
      {
        title: 'Sensor Activities',
        path: '/analytics/sensor_activities',
        
        
      }
    
    ]
  },
  {
    title: 'Schedules',
    path: '/Schedules',
    icon: <FaClock className='mt-2 text-sm'/>,
  

    subNav: [
      {
        title: 'Pending Schedules',
        path: '/schedules/pending_schedules',
      },
      {
        title: 'Served Schedules',
        path: '/schedules/served_schedules',
      }
    ]
  },
  
  {
    title: 'Alerts',
    path: '/Alerts',
    icon:  <FontAwesomeIcon icon={faExclamationTriangle} className='text-sm mt-2' />,
  

    subNav: [
      {
        title: ' Waste Bin Levels',
        path: '/alerts/waste_binlevels',
      },
      {
        title: 'Sensor State',
        path: '/alerts/sensor_state',
      }
    ]
  },
  {
    title: 'Incidentss',
    path: '/Incidents',
    icon:  <FaCopy className='text-sm mt-2' />,
  

    subNav: [
      {
        title: 'Waste Bin Levels',
        path: '/incidents/waste_binlevels',
       
      },
      {
        title: 'Sensor State',
        path: '/incidents/sensor_state',
      }
    ]
  },
  {
    title: 'Bins_&_Devices',
    path: '/incidents/waste_binlevels',
    icon:  <FaRegTrashAlt className='mt-[10px] text-sm' />,
  
  },
  {
    title: 'Accounts',
    path: '/Accounts',
    icon:  <FiUsers className='mt-[10px] text-sm' />,
  
  }
];