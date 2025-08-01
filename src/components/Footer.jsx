import footerImg from "../assets/footerImage.png";
import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#ffeee9] px-4 sm:px-6 lg:px-10 py-10">
      {/* Top Promo Section */}
      <div className="bg-gradient-to-r from-[#EACCC2] to-[#d88367] rounded-t-3xl flex flex-col lg:flex-row items-center justify-between gap-6 px-6 sm:px-10 py-6 lg:py-0">
        <div className="flex flex-col items-start gap-2 w-full lg:w-[75%]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#7E1616] raj-bold">
            Nesha Mission is to Empower individuals and organizations
          </h1>
          <p className="text-[black] rubik text-base">
            With the knowledge and tools to achieve sustainable growth and
            meaningful community impact.
          </p>
        </div>
        <div className="w-full lg:w-[25%] lg:-translate-y-20 flex justify-center">
          <img className="w-40 sm:w-52 lg:w-60" src={footerImg} alt="Nesha Image" />
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="flex flex-col lg:flex-row justify-between pt-10 gap-10 lg:gap-6">
        {/* Logo + Socials */}
        <div className="flex flex-col gap-4 lg:max-w-sm">
          <img className="w-48 sm:w-56" src={logo} alt="Logo" />
          <p className="rubik">
            Her work integrates economic sustainability with meaningful
            community change.
          </p>
          <div className="flex items-center gap-3 text-lg">
            <a href="https://www.instagram.com/neshakbrown/">
              <p className="bg-[#d88367] text-[#7E1616] p-3 rounded-full hover:bg-[#EACCC2] transition-all duration-300 cursor-pointer">
                <FaInstagram />
              </p>
            </a>
            <a href="https://www.linkedin.com/in/dymoneshabrown/">
              <p className="bg-[#d88367] text-[#7E1616] p-3 rounded-full hover:bg-[#EACCC2] transition-all duration-300 cursor-pointer">
                <FaLinkedinIn />
              </p>
            </a>
            <a href="https://www.youtube.com/@neshakbrown">
              <p className="bg-[#d88367] text-[#7E1616] p-3 rounded-full hover:bg-[#EACCC2] transition-all duration-300 cursor-pointer">
                <FaYoutube />
              </p>
            </a>
            <a href="https://www.facebook.com/dymonesha.brown/">
              <p className="bg-[#d88367] text-[#7E1616] p-3 rounded-full hover:bg-[#EACCC2] transition-all duration-300 cursor-pointer">
                <FaFacebookF />
              </p>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[#7E1616] raj-bold text-2xl sm:text-3xl">Quick Links</h1>
          {["Home", "About", "Services", "Blog", "Project", "Contact"].map((item, index) => (
            <p
              key={index}
              className="rubik cursor-pointer hover:text-[#7E1616] transition-all duration-300"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[#7E1616] raj-bold text-2xl sm:text-3xl">Contact Info</h1>

          <div className="flex gap-2 items-start">
            <FaMapMarkerAlt className="text-[#7E1616] text-lg mt-1" />
            <p className="rubik">5536 Superior Dr STE C Baton Rouge La 70816</p>
          </div>

          <div className="flex gap-2 items-center">
            <FaPhoneAlt className="text-[#7E1616] text-lg" />
            <a href="tel:225-453-4045">
              <p className="rubik">225-453-4045</p>
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <FaEnvelope className="text-[#7E1616] text-lg" />
            <a href="mailto:nesha@weconquer.org">
              <p className="rubik">nesha@weconquer.org</p>
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <FaClock className="text-[#7E1616] text-lg" />
            <p className="rubik">Mon - Fri: 08:00am - 05:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
