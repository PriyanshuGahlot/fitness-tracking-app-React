import React from 'react'
import { useStats } from '../../statsContext'
import { User,Weight,Ruler,ScanHeart } from 'lucide-react';
import ItemsProfileCard from './ItemsProfileCard';

const ProfileCard = () => {

    const {username, email} = useStats()

  return (
    <div className='bg-white drop-shadow-md rounded-2xl w-full mt-8 p-8'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-4 items-center'>
            <User className='text-blue-600 bg-blue-100 h-20 w-20 p-4 rounded-full'/>
            <div>
              <div className='text-xl font-bold'>{username}</div>
              <div className='text-gray-500'>{email}</div>
            </div>
          </div>
          <button className='text-blue-600 hover:bg-blue-100 px-8 py-4 rounded-xl h-fit'>Edit Profile</button>
        </div>

      <div className='mt-8 flex flex-col gap-4'>
        <div className='flex justify-between'>
          <ItemsProfileCard title="Current Weight (kg)" icon ={<Weight />} data ={"not set"}/>
          <ItemsProfileCard title="Current Height (cm)" icon ={<Ruler />} data ={"not set"}/>
        </div>
        <div>
          <ItemsProfileCard title="Body Mass Index" icon ={<ScanHeart />} data={"not set"}/>
        </div>
      </div>

    </div>
  )
}

export default ProfileCard
