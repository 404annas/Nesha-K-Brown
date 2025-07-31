import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const experienceCards = [
  { count: 20, suffix: "K+", text: "Our Project Complete" },
  { count: 10, suffix: "K+", text: "Our Natural Products" },
  { count: 200, suffix: "+", text: "Clients Reviews" },
  { count: 1000, suffix: "+", text: "Our Satisfied Clients" },
];

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className="bg-white px-4 sm:px-6 md:px-10 py-14 sm:py-16 md:py-20 lg:py-20 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center md:items-stretch justify-between gap-8 md:gap-10">
        {/* LEFT DIV */}
        <div className="flex flex-col w-full lg:w-1/2 space-y-6 sm:space-y-8 bg-[#F4F4F4] rounded-2xl sm:rounded-3xl py-10 sm:py-12 md:py-14 px-6 sm:px-8 md:px-10">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-10">
            <h1 className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] leading-none raj-bold text-[#7E1616]">
              {inView ? <CountUp end={25} duration={4} /> : 0}
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-left raj-bold text-black">
              Years of Experience
            </p>
          </div>
          <p className="text-gray-800 text-sm sm:text-base rubik font-normal text-center sm:text-left">
            Business consulting consultants provide expert advice and guide
            businesses to help them improve their performance and efficiency.
          </p>
        </div>

        {/* RIGHT DIV */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
          {experienceCards.map((card, index) => (
            <div
              key={index}
              className="
                relative
                py-8 sm:py-10 md:py-11
                px-6 sm:px-8 md:px-10
                rounded-2xl sm:rounded-3xl
                border-b-2 border-r-2 border-[#7E1616]
                bg-[#F4F4F4]
                transition-all
                duration-500
                overflow-hidden
                group
              "
            >
              <h3 className="text-3xl sm:text-4xl text-center text-[#BD2F3E] font-medium mb-2 sm:mb-3 rubik">
                {inView ? (
                  <CountUp end={card.count} duration={4} separator="," />
                ) : (
                  0
                )}
                {card.suffix}
              </h3>
              <p className="text-gray-600 text-sm sm:text-md text-center rubik font-normal">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
