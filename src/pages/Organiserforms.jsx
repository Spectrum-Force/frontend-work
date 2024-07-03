

const Organiserforms = () => {
  return (
    <div className="bg-red-500 bg-cover h-100vh">
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
              id="name"
              name="name"
              className="h-14 w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg "
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
              id="name"
              name="name"
              className=" h-14 w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg"
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
              id="name"
              name="name"
              className="h-14 w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg"
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
              id="name"
              name="name"
              className="h-14 w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg"
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
              name="name"
              className="h-14 w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <button>
            <input
              type="submit"
              id="onClick"
              className="h-14 w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg"
            />
            </button>
            
          </div>
        </form>
      
      
   
 
      
    </div>
  )
}

export default Organiserforms