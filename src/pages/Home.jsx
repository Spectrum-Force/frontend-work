import { Search } from "lucide-react"
import { background,brassynight, color, electric, mask, sing, symphony } from "../assets/images"
// import heroimage1 from "../assets/images/heroimage1.jpg"






const Home = () => {
  return (
    <div className=" object-contain  ">
      <div className="relative">
<video autoPlay loop src={background} className="object-contain w-full h-full"></video>
        <div className="h-full w-full absolute bottom-0  bg-[#E1480D]/80 items-center justify-center flex flex-col ">
          <h className=" font-bold text-4xl text-white">Make Your Dream Come True</h>
          <p className="text-white text-lg mt-5 font-normal ">Meet your favorite artists, sport teams and parties</p>

          <div className="flex items-center mt-16">
            <input type="text" className="relative flex-grow  bg-[#d6d1cf] outline-transparent 
                         border-none p-3 px-12 w-[400px] rounded-2xl mr-10"
              placeholder="Search Artist,Team, or Venue" />
            <Search className="absolute text-gray-500 ml-[340px]" />
          </div>

        </div>

      </div>

      <div>
        <div className="flex space-x-24 place-items-center place-content-center ">
          <div className=" h-40" >
            <h2 className="uppercase font-bold text-[#373737] mt-8">upcoming event</h2>
            <p>LJoin us for festivals that celebrate culture, music, and community<br /> Our festivals are vibrant, multi-day events filled with diverse performances </p></div>
          <button className="border-2 border-[#FFA569] rounded-2xl w-[200px] h-10 hover:bg-[#FF6600]">See all Upcoming Events</button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="">
            <img src={brassynight} alt="brassy" />
          </div>
          <div className=" ">

            <img src={electric} alt="electric" />
            <p className="text-white">hhjrjkre</p>
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
          <div className=" flex   justify-around " >
            <div className="mt-24" >
              <p className="text-6xl text-white block font-bold underline decoration-2 decoration-white">468</p>
              <h2 className="text-xl text-white  mt-2 ">Events Organized</h2>
            </div>

            <div className="mt-24">
              <div >
                <p className="text-6xl text-white block font-bold underline decoration-2 decoration-white">18654</p>
                <h2 className="text-xl text-white  mt-2 ">Active Users</h2>
              </div>

            </div>
            <div className="mt-24">
              <div >
                <p className="text-6xl text-white  font-bold underline decoration-2 decoration-white">257800</p>
                <h2 className="text-xl text-white  mt-2">Tickets Sold</h2>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className=" h-12"></div>
      <div className="h-80 items-center ">
        <div className="object-contain bg-cover bg-center h-80 bg-[url('./assets/images/stay.jpg')]">
          <div className="h-80 bg-[#FC7216]/80 flex flex-col justify-center items-center">
            <h2 className="text-white font-bold text-2xl">Stay Up to date With Your Favorite Events!</h2>
            <p className="text-white mt-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh<br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
            <button className=" text-white border-2 border-white rounded-2xl w-[200px] h-10 bg-[#FC7216]/80 hover:bg-orange-600 " > Create Event</button>
          </div>

        </div>
      </div>
      <div className="bg-[#4E4E4E] h-2"></div>
    </div>
  )
}

export default Home