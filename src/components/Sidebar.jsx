import React from 'react'
import logo from "../assets/logo.svg";
import { LuChevronFirst } from "react-icons/lu";
import { useState } from 'react';
import { FiMoreVertical, FiMail } from 'react-icons/fi';
import { FaArrowLeft, FaRegFilePdf } from 'react-icons/fa';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(true);

  return (
    <div className='h-screen'>
      <nav className='h-full flex flex-col border-r'>
        <div className="p-4 pb-2 flex justify-between items-center">

          {/* <div className={`bg-cyan-900 p-5 pt-8 h-screen ${open ? "w-72" : "w-20"} duration-300 relative`}>
            <LuChevronFirst className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border-1 border-black cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}></LuChevronFirst>
          </div> */}
          {/* <img src={logo} className={`${open ? "w-10" : "w-0 h-10"}`} alt="" /> */}
          <div></div>

          <button className='p-1.5 rounded-lg border border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-neutral-800 cursor-pointer' onClick={() => setOpen(!open)}>
            <LuChevronFirst className={`text-2xl ${!open && "rotate-180"}`}/>
          </button>
        </div>

        <ul className='flex-1 px-3 py-10'>
          <li className={`relative flex items-center justify-center py-2 px-3 my-2 font-medium rounded-md cursor-pointer group transition-colors text-cyan-300 hover:bg-cyan-300 hover:text-neutral-800`}>
            <FaRegFilePdf className='text-2xl' />
            <span className={`overflow-hidden transition-all whitespace-nowrap ${open ? "w-52 ml-3" : "w-0"}`}>Download CV</span>

            {!open && <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-cyan-300 text-neutral-900 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap`}>Download CV</div>}
          </li>
          <li className={`relative flex items-center justify-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer group transition-colors text-neutral-300 hover:bg-white hover:text-neutral-900`} onClick={() => setActive(!active)}>
            <FiMail className='text-2xl' />
            <span className={`overflow-hidden transition-all ${open ? "w-52 ml-3" : "w-0"}`}>Contact</span>

            {!open && <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-white text-neutral-900 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>Contact</div>}
          </li>
          <hr className='my-3 text-gray-400 pb-5' />
          <div className={`relative flex items-center justify-center py-2 px-3 my-2 font-medium rounded-md cursor-pointer group transition-colors text-neutral-300 hover:bg-white hover:text-neutral-900`}>
              <FaArrowLeft className='text-1xl' />
              <span className={`overflow-hidden transition-all ${open ? "w-52 ml-3" : "w-0"}`}>Back</span>

              {!open && <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-white text-neutral-900 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>Back</div>}
          </div>
        </ul>
        <div className="border-t flex p-3">
          <img src={logo} className='w-10 h-10 rounded-md' alt="" />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${open ? "w-52 ml-3" : "w-0"}`}>
            <div className="leading-4">
              <h4 className='font-semibold'>Imam Agus Faisal</h4>
              <span className='text-xs text-gray-400'>imamagusfaisal120@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar