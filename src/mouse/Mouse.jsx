import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Mouse = () => {
  const follower = useRef(null);
  const prevMouseX = useRef(0);
  const rotateRef = useRef(0); // Ref for rotation value

  useEffect(() => {
    const elem = follower.current; // Use follower ref instead of window.current
    let diffrot = 0;

    const handleMouseMove = (dets) => {
      const diff = dets.clientY - elem.getBoundingClientRect().top;
      const diffe = dets.clientX - elem.getBoundingClientRect().left;
      diffrot = dets.clientX - rotateRef.current;
      rotateRef.current = dets.clientX;
      const currentMouseX = dets.clientX;
      const direction = currentMouseX > prevMouseX.current ? "right" : "left";
      prevMouseX.current = currentMouseX; // Update the previous X position
      const scaleXValue = direction === "right" ? 1 : -1; // Flip the image horizontally
      gsap.to(elem.querySelector(".img-mouse"), {
        scaleX: scaleXValue,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.to(elem.querySelector(".img-mouse"), {
        top: diff,
        left: diffe,
        rotate: gsap.utils.clamp(-20, 20, diffrot) + "deg", // Use degrees for rotation
        ease: 'power3',
      });
    };

    const handleMouseOver = () => {
      gsap.to(elem.querySelector(".img-mouse"), {
        duration: 0.5,
        opacity:0,
      });
    };

    const handleMouseOut = () => {
      gsap.to(elem.querySelector(".img-mouse"), {
        duration: 0.5,
        opacity:1
      });
    }; 
    
    const attachMouseListner = () => {
      const inputElements = document.querySelectorAll(".mouse-opacity");
      inputElements.forEach(input => {
        input.addEventListener("mouseover", handleMouseOver);
        input.addEventListener("mouseout", handleMouseOut);
      });
    

    };
    
    const detachMouseListner = () => {
      const inputElements = document.querySelectorAll(".mouse-opacity");
      inputElements.forEach(input => {
        input.removeEventListener("mouseover", handleMouseOver);
        input.removeEventListener("mouseout", handleMouseOut);
      });
  
    };
    
    const observer = new MutationObserver(() => {
      detachMouseListner();
      attachMouseListner();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    window.addEventListener("mousemove", handleMouseMove); // Add event listener to window
    attachMouseListner(); // Attach input listeners initially

    return () => {
      window.removeEventListener("mousemove", handleMouseMove); // Remove event listener from window
      detachMouseListner(); // Detach input listeners
      observer.disconnect(); // Disconnect observer
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
      <div ref={follower} id='custom-cursor' className='fixed hidden h-[5vw] w-[5vw] top-[-2.5vw] left-[-2.5vw] transition ease-linear rounded-[100%] bg-gradient-to-tr pointer-events-none md:flex items-center justify-center z-50'>
        <img className='img-mouse' src="./src/imgsForWeb/amongUs.png" alt="" />
      </div>
    </>
  );
};

export default Mouse;
