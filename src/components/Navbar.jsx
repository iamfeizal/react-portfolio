import logo from "../assets/logo.svg";
import { FaGithub, FaInstagram, FaLinkedin, FaKaggle } from "react-icons/fa";

const Navbar = () =>  {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ">
            <img className="mx-2 w-10" src={logo} alt="logo"/></div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://github.com/iamfeizal">
            <FaGithub className="text-white" />
          </a>
          <a href="https://www.instagram.com/immamfsl_/">
            <FaInstagram className="text-white"/>
          </a>
          <a href="https://www.linkedin.com/in/imam-af/">
            <FaLinkedin className="text-white"/>
          </a>
          <a href="https://www.kaggle.com/imamaf">
            <FaKaggle className="text-white"/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar