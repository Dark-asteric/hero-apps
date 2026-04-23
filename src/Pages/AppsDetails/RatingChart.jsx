import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const RatingChart = ({ ratings }) => {
    const chartData = ratings.map((rating) => ({
        name: rating.name,
        count: rating.count,
        color: '#FF8811'
    })).reverse();

    return (
        <div className='w-full h-[300px] mt-8 mb-18'>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart
                    data={chartData}
                    layout='vertical'
                    margin={{ top: 5, right: 30, left: 40, bottom: 5}}
                >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis type='number' stroke='#6B7280' tickFormatter={(value) => `${(value)}`} />
                    <YAxis
                        dataKey='name'
                        type='category'
                        stroke='#6B7280'
                        tick={{ fontSize: 18, fill: '#6B7280' }}
                    />
                    <Tooltip
                        formatter={(value) => [value.toLocaleString(), 'Reviews']}
                        contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                        }}
                    />
                    <Bar dataKey='count' radius={[0, 4, 4, 0]} barSize={30}>
                        {chartData.map((entry,index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>    
        </div>
    );
};

export default RatingChart;
