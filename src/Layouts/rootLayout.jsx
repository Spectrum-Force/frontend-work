import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"


const RootLayout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>


}

export default RootLayout