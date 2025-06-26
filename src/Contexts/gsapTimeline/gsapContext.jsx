import { createContext } from "react";
import gsap from 'gsap'
export const gsapTimelineContext=createContext()

export function GsapTimelineContextProvider({children}){
    const  timeline=gsap.timeline();
    return(
        <gsapTimelineContext.Provider value={timeline}>
         {children}
        </gsapTimelineContext.Provider>
    )
}