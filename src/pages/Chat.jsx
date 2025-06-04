import RoomChat from "../components/RoomChat"
import Sidebar from "../components/Sidebar"


const Chat = () => {
    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 h-screen w-screen">
          <div className="fixed top-0 -z-10">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>
          <div className="h-screen w-screen flex flex-row">
            <Sidebar />
            <RoomChat />
          </div>
        </div>
    )
  }

export default Chat