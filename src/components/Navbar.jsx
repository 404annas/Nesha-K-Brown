import { useEffect, useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdArrowForwardIos,
} from "react-icons/md";
import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import Sidebar from "./Sidebar";

const DropdownItem = ({ label }) => (
  <div
    className="
      group/item flex justify-between items-center px-4 py-2 cursor-pointer
      transition-all duration-300
       hover:text-[#7E1616] hover:rounded-lg
    "
  >
    <span className="transition-all duration-300 group-hover/item:translate-x-2">
      {label}
    </span>
    <MdArrowForwardIos className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 ml-2" />
  </div>
);

const Dropdown = ({ items }) => (
  <div className="absolute top-full left-0 mt-1 w-44 bg-[#F4F4F4] shadow-lg rounded-lg transition-all duration-300 z-10 raj-semibold">
    {items.map((item, idx) => (
      <DropdownItem key={idx} label={item} />
    ))}
  </div>
);

const NavItem = ({ label, hasDropdown, dropdownItems = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`flex items-center px-3 py-1  cursor-pointer transition-all duration-300 rounded-full ${
          open
            ? "bg-[#EACCC2] text-[#7E1616]"
            : "hover:bg-[#EACCC2] text-[#7E1616]"
        }`}
      >
        <span>{label}</span>
        {hasDropdown &&
          (open ? (
            <MdKeyboardArrowUp className="transition-all duration-300" />
          ) : (
            <MdKeyboardArrowDown className="transition-all duration-300" />
          ))}
      </div>
      {hasDropdown && open && <Dropdown items={dropdownItems} />}
    </div>
  );
};

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 left-0 z-50 flex items-center justify-between px-10 py-4 transition-all duration-300 ${
          isScrolled ? "bg-secondary  shadow-xl" : "bg-white"
        }`}
      >
        {" "}
        <img src={logo} alt="Logo" className="w-auto h-16" />
        <div className="hidden md:flex items-center gap-4 raj-semibold">
          <NavItem label="Home" />
          <NavItem label="About" />
          <NavItem
            label="Services"
            hasDropdown
            dropdownItems={["Service", "Service Details"]}
          />
          <NavItem
            label="Blog"
            hasDropdown
            dropdownItems={["Blog Classic", "Blog Details"]}
          />
          <NavItem
            label="Project"
            hasDropdown
            dropdownItems={["Project", "Project Details"]}
          />
          <NavItem label="Contact" />
        </div>
        <div className="flex items-center gap-2">
          <p className="bg-gray-100 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
            <FaInstagram />
          </p>
          <p className="bg-gray-100 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
            <FaLinkedinIn />
          </p>
          <p className="bg-gray-100 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
            <FaTwitter />
          </p>
          <p className="bg-gray-100 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
            <FaFacebookF />
          </p>

          {/* Menu Button for Sidebar */}
          <p
            onClick={() => setIsSidebarOpen(true)}
            className="border-2 rounded-full p-2 cursor-pointer ml-5 text-xl transition-all duration-300 bg-[#7E1616] text-white border-[#7E1616] hover:bg-[#EACCC2] hover:text-[#7E1616]"
          >
            <RiMenu3Fill />
          </p>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
