import axios from "axios";


const Organiserforms = () => {
  // Post event to backend
  const postEvent = async (event) => {
      event.preventDefault();
      // Collect all inputs from form
      const formData = new FormData(event.target);
      // Post data to backend
      const response = await axios.post("https://backend-work-qwbo.onrender.com/events", formData);
      console.log(response);
  }
  return (

    <div className="mt-10">
      <h1 className="text-black font-bold text-3xl text-center">Create a New Event</h1>
     <form onSubmit={postEvent} className=" flex flex-col max-w-md mx-auto">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-[#ef4e18] font-bold mb-1 ml-4"
            >
              EVENT NAME
            </label>
            <input
              type="text"
              id="name"
              className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="price"
              className="block text-[#ef4e18] font-bold mb-1 ml-4"
            >
              PRICE
            </label>
            <input
              type="text"
              id="price"
              className=" h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="flyer"
              className="block text-[#ef4e18] font-bold mb-1 ml-4"
            >
              IMAGE
            </label>
            <input
              type="file"
              id="flyer"
              className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="location"
              className="block text-[#ef4e18] font-bold mb-1 ml-4"
            >
              LOCATION
            </label>
            <input
              type="text"
              id="location"
              className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="date"
              className="block text-[#ef4e18] font-bold mb-1 ml-4"
            >
              DATE
            </label>
            <input
              aria-label="date"
              type="date"
              id="date"
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