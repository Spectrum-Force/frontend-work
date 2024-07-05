import { echo1, facebook, insta, link, twitter } from "../assets/images"


const Footer = () => {
  return (
    <div className="h-54 w-max-full bg-[#1F1F1F] ">
      <div>
        <img src={echo1} alt="logo" className="size-24" />
      </div>
      <div className=" items-center ">
        <div className="flex space-x-16 mt-3 text-white font-serif">
          <h2 className="uppercase font-bold ">About</h2>
          <p className="text-sm">Gallery | Register |Upcoming | Artist Page | Blog</p>
        </div>
        <div className="flex space-x-8 mt-3 text-white font-serif">
        <h2 className="uppercase font-bold ">Contact Us</h2>
        <p className="text-sm">Events Search (Legacy) | Events | Select Tickets Maroon 5 | Select Ticket Guitar Vibes</p>
        </div>
        <div className="flex space-x-4 items-center mt-3 text-white font-serif">
        <h2 className="uppercase font-bold ">Stay Connected</h2>
       <div className="flex space-x-10 items-center">
        <div className="flex">
          <img src={facebook} alt="facebook" className="size-6"/>
          <p className="text-sm">Facebook</p>
        </div>
        <div className="flex">
        <img src={twitter} alt="twitter" className="size-6 " />
        <p className="text-sm">Twitter</p>
        </div>
        <div className="flex">
        <img src={link} alt="link" className="size-6" />
        <p className="text-sm">Linkedin</p>
        </div>
        <div className="flex">
        <img src={insta} alt="insta" className="size-6"/>
        <p className="text-sm">Instagram</p>
        </div>
       </div>
        </div>
        <div className="uppercase ms-[800px] font-serif text-sm text-white">© 2024 echowave.com. all rights reserved</div>
      </div>
    </div>
  )
}

export default Footer