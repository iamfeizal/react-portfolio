import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown';
import profilePic from "../assets/images/profile.png"
import { IoPerson } from "react-icons/io5";
import { FaRegCompass, FaRegLightbulb, FaCode, FaMicrophone } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { SiGooglegemini } from "react-icons/si";
import { Context } from '../context/Context.jsx';
import { AnimatePresence, motion } from 'motion/react'

const RoomChat = () => {
  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)
  const { chatHistory } = useContext(Context);

  return (
    <div className='flex-1 h-full overflow-y-auto'>
      <div className='flex-1 h-full overflow-y-auto px-6 py-6 pt-10 space-y-6'>
        {chatHistory.map((msg, idx) => (
          <div key={idx} className={`flex mb-20 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
              {msg.sender === 'bot' && (
                <img src={profilePic}
                  className="w-10 h-10 rounded-full mb-1"
                />
              )}
              <div className={`
                px-4 py-3 rounded-lg prose prose-invert max-w-full break-words overflow-wrap
                ${msg.sender === 'user' 
                  ? 'bg-neutral-800 text-white rounded-br-none border-1 border-cyan-300' 
                  : 'bg-neutral-800 text-white rounded-bl-none'}
              `}>
                {/* <ReactMarkdown>{msg.text}</ReactMarkdown> */}
                <p style={{ marginTop: "0px" }} dangerouslySetInnerHTML={{ __html: msg.text }}></p>
              </div>
            </div>
          </div>
        ))}
      </div>



        
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='flex items-center justify-between p-4 bg-gray-800 text-white gap-2 rounded-2xl'>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" className='outline-none sm:w-65 md:w-125 lg:w-250' placeholder='Enter a prompt here'/>
            <div className='flex items-center justify-center hover:text-cyan-300 hover:scale-120'>
              <AnimatePresence initial={false}>
                {input?
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      >
                  <FiSend className='text-2xl' onClick={()=>onSent()}/>
                </motion.div>
                :null}
              </AnimatePresence>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RoomChat