import { Routes,Route } from "react-router"
import HomePage from "../pages/Home/Home"
import { GsapTimelineContextProvider} from "../Contexts/gsapTimeline/gsapContext"
function App(){
  return(
    <>
    <GsapTimelineContextProvider>
     <Routes>
      <Route path='/' element={<HomePage/>}></Route>
     </Routes></GsapTimelineContextProvider>
    </>
  )
}
export default App