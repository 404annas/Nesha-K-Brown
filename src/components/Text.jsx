const Text = () => {
  return (
    <section className="bg-[#7E1616] min-h-[40vh] md:min-h-[50vh] lg:min-h-[50vh] flex items-center justify-center px-4 sm:px-6 md:px-10">
      <p className="raj-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white leading-tight sm:leading-snug md:leading-snug max-w-5xl">
        <span className="bg-gradient-to-r from-[#d88367] to-[#EACCC2] bg-clip-text text-transparent">
          Transforming
        </span>{" "}
        <span className="text-[#EACCC2]">Vision into </span>{" "}
        <span className="bg-gradient-to-r from-[#d88367] to-[#EACCC2] bg-clip-text text-transparent">
          Actionable Outcomes
        </span>{" "}
        <span className="bg-gradient-to-r from-[#EACCC2] to-[#d88367] bg-clip-text text-transparent">
          Through Speaking, Training, and Coaching.
        </span>
      </p>
    </section>
  );
};

export default Text;
