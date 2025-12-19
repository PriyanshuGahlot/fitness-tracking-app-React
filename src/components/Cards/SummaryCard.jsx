import React from 'react'
import ProgressBar from './ProgressBar'

const SummaryCard = ({color,icon,heading,data, hasProgressBar,value}) => {

  const darkColors = {
  red: "border-red-600",
  blue: "border-blue-600",
  green: "border-green-600",
}

  const lightColorsBg = {
  red: "bg-red-100",
  blue: "bg-blue-100",
  green: "bg-green-100",
}

  return (
    <div className={`flex flex-col justify-between p-4 w-full h-35 bg-white drop-shadow-md rounded-2xl border-l-4 ${darkColors[color]}`}>
      <div className={`p-2 w-10 h-10 ${lightColorsBg[color]} rounded-xl`}>
        {icon}
      </div>
      <div>
        <div className='w-full text-gray-600'>{heading}</div>
        <div className='w-full'>{data}</div>
      </div>
      {hasProgressBar && <ProgressBar value={value*100} color = {color}/>}
    </div>
  )
}

export default SummaryCard
