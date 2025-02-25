import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Mouse = () => {
    const follower = useRef(null);
    const rotateRef = useRef(0); // Ref for rotation value
    
    useEffect(() => {
        const elem = follower.current; // Use follower ref instead of window.current
        let diffrot = 0;

        const handleMouseMove = (dets) => {
            const diff = dets.clientY - elem.getBoundingClientRect().top;
            const diffe = dets.clientX - elem.getBoundingClientRect().left;
            diffrot = dets.clientX - rotateRef.current;
            rotateRef.current = dets.clientX;

            gsap.to(elem.querySelector(".img-mouse"), {
                opacity: 1,
                top: diff,
                left: diffe,
                rotate: gsap.utils.clamp(-90, 20, diffrot) + "deg", // Use degrees for rotation
                ease:'power3',
                
            });
        };

        const handleMouseOver = () => {
            gsap.to(elem.querySelector(".img-mouse"), {
                y: 1.2,
                duration: 0.3,
            });
        };

        const handleMouseOut = () => {
            gsap.to(elem.querySelector(".img-mouse"), {
                y: "20",
                duration: 0.3,
            });
        };

        window.addEventListener("mousemove", handleMouseMove); // Add event listener to window

        const imgMouse = elem.querySelector(".img-mouse");
        imgMouse.addEventListener("mouseover", handleMouseOver);
        imgMouse.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove); // Remove event listener from window
            imgMouse.removeEventListener("mouseover", handleMouseOver);
            imgMouse.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const xTo = gsap.quickTo(follower.current, "x", {
                duration: 0.3,
                ease: 'elastic.out(1,0.1)',
                scaleX: "0.9",
                scaleY: "0.9",
            });

            const yTo = gsap.quickTo(follower.current, "y", {
                duration: 0.3,
                ease: 'elastic.out(1,0.1)',
                scaleX: "0.9",
                scaleY: "0.9",
            });

            window.addEventListener("mousemove", (e) => {
                xTo(e.clientX);
                yTo(e.clientY);
            });

            return () => {
                window.removeEventListener("mousemove", (e) => {
                    xTo(e.clientX);
                    yTo(e.clientY);
                });
            };
        });

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <>
            <div ref={follower} id='custom-cursor' className='fixed hidden h-[7vw] w-[7vw]  top-[-3.5vw] left-[-3.5vw] transition ease-linear rounded-[100%] bg-gradient-to-tr pointer-events-none md:flex items-center justify-center z-50'>
                <img className='img-mouse' src="https://attic.sh/wl6rhusxousx9tp7yawqgs5ldzt1" alt="" />
            </div>
        </>
    );
};

export default Mouse;
