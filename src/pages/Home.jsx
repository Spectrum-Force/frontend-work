import heroimage from "../assets/images/heroimage.jpg"

const Home = () => {
  return (
    <div  className="w-screen  object-contain">
      <div>
        <img src={heroimage} alt="nnfjfk" className="object-contain w-full max-h-full"/>
        <div className="h-full w-full absolute top-0 left-0 bg-[#E1480D]/90">

        </div>
      </div>

      <div>upcoming</div>
      <div>statistics</div>
      <div>video</div>
      <div>stay up</div>
      </div>
  )
}

export default Home