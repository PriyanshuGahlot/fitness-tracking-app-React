import { Link } from "react-router-dom"

const NavBtn = ({ text, icon , target}) => {
  return (
    <Link to={target} className="flex items-center gap-2 py-2 px-4 rounded-xl hover:bg-gray-100 text-gray-600">
      {icon}
      {text}
    </Link>
  )
}

export default NavBtn
