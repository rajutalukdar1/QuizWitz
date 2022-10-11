import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, Tooltip, YAxis } from 'recharts';

const Rechart = () => {

    const data = [
        {
            "id": 1,
            "name": "React",
            "logo": "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
            "total": 8
        },
        {
            "id": 2,
            "name": "JavaScript",
            "logo": "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
            "total": 9
        },
        {
            "id": 4,
            "name": "CSS",
            "logo": "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
            "total": 8
        },
        {
            "id": 5,
            "name": "Git",
            "logo": "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
            "total": 11
        }
    ]

    return (
        <div>
            <LineChart width={500} height={300} data={data} margin={{ top: 20, right: 50, left: 20, bottom: 5, }}>
                <CartesianGrid stdDeviation="3 3" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="page C" stroke="red" label="Max PV PAGE" />
                <ReferenceLine y={9800} label="Max" stroke="red" />
                <Line type="monotone" dataKey="total" stroke="#8884d8"></Line>

            </LineChart>
        </div>
    );
};

export default Rechart;