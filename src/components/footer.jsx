import {facebook, insta, link, twitter } from "../assets/images"


const Footer = () => {
  return (
    <div className="h-54 w-full bg-[#1F1F1F] p-4">
  <div className="flex flex-col items-center text-white font-serif space-y-3">
    <div className="flex flex-col items-center space-y-2">
      <h2 className="uppercase font-bold">About</h2>
      <p className="text-sm text-center">Gallery | Register | Upcoming | Artist Page | Blog</p>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <h2 className="uppercase font-bold">Contact Us</h2>
      <p className="text-sm text-center">Events Search (Legacy) | Events | Select Tickets Maroon 5 | Select Ticket Guitar Vibes</p>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <h2 className="uppercase font-bold">Stay Connected</h2>
      <div className="flex space-x-4 items-center">
        <div className="flex items-center space-x-1">
          <img src={facebook} alt="facebook" className="h-6 w-6"/>
          <p className="text-sm">Facebook</p>
        </div>
        <div className="flex items-center space-x-1">
          <img src={twitter} alt="twitter" className="h-6 w-6"/>
          <p className="text-sm">Twitter</p>
        </div>
        <div className="flex items-center space-x-1">
          <img src={link} alt="linkedin" className="h-6 w-6"/>
          <p className="text-sm">LinkedIn</p>
        </div>
        <div className="flex items-center space-x-1">
          <img src={insta} alt="instagram" className="h-6 w-6"/>
          <p className="text-sm">Instagram</p>
        </div>
      </div>
    </div>
    <div className="uppercase text-sm text-center">
      © 2024 echowave.com. all rights reserved
    </div>
  </div>
</div>

  )
}

export default Footer