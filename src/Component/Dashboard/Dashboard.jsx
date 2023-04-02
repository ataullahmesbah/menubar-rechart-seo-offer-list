import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    let students = [

        {id: 1, name: "John", physics: 85, chemistry: 70, math: 40},

        {id: 2, name: "Alice", physics: 75, chemistry: 80, math: 95},
        {id: 3, name: "Bob", physics: 90, chemistry: 65, math: 35},
        {id: 4, name: "Jane", physics: 80, chemistry: 90, math: 80},
        {id: 5, name: "David", physics: 70, chemistry: 75, math: 85},
        {id: 6, name: "Mary", physics: 95, chemistry: 85, math: 90},
        {id: 7, name: "Peter", physics: 65, chemistry: 75, math: 80},
        {id: 8, name: "Sarah", physics: 85, chemistry: 90, math: 85},
        {id: 9, name: "Tom", physics: 80, chemistry: 85, math: 95},
        {id: 10, name: "Linda", physics: 70, chemistry: 80, math: 75},
        {id: 11, name: "Eric", physics: 90, chemistry: 85, math: 80},
        {id: 12, name: "Karen", physics: 85, chemistry: 40, math: 90}
    ];
    

    return (
        <div className='m-20'>
            <LineChart
            width={1000} 
            height={300}
            data={students}
            >
                <Line dataKey="physics"></Line>
                <Line stroke='#8884d8' dataKey="math"></Line>
                <Line stroke="#82ca9d" dataKey="chemistry"></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip/>
            </LineChart>
        </div>
    );
};

export default Dashboard;