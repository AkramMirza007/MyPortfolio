import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { NavLink  } from 'react-router-dom';




function Nav() {

  useGSAP(() => {
    gsap.from(".navA", {
      y: "-50%",
      opacity: 0,
      delay: 0.2,
      duration: 1,
      ease: 'elastic.out(1, 0.1)'
    });


  })

  return (
    <>
      <nav className=' bg-gradient-to-r m-0 from-[#ffc1cd] to-[#00eeff]  py-[4vw] md:py-[1vw] px-2 fixed md:top-[1.5vw] top-[3vh] left-1/2 transform -translate-x-1/2 w-fit h-[3vh] md:h-[3vw]  shadow-md z-40 border-b-4 border-white border-r-2'>

        <div className="rNav mouse-opacity w-fit h-full flex items-center p-0  m-0 justify-between">
          <NavLink to='/' href='' className={({ isActive }) => ` ${isActive ? " bg-white/15 shadow-md rounded-lg" : "bg-transparent"}  navA mouse-opacity py-[0.2rem] px-[1rem]  md:h-[2.5vw] h-[3.5vh] font-light outline-none `} >
            <img className=' w-full  h-full ' src="./src/imgsForweb/home.png" alt="" />
          </NavLink>
          <NavLink to='webprojects' href="" className={({ isActive }) => ` ${isActive ? " bg-white/15 shadow-md rounded-lg" : "bg-transparent"}  navA mouse-opacity py-[0.2rem] px-[1rem]  md:h-[2.5vw] h-[3.5vh] font-light outline-none `} >
            <img className=' w-full  h-full' src="./src/imgsForweb/art.png" alt="" />
          </NavLink>
          <NavLink to='contactUs' href="" className={({ isActive }) => ` ${isActive ? " bg-white/15 shadow-md rounded-lg" : "bg-transparent"}  navA mouse-opacity py-[0.2rem] px-[1rem]  md:h-[2.5vw] h-[3.5vh] font-light outline-none `} >
            <img className=' w-full  h-full' src="./src/imgsForweb/call.png" alt="" />
          </NavLink>
        </div>
      </nav>

    </>
  )
}

export default Nav
