
import React, { useState, useEffect } from "react"
import AppliedSingleJob from './AppliedSingleJob';
import DropdownButton from './DropdownButton';

const AppliedJobs = () => {
    const [filteredJobs, setFilteredJobs] = useState([])

    // initially load all jobs from local storage and set it to state to render, 
    useEffect(() => {
        setFilteredJobs(getAppliedJobs())
    }, [])

    const getAppliedJobs = () => {
        return JSON.parse(localStorage.getItem("appliedJobs")) || [];
    }

    // handle changing filter option
    const onChangeJobType = (type) => {
        if (type === "all") {
            setFilteredJobs(getAppliedJobs())
        }
        else {
            setFilteredJobs(getAppliedJobs().filter((job) => job.remote_or_onsite === type))
        }
        return
    }

    return (
        <div className='my-container  '>
            <h1 className='mb-32 text-center font-bold text-2xl'>Applied Jobs</h1>
            
           <div className="flex justify-end mb-8"> <DropdownButton onChange={onChangeJobType} /></div>
            
            <div>
                {/* The first part of the code, filteredJobs.length, is checking whether the filteredJobs array has any elements. If the array is not empty, the second part of the code, filteredJobs.map((job) => ..., will execute */}
                {filteredJobs.length && filteredJobs.map((job) => <AppliedSingleJob
                    key={job.id}
                    job={job}>

                </AppliedSingleJob>

                )}
            </div>

        </div>
    )
}

export default AppliedJobs;







