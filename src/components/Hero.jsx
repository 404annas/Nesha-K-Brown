import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="
        bg-[url('https://reeni-nextjs.vercel.app/assets/images/bg/bg-image-12.jpg')]
        bg-cover bg-center bg-no-repeat
        px-4 sm:px-6 md:px-10 py-8
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side (Text Content) */}
        <div className="flex flex-col items-start w-full md:w-1/2 space-y-4 text-center md:text-left">
          <p className="text-lg sm:text-xl md:text-2xl text-black font-bold raj-regular">
            HELLO,
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold raj-regular">
            i’m Nesha Brown
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#7E1616] raj-regular">
            <Typewriter
              words={[
                "Web Developer.",
                "UI/UX Designer.",
                "Freelancer.",
                "Content Writer.",
                "Web Designer.",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </h1>
          <p className="raj-semibold text-gray-500 text-base sm:text-lg md:text-lg lg:text-xl">
            A personal portfolio is a collection of your work, achievements, and
            skills that highlights your abilities and professional growth. It
            serves as
          </p>
          <button className="group mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-[#7E1616] text-white rounded-full hover:bg-[#701e1e] transition-all duration-300 rubik font-medium text-sm sm:text-md flex items-center justify-center overflow-hidden">
            <span className="relative flex items-center gap-2">
              <span className="transition-transform duration-500 ease-in-out group-hover:-translate-x-2">
                View Portfolio
              </span>
              <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-2">
                <GoArrowRight className="text-lg sm:text-xl" />
              </span>
            </span>
          </button>
        </div>

        {/* Right Side (Image & Motion Text) */}
        <div className="relative flex justify-center items-center w-full md:w-1/2">
          <img
            src="https://reeni-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-user-image-one.png&w=640&q=75"
            alt="Man"
            className="object-cover relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />

          <motion.h2
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-4
              sm:bottom-6
              md:bottom-7
              right-4
              sm:right-12
              md:right-24
              text-3xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              raj-bold
              text-transparent
              select-none
              whitespace-nowrap
              opacity-80
              z-20
            "
            style={{
              WebkitTextStroke: "2px #BD2F3E",
            }}
          >
            WEB DESIGNER
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
