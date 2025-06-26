import { useRef,useEffect,useContext } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CiMenuFries } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { gsapTimelineContext } from '../Contexts/gsapTimeline/gsapContext';
function Navbar() {
  const menuIconRef=useRef();
  const menuTextRef=useRef();
  const logoRef=useRef();
  const messageRef=useRef();
const tl=useContext(gsapTimelineContext);
useGSAP(()=>{
 
tl.from(menuIconRef.current,{
  opacity:0,
  duration:2,
  delay:0
})

tl.from(menuTextRef.current,{
  duration:0.5,
  opacity:0,
  y:5,
},"-=1")
tl.from(logoRef.current,{
  duration:0.5,
  opacity:0,
  scale:0.5,
  y:10
})
tl.from(messageRef.current,{
opacity:0,
duration:0.5
})
},[])
  return (
    <div className=" text-white  h-20 bg-[#151413] px-9 py-8 flex justify-between fixed top-0 right-0 left-0 z-30 w-full overflow-x-hidden" >
      <div className=" font-Cinzel text-white flex opacity-70">
      <span ref={menuIconRef}> <CiMenuFries className="  text-3xl cursor-pointer"   /></span> 
        <p className=" mt-[5.5px] ml-2 text-xl" ref={menuTextRef} >Menu</p>
      </div>
      <div className="opacity-70 mt-[1px] text-2xl"  ref={logoRef}>Logo</div>
      <span ref={messageRef}><FaRegMessage className="text-white text-2xl opacity-70 cursor-pointer mt-2" /></span>
    </div>



  );
}
export default Navbar;
