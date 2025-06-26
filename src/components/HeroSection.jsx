import carVideo from "../assets/videos/car.mp4";
import { useContext,useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { gsapTimelineContext } from "../../Contexts/gsapTimeline/gsapContext";
function HeroSection() {
  const headingRef=useRef();
  const tl=useContext(gsapTimelineContext);
useGSAP(()=>{
tl.from((headingRef.current),{
opacity:0,
duration:0.5,
delay:0.5,
x:-10
})
},[])
  return (
    <div className=" h-screen  relative w-full overflow-x-hidden">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={carVideo} type="video/mp4" />
      </video>
      <div className=" font-Bebas  text-white  absolute left-[30px] opacity-50  lg:text-9xl sm:text-8xl sm:top-[65%] vsm:text-7xl vsm:top-[75%]" ref={headingRef}>
        VELZARO
      </div>
    </div>
  );
}
export default HeroSection;
