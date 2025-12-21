import React from 'react'
import Btn from '../Buttons/Btn'
import { useStats } from '../../statsContext'
import StatCard from './StatCard';

const TrackStatsCard = () => {

    const {trackedStats, bodyStats ,units} = useStats();

  return (
    <div className='bg-white drop-shadow-md rounded-2xl w-full p-8'>
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <div>Current Body Stats</div>
                    <div className='text-gray-600'>Track your body measurements over time</div>
                </div>
                <div className='flex gap-2'>
                    <Btn text ="+ Log Stats" color="green"/>
                    <Btn text ="+ Add Field" color="green"/>
                </div>
            </div>
            <div className='mt-8 grid grid-cols-3 gap-4'>
                {trackedStats.map((stat, index) => {
                    const key = stat.toLowerCase().replace(/\s+/g, "")
                    return (
                        <StatCard
                        key={index}
                        title={stat}
                        data={bodyStats.at(-1)[key]+" "+units[key]}
                        />
                    )
                    })}
            </div>
        </div>
    </div>
  )
}

export default TrackStatsCard
