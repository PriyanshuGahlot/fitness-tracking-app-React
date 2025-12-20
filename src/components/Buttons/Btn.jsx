import React from 'react'

const Btn = (props) => {

    const bg = {
        red: "bg-red-500",
        blue: "bg-blue-600",
        green: "bg-green-600",
    }

  return (
    <button className={`${bg[props.color]} flex justify-center items-center text-white h-fit px-5 py-3 rounded-xl hover:cursor-pointer`}>
      {props.text}
    </button>
  )
}

export default Btn
