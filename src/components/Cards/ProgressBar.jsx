import React from 'react'

const ProgressBar = (props) => {

    const bg = {
        red: "bg-red-500",
        blue: "bg-blue-500",
        green: "bg-green-500",
    }

  return (
    <>
      {/* <progress value={value/(stats.getMacroTargets()[props.macro])} /> */}
        <div className='w-full h-2 bg-gray-200 relative overflow-hidden rounded-full'>
            <div className={`absolute top-0 left-0 h-full ${bg[props.color]}`} style={{ width: `${props.value}%` }}/>
        </div>
    </>
  )
}

export default ProgressBar
