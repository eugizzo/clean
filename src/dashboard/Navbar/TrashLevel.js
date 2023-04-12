import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
function TrashLevel() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-center ">
            <div className="relative ">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-10 block rounded-md  focus:outline-none"
                >
                    <div className=' border w-[140px] py-2 rounded-2 pl-2 text-sm'>Trash levels  :  <span className=' text-sm text-black'>All</span> 
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


                        <div className='flex p-2'>
                        
                        <div>
                        <div><h3>Min(%)</h3></div>
                        <div><input type='text' placeholder='0' className='pl-2 w-[120px] bg-[#fafbfd] border py-[5px] rounded hover:border-green-300'/></div>
                        </div>
                        <div className='ml-10'>
                        <div><h3>Max(%)</h3></div>
                        <div><input type='text' placeholder='100' className='pl-2 w-[120px] bg-[#fafbfd] border py-[5px] rounded hover:border-green-300'/></div>
                        </div>

                        </div>
                        <hr className='ml-2 mr-2 text-sm'/>



                            <input type="text" placeholder='Search Trash level...' className='ml-2 mr-2 mt-3 pl-2 bg-[#fafbfd] py-2 border-1 rounded-sm w-[280px] hover:border-green-500' />
                            <div className="">
                            <div className='mb-3 mt-4 ml-2'>
                            <h3 >Levels</h3>
                            </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1' /><label>Low Waste Level</label>

                                </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1' /><label>Mid Low Level</label>

                                </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1' /><label>Mid High Level</label>

                                </div>
                                <div className='flex p-2'>
                                    <input type='checkbox' className='bg-[#fafbfd] mr-1' /><label>Almost Full Level</label>

                                </div>
                                <div className='flex p-2'>
                                <input type='checkbox' className='bg-[#fafbfd] mr-1' /><label>Just Collected</label>

                            </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}
export default TrashLevel