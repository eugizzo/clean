import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Pagination from 'react-js-pagination';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FiDownload } from 'react-icons/fi';
import axios from 'axios';


import { Link } from 'react-router-dom';



const data = [
    {
        id: 1,
        Alert: '75 %',
        Created: 'Feb 10, 2023 4:59 PM',
        Schedule: 'Feb 10, 2023 9:59 PM',
        Location: 'mulindi market',
        bin_id: 'ML-0002',
        Type: 'Biodegradable',
        ScheduleStatus: 'ontime',
    },
    {
        id: 1,
        Alert: '61 %',
        Created: 'Feb 12, 2023 10:05 PM',
        Schedule: 'Feb 12, 2023 10:05 PM',
        Location: 'nyabugogo mutangana market',
        bin_id: 'NY-0001',
        Type: 'Non-Biodegradable',
        ScheduleStatus: 'late',
    },
];

const Table = () => {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    // const [isOpen, setIsOpen] = useState(false);
    const [scheduleInfo, setScheduleInfo] = useState([]);

    const handleSearch = (event) => {
        setSearchText(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
    };

    const handleExportPdf = () => {
        const doc = new jsPDF();
        const tableRows = data.map((row) => [
            row.Alert,
            row.Created,
            row.Schedule,
            row.Location,
            row.bin_id,
            row.Type,
            row.ScheduleStatus,
        ]);

        doc.autoTable({
            head: [['Alert Level', 'Created At', 'Schedule Date', 'Location', 'Bin Id', 'Type', 'Schedule Status']],
            body: tableRows,
            bg:'green'
        });

        doc.save('table.pdf');
    };

    const handleExportCsv = () => {
        const tableRows = data.map((row) => [
            row.Alert,
            row.Created,
            row.Schedule,
            row.Location,
            row.bin_id,
            row.Type,
            row.ScheduleStatus,
        ]);


        const csvContent = 'data:text/csv;charset=utf-8,' + tableRows.map((row) => row.join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'mydata.csv');
        document.body.appendChild(link);
        link.click();
    }

    // const filteredData = data.filter(
    //     (row) => searchText === '' || row.Alert.toLowerCase().includes(searchText.toLowerCase())
    //   );

    const filteredData = data.filter(
        (row) => {
            const rowValues = Object.values(row).join('').toLowerCase(); // get all values of row, concatenate them, and convert to lower case
            return searchText === '' || rowValues.includes(searchText.toLowerCase()); // check if searchText is included in the concatenated row values
        }
    );

    const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const [isOpen, setIsOpen] = useState(false);


      const API_URL = 'https://cleankigaliapi.huzalabs.com/api/cleankigali/get_device_info';
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmJkYThjM2RiNGRhMDRkNDA2MjU3YSIsImFjY291bnRfdHlwZSI6InVzZXJfYWNjb3VudCIsImFjY2Vzc19yb2xlIjoie1wiZGVuaWVkX21lbnVcIjpbXSxcImRlbmllZF9mZWF0dXJlc1wiOltdLFwiYWN0aW9uX3JpZ2h0c1wiOntcInJlYWRcIjp0cnVlLFwid3JpdGVcIjp0cnVlLFwidXBkYXRlXCI6dHJ1ZSxcImRlbGV0ZVwiOmZhbHNlfX0iLCJpYXQiOjE2ODI1MTMzMDcsImV4cCI6MTY4MjU5OTcwN30.OEbrJ3ss2nawI_zYMu0yu7OVQOuDwdmq0A8PmAreZxg';
      
      const headers = {
        'Authorization': `Bearer ${token}`
      };
      
      axios.get(API_URL, { headers })
        .then(response => {
            console.log(response.data)
            setScheduleInfo(response.data);
        })
        .catch(error => {
            console.log(error)
        });
        
        

    return (
        <div>






            <div className='p-3 bg-white  rounded '>

                <div className='flex justify-between'>
                    <div className='col-sm-4 pb-2'>
                        <input type="text" value={searchText} onChange={handleSearch} placeholder="Search..." className='pt-2 bg-[#fafbfd] py-1 px-20 border-1 rounded-sm hover:border-green-500' />
                    </div>
                    <div>
                        <div className="relative ">
                            <div className='flex bg-[#fafbfd] border rounded pl-2 pr-2'>
                                <FiDownload className=' mt-[8px]'/>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="relative z-10 block  rounded-md p-2 focus:outline-none  text-sm text-black"
                                >
                              
                                    Export
                                </button>
                                <span className=' mt-[6px]' data-bs-toggle="dropdown">
                                <FontAwesomeIcon icon={faCaretDown} className='text-sm' />
                                </span>
                            </div>
                            {isOpen && (
                                <div>
                                    <div
                                        onClick={() => setIsOpen(false)}
                                        className="fixed inset-0 h-full w-full z-10"
                                    ></div>

                                    <div
                                        className="absolute right-0  bg-white rounded-md shadow-sm overflow-hidden z-20"
                                        style={{ width: '10rem' }}
                                    >
                                        <div className='hover:bg-gray-200 p-2 hover:text-[#05C605]'>
                                            <Link to="#" className="" onClick={handleExportPdf}>PDF</Link>{' '}

                                        </div>
                                        <div className=" hover:bg-gray-200 p-2 hover:text-[#05C605]">
                                            <Link to="#" className="" onClick={handleExportCsv}>CSV</Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                <div className="row pl-2">
              
                        <table className="table">
                            <thead>
                                <tr className='text-sm'>
                                    <th>Alert Level</th>
                                    <th>Created At</th>
                                    <th>Schedule Date</th>
                                    <th>Location</th>
                                    <th>Bin Id</th>
                                    <th>Type</th>
                                    <th>Bin Id</th>
                                    <th>Schedule Status</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                    {scheduleInfo.map(schedule => (
                                    <tr key={schedule.id} className='text-[11px]'>
                                        <td>{schedule.bin_id.final_alert_at}</td>
                                        <td>{schedule.createdAt}</td>
                                        <td>{schedule.schedule_date}</td>
                                        <td>{schedule.Location}</td>
                                        <td className='text-[#05C605]'>{schedule.bin_id}</td>
                                        <td>{schedule.type}</td>
                                        <td>{schedule.Type}</td>
                                        <td>{schedule.schedule_status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                                   
                </div>

                    <div className="d-flex justify-content-end align-items-center">

                        <div>
                            <Pagination
                                itemsCount={filteredData.length}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    
                </div>


            </div>


        </div>
    );
};

export default Table;
