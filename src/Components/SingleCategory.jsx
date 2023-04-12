import React from 'react';

const SingleCategory = ({pd}) => {
    const {logo, name,jobs}=pd
   
    return (
        <div className='bg-indigo-100 border rounded-xl mb-3 w-52 h-40 shadow-2xl'>
            <img className='p-2 m-4 rounded-sm bg-blue-200'src={logo} alt="" />
            <h3 className='font-semibold text-md p-2'>{name}</h3>
            <p className='text-base px-2 '>{jobs} Jobs Available</p>
        </div>
    );
};

export default SingleCategory;