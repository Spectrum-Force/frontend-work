

const Organiserforms = () => {
  return (
    <div className="bg-red-500 bg-cover h-100vh">
      <h1 className="text-white font-bold text-center">Create a New Event</h1>
     <form className=" flex flex-col max-w-md mx-auto">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-black font-bold mb-1 ml-4"
            >
              NAME
            </label>
            <input
              type="text"
              className="h-10 w-full px-2 py-1 border-[#00B4BF] border-2 rounded-lg "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-black font-bold mb-1 ml-4"
            >
              PRICE
            </label>
            <input
              type="text"
              className=" h-10 w-full px-2 py-1 border-[#00B4BF] border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-black font-bold mb-1 ml-4"
            >
              IMAGE
            </label>
            <input
              type="file"
              className="h-10 w-full px-2 py-1 border-[#00B4BF] border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-black font-bold mb-1 ml-4"
            >
              VENUE
            </label>
            <input
              type="text"
              className="h-10 w-full px-2 py-1 border-[#00B4BF] border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-black font-bold mb-1 ml-4"
            >
              DATE
            </label>
            <input
              aria-label="Date"
              type="date"
              className="h-10 w-full px-2 py-1 border-[#00B4BF] border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <button type="submit" className="h-10 w-40 px-3 py-2 border-[#00B4BF] border-2 rounded-3xl"
            >Create Event</button>
          </div>
        </form>
      
      
   
 
      
    </div>
  )
}

export default Organiserforms