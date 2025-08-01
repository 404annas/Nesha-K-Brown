import { useEffect, useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdArrowForwardIos,
} from "react-icons/md";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { Menu, X } from "lucide-react"; // Lucide icons
import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav"; // new sidebar

const DropdownItem = ({ label }) => (
  <div className="group/item flex justify-between items-center px-4 py-2 cursor-pointer transition-all duration-300 hover:text-[#7E1616] hover:rounded-lg">
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
        className={`flex items-center px-3 py-1 cursor-pointer transition-all duration-300 rounded-full ${
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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isMobileNavOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 left-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4 transition-all duration-300 ${
          isScrolled ? "bg-secondary shadow-xl" : "bg-white"
        }`}
      >
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-40 lg:w-auto  sm:h-16" />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 raj-semibold">
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

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Social Icons - Desktop Only */}
          <div className="hidden lg:flex gap-2">
            <a href="https://www.instagram.com/neshakbrown/">
              <p className="bg-gray-100 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
                <FaInstagram />
              </p>
            </a>
            <a href="https://www.linkedin.com/in/dymoneshabrown/">
              <p className="bg-gray-100 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
                <FaLinkedinIn />
              </p>
            </a>
            <a href="https://www.youtube.com/@neshakbrown">
              <p className="bg-gray-100 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
                <FaYoutube />
              </p>
            </a>
            <a href="https://www.facebook.com/dymonesha.brown/">
              <p className="bg-gray-100 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
                <FaFacebookF />
              </p>
            </a>
          </div>

          {/* Menu Icon for Desktop Sidebar */}
          <p
            onClick={() => setIsSidebarOpen(true)}
            className="hidden lg:flex border-2 rounded-full p-2 cursor-pointer text-xl transition-all duration-300 bg-[#7E1616] text-white border-[#7E1616] hover:bg-[#EACCC2] hover:text-[#7E1616]"
          >
            <Menu />
          </p>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileNavOpen(true)}
            className="lg:hidden p-2 rounded-full bg-[#7E1616] text-white hover:bg-[#EACCC2] hover:text-[#7E1616] transition-all duration-300"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Desktop Sidebar (lg and up) */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Mobile Sidebar (below lg) */}
      {/* Overlay Behind Mobile Nav */}
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}

      {/* Mobile Sidebar (below lg) */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
};

export default Navbar;
