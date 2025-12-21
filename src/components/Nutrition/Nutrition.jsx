import React from 'react'
import CardSectionNutrition from './CardSectionNutrition'
import AddBtn from '../Buttons/Btn'

const Nutrition = () => {
  return (
    <div className='w-full h-full flex justify-center bg-gray-50'>
      <div className='w-[80%] py-12 bg-gray-50'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-2xl font-bold'>Nutrition</h1>
            <div>Track your meals and macros</div>
          </div>
            <div className='flex gap-5'>
              <AddBtn text="+ Add Meal" color="green" />
              <AddBtn text="Edit marco goals" color="green" />
            </div>
          </div>
        <br />
        <CardSectionNutrition/>
      </div>
    </div>
  )
}

export default Nutrition
