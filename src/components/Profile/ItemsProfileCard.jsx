import React from 'react'

const ItemsProfileCard = ({ title, data , icon}) => {
  return (
    <div className='flex gap-2 w-1/2'>
        <div className='flex items-center'>{icon}</div>
        <div className='flex flex-col'>
            <div className='text-gray-600 font-semibold'>{title}</div>
            {data}
        </div>
    </div>
  )
}

export default ItemsProfileCard
