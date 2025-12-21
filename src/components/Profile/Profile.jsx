import { Car } from 'lucide-react'
import React from 'react'
import CardSectionProfile from './CardSectionProfile'

const Profile = () => {
  return (
    <div className='w-full flex justify-center bg-gray-50 h-screen'>
      <div className='w-[80%] py-12 bg-gray-50'>
        <h1 className='text-2xl font-bold'>Profile</h1>
        <div>Manage your account and track your progress</div>
        <CardSectionProfile/>
      </div>
    </div>
  )
}

export default Profile
