import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsCrosshair2 } from "react-icons/bs";

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
        <div className="flex items-center justify-between px-4 py-4 border-b bg-[#EDEDED]">
          <img
            src="https://reeni-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogo%2Flogo-white.png&w=128&q=75"
            alt="Logo"
            className=""
          />
          <button
            onClick={onClose}
            className="text-xl text-gray-700 bg-gray-300 rounded-full p-2 hover:text-[white] hover:bg-[#7E1616] transition-all duration-300 cursor-pointer"
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          {/* Image */}
          <img
            src="https://reeni-nextjs.vercel.app/assets/images/logo/man.png"
            alt="Sidebar Banner"
            className="w-full mb-4"
          />

          {/* Heading and para */}
          <h2 className="text-xl font-bold mb-4 rubik">
            Freelancer delivering exceptional Webflow, and Next.js solutions.
          </h2>
          <p className="text-md text-gray-600 mb-6 rubik">
            I am a skilled freelancer specializing in Webflow development, Figma
            design, and Next.js projects. I deliver creative, dynamic, and
            user-centric web solutions.
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
                  <span className="relative z-10 transition-colors duration-300">
                    +123 456 7890
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

            <div className="flex items-start gap-4">
              <div className="border border-gray-200 rounded p-4 flex items-center justify-center">
                <FaEnvelope className="text-black" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#7E1616] text-md rubik">MAIL</p>
                <span className="relative inline-block cursor-pointer group raj-medium text-md text-black">
                  <span className="relative z-10 transition-colors duration-300">
                    info@example.com
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

            <div className="flex items-start gap-4">
              <div className="border border-gray-200 rounded p-4 flex items-center justify-center">
                <BsCrosshair2 className="text-black" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#7E1616] text-md rubik">ADDRESS</p>
                <span className="relative inline-block cursor-pointer group raj-medium text-md text-black">
                  <span className="relative z-10 transition-colors duration-300">
                    123 Street, City
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
            <p className=" bg-gray-200 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
              <FaInstagram />
            </p>
            <p className=" bg-gray-200 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
              <FaLinkedinIn />
            </p>
            <p className=" bg-gray-200 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
              <FaTwitter />
            </p>
            <p className=" bg-gray-200 rounded-full p-3 cursor-pointer text-black transition-all duration-300 hover:bg-[#7E1616] hover:text-white">
              <FaFacebookF />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
