import { NavLink } from "react-router-dom"

const NavBtn = ({ text, icon , target}) => {
  return (
    <NavLink to={target} className={({ isActive }) =>
        `flex items-center gap-2 py-2 px-4 rounded-xl
         ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`
      }>
      {icon}
      {text}
    </NavLink>
  )
}

export default NavBtn
