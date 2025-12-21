import React from 'react'
import SummaryCard from '../../Cards/SummaryCard'
import { Activity, Utensils, EggFried } from 'lucide-react';
import RecentsCard from '../../Cards/RecentsCard';
import { useStats ,getWorkouts,getMeals} from '../../../statsContext';
import GraphCard from '../../Cards/GraphCard';


const CardSection = () => {

  const { todaysKcal, thisWeeksWorkoutsCount,todaysProtein } = useStats();

  return (
    <div className='flex flex-1 flex-col w-full h-full'>
      <div className='w-full flex justify-between gap-10'>
        <SummaryCard color = "blue" icon={<Activity className='text-blue-600'/>} heading= "This Week" data={`${thisWeeksWorkoutsCount} Workouts`}/>
        <SummaryCard color = "green" icon={<Utensils className='text-green-600'/>} heading= "Today's calories" data={`${todaysKcal} Kcal`}/>
        <SummaryCard color = "red" icon={<EggFried className='text-red-600'/>} heading= "Today's protien" data={`${todaysProtein} g`}/>
      </div>
      <div className='flex flex-1 justify-between gap-[5%] max-h-[60vh]'>
        {/* <RecentsCard heading="Recent Workouts" icon={<Activity className='w-10 h-10'/> } subtext={"No recent workouts"} count={getWorkouts().length}/>
        <RecentsCard heading="Today's Meals" icon={<Utensils className='w-10 h-10'/>} subtext={"No meals logged today"} count={getMeals().length}/> */}
        <GraphCard/>
      </div>
    </div>
  )
}

export default CardSection
