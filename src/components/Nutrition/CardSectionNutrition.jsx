import React from 'react'
import SummaryCard from '../Cards/SummaryCard'
import { Dumbbell,Clock,Calendar, Utensils,Zap, EggFried  } from 'lucide-react'
import * as stats from '../../Utils'
import RecentsCard from '../Cards/RecentsCard'

const CardSectionNutrition = () => {
  return (
    <div className='h-full w-full'>
        <div className='w-full h-fit flex justify-between gap-10'>
            <SummaryCard color= "green" heading="Calories" icon={<Zap  className='text-green-600'/>} data={`${stats.getWorkouts().length}`} hasProgressBar={true}/>
            <SummaryCard color= "red" heading="Protein" icon={<Utensils className='text-red-600'/>} data={`${stats.getWorkouts().length}`} hasProgressBar={true}/>
            <SummaryCard color= "blue" heading="Carbs" icon={<Utensils className='text-blue-600'/>} data={`${stats.getWorkouts().length}`} hasProgressBar={true}/>
            <SummaryCard color= "red" heading="Fats" icon={<Utensils className='text-red-600'/>} data={`${stats.getWorkouts().length}`} hasProgressBar={true}/>
        </div>
        <div className='flex justify-between min-h-[40%] gap-[5%]'>
            <RecentsCard heading="Recent Meals" icon={<Utensils className='w-10 h-10'/>} subtext="No meals logged yet" count={stats.getMeals().length}/>
        </div>
    </div>
  )
}

export default CardSectionNutrition
