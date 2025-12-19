import React from 'react'
import SummaryCard from '../../Cards/SummaryCard'
import { Activity, Utensils, EggFried } from 'lucide-react';
import RecentsCard from '../../Cards/RecentsCard';
import * as stats from '../../../Utils'

const CardSection = () => {

  return (
    <div className='h-full w-full'>
      <div className='w-full h-fit flex justify-between gap-10'>
        <SummaryCard color = "blue" icon={<Activity className='text-blue-600'/>} heading= "This Week" data={`${stats.getWorkouts().length} Workouts`}/>
        <SummaryCard color = "green" icon={<Utensils className='text-green-600'/>} heading= "Today's calories" data={`${stats.getCalorieCount()} Kcal`}/>
        <SummaryCard color = "red" icon={<EggFried className='text-red-600'/>} heading= "Today's protien" data={`${stats.getProteinCount()} g`}/>
      </div>
      <div className='flex justify-between min-h-[40%] gap-[5%]'>
        <RecentsCard heading="Recent Workouts" icon={<Activity className='w-10 h-10'/> } subtext={"No recent workouts"} count={stats.getWorkouts().length}/>
        <RecentsCard heading="Today's Meals" icon={<Utensils className='w-10 h-10'/>} subtext={"No meals logged today"} count={stats.getMeals().length}/>
      </div>
    </div>
  )
}

export default CardSection
