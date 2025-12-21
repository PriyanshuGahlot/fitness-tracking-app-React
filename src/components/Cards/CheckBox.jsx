import React, {useState, useEffect} from 'react'
import { useStats } from '../../statsContext'

const CheckBox = (props) => {

    const [active, setActive] = useState(false);
    const {activeGraphItems, setactiveGraphItems} = useStats();

    const key = props.text.toLowerCase().replace(/\s+/g,"")

    const handleClick = () =>{
        setActive(prev => !prev)
        setactiveGraphItems(prev => {
        if (prev.includes(key)) {
            // remove the key
            return prev.filter(item => item !== key)
        } else {
            // add the key
            return [...prev, key]
        }
        })

    }

    useEffect(() => {
        setActive(activeGraphItems.includes(key))
    }, [activeGraphItems, key])

  return (
    <button
      onClick={handleClick}
      className={`w-full py-2  shadow-md flex justify-center items-center rounded-xl hover:cursor-pointer
        ${active ? 'bg-blue-200' : 'bg-gray-50'}`}>
      {props.text}
    </button>
  )
}

export default CheckBox
