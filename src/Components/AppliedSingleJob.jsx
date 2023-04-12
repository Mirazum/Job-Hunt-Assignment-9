import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedSingleJob = ({ job }) => {
    const { company_logo, job_title, company_name, location, salary, remote_or_onsite, fulltime_or_parttime, id } = job

    return (
        <div className='grid grid-cols-3 space-y-4 gap-y-8 shadow-2xl mb-4'>
            <img className="object-cover w-42 h-28 p-2 m-4 shadow-xl" src={company_logo} alt="" />
            <div className='mb-4'>
                <h2 className='font-bold text-xl p-2  mx-2'>{job_title}</h2>
                <p className='font-light text-lg mx-2 p-2'>{company_name}</p>
                <div className='flex gap-2 my-3 mx-2'>
                    <button className='btn-secondary  '> <span className=' text-indigo-700'>{remote_or_onsite}</span></button>
                    <button className='btn-secondary '><span className='text-indigo-700'>{fulltime_or_parttime}</span></button>
                </div>
                <div className='flex gap-2'>
                    <p className='py-2'><MapPinIcon className="h-6 mx-2 w-6 font-light text-xl inline-flex gap-1 text-gray-400" /> <span>{location}</span></p>
                    <p className='py-2'><CurrencyDollarIcon className="h-6  mx-2 w-6 font-light text-xl inline-flex gap-1 text-gray-400" /><span>{salary}</span> </p>
                </div>
            </div>
            <div>
                <Link to={`../job/${id}`}>
                    <button className='btn-primary '>View Details </button>
                </Link>
            </div>

        </div>
    );
};

export default AppliedSingleJob;