import React from 'react'
import Date from './Date'
import CardSection from './CardSection/CardSectionDashboard'
import { useStats } from '../../statsContext'

const Dashboard = () => {

  const {username} = useStats()

  return (
    <div className='w-full h-full flex justify-center bg-gray-50 overflow-hidden'>
      <div className='w-[80%] py-12 bg-gray-50 h-full flex flex-col'>
      <div>Welcome back, {username}</div>
      <Date/>
      <br />
      <CardSection/>
    </div>
    </div>
  )
}

export default Dashboard
