import React from 'react'

const RecentsCard = ({heading,icon,count,subtext}) => {

  return (
    <div className='bg-white drop-shadow-md rounded-2xl w-full mt-8 p-4'>
        {heading}
        <div className='text-gray-400 flex h-[90%] w-full justify-center items-center flex flex-col gap-2'>
            {count == 0 && icon}
            {count ==0 && subtext}
        </div>
    </div>
  )
}

export default RecentsCard
