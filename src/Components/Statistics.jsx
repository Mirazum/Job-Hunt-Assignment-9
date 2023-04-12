
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const data = [
    { assignment: 1, mark: 57 },
    { assignment: 2, mark: 60 },
    { assignment: 3, mark: 60 },
    { assignment: 4, mark: 57 },
    { assignment: 5, mark: 60 },
    { assignment: 6, mark: 60 },
    { assignment: 7, mark: 60 },
  ];
  

const Statistics = () => {
    return (
        <div className='my-container flex justify-center items-center'>
            <ScatterChart width={500} height={400}>
        <CartesianGrid />
        <XAxis type="number" dataKey="assignment" label={{ value: 'Assignment Number', position: 'insideBottom', offset: 0 }} />
        <YAxis type="number" dataKey="mark" label={{ value: 'Assignment Mark', angle: -90, position: 'insideLeft' }} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={data} fill="#8884d8" />
      </ScatterChart>
        </div>
    );
};

export default Statistics;
