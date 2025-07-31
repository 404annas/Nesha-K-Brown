import React, { useEffect, useRef } from "react";
import {
  User,
  Map,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Shield,
  Headphones,
  Heart,
} from "lucide-react";

const servicesData = [
  {
    number: "1",
    icon: <User size={32} />,
    title: "Professional Coaching",
    description:
      "Expert guidance to help entrepreneurs and early-career professionals overcome challenges, reach their goals, and realize their full potential.",
  },
  {
    number: "2",
    icon: <Map size={32} />,
    title: "Strategic Life Mapping",
    description:
      "Customized roadmaps to align your actions with your aspirations, giving you a clear and actionable path to success.",
  },
  {
    number: "3",
    icon: <GraduationCap size={32} />,
    title: "Tailored Training",
    description:
      "Training programs designed to meet the unique needs of your organization, equipping teams with the skills and knowledge to thrive in a rapidly changing world.",
  },
  {
    number: "4",
    icon: <MessageCircle size={32} />,
    title: "Authentic Conversations",
    description:
      "Open and empowering discussions that tackle real issues, inspire transformation, and ignite a passion for growth.",
  },
  {
    number: "5",
    icon: <Sparkles size={32} />,
    title: "Creatively Curated Experiences",
    description:
      "Memorable workshops and events designed to foster personal development and professional growth through innovative approaches.",
  },
  {
    number: "6",
    icon: <Shield size={32} />,
    title: "Honesty and Transparency",
    description:
      "Building trust through open communication and integrity, ensuring you're informed, respected, and empowered at every step.",
  },
  {
    number: "7",
    icon: <Headphones size={32} />,
    title: "Follow-Through and Ongoing Support",
    description:
      "Providing continuous resources and guidance to help you stay on track and achieve lasting results beyond our initial engagement.",
  },
  {
    number: "8",
    icon: <Heart size={32} />,
    title: "Dedication to Underserved Communities",
    description:
      "Focusing on making a difference in underserved communities by addressing systemic challenges and creating meaningful impact.",
  },
];

const ModernServicesCards = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0) scale(1)";
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px) scale(0.95)";
        card.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${
          index * 0.1
        }s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-white via-[#EACCC2]/10 to-[#EACCC2]/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#7E1616]/5 to-[#EACCC2]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#EACCC2]/10 to-[#7E1616]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Profile Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Profile Image */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative">
                {/* Background Shapes */}
                <div className="absolute -inset-8 bg-gradient-to-br from-[#7E1616]/20 to-[#EACCC2]/30 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#7E1616]/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#EACCC2]/20 rounded-full"></div>

                {/* Profile Image Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/50">
                  <img
                    src="https://neshakbrown.com/wp-content/uploads/2024/12/ImportedPhoto.752823918.886494-e1734200743871.jpeg"
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-8 -left-4 w-4 h-4 bg-[#7E1616] rounded-full animate-pulse"></div>
                <div className="absolute bottom-12 -right-2 w-3 h-3 bg-[#EACCC2] rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7E1616]/10 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-[#7E1616]" />
                <span className="text-[#7E1616] font-semibold text-sm">
                  About Nesha
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-[#7E1616]">EMPOWERING</span>{" "}
                <span className="text-gray-600">GROWTH</span>
                <br />
                <span className="text-gray-900">INSPIRING CHANGE</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Nesha Brown is passionate about helping individuals and
                communities unlock meaningful opportunities for growth. Here's
                how she delivers on her promise:
              </p>
            </div>
          </div>
        </div>

        {/* Services Header */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white/80 backdrop-blur-sm border border-[#EACCC2]/30 rounded-3xl p-8 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-[#7E1616]/10 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7E1616]/5 to-[#EACCC2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-radius-3xl"></div>

              {/* Number Badge */}
              <div className="absolute top-1 right-2 w-8 h-8 bg-gradient-to-br from-[#7E1616] to-[#7E1616]/80 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                {service.number}
              </div>

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#EACCC2]/20 to-[#7E1616]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <div className="text-[#7E1616] group-hover:text-[#7E1616] transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#7E1616]/20 rounded-full group-hover:scale-150 group-hover:bg-[#7E1616]/40 transition-all duration-500"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#EACCC2]/40 rounded-full group-hover:scale-150 group-hover:bg-[#EACCC2]/60 transition-all duration-700"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7E1616] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7E1616] to-[#EACCC2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#7E1616]/5 via-transparent to-[#EACCC2]/5"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
};

export default ModernServicesCards;
