import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState, useEffect } from 'react'
import { BsArrowDownSquare } from "react-icons/bs";
import { BsArrowUpSquare } from "react-icons/bs";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const skills = [
  {
    id: 1,
    skill: "javaScript",
    para: "Strong understanding of ES6 + features and asynchronous programming.",
    color: "red"
  },
  {
    id: 2,
    skill: "version controll",
    para: "Familiar with Git and GitHub for version control and collaboration.",
    color: "green"
  },
  {
    id: 3,
    skill: "html/css",
    para: "Proficient in creating responsive and accessible web pages.",
    color: "#44caff"
  }
  ,
  {
    id: 4,
    skill: "react",
    para: "Experience with building single-page applications using React.",
    color: "orange"
  },
  {
    id: 5,
    skill: "Problem solving",
    para: "Strong analytical and problem-solving skills",
    color: "#ff446a"
  },
  {
    id: 6,
    skill: "Comunication",
    para: "Effective communication skills for collaborating with team members and stakeholders.",
    color: "purple"
  }
]

function Intro() {

  useGSAP(() => {
    gsap.from("#box", {
      rotate: 160,
      scale: 0,
      duration: 2,
      delay: 1.5 ,
      ease: 'elastic.out(1,0.3)'

    })

    gsap.from(".skills", {
      y: 40,
      opacity:0,
      duration: ".5",
      scrollTrigger: {
        trigger: ".skills", // Element that triggers the animation
        start: "bottom bottom", // Bottom of the element reaches 10% from the bottom of the screen
        toggleActions: "play reverse play reverse", // Animation behavior (play on entering view)
      },
    });
  })



  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % skills.length)
  }
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + skills.length) % skills.length);
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % skills.length);
    }, 4000)
    return () => clearInterval(intervalId);
  }, [currentSlide, skills.length])

  return (
    <>
      <div className={` w-[100%] h-[100vh] font-mono gap-[15vw] relative overflow-hidden box-border bg-[linear-gradient(to_right,transparent_5px,rgb(43,213,255)_1px),linear-gradient(to_bottom,white_5px,rgb(43,213,255)_1px)] bg-[size:20px_20px]`}>
        <div className='w-full md:h-fit h-[80%] box-border absolute gap-[2vw] top-[50%] md:top-[50%]  -translate-y-1/2    left-0 flex flex-col md:flex-row py-[5vw] items-center justify-evenly'>
          <div className="intro-text via-blue-300 text5-[rgb(255,255,55)] font-Ysabeau overflow-hidden relative  bg-gradient-to-r m-0 from-[#ffc1cd] to-[#00eeff] backdrop-brightness-100 W-1/2 h-[50%] md:h-full  shadow-xl py-[1vw] px-[2vw] flex flex-col justify-center md:items-start items-center  border-b-4 border-white border-r-2 ">
            <video muted loop autoPlay  className=' w-[200%] h-full object-cover left-0 z-10 absolute  ' type="video/mp4" src="./videos/pinkBackGround.mp4"></video>
            <h1 className='md:text-[3vw] text-[5vw] z-20 leading-tight tracking-tight text-stroke '>HELLO,</h1>
            <h1 className='md:text-[3vw] text-[5vw] z-20 leading-tight tracking-tight  font-semibold text-stroke '>I AM AKRAM</h1>
            <h1 className='md:text-[3vw] text-[5vw] z-20 leading-tight tracking-tight text-sky-00 text-stroke'>A FRONT END DEVOLOPER</h1>
            <p className='mt-[1vw] md:text-[2vw] z-20 text-[2vw] text-right  py-[0.5vw]   font-semibold tracking-wide uppercase text-stroke'> Design is innovative and story telling </p>
          </div>
          <div id='box' className="intro-img box md:h-[25vw] md:w-[25vw] w-[25vh] md:mt-0 mt-[5vw]  h-[25vh] overflow-hidden ">
            <img className='w-full h-full bg-contain brightness-200 drop-shadow-lg ' type="image/png" src='./images/file.png' srcSet="" alt="Example" />
          </div>
        </div>
        <div className={`w-full h-[10vh] bg-gradient-to-bl from-fuchsia-400 via-sky-500 to-fuchsia-500 flex items-center justify-center absolute bottom-0 md:text-[2vw] text-[4vw] font-Ysabeau text-shadow-md text-[#ff446a]`}>
          <h1 className=' border-b-4 relative z-[99] font-Ysabeau border-white border-r-2 px-[1.2vw] text-stroke '> Akram

          </h1>
        </div>

      </div>
      <div className='w-full md:h-[30vw] bg-slate-200  flex flex-col md:flex-row items-center justify-evenly   overflow-clip border-t-2 border-black/50'>
        <div className='md:w-1/2 w-full md:h-full h-[20vw] font-Gowun flex flex-wrap items-center justify-center bg-gradient-to-bl from-[#ff446a] from-50% to-sky-500 to-50% text-white gap-[0.5vw]'>
          <h2 className='md:text-[5vw] text-[3vh] uppercase skills'> skills </h2><span className='text-white skills'> & </span><span className='md:text-[5vw] text-[3vh] uppercase skills'> tools</span>
        </div>
        <div className='md:w-1/2 w-full md:h-full h-[25vh] bg-[#ffffff] overflow-hidden relative'>
          <div className=' absolute w-[10%] h-[100%]  z-10 flex items-center justify-around flex-col md:left-0 right-0 top-0'>
            <button className='md:text-[2.2vw] text-[2.2vh] mouse-opacity text-sky-500 ' onClick={nextSlide}><BsArrowUpSquare /></button>
            <button className='md:text-[2.2vw] text-[2.2vh] mouse-opacity text-[#ff446a]  ' onClick={prevSlide}><BsArrowDownSquare /></button>
          </div>
          {skills.map((item, index) => {
            return <div style={{ transform: `translateY(${currentSlide * -100}%)` }} key={index} className={`w-full h-full flex uppercase  items-center justify-center flex-col p-[3vw] ease-out  duration-200`}>
              <h2 className='text-[3vw] font-Gowun font-bold stroke-slate-950 stroke-2 skills' style={{ color: item.color }} >{item.skill}</h2>
              <p className='md:text-[1.5vw] skills font-Gowun text-[2.2vh] text-center'>{item.para}</p>
            </div>
          })}

        </div>
      </div>
    </>
  )
}

export default Intro
