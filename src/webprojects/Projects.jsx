import React from 'react'

import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import { Link } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';


const pojects = [
    {
        link: "",
        src : "./src/imgsForWeb/pinkOverlayP.mp4",
        discription: "the website where you can see products the way delicate they are...",
        name:"cynthia ugwu",
        bgColor: "rgba(238,153,255,0.5)"
    },
    {
        link: "",
        src : "./src/imgsForWeb/pinkOverlayP.mp4",
        discription: "website where you can see recreation with the original classic and lucxury desing",
        name:"Samsung recreation",
        bgColor: "rgba(238,153,255,0.5)"
    },
    {
        link: "",
        src : "./src/imgsForWeb/pinkOverlayP.mp4",
        discription: "website which deliver products in the eye catching way",
        name:"The Menu",
        bgColor: "rgba(238,153,255,0.5)"
    },
    {
        link: "",
        src : "./src/imgsForWeb/pinkOverlayP.mp4",
        discription: "want to try your luck? play this game...",
        name:"The Game",
        bgColor: "rgba(238,153,255,0.5)"
    }
]

const Projects = () => {
    useGSAP(() => {
        gsap.to(".section", {
            transform: "translateX(-75%)",
            x: -1,
            snap:1,
            scrollTrigger: {
                trigger: "#contain",
                markers: false, // Disable markers for mobile
                start: "top 0%",
                end: "top -100%",
                scrub: 4,
                pin: true,
                snap:"25%"
            }
        });
    });

    return (
        <div className="w-full h-screen relative">
            <div id="contain" className="w-full h-screen bg-[linear-gradient(to_right,transparent_5px,cyan_1px),linear-gradient(to_bottom,white_5px,cyan_1px)] bg-[size:20px_20px] overflow-hidden absolute">
                <div  className="section w-[400vw] h-full flex items-center absolute overflow-hidden top-0 left-0 justify-around">
                   {
                    pojects.map((item, index)=>{
                        return <CardContainer className="inter-var">
                        <CardBody key={index}  className={` relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border overflow-hidden`} >
                          <div style={{backgroundColor: item.bgColor}} className='w-full top-0 left-0 h-full backdrop-brightness-100 absolute pointer-events-none '></div>
                          {/* <img className='w-full absolute' src="https://images.unsplash.com/photo-1567095716798-1d95d8f4c479?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                          <CardItem 
                            translateZ="50" 
                            className="text-xl font-bold uppercase text-neutral-600 dark:text-pink-900"
                          >
                            {item.name}
                          </CardItem>
                          <CardItem
                            as="p"
                            
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-pink-900 capitalize"
                          >
                            {item.discription}
                          </CardItem>
                          <CardItem  translateZ="100" className="w-full mt-4">
                            <video muted autoPlay loop
                              src={`${item.src}`}
                              height="1000"
                              width="1000"
                              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                              alt="thumbnail"
                            />
                          </CardItem>
                          <div className="flex justify-between items-center mt-20">
                            <CardItem
                              translateZ={20}
                              as={Link}
                              href="https://twitter.com/mannupaaji"
                              target="__blank"
                              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-pink-950"
                            >
                              Try now →
                            </CardItem>
                            <CardItem
                              translateZ={20}
                              as="button"
                              className="px-4 py-2 rounded-xl bg-black border-[rgba(238,153,255,0.5)] dark:bg-pink-200 dark:text-pink-950 text-white text-xs font-bold"
                            >
                              Sign up
                            </CardItem>
                          </div>
                        </CardBody>
                      </CardContainer>
                    })
                   } 
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Projects;






