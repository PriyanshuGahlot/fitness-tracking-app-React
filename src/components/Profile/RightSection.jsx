import React from 'react'
import StreakCard from './StreakCard'
import Btn from '../Buttons/Btn'
import { NavLink } from 'react-router-dom'

const RightSection = () => {
  return (
    <div className='w-full h-full flex flex-col gap-5'>
      <StreakCard/>
        <NavLink to="/" className="w-full flex bg-red-500 items-center justify-center text-white rounded-xl p-4">
            Log Out
        </NavLink>

    </div>
  )
}

export default RightSection
