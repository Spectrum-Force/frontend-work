import { Link } from "react-router-dom"
import K from "../Constants"
import { echoo } from "../assets/images"



const Navbar = () => {
  return (
<div className="w-full h-20 static bg-gradient-to-r from-orange-500  z-50 left-0 ">
  <div className="flex justify-center py-10 text-white mx-10 border-b">
    <div className="flex justify-between items-center w-3/4 max-w-screen-lg">
      <span>
        <img src={echoo} alt="echo" className="size-10 " />
        </span>
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