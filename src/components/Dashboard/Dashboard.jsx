import React from 'react'
import Date from './Date'
import CardSection from './CardSection/CardSection'

const Dashboard = () => {
  return (
    <div className='w-full h-[90%] flex justify-center bg-gray-50'>
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
