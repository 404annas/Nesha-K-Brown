import React from "react";

const Hire = () => {
  const data = {
    subtitle:
      "Unlock your brand's full potential with our comprehensive Brand Development Framework, designed to empower you through collaborative brain mapping and strategic planning. Together, we'll dive deep into:",
    items: [
      {
        title: "Brand Strategy:",
        description:
          "Define and discover your niche, target audience, and specialty. Leverage your most popular service as a gateway product, tailor your offers across low, medium, and high tiers, and master effective pricing. Value-package your top offerings and craft a marketing strategy that aligns with your goals.",
      },
      {
        title: "Brand Voice:",
        description:
          "Communicate clearly and concisely with copy that speaks directly to your audience’s pain points. We’ll refine your brand’s messaging with impactful headings, subheadings, bullet points, and calls to action.",
      },
      {
        title: "Brand Imagery:",
        description:
          "Achieve consistency and cohesiveness across all visual elements of your brand, from a professional logo and website to a unified social media presence.",
      },
      {
        title: "Brand Workflow:",
        description:
          "Streamline your customer journey with effective processes, systems, and automations. We’ll guide you in creating a seamless sales cycle that turns cold leads into warm prospects and ultimately, loyal buyers.",
      },
    ],
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-20 bg-white max-w-7xl mx-auto">
      {/* Top Center Heading */}
      <h2 className="text-3xl sm:text-4xl text-center uppercase text-[#7E1616] max-w-3xl mx-auto raj-bold mb-6 sm:mb-8">
        Empower Communities. Inspire Growth. Create Lasting Impact.
      </h2>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* NEW LEFT DIV */}
        <div className="flex-1 max-w-xl space-y-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase text-[#7E1616] raj-bold">
            Why Choose Nesha?
          </h3>
          <p className="text-gray-600 text-sm rubik font-medium">
            Nesha Brown is more than a speaker or coach—she’s a transformative
            leader with a track record of delivering measurable results.
          </p>
          <p className="text-gray-600 text-sm rubik font-medium">
            Nesha’s approach is deeply rooted in empowering individuals and
            organizations to turn challenges into opportunities. Whether she’s
            delivering a keynote, leading a workshop, or coaching a team, her
            focus is on creating lasting legacies of growth, stability, and
            impact.
          </p>
        </div>

        {/* EXISTING RIGHT DIV */}
        <div className="relative flex-1 space-y-8 pl-4 sm:pl-6 md:pl-8">
          {/* Timeline Vertical Line */}
          <div className="absolute top-10 sm:top-10 md:top-10 lg:top-10 left-1 sm:left-3 md:left-[19px] lg:left-5 w-[2px] h-[580px] sm:h-[470px] md:h-[670px] lg:h-[480px] bg-[#BD2F3E]" />

          {data.items.map((item, index) => (
            <div key={index} className="relative flex items-start space-x-4">
              {/* Timeline Dot */}
              <div className="absolute top-2 sm:top-2 left-[-20px] sm:left-[-22px] w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 border-[#7E1616] bg-[#7E1616]" />

              {/* Service Content */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl text-[#7E1616] raj-bold uppercase">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-1 rubik font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hire;
