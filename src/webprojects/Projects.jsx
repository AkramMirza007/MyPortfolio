import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
import throttle from 'lodash/throttle';


const projects = [
    {
        link: 'https://github.com/AkramMirza007/samsung-recreate',
        src: './videos/recreation.mp4',
        discription: 'Website which delivers products in an eye-catching way',
        name: 'Recreation',
        bgColor: 'rgba(238,153,255)',
    },
    {
        link: 'https://github.com/AkramMirza007/passOp',
        src: './videos/passOp.mp4',
        discription: 'Want to save all links and passwords? passOp is here for You',
        name: 'passOp',
        bgColor: 'green',
    },
    {
        link: 'https://github.com/AkramMirza007/cynthia-Ogwu',
        src: './videos/Cynthia ugwu.mp4',
        discription: 'The website where you can see products the way delicate they are...',
        name: 'cynthia ugwu',
        bgColor: '',
    },
    {
        link: 'https://github.com/AkramMirza007/guess-game',
        src: './videos/guess.mp4',
        discription: 'Want to try your luck? Play this game...',
        name: 'The Guess Game',
        bgColor: 'red',
    },
];


const Projects = () => {

    useGSAP(() => {
        gsap.to('.section', {
            transform: 'translateX(-75%)',
            scrollTrigger: {
                trigger: '#contain',
                markers: false,
                start: 'top top',
                end: 'bottom top',
                scrub: 4,
                pin: true,
                invalidateOnRefresh: true,
            },
        });


    });
    const tiltRefs = useRef([]);
    tiltRefs.current = projects.map(() => React.createRef());

    const [xVal, setXVal] = useState(0);
    const [yVal, setYVal] = useState(0);
    const [rect, setRect] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Mobile Random Movement
    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                const randomX = Math.random() * 50 - 25; // Random xVal between -10 and 10
                const randomY = Math.random() * 50 - 25; // Random yVal between -10 and 10

                const randomRect = {
                    x: Math.floor(Math.random() * 800), // Random x position
                    y: Math.floor(Math.random() * 800), // Random y position
                };

                setXVal(randomX);
                setYVal(randomY);
                setRect(randomRect);
            }, 1500); // Run every 1 second

            return () => clearInterval(interval); // Cleanup interval on component unmount
        }

    }, [isMobile]);
    const handleResize = () => {
        const isMobileScreen = window.innerWidth <= 768;
        if (isMobile !== isMobileScreen) {
            setIsMobile(isMobileScreen);
        }

    };
    useEffect(() => {
        

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);


    // Desktop Mouse Movement
    const throttledMouseMoving = useCallback(throttle((e, index) => {
        if (!isMobile && tiltRefs.current[index]?.current) {
            const rect = tiltRefs.current[index].current.getBoundingClientRect();
            setRect(rect);
            setXVal((e.clientX - rect.x - rect.width / 2) / 60);
            setYVal(-(e.clientY - rect.y - rect.height / 2) / 20);
        } else {
            window.addEventListener('resize', handleResize);

        }
    },), [isMobile]);


    // Update GSAP Animation
    useEffect(() => {
        if (rect) {
            tiltRefs.current.forEach((ref) => {
                if (ref.current) {
                    gsap.to(ref.current, {
                        duration: 1.5,
                        ease: 'elastic.out(1, 0.2)',
                        rotationX: yVal,
                        rotationY: xVal,
                    });
                }
            });
        }
        if (isMobile) {
            tiltRefs.current.forEach((ref) => {
                if (ref.current) {
                    gsap.to(ref.current, {
                        duration: 1.5,
                        ease: "easeIn",
                        rotationX: yVal,
                        rotationY: xVal,
                    });
                }
            });
        }
    }, [rect, xVal, yVal, isMobile]);

  

    return (
        <div className="w-full h-screen relative ">
            <div
                id="contain"
                className="w-full h-screen bg-[linear-gradient(to_right,transparent_5px,rgb(43,213,255)_1px),linear-gradient(to_bottom,white_5px,rgb(43,213,255)_1px)] bg-[size:20px_20px] overflow-hidden absolute"
            >
                <div className="section tiltDiv w-[400vw] h-full flex items-center absolute overflow-hidden top-0 left-0 justify-around">
                    {projects.map((item, index) => (
                        <div
                            key={index}
                            onMouseMove={(e) => throttledMouseMoving(e, index)}
                            className="card w-[100vw] h-full flex items-center justify-center"
                        >
                            <div
                                ref={tiltRefs.current[index]}
                                className="relative sm:w-[80vw] md:w-[65vw] w-[80vw] h-fit bg-[linear-gradient(to_right,transparent_5px,rgb(43,213,255)_1px),linear-gradient(to_bottom,white_5px,rgb(43,213,255)_1px)] bg-[size:20px_20px] shadow-xl overflow-visible flex py-[2vw] md:gap-[1vw] gap-[4vh] flex-col mt-[5%]"
                            >
                                <video
                                    type="video/mp4"
                                    loop
                                    autoPlay
                                    muted
                                    className="w-[500%] h-auto"
                                    src={`${item.src}`}
                                ></video>
                                <h2 className="absolute border-[rgb(255,255,255)] top-[-20%] md:top-0 left-[50%] -translate-x-[50%] -translate-y-[0%] bg-[#ff446a] text-white px-[1vw] border-b-4 border-r-2 md:text-[2vw] text-[2vh] font-Ysabeau">
                                    {item.name}
                                </h2>
                                <div className="md:text-nowrap bg-[#ff446a] text-white font-Ysabeau md:px-[1vw] px-[2vh] py-2 text-center text-wrap md:text-[1.5vw] text-[1.7vh] border-b-4 border-r-2 flex justify-center items-center md:flex-row flex-col rounded-lg">
                                    <h3>
                                        {item.discription}
                                    </h3>
                                    <a href={item.link}
                                        target="_blank"
                                        title={`View the source code for ${item.name}`}
                                        rel="noopener noreferrer"
                                        className="bg-white border-2 rounded-2xl py-0 px-2 h-[80%] mouse-opacity text-[#ff446a] ml-3 text-sm md:text-lg flex justify-center items-center text-nowrap md:my-0 my-[3vw]"
                                    >
                                        <span>source code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

