
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
import { Link } from 'react-router-dom';


const projects = [
    {
        link: '',
        src: './src/imgsForWeb/Cynthia ugwu.mp4',
        discription: 'the website where you can see products the way delicate they are...',
        name: 'cynthia ugwu',
        bgColor: '',
    },
    {
        link: '',
        src: './src/imgsForWeb/foodoku.mp4',
        discription: 'website where you can see recreation with the original classic and lucxury desing',
        name: 'Samsung recreation',
        bgColor: 'green',
    },
    {
        link: '',
        src: './src/imgsForWeb/foodoku.mp4',
        discription: 'website which deliver products in the eye catching way',
        name: 'The Menu',
        bgColor: 'rgba(238,153,255)',
    },
    {
        link: '',
        src: './src/imgsForWeb/foodoku.mp4',
        discription: 'want to try your luck? play this game...',
        name: 'The Game',
        bgColor: 'red',
    },
];

const Projects = () => {
    useGSAP(() => {
        gsap.to('.section', {
            transform: 'translateX(-75%)',
            x: -1,
            snap: 1,
            scrollTrigger: {
                trigger: '#contain',
                markers: false, // Disable markers for mobile
                start: 'top 0%',
                end: 'top -100%',
                scrub: 4,
                pin: true,
                snap: '25%',
            },
        })

    });

    const tiltRefs = useRef([]);
    tiltRefs.current = projects.map(() => React.createRef());

    const [xVal, setXVal] = useState(0);
    const [yVal, setYVal] = useState(0);
    const [anim, setAnim] = useState(null);
    const [rect, setRect] = useState(null);

    const addToRefs = (el) => {
        if (el && !tiltRefs.current.includes(el)) {
            tiltRefs.current.push(el);
        }
    };

    
    const mouseMoving = (e, index) => {
        if (tiltRefs.current[index] && tiltRefs.current[index].current) {
            const rect = tiltRefs.current[index].current.getBoundingClientRect();
            setRect(rect);
            setXVal((e.clientX - rect.x - rect.width / 2) / 60);
            setYVal(-(e.clientY - rect.y - rect.height / 2) / 20);
            
            // tiltRefs.current[index].current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg) scale(${1.05})`;      
     }
    };
    useEffect(() => {
        if (rect) {
            tiltRefs.current.forEach((ref, index) => {
                if (ref.current) {
                    gsap.to(ref.current, {
                        duration: 3,
                        ease: 'elastic.out(1,0.1)',
                        rotationX: yVal,
                        rotationY: xVal,
                        // scale: 1.05,
                    });
                }
            });
        }
    }, [rect, yVal, xVal])
    // useGSAP(()=>{
    //     gsap.to(rect,{
    //         
    //     })
    // })


    return (
        <div className="w-full h-screen relative">
            <div
                id="contain"
                className="  w-full h-screen bg-[linear-gradient(to_right,transparent_5px,rgb(43,213,255)_1px),linear-gradient(to_bottom,white_5px,rgb(43,213,255)_1px)] bg-[size:20px_20px] overflow-hidden absolute"
            >
                <div className="section tiltDiv w-[400vw] h-full flex items-center absolute overflow-hidden top-0 left-0 justify-around">
                    {projects.map((item, index) => (
                        <div onMouseMove={(e) => mouseMoving(e, index)}
                            key={index}

                            className="card w-[100VW] h-full flex items-center justify-center"
                        >
                            <div style={{ backgroundColor: item.bgColor }}

                                ref={tiltRefs.current[index]}
                                className="relative sm:w-[60vw] sm:h-[85%] h-[50%] w-[80vw] bg-[linear-gradient(to_right,transparent_5px,rgb(43,213,255)_1px),linear-gradient(to_bottom,white_5px,rgb(43,213,255)_1px)] bg-[size:20px_20px] shadow-xl overflow-visible flex items-end pb-[2vw] justify-center gap-[1vw] flex-col"
                            >
                                <video
                                    loop
                                    autoPlay
                                    muted
                                    className="w-[500%] h-auto absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                                    src={`${item.src}`}
                                ></video>
                                <h2 className="absolute text-stroke-1 text-stroke-black border-[rgb(255,255,255)] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-pink-300 px-[1vw] border-b-4 border-r-2  text-[rgba(255,255,255,0)] text-[2vw] font-Ysabeau">
                                    {item.name}
                                </h2>
                                <h3 className='md:text-nowrap bg-pink-300 px-[1vw] text-wrap md:text-[1.5vw] text-[1.7vh] absolute bottom-[2vh]  left-[50%] -translate-x-[50%] -translate-y-[25%] border-b-4 border-r-2'>{item.discription}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;