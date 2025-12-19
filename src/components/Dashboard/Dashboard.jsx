import React from 'react'
import Date from './Date'
import CardSection from './CardSection/CardSectionDashboard'

const Dashboard = () => {
  return (
    <div className='w-full h-full flex justify-center bg-gray-50 overflow-hidden'>
      <div className='w-[80%] py-12 bg-gray-50'>
      <div>Welcome back, Name</div>
      <Date/>
      <br />
      <CardSection/>
    </div>
    </div>
  )
}

export default Dashboard
