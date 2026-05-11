import { useState, useEffect } from "react";
import "../styles/mobileMenu.css";

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
      "Social SEO/Search"
    ]
  },
  {
    title: "Industries",
    subLinks: [
      "B2B Marketing"
    ]
  },
  {
    title: "International",
    subLinks: [
      "US Digital PR",
      "Spain Digital PR",
      "Germany Digital PR",
      "Netherlands Digital PR"
    ]
  },
  {
    title: "About",
    subLinks: [
      "About Us",
      "Meet The Risers",
      "Culture",
      "Testimonials"
    ]
  },
  {
    title: "Work",
    badge: 25,
    href: "/"
  },
  {
    title: "Careers",
    href: "/"
  },
  {
    title: "Blog & Resources",
    subLinks: [
      "Blog",
      "Category Leaderboard",
      "Multi-Channel Search Report"
    ]
  },
  {
    title: "Webinar",
    href: "/"
  }
];

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Prevent scrolling on body when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}>
      
      {/* Header */}
      <div className="mobile-menu-header">
        <a href="/" className="mobile-menu-logo" onClick={() => setMenuOpen(false)}>
          Rise at Seven<span>®</span>
        </a>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="mobile-menu-content">
        {menuData.map((item, idx) => (
          <div key={item.title} className="mobile-menu-item">
            {item.subLinks ? (
              <>
                <button
                  className="mobile-menu-link"
                  onClick={() => toggleAccordion(idx)}
                >
                  {item.title}
                  <span className={`chevron ${openIndex === idx ? "open" : ""}`}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9998 15L7.75708 10.7573L9.1713 9.34308L11.9998 12.1715L14.8283 9.34308L16.2425 10.7573L11.9998 15Z"/>
                    </svg>
                  </span>
                </button>
                <div className={`mobile-submenu ${openIndex === idx ? "open" : ""}`}>
                  <div className="mobile-submenu-inner">
                    {item.subLinks.map((sub, i) => (
                      <a key={i} href="/" onClick={() => setMenuOpen(false)}>
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <a 
                href={item.href} 
                className="mobile-menu-link no-sub"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
                {item.badge && <span className="mobile-work-badge">{item.badge}</span>}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mobile-menu-footer">
        <button className="mobile-contact-btn">
          <div className="btn-text-wrapper">
            <span className="btn-text">Get In Touch ↗</span>
            <span className="btn-text">Get In Touch ↗</span>
          </div>
        </button>
      </div>

    </div>
  );
};

export default MobileMenu;
