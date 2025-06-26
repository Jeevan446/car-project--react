import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
import car1 from "../assets/images/car1.png";
import car2 from "../assets/images/car2.png";
function CarDes() {
  const car1Ref = useRef();
  const car2Ref = useRef();
  const carName1ref = useRef();
  const carName2ref = useRef();
  const custumize1ref = useRef();
  const custumize2ref = useRef();
  const discovermore1Ref = useRef();
  const discovermore2Ref = useRef();
  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: car1Ref.current,
        start: "top 70%",
        // markers: true,
      },
    });
    tl1
      .from(car1Ref.current, {
        x: 30,
        opacity: 0,
        duration: 1,
      })
      .from(carName1ref.current, {
        y: 20,
        opacity: 0,
        duration: 0.4,
      })
.from(custumize1ref.current,{
   opacity:0,
   duration:1,
   x:-10
})
.from(discovermore1Ref.current,{
   opacity:0,
   duration:1,
   x:10
},"<")



const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: car2Ref.current,
    start: "top 70%",
    // markers: true,
  },
});
tl2
  .from(car2Ref.current, {
    x: 30,
    opacity: 0,
    duration: 1,
  })
  .from(carName2ref.current, {
    y: 20,
    opacity: 0,
    duration: 0.4,
  })
.from(custumize2ref.current,{
opacity:0,
duration:1,
x:-10
})
.from(discovermore2Ref.current,{
opacity:0,
duration:1,
x:10
},"<")

  }, []);
  // bg-[#08050A]//

  return (
    <div className=" bg-black opacity-90  text-white pt-[80px] pb-[50px] overflow-x-hidden">
      {" "}
      {/*  this is outer div contains two car full*/}
      <div className="flex  vsm:flex-col-reverse vsm:items-center xl:flex-row ">
        {" "}
        {/* div contains all part of first car*/}
        <div className=" text-white  xl:basis-[50%] xl:pl-[180px] xl:pt-10">
          {" "}
          {/*  div contains text part*/}
          <h1 className=" font-Bebas text-7xl" ref={carName1ref}>
            Raventa
          </h1>
          <div className=" mt-8 text-xl  flex gap-2">
            {/*  div contains buttons part*/}{" "}
            <div
              className=" opacity-100 border border-orange-500 py-3 px-4 cursor-pointer  hover:bg-orange-500 hover:duration-1000"
              ref={custumize1ref}
            >
              Customize Now
            </div>{" "}
            <div
              className=" border-1 border-orange-500 py-3 px-4 cursor-pointer hover:bg-orange-500 hover:duration-1000"
              ref={discovermore1Ref}
            >
              Discover More
            </div>
          </div>
        </div>
        <img
          src={car1}
          className=" sm:w-[500px] md:w-[680px]  vsm:w-[370px] xl:w-[850px] overflow-x-hidden"
          ref={car1Ref}
        ></img>
      </div>
      <div className=" flex vsm:flex-col-reverse vsm:items-center xl:flex-row  mt-9">
        {" "}
        {/* div contains all part of second car*/}
        <div className=" xl:basis-[50%] xl:pl-[180px] xl:pt-10 ">
          {/*  div contains text part*/}{" "}
          <h1 className=" font-Bebas text-7xl" ref={carName2ref}>
            Nexora
          </h1>
          <div className="mt-8 text-xl  flex gap-2">
            {" "}
            {/*  div contains buttons part*/}
            <div
              className=" border border-orange-500 py-3 px-4 cursor-pointer  hover:bg-orange-500 hover:duration-1000 "
              ref={custumize2ref}
            >
              Customize Now
            </div>{" "}
            <div
              className=" border border-orange-500 py-3 px-4 cursor-pointer  hover:bg-orange-500 hover:duration-1000 "
              ref={discovermore2Ref}
            >
              Discover More
            </div>
          </div>
        </div>
        <img
          src={car2}
          className="sm:w-[500px] md:w-[680px] vsm:w-[370px]  xl:w-[850px] overflow-x-hidden "
          ref={car2Ref}
        ></img>
      </div>
    </div>
  );
}
export default CarDes;
