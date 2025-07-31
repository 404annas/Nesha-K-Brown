import React from "react";

const Text = () => {
  return (
    <section className="min-h-[40vh] md:min-h-[50vh] lg:min-h-[50vh] flex items-center justify-center px-4 sm:px-6 md:px-10 bg-black">
      <p className="raj-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white leading-tight sm:leading-snug md:leading-snug max-w-5xl">
        <span className="bg-gradient-to-r from-[#EACCC2] to-[#EACCC2] bg-clip-text text-transparent">
          Transforming
        </span>{" "}
        <span className="text-[#7E1616]">Vision</span>{" "}
        <span className="bg-gradient-to-r from-[#EACCC2] to-[#EACCC2] bg-clip-text text-transparent">
          into Actionable Outcomes Through
        </span>{" "}
        <span className="text-[#7E1616]">
          Speaking, Training, and Coaching.
        </span>
      </p>
    </section>
  );
};

export default Text;
