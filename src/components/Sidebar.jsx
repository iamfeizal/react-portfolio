import logo from "../assets/logo.svg";
import { LuChevronFirst } from "react-icons/lu";
import { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { FaArrowLeft, FaRegFilePdf } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"
import cv from "../assets/CV_IMAM AGUS FAISAL.pdf"

const Sidebar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(true);

  return (
      <nav className={`h-full flex flex-col border-r border-gray-400 transition-all duration-300 ${open ? "w-64" : "w-16"}`}>
        <div className="p-4 pb-2 flex justify-between items-center">
          <div></div>

          <button className='p-2 rounded-full border border-cyan-300 text-cyan-300 interactive-bg-blue cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-sm' onClick={() => setOpen(!open)}>
            <LuChevronFirst className={`text-xl duration-500 ${!open && "rotate-180"}`}/>
          </button>
        </div>

        <ul className='flex-1 px-3 py-10 space-y-2'>
          <a href={cv} target="_blank">
            <li className={`relative flex items-center justify-center py-2.5 px-3 font-medium rounded-xl cursor-pointer group transition-all text-cyan-300 interactive-bg-blue hover:scale-105`}>
              <FaRegFilePdf className='text-xl' />
              <span className={`overflow-hidden transition-all whitespace-nowrap ${open ? "w-52 ml-3" : "w-0"}`}>Download CV</span>

              {!open && <div className={`absolute left-full rounded-xl px-3 py-1.5 ml-6 bg-cyan-300 text-neutral-900 text-xs font-semibold shadow-lg invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap`}>Download CV</div>}
            </li>
          </a>
          <li className={`relative flex items-center justify-center py-2.5 px-3 font-medium rounded-xl cursor-pointer group transition-all text-neutral-300 interactive-bg-white hover:scale-105`} onClick={() => setActive(!active)}>
            <FiMail className='text-xl' />
            <span className={`overflow-hidden transition-all ${open ? "w-52 ml-3" : "w-0"}`}>Contact</span>

            {!open && <div className={`absolute left-full rounded-xl px-3 py-1.5 ml-6 bg-white text-neutral-900 text-xs font-semibold shadow-lg invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>Contact</div>}
          </li>
          <hr className='my-3 border-neutral-700 pb-2' />
          <li className={`relative flex items-center justify-center py-2.5 px-3 font-medium rounded-xl cursor-pointer group transition-all text-neutral-300 interactive-bg-white hover:scale-105`} onClick={() => navigate("/")}>
              <FaArrowLeft className='text-lg' />
              <span className={`overflow-hidden transition-all ${open ? "w-52 ml-3" : "w-0"}`}>Back</span>

              {!open && <div className={`absolute left-full rounded-xl px-3 py-1.5 ml-6 bg-white text-neutral-900 text-xs font-semibold shadow-lg invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>Back</div>}
          </li>
        </ul>
        <a href="mailto:imamagusfaisal120@gmail.com" target='_blank'>
          <div className="flex p-3 border-t border-neutral-700/80 items-center">
              <img src={logo} className='w-10 h-10 rounded-xl p-1 bg-neutral-900 border border-neutral-700' alt="" />
              <div className={`flex justify-between items-center overflow-hidden transition-all ${open ? "w-52 ml-3" : "w-0"}`}>
                <div className="leading-4">
                  <h4 className='font-semibold text-sm'>Imam Agus Faisal</h4>
                  <span className='text-xs text-neutral-400'>imamagusfaisal120@gmail.com</span>
                </div>
              </div>
          </div>
        </a>
      </nav>
  )
}

export default Sidebar