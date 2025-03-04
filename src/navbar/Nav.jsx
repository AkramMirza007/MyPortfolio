import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { NavLink } from 'react-router-dom';



function Nav() {

  useGSAP(() => {
    gsap.from(".navA", {
      y: "-100%",
      opacity: 0,
      delay: 0.5,
      duration: 0.8,
      stagger : -1,
      ease: 'elastic.out(1, 0.1)'
    });
    
    
  })

  return (
    <>
      <nav className='bg-gradient-to-r m-0 from-[#ffb5c4] to-[#00eeff] p-[1.5vw] fixed top-[1.5vw] left-1/2 transform -translate-x-1/2 w-fit h-[3vh] md:h-[3vw]  shadow-md z-40 border-b-4 border-white border-r-2'>

        <div className="rNav w-fit h-full flex items-center p-0 m-0 justify-between ">
          <NavLink to='/' className='navA py-[0.3rem] px-[1rem] bg-transparent md:h-[2vw] h-[3vh] font-light outline-none text-white rounded-[1vh]  ' href=""> <img className=' w-full h-full' src="https://www.pinclipart.com/picdir/big/563-5631016_house-icon-house-emoji-png-clipart.png" alt="" /></NavLink>
          <NavLink to='webprojects' className='navA py-[0.3rem] px-[1rem] bg-transparent md:h-[2vw] h-[3vh] font-light outline-none text-white rounded-[1vh] ' href=""> <img className=' w-full h-full' src="https://i.pinimg.com/originals/6c/53/1e/6c531ec6f45c879fe569204b66cd182e.png" alt="" /></NavLink>
          <NavLink to='contactUs' className='navA py-[0.3rem] px-[1rem] bg-transparent md:h-[2vw] h-[3vh] font-light outline-none text-white rounded-[1vh]   ' href=""> <img className=' w-full h-full' src="https://whatemoji.org/wp-content/uploads/2020/07/Telephone-Receiver-Emoji.png" alt="" /></NavLink>

        </div>
      </nav>

    </>
  )
}

export default Nav
