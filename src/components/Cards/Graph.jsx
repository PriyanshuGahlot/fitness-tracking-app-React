import React from 'react';
'use client';
import { Line, LineChart, ResponsiveContainer, XAxis,YAxis, CartesianGrid, Legend,Tooltip} from 'recharts';
import { useStats } from '../../statsContext';

const data = [
  { date: '2024-01-01', benchpr: 60, squatpr: 80, weight: 92 },
  { date: '2024-01-05', benchpr: 62, squatpr: 82, weight: 91.8 },
  { date: '2024-01-09', benchpr: 64, squatpr: 85, weight: 91.6 },
  { date: '2024-01-13', benchpr: 65, squatpr: 87, weight: 91.4 },
  { date: '2024-01-17', benchpr: 67, squatpr: 90, weight: 91.2 },
  { date: '2024-01-21', benchpr: 68, squatpr: 92, weight: 91.0 },
  { date: '2024-01-25', benchpr: 70, squatpr: 95, weight: 90.8 },
  { date: '2024-01-29', benchpr: 72, squatpr: 97, weight: 90.6 },
  { date: '2024-02-02', benchpr: 73, squatpr: 100, weight: 90.4 },
  { date: '2024-02-06', benchpr: 75, squatpr: 102, weight: 90.2 },

  { date: '2024-02-10', benchpr: 76, squatpr: 105, weight: 90.0 },
  { date: '2024-02-14', benchpr: 78, squatpr: 107, weight: 89.8 },
  { date: '2024-02-18', benchpr: 80, squatpr: 110, weight: 89.6 },
  { date: '2024-02-22', benchpr: 81, squatpr: 112, weight: 89.4 },
  { date: '2024-02-26', benchpr: 83, squatpr: 115, weight: 89.2 },
  { date: '2024-03-01', benchpr: 85, squatpr: 117, weight: 89.0 },
  { date: '2024-03-05', benchpr: 86, squatpr: 120, weight: 88.8 },
  { date: '2024-03-09', benchpr: 88, squatpr: 122, weight: 88.6 },
  { date: '2024-03-13', benchpr: 90, squatpr: 125, weight: 88.4 },
  { date: '2024-03-17', benchpr: 91, squatpr: 127, weight: 88.2 },

  { date: '2024-03-21', benchpr: 93, squatpr: 130, weight: 88.0 },
  { date: '2024-03-25', benchpr: 95, squatpr: 132, weight: 87.8 },
  { date: '2024-03-29', benchpr: 96, squatpr: 135, weight: 87.6 },
  { date: '2024-04-02', benchpr: 98, squatpr: 137, weight: 87.4 },
  { date: '2024-04-06', benchpr: 100, squatpr: 140, weight: 87.2 },
  { date: '2024-04-10', benchpr: 101, squatpr: 142, weight: 87.0 },
  { date: '2024-04-14', benchpr: 103, squatpr: 145, weight: 86.8 },
  { date: '2024-04-18', benchpr: 105, squatpr: 147, weight: 86.6 },
  { date: '2024-04-22', benchpr: 106, squatpr: 150, weight: 86.4 },
  { date: '2024-04-26', benchpr: 108, squatpr: 152, weight: 86.2 },

  { date: '2024-04-30', benchpr: 110, squatpr: 155, weight: 86.0 },
  { date: '2024-05-04', benchpr: 111, squatpr: 157, weight: 85.8 },
  { date: '2024-05-08', benchpr: 113, squatpr: 160, weight: 85.6 },
  { date: '2024-05-12', benchpr: 115, squatpr: 162, weight: 85.4 },
  { date: '2024-05-16', benchpr: 116, squatpr: 165, weight: 85.2 },
  { date: '2024-05-20', benchpr: 118, squatpr: 167, weight: 85.0 },
  { date: '2024-05-24', benchpr: 120, squatpr: 170, weight: 84.8 },
  { date: '2024-05-28', benchpr: 121, squatpr: 172, weight: 84.6 },
  { date: '2024-06-01', benchpr: 123, squatpr: 175, weight: 84.4 },
  { date: '2024-06-05', benchpr: 125, squatpr: 177, weight: 84.2 },

  { date: '2024-06-09', benchpr: 126, squatpr: 180, weight: 84.0 },
  { date: '2024-06-13', benchpr: 128, squatpr: 182, weight: 83.8 },
  { date: '2024-06-17', benchpr: 130, squatpr: 185, weight: 83.6 },
  { date: '2024-06-21', benchpr: 131, squatpr: 187, weight: 83.4 },
  { date: '2024-06-25', benchpr: 133, squatpr: 190, weight: 83.2 },
  { date: '2024-06-29', benchpr: 135, squatpr: 192, weight: 83.0 },
  { date: '2024-07-03', benchpr: 136, squatpr: 195, weight: 82.8 },
  { date: '2024-07-07', benchpr: 138, squatpr: 197, weight: 82.6 },
  { date: '2024-07-11', benchpr: 140, squatpr: 200, weight: 82.4 },
  { date: '2024-07-15', benchpr: 142, squatpr: 202, weight: 82.2 },
];


const colors = [
  '#FF8A80', // dark pastel red
  '#4682B4', // dark pastel steel blue
  '#66CDAA', // dark pastel teal
  '#FFA07A', // dark pastel orange
  '#FFD700', // dark pastel yellow
  '#BA55D3', // dark pastel purple
  '#F0E68C', // dark pastel khaki
  '#90EE90', // dark pastel green
  '#87CEFA', // dark pastel blue
  '#FF69B4', // dark pastel pink
];


const Graph = () => {

  const {activeGraphItems} = useStats();

  return (
    <ResponsiveContainer height="100%" width="100%">
        <LineChart data={data}>
            <Legend/>
            <Tooltip/>
            <XAxis dataKey="date"/>
            <YAxis/>
            <CartesianGrid strokeDasharray={"5 5"}/>
            {activeGraphItems.map((key, index) => (
              <Line key={key} dataKey={key} stroke={colors[index]} connectNulls/>
            ))}
        </LineChart>
    </ResponsiveContainer>
  );
}

export default Graph;
