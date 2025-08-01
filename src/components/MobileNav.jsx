import { X } from "lucide-react";
import logo from "../assets/logo.png";

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-2/3 sm:w-1/2 bg-white z-[9999] transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end items-center px-4 py-[22px] border-b">
        <button onClick={onClose} className="text-[#7E1616]">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-6 px-6 text-[#7E1616] text-lg raj-semibold">
        {["Home", "About", "Services", "Blog", "Project", "Contact"].map((item, idx) => (
          <p key={idx} className="hover:text-[#EACCC2] cursor-pointer">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
