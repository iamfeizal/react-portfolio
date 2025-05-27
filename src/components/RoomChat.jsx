import React, { useContext } from 'react'
import { IoPerson } from "react-icons/io5";
import { FaRegCompass, FaRegLightbulb, FaCode, FaMicrophone } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { SiGooglegemini } from "react-icons/si";

const RoomChat = () => {
  return (
    <div className="h-screen relative p-5 w-full">

        <div className="max-w-4xl mx-auto">

            <div className="my-12 text-[56px] font-medium p-5">
                <p><span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">Hello, Recruiter</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5">
                {[
                { icon: <FaRegCompass className="text-3xl bg-white rounded-full p-1 absolute bottom-2 right-2" />, text: "Suggest anything interesting" },
                { icon: <FaRegLightbulb className="text-3xl bg-white rounded-full p-1 absolute bottom-2 right-2" />, text: "Suggest anything new" },
                { icon: <FaRegMessage className="text-3xl bg-white rounded-full p-1 absolute bottom-2 right-2" />, text: "Suggest anything trending" },
                { icon: <FaCode className="text-3xl bg-white rounded-full p-1 absolute bottom-2 right-2" />, text: "Suggest anything codding" },
                ].map((card, index) => (
                <div key={index} className="h-[200px] p-4 border-b-cyan-300 border-1 rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className="text-[#585858] text-lg">{card.text}</p>
                    {card.icon}
                </div>
                ))}
            </div>

            <div className="absolute bottom-0 w-full max-w-4xl px-5 mx-auto">
            <div className="flex items-center justify-between gap-5 px-5 py-2 rounded-full border-1 border-neutral-500">
                <input
                type="text"
                placeholder="Enter a prompt here"
                className="flex-1 bg-transparent border-none outline-none text-base p-2"
                //   onChange={(e) => setInput(e.target.value)}
                //   value={input}
                />
                <div className="flex items-center gap-3">
                {/* <GrGallery className="text-2xl cursor-pointer animate-fade-in" />
                <FaMicrophone className="text-2xl cursor-pointer animate-fade-in" /> */}
                {/* {input && <FiSend onClick={onSent} className="text-2xl cursor-pointer animate-fade-in" />} */}
                <FiSend onClick="" className="text-2xl cursor-pointer animate-fade-in text-cyan-300 hover:scale-125 transition-all duration-300" />
                </div>
            </div>
            <p className="text-sm text-center font-medium my-4">
                Iure quos molestias aut est similique ipsum illum. Quae veritatis totam non sed quod ratione, iusto id temporibus reiciendis dolor similique.
            </p>
            </div>
        </div>
    </div>
  )
}

export default RoomChat