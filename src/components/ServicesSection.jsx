import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const AnimatedButton = ({ text }) => {
  return (
    <button className="contact-btn shadow-sm">
      <div className="btn-text-wrapper">
        <span className="btn-text">
          {text} ↗
        </span>
        <span className="btn-text">
          {text} ↗
        </span>
      </div>
    </button>
  );
};

const FeaturedServicePill = ({ title, image }) => {
  return (
    <div className="relative w-full h-[80px] md:h-[100px] rounded-full overflow-hidden flex items-center px-6 md:px-10 group cursor-pointer">
      <img 
        src={image} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
        alt={title} 
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
      
      <div className="relative z-10 flex items-center gap-4 md:gap-5">
        <FiArrowUpRight className="text-white text-[28px] md:text-[36px]" />
        <h3 className="text-white text-[32px] md:text-[44px] font-medium tracking-[-1px] md:tracking-[-2px] leading-none mt-1">
          {title}
        </h3>
      </div>
    </div>
  );
};

const TextServiceLink = ({ title }) => {
  return (
    <div className="w-full h-[80px] md:h-[100px] flex items-center group cursor-pointer relative overflow-hidden">
      <h3 className="text-black text-[32px] md:text-[44px] font-medium tracking-[-1px] md:tracking-[-2px] leading-none transition-transform duration-500 ease-out group-hover:translate-x-6 mt-1">
        {title}
      </h3>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="w-full px-3 md:px-4 flex justify-center mt-8 md:mt-10">
      <section className="bg-[#f5f5f2] rounded-[40px] px-6 md:px-16 py-16 md:py-24 w-full max-w-[1440px] mx-auto relative flex flex-col">
        
        <div className="flex justify-center mb-16 md:mb-24">
          <AnimatedButton text="Explore Our Work" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 md:mb-16">
          <div className="flex items-center gap-3 md:gap-5 flex-wrap">
            <h2 className="text-[52px] md:text-[88px] leading-[0.9] font-medium tracking-[-3px] md:tracking-[-5px] text-black">
              Our
            </h2>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop"
              alt="Team working"
              className="w-[60px] h-[60px] md:w-[88px] md:h-[88px] rounded-[16px] md:rounded-[24px] object-cover"
            />
            <h2 className="text-[52px] md:text-[88px] leading-[0.9] font-medium tracking-[-3px] md:tracking-[-5px] text-black">
              Services
            </h2>
          </div>

          <div className="hidden lg:block">
            <AnimatedButton text="View All Services" />
          </div>
        </div>

        <div className="w-full h-[1px] bg-black/10 mb-8 md:mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-0">
          <div className="flex flex-col">
            <FeaturedServicePill 
              title="Digital PR" 
              image="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200&auto=format&fit=crop" 
            />
            <div className="w-full h-[1px] bg-transparent" /> 
            
            <TextServiceLink title="Search & Growth Strategy" />
            <div className="w-full h-[1px] bg-black/10" />
            
            <TextServiceLink title="Data & Insights" />
          </div>

          <div className="flex flex-col">
            <TextServiceLink title="Organic Social & Content" />
            <div className="w-full h-[1px] bg-black/10" />
            
            <TextServiceLink title="Content Experience" />
            <div className="w-full h-[1px] bg-black/10" />
            
            <TextServiceLink title="Onsite SEO" />
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