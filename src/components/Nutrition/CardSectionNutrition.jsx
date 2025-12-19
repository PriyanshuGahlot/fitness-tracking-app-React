import React from 'react'
import SummaryCard from '../Cards/SummaryCard'
import {Utensils,Zap } from 'lucide-react'
import RecentsCard from '../Cards/RecentsCard'
import { useStats , getMeals } from '../../statsContext'

const CardSectionNutrition = () => {
  const { todaysKcal, todaysProtein, todaysCarbs, todaysFats ,kcalTarget,fatsTarget,proteinTarget,carbsTarget} = useStats();
  return (
    <div className='h-full w-full'>
        <div className='w-full h-fit flex justify-between gap-10'>
            <SummaryCard color= "green" heading="Calories" icon={<Zap  className='text-green-600'/>} data={`${todaysKcal}`} hasProgressBar={true} value={todaysKcal/kcalTarget}/>
            <SummaryCard color= "red" heading="Protein" icon={<Utensils className='text-red-600'/>} data={`${todaysProtein}`} hasProgressBar={true} value={todaysProtein/proteinTarget}/>
            <SummaryCard color= "blue" heading="Carbs" icon={<Utensils className='text-blue-600'/>} data={`${todaysCarbs}`} hasProgressBar={true} value={todaysCarbs/carbsTarget}/>
            <SummaryCard color= "red" heading="Fats" icon={<Utensils className='text-red-600'/>} data={`${todaysFats}`} hasProgressBar={true} value={todaysFats/fatsTarget}/>
        </div>
        <div className='flex justify-between min-h-[40%] gap-[5%]'>
            <RecentsCard heading="Recent Meals" icon={<Utensils className='w-10 h-10'/>} subtext="No meals logged yet" count={getMeals().length}/>
        </div>
    </div>
  )
}

export default CardSectionNutrition
