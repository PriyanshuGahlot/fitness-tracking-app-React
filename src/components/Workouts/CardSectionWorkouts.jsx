import React from 'react'
import SummaryCard from '../Cards/SummaryCard'
import { Dumbbell,Clock,Calendar } from 'lucide-react'
import * as stats from '../../Utils'
import RecentsCard from '../Cards/RecentsCard'

const CardSectionWorkouts = () => {
  return (
    <div className='h-full w-full'>
        <div className='w-full h-fit flex justify-between gap-10'>
            <SummaryCard color= "blue" heading="Total Workouts" icon={<Dumbbell className='text-blue-600'/>} data={`${stats.getWorkouts().length}`}/>
            <SummaryCard color= "green" heading="Total Minutes" icon={<Clock className='text-green-600'/>} data={`${stats.getWorkouts().length}`}/>
            <SummaryCard color= "red" heading="This week" icon={<Calendar className='text-red-600'/>} data={`${stats.getWorkouts().length}`}/>
        </div>
        <div className='flex justify-between min-h-[40%] gap-[5%]'>
            <RecentsCard heading="Workout History" icon={<Dumbbell className='w-10 h-10'/>} subtext="No workouts logged yet" count={stats.getWorkouts().length}/>
        </div>
    </div>
  )
}

export default CardSectionWorkouts
