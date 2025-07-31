import { useState } from "react";
import {
  Heart,
  Users,
  Target,
  Globe,
  Shield,
  Award,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Founders = () => {
  const [activeDirector, setActiveDirector] = useState(0);

  const directors = [
    {
      name: "Hamza Rana",
      title: "Director & Founder",
      initial: "H",
      background: "Medical Science Student & Security Officer",
      icon: <GraduationCap className="w-6 h-6" />,
      description:
        "A Medical Science student and security officer by profession, Hamza brings discipline, empathy, and a deep-rooted passion for healthcare. Inspired by his mother's journey through injury and disability, Hamza helped create Horizon Ability Care to raise the standard of support and build a service grounded in dignity and respect.",
      expertise: ["Healthcare Leadership", "Medical Sciences"],
    },
    {
      name: "Hashim Rana",
      title: "Director & Founder",
      initial: "H",
      background: "Global Security & Counter-Terrorism Expert",
      icon: <Shield className="w-6 h-6" />,
      description:
        "With a Bachelor in Global Security, Terrorism, and Counter-Terrorism, and professional experience in data centre security, Hashim contributes structure, integrity, and strong leadership to the team. His commitment to care is driven by the same personal story—ensuring no one feels unseen or unsupported during their most vulnerable moments.",
      expertise: ["Strategic Leadership", "Risk Management"],
    },
    {
      name: "Hafsa Rana",
      title: "Director & Founder",
      initial: "H",
      background: "Psychology Graduate & Retail Supervisor",
      icon: <Heart className="w-6 h-6" />,
      description:
        "Holding a Bachelor's degree in Psychology and working as a retail supervisor, Hafsa offers insight into emotional well-being and human connection. Her compassion and understanding help shape the warm, inclusive culture that Horizon Ability Care is known for—where people are truly heard and valued.",
      expertise: ["Team Leadership", "Client Relations"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d5865] to-[#c45259] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-5">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200 mb-2">
              <img src="/logo.png" className="w-4" />
              <span className="text-[#2d5865] font-medium">
                Horizon Ability Care
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#2d5865] to-[#c45259] bg-clip-text text-transparent">
                Our Founders
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Meet the dedicated family behind Horizon Ability Care—three
              siblings who turned personal experience into a shared mission to
              provide exceptional care with heart, respect, and dignity.
            </p>
          </div>
        </div>
      </div> */}
      {/* About Section */}
      {/* <div className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#c45259]/10 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#c45259] rounded-full animate-pulse"></div>
                <span className="text-[#2d5865] font-medium text-sm">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#2d5865] mb-6">
                About Horizon Ability Care
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Horizon Ability Care is a family-owned disability and aged care
                provider dedicated to helping individuals live with dignity,
                independence, and purpose. Guided by our philosophy, "Where
                every ability finds a horizon," we offer compassionate,
                person-centred support designed to empower people of all ages
                and abilities.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We provide tailored services that include daily personal care,
                community participation, supported independent living, and
                more—ensuring each individual receives support that aligns with
                their needs, goals, and cultural values.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                At Horizon Ability Care, we don't just deliver services—we build
                trusted relationships and meaningful connections. We know what
                it means to be on the other side of care, and that's why we're
                committed to doing things differently: with heart, with respect,
                and with a personal touch.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#2d5865] to-[#c45259] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#2d5865] mb-4">
                  Our Mission
                </h3>
                <p className="text-xl text-slate-600 italic leading-relaxed">
                  "Where every ability finds a horizon"
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-[#2d5865] to-[#c45259] rounded-full mx-auto mt-6"></div>
              </div>
            </div>
            {/* <img src="./OurFounders.png" className="rounded-[40px]" /> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* Directors Section */}
      <div className="py-10 px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#7E1616] mb-6 raj-bold">
              Meet Our Team
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto rubik font-medium">
              Behind Horizon Ability Care is a dedicated team of three siblings
              who turned personal experience into a shared mission to do
              better—for their family and for others.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#EACCC2] shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group ${
                  activeDirector === index
                    ? "ring-2 ring-[#7E1616]/30 shadow-[#7E1616]/20"
                    : ""
                }`}
                onMouseEnter={() => setActiveDirector(index)}
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <div
                      className={`w-24 h-24 rounded-2xl flex items-center justify-center mx-auto text-white text-3xl raj-bold transition-all duration-300 ${
                        activeDirector === index
                          ? "bg-gradient-to-r from-[#7E1616] to-black scale-110"
                          : "bg-gradient-to-r from-[#7E1616] to-black group-hover:scale-105"
                      }`}
                    >
                      {director.initial}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-[#7E1616]">{director.icon}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl text-[#BD2F3E] mb-2 group-hover:text-[#7E1616] transition-colors duration-300 raj-bold">
                    {director.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {director.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-[#EACCC2] text-[#7E1616] px-4 py-2 rounded-full text-xs font-medium rubik"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm rubik">
                    {director.description}
                  </p>

                  <div
                    className={`mt-6 h-1 rounded-full transition-all duration-300 mx-auto ${
                      activeDirector === index
                        ? "bg-gradient-to-r from-[#EACCC2] to-[#7E1616] w-full"
                        : "bg-slate-200 w-0 group-hover:w-1/2"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-200/50 shadow-xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-[#2d5865] to-[#c45259] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-[#2d5865] mb-4">
            Our Promise
          </h3>
          <p className="text-2xl text-slate-600 font-medium">
            At Horizon Ability Care, we care like family—because that's how it
            all began.
          </p>
        </div>
      </div> */}
      {/* Call to Action */}
      {/* <div className="py-20 px-4 bg-gradient-to-r from-[#2d5865] to-[#c45259]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Family-Centered Care Excellence
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join the families who trust us with their most precious moments.
            Discover the difference that compassionate, personalized care can
            make.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white hover:bg-white/90 text-[#c45259] hover:text-[#2d5865] px-10 py-4 rounded-2xl font-semibold hover:shadow-xl hover:shadow-black/25 transition-all duration-300 hover:scale-105">
              <a
                href="https://calendly.com/horizonabilitycare"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Consultation
              </a>
            </button>
            <Link
            //   to="/contact"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Founders;
