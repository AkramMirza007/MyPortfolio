import React from 'react'
import { useState, useEffect , useRef } from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Mouse = () => {
    const follower = useRef(null)


    useEffect(() => {
        const ctx = gsap.context(() => {
            const xTo = gsap.quickTo(follower.current, "x", {
                duration: 0.3,
                ease: "power3",
            })

            const yTo = gsap.quickTo(follower.current, "y", {
                duration: 0.3,
                ease: "power3",
            })

            window.addEventListener("mousemove", (e) => {
                xTo(e.clientX)
                yTo(e.clientY)
            })

            return () =>
                window.removeEventListener("mousemove", (e) => {
                    xTo(e.clientX)
                    yTo(e.clientY)
                })
        })

        return () => {
            ctx.revert()
        }
    }, [])
       

        return (
            <>
                <div  ref={follower} id='custom-cursor' className='fixed h-[2vw] w-[2vw] top-[-1vw] left-[-1vw] rounded-full bg-gradient-to-tr from-sky-700/50 to-pink-600/50 border-2 border-sky-500 pointer-events-none flex items-center justify-center z-50'></div>
            </>
        )
    }

export default Mouse
