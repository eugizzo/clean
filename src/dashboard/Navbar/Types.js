import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
function Types() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-center ">
            <div className="relative ">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-10 block rounded-md  focus:outline-none"
                >
                    <div className=' border w-[100px] py-2 rounded-2 pl-2 text-sm'>Type  :  <span className=' text-sm text-black'>All</span> 
                    <FontAwesomeIcon icon={faCaretDown}  className='pl-2'/>
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
                            <input type="text" placeholder='Search Trash Types...' className='mt-3 bg-[#fafbfd] form-control border-1 rounded-sm hover:border-green-500' />
                            <div className="">
                            <div className='mb-3 mt-4 ml-2'>
                            <h3 >Types</h3>
                            </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1' /><label>Biodegradable</label>

                                </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1' /><label>Non-Biodegradable</label>

                                </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1' /><label>Other</label>

                                </div>
                               
                              
                           
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}
export default Types