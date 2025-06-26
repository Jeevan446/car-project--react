import CarDes from "../../components/CarDes"
import Footer from "../../components/Footer"
import HeroSection from "../../components/HeroSection"
import Manufacture from "../../components/Manufcture"
import Navbar from "../../components/Navbar"

function HomePage(){
    return (
        <>
            
        <Navbar/>
        <HeroSection/>
         <CarDes/>
        <Manufacture/>
        <Footer/>
        </>
    )
}
export default HomePage