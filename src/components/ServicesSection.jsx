import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedButton = ({ text }) => {
  return (
    <button className="contact-btn shadow-sm border border-black/5">
      <div className="btn-text-wrapper">
        <span className="btn-text">{text} ↗</span>
        <span className="btn-text">{text} ↗</span>
      </div>
    </button>
  );
};

const serviceItemsList = [
  {
    id: "pr",
    title: "Digital PR",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200&auto=format&fit=crop",
    col: 1,
  },
  {
    id: "search",
    title: "Search & Growth Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    col: 1,
  },
  {
    id: "data",
    title: "Data & Insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    col: 1,
  },
  {
    id: "social",
    title: "Organic Social & Content",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    col: 2,
  },
  {
    id: "content",
    title: "Content Experience",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop",
    col: 2,
  },
  {
    id: "seo",
    title: "Onsite SEO",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
    col: 2,
  }
];

const ServiceItem = ({ item, isActive, onActivate }) => {
  return (
    <motion.div
      layout
      onMouseEnter={onActivate}
      className={`relative w-full overflow-hidden flex items-center group cursor-pointer ${
        isActive ? "h-[80px] md:h-[100px] rounded-full px-6 md:px-10" : "h-[80px] md:h-[100px]"
      }`}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-0 rounded-full overflow-hidden"
          >
            <img 
              src={item.image} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              alt={item.title} 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout className="relative z-10 flex items-center gap-4 md:gap-5 w-full">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.8, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <FiArrowUpRight className="text-white text-[28px] md:text-[36px]" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.h3 
          layout
          className={`font-semibold leading-none mt-1 transition-all duration-500 ease-out 
            ${isActive 
              ? "text-white text-[32px] md:text-[44px] tracking-[-1px] md:tracking-[-2px]" 
              : "text-black text-[32px] md:text-[44px] tracking-[-1px] md:tracking-[-2px] group-hover:translate-x-6 opacity-90 group-hover:opacity-100"
            }
          `}
        >
          {item.title}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState("pr");

  return (
    <div className="w-full px-3 md:px-4 flex justify-center -mt-[6px]">
      <section className="bg-[#f5f5f2] rounded-[40px] px-6 md:px-16 py-16 md:py-24 w-full max-w-[1440px] mx-auto relative flex flex-col z-10">
        
        <div className="flex justify-center mb-16 md:mb-24">
          <AnimatedButton text="Explore Our Work" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <h2 className="text-[56px] md:text-[96px] leading-[0.85] font-bold tracking-[-3px] md:tracking-[-5px] text-black">
              Our
            </h2>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop"
              alt="Team working"
              className="w-[64px] h-[64px] md:w-[92px] md:h-[92px] rounded-[16px] md:rounded-[24px] object-cover border border-black/5 shadow-sm mt-2"
            />
            <h2 className="text-[56px] md:text-[96px] leading-[0.85] font-bold tracking-[-3px] md:tracking-[-5px] text-black">
              Services
            </h2>
          </div>

          <div className="hidden lg:block">
            <AnimatedButton text="View All Services" />
          </div>
        </div>

        <div className="w-full h-[1px] bg-black/5 mb-8 md:mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-0">
          <div className="flex flex-col">
            {serviceItemsList.filter(item => item.col === 1).map((item, index) => (
              <div key={item.id} className="w-full">
                <ServiceItem 
                  item={item} 
                  isActive={activeIndex === item.id} 
                  onActivate={() => setActiveIndex(item.id)} 
                />
                {index < 2 && <div className="w-full h-[1px] bg-black/5" />}
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {serviceItemsList.filter(item => item.col === 2).map((item, index) => (
              <div key={item.id} className="w-full">
                <ServiceItem 
                  item={item} 
                  isActive={activeIndex === item.id} 
                  onActivate={() => setActiveIndex(item.id)} 
                />
                {index < 2 && <div className="w-full h-[1px] bg-black/5" />}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12 lg:hidden">
          <AnimatedButton text="View All Services" />
        </div>

      </section>
    </div>
  );
};

export default ServicesSection;