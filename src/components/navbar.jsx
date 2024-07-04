import { Link } from "react-router-dom"
import K from "../Constants"

const Navbar = () => {
  return (
<div className="w-screen fixed top-0 left-0 z-50">
  <div className="flex justify-center py-10 text-white mx-10 border-b">
    <div className="flex justify-between items-center w-3/4 max-w-screen-lg">
      <span>Logo</span>
      <div className="flex gap-x-16 justify-center flex-grow">
        {K.NAVLINKS.map((item, index) => (
          <Link key={index} to={item.path} className="uppercase text-medium font-semibold ">{item.name}</Link>
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default Navbar