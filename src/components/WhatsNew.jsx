// src/components/WhatsNew.jsx

import { useState } from "react";

const newsCards = [
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    author: "Ray Saddiq",
    time: "3 mins",
    title:
      "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
  },

  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    author: "Ray Saddiq",
    time: "2 mins",
    title:
      "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
  },

  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
    author: "Carrie Rose",
    time: "2 mins",
    title:
      "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    badge: "News",
  },
];

const WhatsNew = () => {

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {

    const rect = e.currentTarget.getBoundingClientRect();

    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

  };

  return (

    <section className="w-full bg-[#f5f5f2] px-7 md:px-10 py-24 overflow-hidden">

      {/* TOP ROW */}

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-0 mb-10">

        {/* TITLE */}

        <div className="flex items-center gap-2 md:gap-3">

          <h2 className="text-[48px] md:text-[82px] leading-[0.9] tracking-[-3px] md:tracking-[-5px] font-semibold text-black">

            What's

          </h2>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] rounded-[12px] md:rounded-[18px] object-cover mt-1"
          />

          <h2 className="text-[48px] md:text-[82px] leading-[0.9] tracking-[-3px] md:tracking-[-5px] font-semibold text-black">

            New

          </h2>

        </div>

        {/* BUTTON */}

        <button className="group relative overflow-hidden h-[44px] px-6 rounded-full bg-white text-black text-[14px] font-medium transition-all duration-500 hover:rounded-2xl">

          <span className="relative block h-[18px] overflow-hidden">

            <span className="block transition-transform duration-500 group-hover:-translate-y-full">

              Explore More Thoughts ↗

            </span>

            <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">

              Explore More Thoughts ↗

            </span>

          </span>

        </button>

      </div>

      {/* LINE */}

      <div className="w-full h-[1px] bg-black/10 mb-9" />

      {/* GRID */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {newsCards.map((card, index) => (

          <div
            key={index}
            className="group cursor-pointer"
          >

            {/* IMAGE CARD */}

            <div
              className="relative overflow-hidden rounded-[32px] h-[570px]"
              onMouseMove={handleMouseMove}
            >

              {/* IMAGE */}

              <img
                src={card.image}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-[1.04]
                  group-hover:blur-[5px]
                "
              />

              {/* BOTTOM BLUR OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-t
                  from-black/70
                  via-black/30
                  to-transparent
                "
              />

              {/* CURSOR ICON */}

              <div
                className="
                  absolute
                  pointer-events-none
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
                style={{
                  left: `${cursorPos.x}px`,
                  top: `${cursorPos.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >

                <div
                  className="
                    w-[126px]
                    h-[126px]
                    rounded-full
                    bg-[#b8f2df]
                    flex
                    items-center
                    justify-center
                  "
                >

                  <span className="text-[64px] text-black leading-none -mt-2">

                    ↗

                  </span>

                </div>

              </div>

              {/* BADGE */}

              {card.badge && (

                <div
                  className="
                    absolute
                    top-4
                    left-4
                    h-9
                    px-4
                    rounded-full
                    bg-[#9b6a49]
                    text-white
                    text-[15px]
                    font-medium
                    flex
                    items-center
                  "
                >

                  {card.badge}

                </div>

              )}

            </div>

            {/* META */}

            <div className="flex items-center gap-2 mt-5">

              {/* AUTHOR */}

              <div
                className="
                  h-10
                  px-3
                  rounded-full
                  bg-white
                  flex
                  items-center
                  gap-2
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                  alt=""
                  className="w-5 h-5 rounded-full object-cover"
                />

                <span className="text-[15px] text-black leading-none">

                  {card.author}

                </span>

              </div>

              {/* TIME */}

              <div
                className="
                  h-10
                  px-3
                  rounded-full
                  bg-white
                  flex
                  items-center
                  gap-2
                  text-[15px]
                  text-black
                "
              >

                <span className="text-[14px]">◷</span>

                {card.time}

              </div>

            </div>

            {/* TITLE */}

            <h3
              className="
                mt-5
                text-[28px]
                md:text-[31px]
                leading-[1.1]
                tracking-[-1px]
                font-medium
                text-black
                max-w-[95%]
                transition-all
                duration-300
                group-hover:opacity-70
              "
            >

              {card.title}

            </h3>

          </div>

        ))}

      </div>

    </section>

  );

};

export default WhatsNew;