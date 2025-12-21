import React from 'react'
import Graph from './Graph'
import CheckBox from './checkBox'
import { ChartLine } from 'lucide-react';
import { useStats } from '../../statsContext';

const GraphCard = () => {

  const {trackedStats, setTrackedStats} = useStats();

  return (
    <div className="bg-white drop-shadow-md rounded-2xl w-full mt-8 p-8 flex flex-col gap-5 pb-20 min-h-[55vh]">
      <div className='flex gap-2'>
        <ChartLine className='text-blue-600'/>
        Your Progress
      </div>
      <div className='flex gap-10 h-full w-full'>
        <div className='h-full flex flex-col gap-5 w-[30%] overflow-y-auto'>
          {trackedStats.map((i) => (
            <CheckBox key={i} text={i} />
          ))}
        </div>
        <div className='h-full w-full'><Graph/></div>
      </div>
    </div>
  )
}

export default GraphCard
