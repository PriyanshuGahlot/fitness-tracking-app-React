import React from 'react'

const StatCard = (props) => {
  return (
    <div className='p-4 bg-blue-100 flex flex-col rounded-xl'>
        <div className='text-gray-600'>Current {props.title}</div>
        <div>{props.data}</div>
    </div>
  )
}

export default StatCard
