// FeaturedWork.jsx

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Search, TrendingUp, ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "SIXT",
    year: "[2023-2025]",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
    tag: "Car rental",
    campaignText: "An extra 3m clicks regionally through SEO",
    campaignColor: "#c37d45",
  },
  {
    title: "Dojo - B2B",
    year: "[2021-2025]",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",
    tag: "Fintech",
    campaignText: "Revolutionizing B2B payments across the UK",
    campaignColor: "#32446a",
  },
  {
    title: "Magnet Trade - B2B",
    year: "[2023-2024]",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    tag: "B2B Trade",
    campaignText: "Building the digital future of trade",
    campaignColor: "#516f56",
  },
  {
    title: "Leading E Sim brand globally",
    year: "[2023-2025]",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    tag: "Telecom",
    campaignText: "Connecting millions without borders",
    campaignColor: "#6c4876",
  },
  {
    title: "JD Sports",
    year: "[2025]",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop",
    tag: "Retail",
    campaignText: "Dominating Google and AI search",
    campaignColor: "#dcbfa6",
  },
  {
    title: "Parkdean Resorts",
    year: "[2019-2025]",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",
    tag: "Travel",
    campaignText: "Record-breaking summer bookings",
    campaignColor: "#a35f5a",
  },
  {
    title: "Pooky",
    year: "[2025]",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000&auto=format&fit=crop",
    tag: "Lighting",
    campaignText: "Illuminating homes with premium design",
    campaignColor: "#4a5d4e",
  },
  {
    title: "Revolution Beauty",
    year: "[2022-2025]",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop",
    tag: "Beauty",
    campaignText: "Redefining the beauty standard",
    campaignColor: "#a36c7a",
  },
  {
    title: "Lloyds Pharmacy",
    year: "[2022-23]",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2000&auto=format&fit=crop",
    tag: "Health",
    campaignText: "Accessible healthcare for everyone",
    campaignColor: "#4b7461",
  },
  {
    title: "PrettyLittleThing",
    year: "[2025]",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop",
    tag: "Fashion",
    campaignText: "Setting the trends for a new generation",
    campaignColor: "#9e6e87",
  },
];

const ProjectCard = ({ item, isActive }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Premium magnetic spring physics
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  const handleMouseMove = (e) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    // Initialize position without animation on enter so it doesn't fly in from far away
    x.jump(e.clientX - rect.left);
    y.jump(e.clientY - rect.top);
  };

  return (
    <motion.div
      className={`relative w-full rounded-[32px] overflow-hidden bg-[#222] shrink-0 ${isActive ? 'cursor-none' : 'cursor-default'}`}
      style={{ height: `55vh` }}
      animate={{
        scale: isActive ? 1 : 0.82,
        opacity: isActive ? 1 : 0.35,
        filter: isActive ? "blur(0px)" : "blur(8px)"
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={isActive ? "hover" : ""}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      {/* BASE IMAGE */}
      <motion.img
        src={item.image}
        className="w-full h-full object-cover"
        alt={item.title}
        loading="lazy"
        variants={{ hover: { opacity: 0, scale: 1.05 } }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* SOLID CAMPAIGN OVERLAY */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col p-8 md:p-[50px] justify-start"
        style={{ backgroundColor: item.campaignColor }}
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
      >
        <motion.h3
          className="text-[48px] md:text-[64px] leading-[0.95] tracking-[-2px] text-[#111] font-semibold w-[90%]"
          initial={{ y: 20, opacity: 0 }}
          variants={{ hover: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {item.campaignText}
        </motion.h3>
      </motion.div>

      {/* MAGNETIC CIRCULAR CTA */}
      <motion.div
        className="absolute top-0 left-0 z-20 pointer-events-none w-24 h-24 bg-[#abf0d1] rounded-full flex items-center justify-center text-black shadow-2xl"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%", originX: 0.5, originY: 0.5 }}
        initial={{ scale: 0, opacity: 0 }}
        variants={{ hover: { scale: 1, opacity: 1 } }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArrowUpRight className="w-8 h-8" />
      </motion.div>

      {/* FLOATING PILL */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 right-6 md:right-8 backdrop-blur-xl px-5 py-3 rounded-full flex items-center gap-3 shadow-2xl z-30 font-medium border"
        initial={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderColor: "rgba(255, 255, 255, 0.1)",
          color: "rgba(255, 255, 255, 1)",
        }}
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 0.9,
          y: isActive ? 0 : 20,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderColor: "rgba(255, 255, 255, 0.1)",
          color: "rgba(255, 255, 255, 1)",
        }}
        variants={{
          hover: {
            y: -5,
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            borderColor: "rgba(0, 0, 0, 0.1)",
            color: "rgba(17, 17, 17, 1)",
          }
        }}
        transition={{ duration: 0.4 }}
      >
        <Search className="w-4 h-4" />
        <span className="text-[15px]">{item.tag}</span>
        <TrendingUp className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
};

const FeaturedWork = () => {
  const containerRef = useRef(null);

  // Track scroll state
  const [activeIndex, setActiveIndex] = useState(0);

  // Use Framer Motion to track scroll progress within the massive parent section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map progress exactly to array indices
    const rawIndex = latest * (works.length - 1);
    const newIndex = Math.round(rawIndex);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  const itemHeight = 100; // Height of each animated text item

  return (
    <div className="w-full px-3 md:px-4 flex justify-center">
      <section
        ref={containerRef}
        // On desktop, make it very tall (400vh) to allow scrolling. 
        // Do NOT use overflow-hidden here, as it breaks sticky positioning.
        className="bg-[#111] text-white rounded-[40px] p-6 md:p-16 w-full max-w-[1440px] mx-auto md:h-[400vh] relative"
      >

        {/* ================= DESKTOP PINNED VIEWPORT ================= */}
        <div className="hidden md:flex sticky top-16 h-[calc(100vh-128px)] w-full flex-row items-center justify-between overflow-hidden">

          {/* LEFT COLUMN: TITLE TRACK */}
          <div className="relative h-full w-[45%] flex flex-col justify-center">

            <div className="absolute top-10 left-6">
              <p className="text-[20px] font-medium tracking-tight text-white/80">Featured Work</p>
            </div>

            <div className="relative h-full w-full">
              {/* The Animated Text Track */}
              <motion.div
                className="absolute left-0 w-full flex flex-col"
                initial={false}
                // Translate upwards by itemHeight for each step
                animate={{ y: `-${activeIndex * itemHeight}px` }}
                // Position track so the first item naturally sits in the vertical center
                style={{ top: `calc(50% - ${itemHeight / 2}px)` }}
                transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.8 }}
              >
                {works.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div
                      key={index}
                      className="flex flex-col justify-center cursor-pointer"
                      style={{ height: itemHeight }}
                      animate={{
                        opacity: isActive ? 1 : 0.2,
                        scale: isActive ? 1 : 0.85,
                        filter: isActive ? "blur(0px)" : "blur(3px)"
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <h2 className="text-[72px] leading-[0.9] tracking-[-3px] font-semibold origin-left truncate">
                        {item.title}
                      </h2>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY IMAGE SHOWCASE */}
          <div className="relative w-[50%] h-full overflow-hidden flex flex-col justify-center mr-[6px]">

            <motion.div
              className="absolute left-0 w-full flex flex-col"
              initial={false}
              animate={{ y: `-${activeIndex * 61}vh` }} // 55vh height + 6vh gap
              style={{
                top: `calc(50% - 27.5vh)`, // Centered vertically (55vh / 2)
                gap: `6vh`
              }}
              transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.8 }}
            >
              {works.map((item, index) => (
                <ProjectCard key={index} item={item} isActive={index === activeIndex} />
              ))}
            </motion.div>

          </div>
        </div>

        {/* ================= MOBILE LAYOUT (Stacked) ================= */}
        {/* Absolute positioning inside the section messes up mobile. We need to isolate mobile. */}
        <div className="md:hidden flex flex-col relative z-10 pb-10">
          <p className="text-[20px] font-medium mb-10 tracking-tight text-white/80">Featured Work</p>

          <div className="flex flex-col gap-16">
            {works.map((item, index) => (
              <div key={index} className="flex flex-col gap-6">

                <h2 className="text-[48px] leading-[0.9] tracking-[-2px] font-semibold">
                  {item.title}
                </h2>

                <div className="relative w-full aspect-square rounded-[24px] overflow-hidden bg-[#222]">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-xl px-4 py-2.5 rounded-full flex items-center gap-2 border border-white/10 text-white font-medium shadow-2xl">
                    <Search className="w-3.5 h-3.5" />
                    <span className="text-[14px]">{item.tag}</span>
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default FeaturedWork;