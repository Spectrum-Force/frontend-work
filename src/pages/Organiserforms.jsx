

const Organiserforms = () => {
  return (
    <div>
      <h1 className="text-black font-bold text-3xl text-center">Create a New Event</h1>
     <form className=" flex flex-col max-w-md mx-auto">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-[#ef4e18] font-bold mb-1 ml-4"
            >
              NAME
            </label>
            <input
              type="text"
              className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-[#ef4e18] font-bold mb-1 ml-4"
            >
              PRICE
            </label>
            <input
              type="text"
              className=" h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-[#ef4e18] font-bold mb-1 ml-4"
            >
              IMAGE
            </label>
            <input
              type="file"
              className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-[#ef4e18] font-bold mb-1 ml-4"
            >
              VENUE
            </label>
            <input
              type="text"
              className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-[#ef4e18] font-bold mb-1 ml-4"
            >
              DATE
            </label>
            <input
              aria-label="Date"
              type="date"
              className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <button type="submit" className="h-10 w-40 px-3 py-2 border-black border-2 rounded-3xl hover:bg-[#ef4e18]"
            >Create Event</button>
          </div>
        </form>
      
      
   
 
      
    </div>
  )
}

export default Organiserforms