import { FaGithub, FaInstagram, FaLinkedin, FaKaggle } from "react-icons/fa";

const Navbar = () =>  {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ">
            <img className="mx-2 w-10" src="https://via.placeholder.com/150" alt="logo"/></div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaGithub />
          <FaInstagram />
          <FaLinkedin />
          <FaKaggle />
        </div>
    </nav>
  )
}

export default Navbar