  import { useRef, useEffect, useContext,useState } from "react";
  import { MdCancel } from "react-icons/md";

  import gsap from "gsap";
  import { useGSAP } from "@gsap/react";
  import { CiMenuFries } from "react-icons/ci";
  import { FaRegMessage } from "react-icons/fa6";
  import { gsapTimelineContext } from "../Contexts/gsapTimeline/gsapContext";
  import logo from "../assets/images/logo.png";

  function Navbar() {
    const menuIconRef = useRef();
    const menuTextRef = useRef();
    const logoRef = useRef();
    const messageRef = useRef();
    const crossRef=useRef();
    const menuItemRef=useRef();
    const tl = useContext(gsapTimelineContext);
    const tl2 = useRef(gsap.timeline({ paused: true }));
    useGSAP(() => {
      tl.from(menuIconRef.current, {
        opacity: 0,
        duration: 2,
        delay: 0,
      });

      tl.from(
        menuTextRef.current,
        {
          duration: 0.5,
          opacity: 0,
          y: 5,
        },
        "-=1"
      );
      tl.from(logoRef.current, {
        duration: 0.5,
        opacity: 0,
        scale: 0.5,
        y: 10,
      });
      tl.from(messageRef.current, {
        opacity: 0,
        duration: 0.5,
      });
      tl2.current.to(menuItemRef.current,{
          left:"0%",
          duration:1
      })
       
      tl2.current.from('.menuoptions',{
       y:8,
       opacity:0,
       stagger:0.4
      })

  tl2.current.from(crossRef.current,{
    opacity:0,
    duration:0.7
  })
    }, []);
    function menuCLicked(){
      tl2.current.play();
    }
    function crossClicked(){
      tl2.current.reverse()
    }
    return (
      <>
        <div className="  text-white  h-20 bg-[#151413] px-9 py-8 flex justify-between fixed top-0 right-0 left-0 z-30 w-full overflow-x-hidden">
        {/* div for navbar */}
          <div className=" font-Cinzel text-white flex opacity-70">
            <span ref={menuIconRef} onClick={menuCLicked}>
              {" "}
              <CiMenuFries className="  text-3xl cursor-pointer" />
            </span>
            <p className=" mt-[5.5px] ml-2 text-xl" ref={menuTextRef}>
              Menu
            </p>
          </div>
          <div className=" text-2xl" ref={logoRef}>
            <img src={logo} className=" w-[60px] h-[40px]"></img>
          </div>
          <span ref={messageRef}>
            <FaRegMessage className="text-white text-2xl opacity-70 cursor-pointer mt-2" />
          </span>
        </div>
        <div className="fixed top-[0px] left-[-100%] bg-[#3674B5] bg-white/35 backdrop-blur-xl text-black z-100  pt-2 pb-4 px-5 leading-[30px] font-mono rounded " ref={menuItemRef}>
          {/* div for menu */}
  <span ref={crossRef} onClick={crossClicked}>       <MdCancel className=" text-2xl text-white cursor-pointer ml-[170px] "/></span>
          <div className=" inline-block cursor-pointer menuoptions">Home</div>
          <br />
          <div className=" inline-block cursor-pointer menuoptions">About us</div>
          <br />
          <div className=" inline-block cursor-pointer menuoptions">Services and features</div>
          <br />
          <div className=" inline-block cursor-pointer menuoptions">Gallery</div>
          <br />
          <div className=" inline-block cursor-pointer menuoptions">Contact us</div>
          <br />
        </div>
      </>
    );
  }
  export default Navbar;
