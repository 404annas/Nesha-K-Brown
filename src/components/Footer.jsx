import footerImg from "../assets/footerImage.png";
import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
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
        <div className="flex flex-col gap-4">
          <img className="w-60" src={logo} alt="Logo" />
          <p className="rubik max-w-md">
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
        <div className="flex flex-col gap-2">
          <h1 className="text-[#7E1616] raj-bold text-3xl">Quick Links</h1>
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
        <div className="flex flex-col gap-4">
          <h1 className="text-[#7E1616] raj-bold text-3xl">Contact Info</h1>

          <div className="flex gap-2 items-center">
            <p className="text-[#7E1616] text-lg">
              <FaMapMarkerAlt />
            </p>
            <p className="rubik">5536 Superior Dr STE C Baton Rouge La 70816</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-[#7E1616] text-lg">
              <FaPhoneAlt />
            </p>
            <a href="tel:225-453-4045">
              <p className="rubik">225-453-4045</p>
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-[#7E1616] text-lg">
              <FaEnvelope />
            </p>
            <a href="mailto:nesha@weconquer.org">
              <p className="rubik">nesha@weconquer.org</p>
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-[#7E1616] text-lg">
              <FaClock />
            </p>
            <p className="rubik">Mon - Fri: 08:00am - 05:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
