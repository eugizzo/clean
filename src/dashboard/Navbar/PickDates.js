
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
function PickDates() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectDate, setSelectDate] = useState("")
    const [selectEndDate, setSelectEndDate] = useState("")
   
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let item={selectDate,selectEndDate}
        console.log(item)

    }
    

    return (
        <div className="flex justify-center ">
            <div className="relative ">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-10 block rounded-md  focus:outline-none"
                >
                    <div className=' border  py-2 rounded-2 pl-2 pr-2 text-sm'>Date  :  {selectDate? selectDate+', '+selectEndDate: <span className='font-bold text-sm'>12-03-2023 , 12-04-2023</span>}
                    </div>
                </button>

                {isOpen && (
                    <div>
                        <div
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 h-full w-full z-10"
                        ></div>

                        <div
                            className="absolute p-4 bg-white rounded-md shadow-sm overflow-hidden z-20"
                            style={{ width: '20rem' }}
                        >


                            <form onSubmit={handleFormSubmit}>

                                <div>
                                    <div><h3>Start Date: *</h3></div>
                                    <div>
                                        <input type='date'
                                            value={selectDate}
                                            onChange={(e) => setSelectDate(e.target.value)}
                                            className='pl-2 form-control bg-[#fafbfd] border py-[5px] rounded hover:border-green-300' /></div>
                                </div>
                                <div className='pt-4'>
                                    <div><h3>End Date: *</h3></div>
                                    <div>
                                        <input type='date'
                                            value={selectEndDate}
                                            onChange={(e) => setSelectEndDate(e.target.value)}
                                            className='pl-2 form-control bg-[#fafbfd] border py-[5px] rounded hover:border-green-300' />

                                    </div>

                                </div>

                                <div className='flex justify-between pt-3'>
                                    <button type='reset' className='btn bg-[#fafbfd] w-1/2 mr-2 '>Reset</button>
                                    <button type='submit' className='btn bg-[#05C605] w-1/2 ml-2 text-white'>Apply</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}
export default PickDates