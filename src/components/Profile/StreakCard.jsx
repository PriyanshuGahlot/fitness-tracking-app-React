import React from 'react'
import { Flame, Award } from 'lucide-react';
import { getWorkouts } from '../../statsContext';

const StreakCard = () => {
  return (
    <div className='bg-white drop-shadow-md rounded-2xl w-full mt-8 p-6 bg-gradient-to-br from-orange-50 to-rose-100'>
        <div className='flex gap-2'>
            <Flame className='text-orange-500'/> Workout Streak
        </div>
        <div className='text-gray-700 mt-8'>Current Streak</div>
        <div className='flex gap-2 items-center mb-4 mt-3'>
            <div className='text-4xl'>{getWorkouts().length}</div>
            <div className='text-gray-700'>days</div>
        </div>
        <hr className='text-orange-400'/>
        <div className='mt-4'>
            <div className='text-gray-600'>Longest Streak</div>
            <div className='flex gap-2 mt-2'>
                <Award className='text-orange-600'/>
                <div>{getWorkouts().length} days</div>
            </div>
        </div>
    </div>
  )
}

export default StreakCard
