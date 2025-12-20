import React from 'react'
import { NavLink } from "react-router-dom"
import Btn from '../Buttons/Btn'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const CardSectionProfile = () => {
  return (
    <div className='h-full w-full'>
        <div className='flex justify-between gap-10'>
          <LeftSection/>
          <RightSection/>
      </div>
    </div>
  )
}

export default CardSectionProfile
