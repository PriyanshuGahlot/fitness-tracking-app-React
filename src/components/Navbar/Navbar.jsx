import React from 'react'
import NavBtn from './NavBtn'
import NavLogo from './NavLogo'
import { Dumbbell,House,Utensils,User } from 'lucide-react'

const Navbar = () => {
  return (
    <div className=' h-[8%] w-full flex justify-between items-center py-12 px-16 drop-shadow-xs border-b-1 border-gray-200'>
      <div className='flex items-center'>
        <NavLogo/> 
        <div className='ml-2 text-xl'>
          FiTrack
        </div>
      </div>
      <div className='flex justify-between gap-5 '>
        <NavBtn text = "Dashboard" icon = {<House />} target='/' />
        <NavBtn text = "Workouts" icon = {<Dumbbell/>} target='/workouts' />
        <NavBtn text = "Nutrition" icon = {<Utensils/>} target='/nutrition' />
        <NavBtn text = "Profile" icon = {<User />} target='/profile' />
      </div>
    </div>
  )
}

export default Navbar
