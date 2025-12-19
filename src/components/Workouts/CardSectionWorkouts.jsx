import React from 'react'
import SummaryCard from '../Cards/SummaryCard'
import { Dumbbell,Clock,Calendar } from 'lucide-react'
import RecentsCard from '../Cards/RecentsCard'
import { useStats ,getWorkouts} from '../../statsContext'

const CardSectionWorkouts = () => {
  
  const { totalWorkoutCount, totalWorkoutMins,thisWeeksWorkoutsCount } = useStats();

  return (
    <div className='h-full w-full'>
        <div className='w-full h-fit flex justify-between gap-10'>
            <SummaryCard color= "blue" heading="Total Workouts" icon={<Dumbbell className='text-blue-600'/>} data={`${totalWorkoutCount}`}/>
            <SummaryCard color= "green" heading="Total Minutes" icon={<Clock className='text-green-600'/>} data={`${totalWorkoutMins}`}/>
            <SummaryCard color= "red" heading="This week" icon={<Calendar className='text-red-600'/>} data={`${thisWeeksWorkoutsCount}`}/>
        </div>
        <div className='flex justify-between min-h-[40%] gap-[5%]'>
            <RecentsCard heading="Workout History" icon={<Dumbbell className='w-10 h-10'/>} subtext="No workouts logged yet" count={getWorkouts().length}/>
        </div>
    </div>
  )
}

export default CardSectionWorkouts
