import React from 'react'
import * as stats from '../../Utils'

const ProgressBar = (props) => {

    // const values ={
    //     calories : stats.getMeals()[0].calories,
    //     protein : stats.getMeals()[0].protein,
    //     carbs : stats.getMeals()[0].carbs,
    //     fats : stats.getMeals()[0].fats
    // }
    // const value = values[props.macro];


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
