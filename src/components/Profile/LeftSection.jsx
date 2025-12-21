import React from 'react'
import ProfileCard from './ProfileCard'
import TrackStatsCard from './TrackStatsCard'

const LeftSection = () => {
  return (
    <div className='w-full h-full min-w-[60%] flex flex-col gap-5'>
      <ProfileCard/>
      <TrackStatsCard/>
    </div>
  )
}

export default LeftSection
