import { useState, useEffect } from "react";

// Menu data remains unchanged
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
  { title: "Work", badge: 25, href: "/" },
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

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col bg-black/60 backdrop-blur-lg transition-opacity duration-300 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 h-20">
        <a href="/" className="text-white text-2xl font-medium tracking-[-1.5px]" onClick={() => setMenuOpen(false)}>
          Rise at Seven<span className="text-sm align-top">®</span>
        </a>
        <button className="w-8 h-8 flex items-center justify-center text-white" onClick={() => setMenuOpen(false)}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {menuData.map((item, idx) => (
          <div key={item.title} className="border-b border-white/20 pb-2">
            {item.subLinks ? (
              <>
                <button
                  className="flex w-full items-center justify-between text-white text-xl font-bold py-4"
                  onClick={() => toggleAccordion(idx)}
                >
                  {item.title}
                  <span
                    className={`transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                      <path d="M11.9998 15L7.75708 10.7573L9.1713 9.34308L11.9998 12.1715L14.8283 9.34308L16.2425 10.7573L11.9998 15Z" fill="currentColor" />
                    </svg>
                  </span>
                </button>
                <div className={`mt-2 pl-4 space-y-2 ${openIndex === idx ? "block" : "hidden"}`}>
                  {item.subLinks.map((sub, i) => (
                    <a
                      key={i}
                      href="/"
                      className="block text-gray-300 hover:text-white text-lg"
                      onClick={() => setMenuOpen(false)}
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <a
                href={item.href}
                className="flex items-center text-white text-xl font-bold py-4"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
                {item.badge && (
                  <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#B8FFE7] text-[#111] text-sm font-semibold">
                    {item.badge}
                  </span>
                )}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="p-6 bg-black/80">
        <button className="w-full h-14 bg-white text-black rounded-full flex items-center justify-center transition-all duration-300 hover:rounded-md hover:-translate-y-0.5 hover:scale-95">
          Get In Touch ↗
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
