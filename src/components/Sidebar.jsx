import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsCrosshair2 } from "react-icons/bs";
import logo from "../assets/logo.png";
import heroImg from "../assets/heroimg.png";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Blurred overlay */}
      <div
        className={`fixed inset-0 bg-[black]/80 backdrop-blur-lg transition-opacity duration-300 z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[390px] bg-[#F4F4F4] shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-[31px] border-b bg-[#EDEDED]">
          <img
            src={logo}
            alt="Logo"
            className="w-40"
          />
          <button
            onClick={onClose}
            className="text-sm text-gray-700 bg-[#EACCC2] rounded-full p-2 hover:text-[white] hover:bg-[#7E1616] transition-all duration-300 cursor-pointer"
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {/* Image */}
          <img
            src={heroImg}
            alt="Sidebar Banner"
            className="w-80 mx-auto rounded-full mb-4"
          />

          {/* Heading and para */}
          <h2 className="text-3xl mb-4 raj-medium">
            Nesha leads <span className="raj-semibold">Conquer & Prosper eLearning</span>
          </h2>
          <p className="text-md text-gray-600 mb-6 rubik">
            She’s more than just a strategist—she’s a force for good, making the business of doing good look both fun and wildly successful.
          </p>

          {/* Contact details */}
          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-4">
              <div className="border border-gray-200 rounded p-4 flex items-center justify-center">
                <FaPhone className="text-black rotate-90" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#7E1616] text-md rubik">CALL NOW</p>
                <span className="relative inline-block cursor-pointer group raj-medium text-md text-black">
                  <a href="tel:225-453-4045"><span className="relative z-10 transition-colors duration-300">
                    +225 453 4045
                  </span></a>
                  <span
                    className="
      absolute left-0 bottom-0 h-[2px] bg-black w-full
      origin-left scale-x-0
      transition-transform duration-300
      group-hover:scale-x-100
    "
                  ></span>
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="border border-gray-200 rounded p-4 flex items-center justify-center">
                <FaEnvelope className="text-black" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#7E1616] text-md rubik">MAIL</p>
                <span className="relative inline-block cursor-pointer group raj-medium text-md text-black">
                  <a href="mailto:nesha@weconquer.org"><span className="relative z-10 transition-colors duration-300">
                    nesha@weconquer.org
                  </span></a>
                  <span
                    className="
      absolute left-0 bottom-0 h-[2px] bg-black w-full
      origin-left scale-x-0
      transition-transform duration-300
      group-hover:scale-x-100
    "
                  ></span>
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="border border-gray-200 rounded p-4 flex items-center justify-center">
                <BsCrosshair2 className="text-black" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#7E1616] text-md rubik">ADDRESS</p>
                <span className="relative inline-block cursor-pointer group raj-medium text-md text-black">
                  <span className="relative z-10 transition-colors duration-300">
                    5536 Superior Dr STE C Baton Rouge La 70816
                  </span>
                  <span
                    className="
      absolute left-0 bottom-0 h-[2px] bg-black w-full
      origin-left scale-x-0
      transition-transform duration-300
      group-hover:scale-x-100
    "
                  ></span>
                </span>
              </div>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-sm font-normal rubik text-black mb-4">
            FIND WITH ME
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="https://www.instagram.com/neshakbrown/"><p className=" bg-gray-200 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
              <FaInstagram />
            </p></a>
            <a href="https://www.linkedin.com/in/dymoneshabrown/"><p className=" bg-gray-200 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
              <FaLinkedinIn />
            </p></a>
            <a href="https://www.youtube.com/@neshakbrown"><p className=" bg-gray-200 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
              <FaYoutube />
            </p></a>
            <a href="https://www.facebook.com/dymonesha.brown/"><p className=" bg-gray-200 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
              <FaFacebookF />
            </p></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
