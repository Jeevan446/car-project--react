import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import image from "../assets/images/carmanufacturing.jpg";
function Manufacture() {
  const containerRef=useRef();
     useGSAP(()=>{
      gsap.from(containerRef.current,{
        scale:0.3,
        scrollTrigger:{
          trigger:containerRef.current,
          // markers:true,
          scrub:true,
          end:'top 40%'
        }

      })
     })
  return (
    <div className=" w-full bg-[#191919]  relative pt-[60px] pb-10">
      {/* main container */}
      <div className=" w-full flex justify-center" ref={containerRef}>
        {/* contains image and texts */}

        <img src={image} className=" h-[500px] w-[100%] object-cover "></img>
        <p className=" absolute  left-auto vsm:text-5xl vsm:top-[84%] sm:top-[80%] sm:text-7xl md:text-8xl md:top-[73%] lg:text-9xl z-20 text-yellow-400 font-Bebas">
          In 59+ countries
        </p>
        <div className=" w-[100%] h-[500px] bg-black opacity-75 absolute"></div>
      </div>
    </div>
  );
}
export default Manufacture;
