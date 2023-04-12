import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';
import { useState } from 'react';
import Job from './Job';

const Home = () => {
    const category = useLoaderData()
     console.log(category)
    const [limit, setLimit] = useState(4);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    const handleShowMore = () => {
        setLimit(jobs.length);
    };
    const handleShowLess = () => {
        setLimit(4);
      };

     
    return (
        <>
            <div className='my-container flex flex-col items-center justify-between lg:flex-row bg-indigo-100 mb-24'   >
                <div>
                    <h1 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 lg:text-7xl'>
                        One Step<br></br> Closer To Your<br></br> <span className='animate-text bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent'>Dream job</span>
                    </h1>
                    <p className='text-base text-gray-700 md:text-lg lg:mb-8 mb-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish</p>
                    <button className='btn-primary '>Get Started</button>
                </div>
                <div className='relative lg:w-1/2 '>
                    <img className='w-full lg:w-4/5 lg:ml-auto h-56 object-cover  lg:h-96 hidden sm:block' src="/public/image/hardy.png" alt="" />
                </div>

            </div>
            <div className="job-container">
                <div className='flex flex-col items-center justify-center '>
                    <h2 className='text-3xl font-bold font-black mb-4'>Job Category List</h2>
                    <p className='text-base text-md p-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='my-container flex flex-col lg:flex-row lg:justify-around mt-2 items-center ' >
                    {
                        category.map((pd, i) => <SingleCategory
                            key={i}
                            pd={pd}
                        ></SingleCategory>)
                    }
                </div>
            </div>
            <div className="job-features-container my-container">
                <div className='flex flex-col items-center justify-center '>
                    <h2 className='text-3xl font-bold font-black mb-4'>Featured Jobs</h2>
                    <p className='text-base text-md p-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-2 my-container gap-8'>
                {
                    jobs.slice(0, limit).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)

                }
               <div className='flex justify-center w-full lg:ml-56'>
               {limit < jobs.length ? (
                    <button onClick={handleShowMore} className='btn-primary'>Show More</button>):<button onClick={handleShowLess} className='btn-primary'>Show less</button>}
               </div>
                </div>

            </div>
        </>
    );
};

export default Home;

