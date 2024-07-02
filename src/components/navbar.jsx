import { Link } from "react-router-dom"
import K from "../Constants"
const Navbar = () => {
  return (
    <div className="w-screen fixed top-0 left-0  z-50 justify-center">
      <div className="flex justify-between py-10 w-3/4  text-white border-b  ">
        <span>Logo</span>
        <div className="flex gap-x-16 justify-center">
          {
            K.NAVLINKS.map(
              (item, index) => {
                return <Link key={index} to={item.path} className="uppercase text-medium font-semibold">{item.name}</Link>
              }
            )
          }
        </div>
      </div>


    </div>
  )
}

export default Navbar