import footerImg from "../assets/footerImage.png";
import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#ffeee9] px-10 py-10">
      <div className="bg-gradient-to-r from-[#EACCC2] to-[#d88367] gap-10 px-10 flex items-center justify-between rounded-t-3xl">
        <div className="flex flex-col items-start gap-2 w-[75%]">
          <h1 className="text-5xl text-[#7E1616] raj-bold">
            Nesha Mission is to Empower individuals and organizations
          </h1>
          <p className="text-[black] rubik text-base">
            With the knowledge and tools to achieve sustainable growth and
            meaningful community impact.
          </p>
        </div>
        <div className="w-[25%] -translate-y-20">
          <img className="w-60" src={footerImg} alt="Nesha Image" />
        </div>
      </div>

      <div className="flex items-center justify-between pt-10">
        <div className="flex flex-col gap-4 w-1/3">
          <img className="w-60" src={logo} alt="Logo" />
          <p className="rubik">
            Her work integrates economic sustainability with meaningful
            community change.
          </p>
          <div className="flex items-center gap-2 text-xl">
            <p className="bg-[#d88367] text-[#7E1616] p-3 rounded-full hover:bg-[#EACCC2] transition-all duration-300 cursor-pointer">
              <FaInstagram />
            </p>
            <p className="bg-[#d88367] text-[#7E1616] p-3 rounded-full hover:bg-[#EACCC2] transition-all duration-300 cursor-pointer">
              <FaLinkedinIn />
            </p>
            <p className="bg-[#d88367] text-[#7E1616] p-3 rounded-full hover:bg-[#EACCC2] transition-all duration-300 cursor-pointer">
              <FaTwitter />
            </p>
            <p className="bg-[#d88367] text-[#7E1616] p-3 rounded-full hover:bg-[#EACCC2] transition-all duration-300 cursor-pointer">
              <FaFacebookF />
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <h1 className="text-[#7E1616] raj-bold text-2xl">Quick Links</h1>
          <p className="rubik cursor-pointer hover:text-[#7E1616] transition-all duration-300">
            Home
          </p>
          <p className="rubik cursor-pointer hover:text-[#7E1616] transition-all duration-300">
            About
          </p>
          <p className="rubik cursor-pointer hover:text-[#7E1616] transition-all duration-300">
            Services
          </p>
          <p className="rubik cursor-pointer hover:text-[#7E1616] transition-all duration-300">
            Blog
          </p>
          <p className="rubik cursor-pointer hover:text-[#7E1616] transition-all duration-300">
            Project
          </p>
          <p className="rubik cursor-pointer hover:text-[#7E1616] transition-all duration-300">
            Contact
          </p>
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <h1 className="text-[#7E1616] raj-bold text-2xl">Contact Info</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
