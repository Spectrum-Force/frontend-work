import { brassynight, color, electric,mask,sing,symphony } from "../assets/images"
import heroimage1 from "../assets/images/heroimage1.jpg"






const Home = () => {
  return (
    <div className="w-screen  object-contain  ">
      <div className="relative ">
        <img src={heroimage1} alt="hero-image" className="object-contain w-full h-full" />
        <div className="h-full w-full absolute bottom-0  bg-[#E1480D]/90 ">

        </div>
      </div>

      <div>
        <div className="flex space-x-24">
          <div><h2 className="uppercase font-bold text-[#373737]">upcoming event</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam </p></div>
          <button className="border-2 border-[#FFA569] rounded-lg">See Upcoming Events</button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <img src={brassynight} alt="brassy" />
          </div>
          <div>
            <img src={electric} alt="electric" />
          </div>
          <div className="col-span-1">
            <img src={symphony} alt="symphony" className="w-full h-[300px] object-cover" />
          </div>
          <div>
            <img src={sing} alt="sing" />
          </div>
          <div>
            <img src={mask} alt="mask" />
          </div>
          <div>
            <img src={color} alt="color" className="w-full h-[300px] object-cover" />
          </div>
        </div>
      </div>
      <div>statistics</div>
      <div>video</div>
      <div>stay up</div>
    </div>
  )
}

export default Home