import React from 'react'
import SummaryCard from './SummaryCard'
import { Activity, Utensils, EggFried } from 'lucide-react';

const CardSection = () => {

    function getWorkoutCount(){
        return 0
    }

    function getCalorieCount(){
        return 0
    }

    function getProteinCount(){
        return 0
    }

  return (
    <div className='h-full w-full'>
      <div className='w-full h-fit flex justify-between'>
        <SummaryCard color = "blue" icon={<Activity className='text-blue-600'/>} heading= "This Week" data={`${getWorkoutCount()} Workouts`}/>
        <SummaryCard color = "green" icon={<Utensils className='text-green-600'/>} heading= "Today's calories" data={`${getCalorieCount()} Kcal`}/>
        <SummaryCard color = "red" icon={<EggFried className='text-red-600'/>} heading= "Today's protien" data={`${getProteinCount()} g`}/>
      </div>
    </div>
  )
}

export default CardSection
