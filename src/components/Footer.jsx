import React from 'react';

const RiseFooter = () => {
  return (
    <footer className="bg-[#0e0e0e] text-white px-6 py-12 md:px-12 md:py-16 rounded-t-[45px] font-sans">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
          
          {/* Newsletter & Socials */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">
              Stay updated with Rise news
            </h2>
            <div className="relative group mb-8">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-[#1c1c1c] text-gray-400 py-4 px-8 rounded-full border-none focus:ring-1 focus:ring-gray-600 outline-none placeholder:text-gray-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#bcffdb] text-black p-3.5 rounded-full hover:scale-105 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
            </div>

            {/* Social Icons - Exact Labels */}
            <div className="flex flex-wrap gap-2">
              {['f', 'X', 'in', 'y', 't', 'i'].map((icon) => (
                <button key={icon} className="flex items-center gap-1 bg-[#1c1c1c] border border-gray-800 rounded-full px-3 py-1 text-[10px] font-bold uppercase hover:bg-white hover:text-black transition-all">
                  {icon} <span className="text-[8px]">↗</span>
                </button>
              ))}
            </div>
          </div>

          {/* Nav Links - Exact Spacing */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20 text-[14px] font-medium text-gray-200">
            <div className="space-y-2">
              <a href="#" className="block hover:text-[#bcffdb]">Services</a>
              <a href="#" className="block hover:text-[#bcffdb]">Work</a>
              <a href="#" className="block hover:text-[#bcffdb]">About</a>
              <a href="#" className="block hover:text-[#bcffdb]">Culture</a>
              <a href="#" className="block hover:text-[#bcffdb]">Meet The Risers</a>
            </div>
            <div className="space-y-2 md:border-l md:border-gray-800 md:pl-10">
              <a href="#" className="block hover:text-[#bcffdb]">Testimonials</a>
              <a href="#" className="block hover:text-[#bcffdb]">Blog & Resources</a>
              <a href="#" className="block hover:text-[#bcffdb]">Webinars</a>
              <a href="#" className="block hover:text-[#bcffdb]">Careers</a>
            </div>
            <div className="space-y-2 md:border-l md:border-gray-800 md:pl-10">
              <a href="#" className="block hover:text-[#bcffdb]">Sheffield</a>
              <a href="#" className="block hover:text-[#bcffdb]">Manchester</a>
              <a href="#" className="block hover:text-[#bcffdb]">London</a>
              <a href="#" className="block hover:text-[#bcffdb]">New York</a>
              <a href="#" className="block hover:text-[#bcffdb]">Contact</a>
            </div>
          </div>
        </div>

        {/* Huge Logo Section - Pixel Perfect Geometry */}
        <div className="relative flex items-end overflow-hidden pb-4">
          <div className="w-full select-none">
            <svg viewBox="0 0 1400 220" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
               {/* "Rise at Seve" Text */}
              <text x="0" y="180" className="fill-white text-[190px] font-[900] tracking-[-0.05em]" style={{ fontFamily: 'sans-serif' }}>
                Rise at Seve
              </text>
              
              {/* Custom 'n' Arrow/Zigzag Path */}
              <path 
                d="M1180 180 V40 L1340 180 V40" 
                stroke="white" 
                strokeWidth="24" 
                fill="none" 
                strokeLinejoin="miter"
              />
              
              {/* Registered Symbol (R) */}
              <circle cx="1340" cy="65" r="28" stroke="white" strokeWidth="5" fill="none" />
              <text x="1328" y="76" className="fill-white text-[30px] font-bold">R</text>
            </svg>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-500 uppercase tracking-widest gap-4">
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <span className="border border-gray-800 px-2 py-0.5 rounded">© 2025 Rise at Seven Ltd. All rights reserved</span>
            <span>• Company Number 11955187</span>
            <span>• VAT Registered GB 322402945</span>
            <a href="#" className="hover:text-white">• Privacy Policy</a>
            <a href="#" className="hover:text-white">• Terms & conditions</a>
          </div>
          <div className="text-gray-400">Website MadeByShape</div>
        </div>

      </div>
    </footer>
  );
};

export default RiseFooter;