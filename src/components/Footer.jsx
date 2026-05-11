import React from 'react';
import { FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa6';

const RiseFooter = () => {
  return (
    <footer className="bg-[#111111] text-white px-6 md:px-10 pt-16 pb-6 rounded-t-[34px] font-sans mx-2 md:mx-4 mb-2 md:mb-4">
      <div className="max-w-[1500px] mx-auto">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">

          {/* Newsletter & Socials */}
          <div className="flex-1 max-w-md">
            <h2 className="text-[26px] md:text-[32px] font-semibold mb-6 tracking-tight">
              Stay updated with Rise news
            </h2>
            <div className="relative group mb-6">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-[#1c1c1c] text-white py-4 px-6 rounded-full border-none focus:ring-1 focus:ring-gray-600 outline-none placeholder:text-gray-400 font-medium"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#DCF9EF] text-black p-3 rounded-full hover:scale-105 transition-transform flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2.5">
              {[
                { id: 'f', content: 'f' },
                { id: 'X', content: 'X' },
                { id: 'in', content: 'in' },
                { id: 'yt', icon: <FaYoutube className="text-[12px]" /> },
                { id: 'tt', icon: <FaTiktok className="text-[12px]" /> },
                { id: 'ig', icon: <FaInstagram className="text-[12px]" /> }
              ].map((item) => (
                <button key={item.id} className="flex items-center gap-1 bg-[#eeeeee] text-black rounded-full px-3 py-1.5 text-[11px] font-bold uppercase hover:bg-white transition-all">
                  {item.content && <span>{item.content}</span>}
                  {item.icon && <span>{item.icon}</span>}
                  <span className="text-[9px] font-black">↗</span>
                </button>
              ))}
            </div>
          </div>

          {/* Nav Links - Exact Spacing */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 lg:gap-x-24 gap-y-4 text-[18px] md:text-[20px] font-medium tracking-tight">
            <div className="space-y-3.5">
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">Services</a>
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">Work</a>
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">About</a>
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">Culture</a>
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">Meet The Risers</a>
            </div>
            <div className="space-y-3.5">
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">Testimonials</a>
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">Blog & Resources</a>
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">Webinars</a>
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">Careers</a>
            </div>
            <div className="space-y-3.5">
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">Sheffield</a>
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">Manchester</a>
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">London</a>
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">New York</a>
              <a href="#" className="block hover:text-[#DCF9EF] transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Huge Logo Section - Pixel Perfect Geometry */}
        <div className="w-full flex items-baseline justify-center overflow-hidden pb-8 pt-16">
          <span className="text-white text-[14vw] lg:text-[210px] font-bold tracking-[-0.04em] leading-none whitespace-nowrap">
            Rise at Seve
          </span>
          <svg viewBox="0 0 160 200" className="h-[10vw] lg:h-[150px] ml-2 lg:ml-4 translate-y-[1vw] lg:translate-y-[15px]" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 10 L130 190 V10"
              stroke="white"
              strokeWidth="24"
              fill="none"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
          <div className="flex items-start self-start mt-[1vw] lg:mt-[20px] ml-2 lg:ml-4">
             <span className="text-white text-[2vw] lg:text-[26px] font-bold border-[3px] lg:border-[5px] border-white rounded-full w-[4vw] h-[4vw] lg:w-[48px] lg:h-[48px] flex items-center justify-center">R</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[11px] text-white/80 tracking-wide gap-4 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
            <span>•</span>
            <span>Company Number 11955187</span>
            <span>•</span>
            <span>VAT Registered GB 322402945</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms & conditions</a>
          </div>
          <div className="text-white/60">Website MadeByShape</div>
        </div>

      </div>
    </footer>
  );
};

export default RiseFooter;