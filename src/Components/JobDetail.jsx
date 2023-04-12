import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    BriefcaseIcon, PhoneIcon, MapPinIcon, EnvelopeIcon, CurrencyDollarIcon
   
} from '@heroicons/react/24/solid'
import toast from 'react-hot-toast';


const JobDetail = () => {
   
    const [job, setJob] = useState({});
    const { id } = useParams();
   
  
    useEffect(() => {
      fetch("/jobs.json")
        .then((response) => response.json())
        .then((data) => setJob(data.find((job) => job.id === id)));
    }, [id]);

    // const handleApply = (job) => {
    //     localStorage.setItem(job.id, JSON.stringify(job));
    //     // Redirect to the applied job page
    //   };
   //    const handleApply=(job)=> {
      //   const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
      //   const alreadyApplied = appliedJobs.find(appliedJob => appliedJob.id === job.id);
      //   if (alreadyApplied) {
      //     toast('You have already applied for this job!');
      //   } else {
      //     appliedJobs.push(job);
      //     localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
      //   }
      // }
      const handleApply=(job)=> {
        const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
        const jobIds = appliedJobs.map((job) => job.id);
      
        if (jobIds.includes(job.id)) {
            toast('You have already applied for this job!');
        } else {
          appliedJobs.push(job);
          localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
          
        }
      }
    
    return (
        <div className='my-container'>
           <h3 className='text-2xl font-bold text-center m-8 mb-20'>Job Details</h3>
           <div className='grid lg:grid-cols-2 gap-20'>
           <div>
            <p className='tracking-wide mb-8' ><span className='font-bold'>Job Description:</span> {job.job_description}</p>
            <p className='tracking-wide mb-8' ><span className='font-bold'>Job Responsibility: </span>{job.job_responsibility}</p>
            <p className='tracking-wide mb-8'><span className='font-bold'>Educational Requirements:</span><br></br>{job.educational_requirements}
            </p>
            <p className='tracking-wide mb-8'><span className='font-bold'>Experiences:</span> <br></br>{job.experiences}</p>
           </div>
           <div>
            <h1 className='font-bold m-4'>Job Details</h1>
            <p className='m-2'><CurrencyDollarIcon className="h-6 mx-2 w-6 font-light text-xl inline-flex gap-1 text-gray-400" /><span>{job.salary}</span> </p>
            <p className='m-2'><BriefcaseIcon className='h-6 mx-2 w-6 font-light text-xl inline-flex gap-1 text-gray-400' /> Job Title: {job.job_title}</p>
            <h2 className='font-bold m-4'>Contact Information</h2>
            <p className='m-2'><PhoneIcon className='h-6 mx-2 w-6 font-light text-xl inline-flex gap-1 text-gray-400' /> Phone : {job.phone}</p>
            <p className='m-2'><EnvelopeIcon className='h-6 mx-2 w-6 font-light text-xl inline-flex gap-1 text-gray-400' /> Email: {job.email}</p>
            <p className='m-2 mb-4'><MapPinIcon className='h-6 mx-2 w-6 font-light text-xl inline-flex gap-1 text-gray-400' /> Address: {job.address}</p>
            <button onClick={()=>handleApply(job)} className='btn-primary'>Apply Now</button>
           </div>


           
           </div>
         
          
         
        </div>
    );
};



export default JobDetail;

