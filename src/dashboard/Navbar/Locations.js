import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './style.css'
function Locations() {
    const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [count, setCount] = useState(0);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        if (event.target.checked) {
            setCount(count + 1);
            
        } else {
            setCount(count - 1);
        }
    };
    
    return (
        <div className="flex justify-center ">
            <div className="relative z-3 ">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-10 block rounded-md  focus:outline-none"
                >
                    <div className=' border w-[150px] py-2 rounded-2  text-sm'>Location  :  <span className=' text-sm text-black'>All</span>
                        <FontAwesomeIcon icon={faCaretDown} className='pl-2' />
                    </div>
                </button>

                {isOpen && (
                    <div>
                        <div
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 h-full w-full z-10"
                        ></div>

                        <div
                            className="absolute p-2 bg-white rounded-md shadow-sm overflow-hidden z-20"
                            style={{ width: '20rem' }}
                        >
                            <input type="text" placeholder='Search locations' className='mt-3 bg-[#fafbfd] form-control border-1 rounded-sm hover:border-green-500' />
                            <div className="">
                                <div className='mb-3 mt-4 ml-2 flex justify-between'>
                                
                                    <div className='mt-4 '>
                                        <h3 >Locations</h3>
                                    </div>
                                    <div>
                                        {isChecked ? <p className='text-danger mt-4 mr-2'>Clear({count})</p> : <p className='text-danger mt-4 mr-2'>Clear({count + 1 + (-1)})</p>}
                                    </div>
                                </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1'  onChange={handleCheckboxChange} /><label>Bumbogo</label>

                                </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1'   onChange={handleCheckboxChange} /><label>Gatsata</label>

                                </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1'  onChange={handleCheckboxChange} /><label>Gatsata</label>

                                </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className=' mr-1'  onChange={handleCheckboxChange} /><label>Gikomero</label>

                                </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1'  onChange={handleCheckboxChange} /><label>Gisozi</label>

                                </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1'  onChange={handleCheckboxChange} /><label>Jabana</label>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}
export default Locations