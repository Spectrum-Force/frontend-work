import { brassynight, color, electric, mask, sing, symphony } from "../assets/images"
import heroimage1 from "../assets/images/heroimage1.jpg"






const Home = () => {
  return (
    <div className="w-screen  object-contain  ">

      <div className="relative ">
        <img src={heroimage1} alt="hero-image" className="object-contain w-full h-full" />
        <div className="h-full w-full absolute bottom-0  bg-[#E1480D]/80 ">
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
      <div className="h-16 w-full "></div>
      <div className="object-contain h-80 bg-cover bg-fixed bg-center bg-[url('./assets/images/stats.jpg')] bg-no-repeat ">
        <div className="h-80 w-full bg-[#2A2A2A]/90 ">
        <div className="text-center mb-4">
          <div className="text-4xl text-white block font-bold underline decoration-2 decoration-white">
            468
          </div>
          <div className="text-xl mt-2">
           Events Organized
          </div>
        </div>
        </div>
      </div>
      <div>video</div>
      <div>stay up</div>
    </div>
  )
}

export default Home