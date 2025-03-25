import React from 'react'
import { ImProfile } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";


const socialMediaLinks = [
  {
    icon: <FaLinkedin className="md:text-[2vw] p-0 fill-sky-600 bg-white rounded text-[3vh]" />,
    link: "https://www.linkedin.com/in/akram-mirza-3999361a0/",
  },
  {
    icon: <FaGithubSquare className="text-black md:text-[2vw] bg-white rounded text-[3vh]" />,
    link: "https://github.com/AkramMirza007",
  },
  {
    icon: <ImProfile className="text-red-500 md:text-[2vw] bg-white rounded text-[3vh]" />,
    link: "./src/imgsForWeb/resume.pdf",
    download: true
  },
  {
    icon: <FaSquareWhatsapp className="text-[#1BD45D] md:text-[2vw] bg-white rounded text-[3vh]" />,
    link: "https://wa.me/9321870374?text=Hey Mirza",
  },
];

const Contact = () => {

  return (
    <>
      <div className='w-full h-[100vh] relative bg-[linear-gradient(to_right,transparent_5px,rgb(43,213,255)_1px),linear-gradient(to_bottom,white_5px,rgb(43,213,255)_1px)] bg-[size:20px_20px] flex flex-col items-center justify-center'>
        <h1 className='md:text-[5vw] text-[5vh] text-stroke-2 text-[#ff446a] z-[99] text-shadow font-Ysabeau'>Contact us</h1>
        <form action='https://getform.io/f/akkyrzoa' method='post' className=' flex flex-col md:w-[50%] w-[70%]'>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className=" mouse-opacity mt-[1vw] p-2 bg-gradient-to-b shadow-md from-[#ff446a] to-[#ff99ad] font-Ysabeau border-2 rounded-md  text-[#44fff6] focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className=" mouse-opacity md:my-[1vw] my-[3vh] p-2 bg-gradient-to-b shadow-md from-[#ff446a] to-[#ff99ad] border-2 rounded-md  text-[#44fff6] font-Ysabeau focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className=" mouse-opacity max-h-[25vh] overflow-y-auto p-2 font-Ysabeau bg-gradient-to-b shadow-md from-[#ff446a] to-[#ff99ad] border-2 rounded-md text-[#44fff6] focus:outline-none"
          ></textarea>

          <button
            className="text-[#ffffff] font-Ysabeau shadow-md bg-gradient-to-b from-[#ff446a] to-[#ff99ad] px-6 py-3 md:my-[1vw] my-[3vh] mx-auto flex items-center rounded-md hover:scale-110 duration-300"
          >
            Let's talk

          </button>
        </form>
        <div className="bg-gradient-to-r mt-[2vw] mouse-opacity from-[#ffc1cd] to-[#00eeff] py-[4vw] md:py-[1vw] px-[2vw] flex items-center justify-center md:gap-[2vw] gap-[2.5vh] w-fit h-[3vh] md:h-[3vw] shadow-md z-40 border-b-4 border-white border-r-2">
          {socialMediaLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.download ? "_self" : "_blank"} // Open in the same tab if it's a download
              rel={!item.download ? "noopener noreferrer" : undefined}
              download={item.download ? true : undefined} // Dynamically add the download attribute
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Contact
