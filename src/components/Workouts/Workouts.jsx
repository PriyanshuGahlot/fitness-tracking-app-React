import React from 'react'
import CardSectionWorkouts from './CardSectionWorkouts'
import AddBtn from '../Buttons/Btn'

const Workouts = () => {
  return (
    <div className='w-full h-full flex justify-center bg-gray-50'>
      <div className='w-[80%] py-12 bg-gray-50'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-2xl font-bold'>Workouts</h1>
            <div>Track and manage your workout sessions</div>
          </div>
            <AddBtn text="+ Add Workout" color="blue" />
          </div>
        <br />
        <CardSectionWorkouts/>
      </div>
    </div>
  )
}

export default Workouts
