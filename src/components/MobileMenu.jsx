import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const menuData = [
  {
    title: "Services",
    subLinks: [
      "Search & Growth Strategy",
      "Onsite SEO",
      "Content Experience",
      "B2B Marketing",
      "Digital PR",
      "Social Media & Campaigns",
      "Data & Insights",
      "Social SEO/Search",
    ],
  },
  {
    title: "Industries",
    subLinks: ["B2B Marketing"],
  },
  {
    title: "International",
    subLinks: [
      "US Digital PR",
      "Spain Digital PR",
      "Germany Digital PR",
      "Netherlands Digital PR",
    ],
  },
  {
    title: "About",
    subLinks: ["About Us", "Meet The Risers", "Culture", "Testimonials"],
  },
  { title: "Work", href: "/" },
  { title: "Careers", href: "/" },
  {
    title: "Blog & Resources",
    subLinks: ["Blog", "Category Leaderboard", "Multi-Channel Search Report"],
  },
  { title: "Webinar", href: "/" },
];

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Framer motion variants
  const menuVariants = {
    closed: { opacity: 0, scale: 0.98, y: 10, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
  };

  const containerVariants = {
    closed: {
      transition: { staggerChildren: 0.03, staggerDirection: -1 }
    },
    open: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.2 } }}
          className="fixed inset-0 z-[9999] p-3 sm:p-5 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          {/* Main menu container with glassmorphism */}
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full h-full max-w-[500px] mx-auto bg-[#1c1c1c]/90 backdrop-blur-3xl rounded-[30px] border border-white/5 flex flex-col overflow-hidden shadow-2xl relative"
          >
            {/* Subtle colorful background blur effect inside the container */}
            <div 
              className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,100,100,0.1) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(100,100,255,0.08) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(255,200,100,0.04) 0%, transparent 60%)',
                filter: 'blur(40px)'
              }}
            />

            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 relative z-10 shrink-0">
              <a href="/" className="!text-white !opacity-100 text-[22px] font-medium tracking-[-1px] flex items-start" onClick={() => setMenuOpen(false)}>
                Rise at Seven<span className="text-[10px] leading-none ml-[2px] mt-[4px] !text-white">®</span>
              </a>
              <button 
                className="w-8 h-8 flex items-center justify-end !text-white !opacity-100" 
                onClick={() => setMenuOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 pb-4 relative z-10 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <motion.div 
                variants={containerVariants}
                initial="closed"
                animate="open"
                className="flex flex-col"
              >
                {/* Initial top divider aligned with text */}
                <div className="border-t border-white/20 w-full mb-1"></div>

                {menuData.map((item, idx) => (
                  <motion.div key={item.title} variants={itemVariants} className="border-b border-white/20">
                    {item.subLinks ? (
                      <div className="flex flex-col">
                        <button
                          className="flex w-full items-center justify-between !text-white !opacity-100 py-3.5 sm:py-4 group"
                          onClick={() => toggleAccordion(idx)}
                        >
                          <span className="text-[30px] sm:text-[34px] font-bold tracking-[-1.5px] leading-none !text-white !opacity-100">
                            {item.title}
                          </span>
                          <span
                            className="w-[28px] h-[28px] flex items-center justify-center rounded-full border border-white/30 !text-white !opacity-100 transition-all duration-300 group-hover:border-white group-hover:bg-white/10"
                          >
                            <svg 
                              width="14" 
                              height="14" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg"
                              className={`transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                            >
                              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                        
                        <AnimatePresence>
                          {openIndex === idx && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 space-y-3">
                                {item.subLinks.map((sub, i) => (
                                  <a
                                    key={i}
                                    href="/"
                                    className="block !text-white !opacity-100 text-[19px] sm:text-[20px] font-medium"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {sub}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center !text-white !opacity-100 py-3.5 sm:py-4 group"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="text-[30px] sm:text-[34px] font-bold tracking-[-1.5px] leading-none !text-white !opacity-100">
                          {item.title}
                        </span>
                      </a>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Footer CTA */}
            <div className="px-6 pb-6 pt-2 relative z-10 shrink-0">
              <button className="w-full h-[54px] bg-white text-black rounded-full flex items-center justify-center font-bold text-[15px] transition-all duration-300 hover:rounded-2xl hover:-translate-y-0.5 hover:scale-[0.985] group overflow-hidden relative">
                <span className="relative z-10 flex items-center justify-center gap-1">
                  Get In Touch <span className="text-[12px] font-bold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </span>
              </button>
            </div>

            {/* Custom scrollbar hiding styles injected */}
            <style>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
