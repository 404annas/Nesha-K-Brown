import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import heroimg from "../assets/heroimg.png";

const Hero = () => {
  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Animation for elements fading in from the left
  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Animation for elements fading in from the right
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div
      className="
        bg-[url('https://reeni-nextjs.vercel.app/assets/images/bg/bg-image-12.jpg')]
        bg-cover bg-center bg-no-repeat
        px-4 sm:px-6 md:px-10 py-3
        overflow-hidden // Prevent scrollbars during animation
      "
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animate once when 30% of the element is in view
        variants={containerVariants}
      >
        {/* Left Side (Text Content) */}
        <motion.div
          className="flex flex-col items-start w-full md:w-1/2 space-y-4 text-center md:text-left"
          variants={itemVariantsLeft} // Apply left-to-right animation
        >
          <p className="text-lg sm:text-xl md:text-2xl text-black font-bold raj-regular">
            HELLO,
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black font-bold raj-regular">
            i’m Nesha Brown
          </p>
          <h1 className="text-2xl raj-regular uppercase sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#7E1616] ">
            <Typewriter
              words={[
                "Coaching.",
                "Speaking",
                "Project Leadership.",
                "Real Result.",
                "",
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
          <button className="group mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-primary  to-pink-400 text-white rounded-full hover:bg-[#701e1e] transition-all duration-300 rubik font-medium text-sm sm:text-md flex items-center justify-center overflow-hidden">
            <span className="relative flex items-center gap-2">
              <span className="transition-transform duration-500 ease-in-out group-hover:-translate-x-2">
                Hire Nesha
              </span>
              <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-2">
                <GoArrowRight className="text-lg sm:text-xl" />
              </span>
            </span>
          </button>
        </motion.div>

        {/* Right Side (Image & Motion Text) */}
        <motion.div
          className="relative flex justify-center items-center w-full md:w-1/2"
          variants={itemVariantsRight} // Apply right-to-left animation
        >
          <img
            src={heroimg}
            loading="eager"
            alt="Man"
            className="object-cover relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl translate-y-8"
          />

          <motion.h2
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 1.5, // Slightly slowed for a smoother feel
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
              md:right-2
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
            Consultant & Speaker
          </motion.h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
