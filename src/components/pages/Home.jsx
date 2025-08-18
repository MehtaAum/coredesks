import { createContext } from "react"
import { useState } from "react";
import Navbar from "../reuse/Navbar"
import Panel from "./Panel"

export const toggleValue = createContext()

const Home = () => {
    
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0a] w-full h-[100vh]">
      <toggleValue.Provider value={{isOpen , setIsOpen}}>
        <Navbar></Navbar>
        <Panel></Panel>
      </toggleValue.Provider>

    </div>
  )
}

export default Home
