import React, { useState,useEffect, useRef } from 'react'
import News from "../pages/News";
import {Link} from 'react-router-dom'
const Navbar = ({setnewstype}) => {
  const [active, setActive] = useState("general");
  return (
    <div>
      <header className='w-screen h-14 bg-slate-800'>
      <div className='w-screen h-14 px-5 flex justify-start gap-5 items-center'>
        <div className='text-white text-xl'><a href="">NewsIndia</a></div>
        <ul className='flex gap-5 cursor-pointer  overflow-x-auto'>
        <li className={`${active==="general" ? "text-red-500":"text-white text-opacity-70"} hover:text-opacity-100`}  onClick={(e)=>{setnewstype("general"),setActive("general")}}>Home</li>
        <li className={`${active==="Business"?" text-red-500":"text-white text-opacity-70"} hover:text-opacity-100`}  onClick={(e)=>{setnewstype("Business"),setActive("Business")}}>Business</li>
        <li className={`${active==="Entertainment"?" text-red-500":"text-white text-opacity-70"} hover:text-opacity-100`} onClick={(e)=>{setnewstype("Entertainment"),setActive("Entertainment")}}>Entertainment</li>
        <li className={`${active==="General"?" text-red-500":"text-white text-opacity-70"} hover:text-opacity-100`} onClick={(e)=>{setnewstype("General"),setActive("General")}}>General</li>
        <li className={`${active==="Health"?" text-red-500":"text-white text-opacity-70"} hover:text-opacity-100`} onClick={(e)=>{setnewstype("Health"),setActive("Health")}}>Health</li>
        <li className={`${active==="Science"?" text-red-500":"text-white text-opacity-70"} hover:text-opacity-100`} onClick={(e)=>{setnewstype("Science"),setActive("Science")}}>Science</li>
        <li className={`${active==="Sports"?" text-red-500":"text-white text-opacity-70"} hover:text-opacity-100`} onClick={(e)=>{setnewstype("Sports"),setActive("Sports")}}>Sports</li>
        <li className={`${active==="Technology"?" text-red-500":"text-white text-opacity-70"} hover:text-opacity-100`} onClick={(e)=>{setnewstype("Technology"),setActive("Technology")}}>Technology</li>
        </ul>
      </div>
      </header>
    </div>
  )
}

export default Navbar
