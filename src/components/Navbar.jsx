import logo from "../assets/logo.svg";
import { FaGithub, FaInstagram, FaLinkedin, FaKaggle } from "react-icons/fa";

const Navbar = () =>  {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ">
            <img className="mx-2 w-10" src={logo} alt="logo"/></div>
        <div className="m-8 flex items-center justify-center gap-3 text-lg">
          <a href="https://github.com/iamfeizal" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-cyan-400/50 hover:bg-neutral-800 transition-all duration-300 hover:scale-110 shadow-sm" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/immamfsl_/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-pink-500/50 hover:bg-neutral-800 transition-all duration-300 hover:scale-110 shadow-sm" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/imam-af/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-cyan-400/50 hover:bg-neutral-800 transition-all duration-300 hover:scale-110 shadow-sm" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.kaggle.com/imamaf" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-cyan-400/50 hover:bg-neutral-800 transition-all duration-300 hover:scale-110 shadow-sm" title="Kaggle">
            <FaKaggle />
          </a>
        </div>
    </nav>
  )
}

export default Navbar