// src/components/ServicesSection.jsx

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

/* ================= DATA ================= */

const servicesLeft = [
  {
    title: "Digital PR",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Search & Growth Strategy",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Data & Insights",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
];

const servicesRight = [
  {
    title: "Organic Social & Content",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Content Experience",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Onsite SEO",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1200&auto=format&fit=crop",
  },
];


// ANIMATED BUTTON

// SMALLER PREMIUM BUTTON

const AnimatedButton = ({ text }) => {
  return (
    <button
      className="
        group
        relative
        h-[50px]
        px-7
        overflow-hidden
        rounded-full
        hover:rounded-[16px]
        bg-white
        text-black
        transition-all
        duration-500
      "
    >

      {/* FIRST TEXT */}

      <span
        className="
          flex
          items-center
          gap-1.5
          text-[16px]
          font-medium
          tracking-[-0.3px]
          transition-all
          duration-500
          group-hover:-translate-y-[220%]
        "
      >
        {text}
        <span>↗</span>
      </span>

      {/* SECOND TEXT */}

      <span
        className="
          absolute
          left-1/2
          top-1/2
          flex
          items-center
          gap-1.5
          text-[16px]
          font-medium
          tracking-[-0.3px]
          -translate-x-1/2
          translate-y-[220%]
          transition-all
          duration-500
          group-hover:-translate-y-1/2
        "
      >
        {text}
        <span>↗</span>
      </span>

    </button>
  );
};

/* ================= SERVICE ITEM ================= */

const ServiceItem = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        relative
        overflow-hidden
        rounded-[999px]
        cursor-pointer
        transition-all
        duration-500
      "
    >
      {/* BG IMAGE */}

      <div
        className={`
          absolute
          inset-0
          transition-all
          duration-500
          ${
            hovered
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }
        `}
      >
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          px-8
          py-6
        "
      >
        {/* ICON */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            flex
            items-center
            justify-center
            ${
              hovered
                ? "w-[58px] mr-4 opacity-100"
                : "w-0 mr-0 opacity-0"
            }
          `}
        >
          <div
            className="
              w-[52px]
              h-[52px]
              rounded-full
              bg-white
              flex
              items-center
              justify-center
            "
          >
            <FiArrowUpRight className="text-black text-[24px]" />
          </div>
        </div>

        {/* TITLE */}

        <h3
          className={`
            text-[32px] md:text-[48px]
            leading-[0.95]
            tracking-[-2px] md:tracking-[-3px]
            font-medium
            transition-all
            duration-500
            ${
              hovered
                ? "text-white"
                : "text-black"
            }
          `}
        >
          {item.title}
        </h3>
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#f5f5f2] px-8 md:px-10 py-20">
      
      {/* TOP BUTTON */}

      <div className="flex justify-center mb-20">
        <AnimatedButton text="Explore Our Work" />
      </div>

      {/* TITLE ROW */}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-0 mb-8">
        
        {/* LEFT */}

        <div className="flex items-center gap-3 md:gap-5">

          <h2
            className="
              text-[48px] md:text-[92px]
              leading-[0.9]
              font-semibold
              tracking-[-3px] md:tracking-[-6px]
              text-black
            "
          >
            Our
          </h2>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="
              w-[48px] h-[48px]
              md:w-[88px] md:h-[88px]
              rounded-[12px] md:rounded-[22px]
              object-cover
            "
          />

          <h2
            className="
              text-[48px] md:text-[92px]
              leading-[0.9]
              font-semibold
              tracking-[-3px] md:tracking-[-6px]
              text-black
            "
          >
            Services
          </h2>

        </div>

        {/* RIGHT BUTTON */}

        <AnimatedButton text="View All Services" />

      </div>

      {/* LINE */}

      <div className="w-full h-[1px] bg-black/10 mb-8" />

      {/* SERVICES GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
        
        {/* LEFT COLUMN */}

        <div className="flex flex-col gap-2">

          {servicesLeft.map((item, index) => (
            <div key={index}>
              
              <ServiceItem item={item} />

              {index !== servicesLeft.length - 1 && (
                <div className="w-full h-[1px] bg-black/10" />
              )}

            </div>
          ))}

        </div>

        {/* RIGHT COLUMN */}

        <div className="flex flex-col gap-2">

          {servicesRight.map((item, index) => (
            <div key={index}>
              
              <ServiceItem item={item} />

              {index !== servicesRight.length - 1 && (
                <div className="w-full h-[1px] bg-black/10" />
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;