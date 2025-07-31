import React from "react";
import {
  LuPencilRuler,
} from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { LiaBezierCurveSolid } from "react-icons/lia";

const cardsData = [
  { icon: <LuPencilRuler size={40}/>, title: "Web Design", count: 120 },
  { icon: <LiaBezierCurveSolid size={40}/>, title: "Ui/Ux Design", count: 241 },
  { icon: <FaRegLightbulb size={40}/>, title: "Web Research", count: 240 },
  { icon: <MdMailOutline size={40}/>, title: "Marketing", count: 331 },
];

const Cards = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-20 px-4 sm:px-6 md:px-10 bg-white flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl w-full">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center justify-center text-center
              border border-[#FFE3E3]
              rounded-2xl sm:rounded-3xl
              p-6 sm:p-8 md:p-10 lg:p-12
              bg-[white]
              transition-all duration-300
              hover:shadow-lg
            "
          >
            <div className="text-[#7E1616] mb-4">{card.icon}</div>
            <h3 className="group relative text-xl sm:text-2xl font-bold mb-2 text-black raj-bold cursor-pointer hover:text-[#7E1616] transition-all duration-300">
              {card.title}
              <span
                className="
                  absolute left-0 bottom-0 h-[2px] bg-[#7E1616] w-full
                  origin-left scale-x-0
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
              ></span>
            </h3>
            <p className="text-gray-500 text-sm sm:text-md rubik font-regular">
              {card.count} Projects
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
