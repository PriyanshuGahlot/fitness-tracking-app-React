import React from 'react'
import { Calendar } from 'lucide-react';

const DateAndTime = () => {

  const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

  const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]


    const date =()=>{
      const today = new Date();
      return days[today.getDay()]+", "+ months[today.getMonth()]+" "+today.getDate()+", "+today.getFullYear()
    }

  return (
    <div className='flex gap-2 text-gray-600 items-center'>
      <Calendar className='text-gray-600 h-5'/>
      {date()}
    </div>
  )
}

export default DateAndTime
