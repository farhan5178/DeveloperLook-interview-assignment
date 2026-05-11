import "../styles/navbar.css";
import { useState, useRef } from "react";

const MainNavbar = ({ setMenuOpen }) => {

  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu, img) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
    setMenuImage(img);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const [menuImage, setMenuImage] = useState(
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
  );

  return (
    <header className="main-navbar ">

      {/* LOGO */}
      <div className="logo">
        Rise at Seven<span>®</span>
      </div>

      {/* NAV LINKS */}
      <nav className="nav-links">

        {/* SERVICES */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("services", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop")}
          onMouseLeave={handleMouseLeave}
        >

          <a
            href="/"
            className={activeMenu === "services" ? "active-link" : ""}
          >
            Services +
          </a>

          <div
            className={`mega-menu ${activeMenu === "services" ? "show-menu" : ""}`}
          >

            <div className="mega-left">

              <p className="mega-label">
                Core Services
              </p>

              <div className="mega-grid">

                <div>

                  <div
                    className="service-item"
                    onMouseEnter={() =>
                      setMenuImage(
                        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                      )
                    }
                  >
                    <div className="service-text-wrapper">
                      <span className="service-text">Search & Growth Strategy</span>
                      <span className="service-text">Search & Growth Strategy</span>
                    </div>
                  </div>

                  <div
                    className="service-item"
                    onMouseEnter={() =>
                      setMenuImage(
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                      )
                    }
                  >
                    <div className="service-text-wrapper">
                      <span className="service-text">Onsite SEO</span>
                      <span className="service-text">Onsite SEO</span>
                    </div>
                  </div>

                  <div
                    className="service-item"
                    onMouseEnter={() =>
                      setMenuImage(
                        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                      )
                    }
                  >
                    <div className="service-text-wrapper">
                      <span className="service-text">Content Experience</span>
                      <span className="service-text">Content Experience</span>
                    </div>
                  </div>

                  <div
                    className="service-item"
                    onMouseEnter={() =>
                      setMenuImage(
                        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                      )
                    }
                  >
                    <div className="service-text-wrapper">
                      <span className="service-text">B2B Marketing</span>
                      <span className="service-text">B2B Marketing</span>
                    </div>
                  </div>

                </div>

                <div>

                  <div
                    className="service-item"
                    onMouseEnter={() =>
                      setMenuImage(
                        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
                      )
                    }
                  >
                    <div className="service-text-wrapper">
                      <span className="service-text">Digital PR</span>
                      <span className="service-text">Digital PR</span>
                    </div>
                  </div>

                  <div
                    className="service-item"
                    onMouseEnter={() =>
                      setMenuImage(
                        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                      )
                    }
                  >
                    <div className="service-text-wrapper">
                      <span className="service-text">Social Media & Campaigns</span>
                      <span className="service-text">Social Media & Campaigns</span>
                    </div>
                  </div>

                  <div
                    className="service-item"
                    onMouseEnter={() =>
                      setMenuImage(
                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                      )
                    }
                  >
                    <div className="service-text-wrapper">
                      <span className="service-text">Data & Insights</span>
                      <span className="service-text">Data & Insights</span>
                    </div>
                  </div>

                  <div
                    className="service-item"
                    onMouseEnter={() =>
                      setMenuImage(
                        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
                      )
                    }
                  >
                    <div className="service-text-wrapper">
                      <span className="service-text">Social SEO/Search</span>
                      <span className="service-text">Social SEO/Search</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className="mega-right">
              <div className="mega-img-wrapper">
                <img
                  src={menuImage}
                  alt=""
                />
              </div>

              <button className="mega-popup-btn">
                <div className="btn-text-wrapper">
                  <span className="btn-text">
                    View All Services ↗
                  </span>
                  <span className="btn-text">
                    View All Services ↗
                  </span>
                </div>
              </button>
            </div>

          </div>

        </div>

        {/* INDUSTRIES */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("industries", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop")}
          onMouseLeave={handleMouseLeave}
        >

          <a
            href="/"
            className={activeMenu === "industries" ? "active-link" : ""}
          >
            Industries +
          </a>

          <div
            className={`mega-menu ${activeMenu === "industries" ? "show-menu" : ""}`}
          >

            <div className="single-column">

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">B2B Marketing</span>
                  <span className="service-text">B2B Marketing</span>
                </div>
              </div>

            </div>

            <div className="mega-right">
              <div className="mega-img-wrapper">
                <img src={menuImage} alt="" />
              </div>
            </div>

          </div>

        </div>

        {/* INTERNATIONAL */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("international", "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop")}
          onMouseLeave={handleMouseLeave}
        >

          <a
            href="/"
            className={activeMenu === "international" ? "active-link" : ""}
          >
            International +
          </a>

          <div
            className={`mega-menu ${activeMenu === "international" ? "show-menu" : ""}`}
          >

            <div className="single-column">

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">US Digital PR</span>
                  <span className="service-text">US Digital PR</span>
                </div>
              </div>

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">Spain Digital PR</span>
                  <span className="service-text">Spain Digital PR</span>
                </div>
              </div>

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">Germany Digital PR</span>
                  <span className="service-text">Germany Digital PR</span>
                </div>
              </div>

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">Netherlands Digital PR</span>
                  <span className="service-text">Netherlands Digital PR</span>
                </div>
              </div>

            </div>

            <div className="mega-right">
              <div className="mega-img-wrapper">
                <img src={menuImage} alt="" />
              </div>
            </div>

          </div>

        </div>

        {/* ABOUT */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("about", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop")}
          onMouseLeave={handleMouseLeave}
        >

          <a
            href="/"
            className={activeMenu === "about" ? "active-link" : ""}
          >
            About +
          </a>

          <div
            className={`mega-menu ${activeMenu === "about" ? "show-menu" : ""}`}
          >

            <div className="single-column">

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">About Us</span>
                  <span className="service-text">About Us</span>
                </div>
              </div>

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">Meet The Risers</span>
                  <span className="service-text">Meet The Risers</span>
                </div>
              </div>

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">Culture</span>
                  <span className="service-text">Culture</span>
                </div>
              </div>

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">Testimonials</span>
                  <span className="service-text">Testimonials</span>
                </div>
              </div>

            </div>

            <div className="mega-right">
              <div className="mega-img-wrapper">
                <img src={menuImage} alt="" />
              </div>
            </div>

          </div>

        </div>

        <a href="/" className="work-link">
          Work
          <span className="badge">25</span>
        </a>

        <a href="/">Careers</a>

        {/* BLOG */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("blog", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop")}
          onMouseLeave={handleMouseLeave}
        >

          <a
            href="/"
            className={activeMenu === "blog" ? "active-link" : ""}
          >
            Blog & Resources +
          </a>

          <div
            className={`mega-menu ${activeMenu === "blog" ? "show-menu" : ""}`}
          >

            <div className="single-column">

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">Blog</span>
                  <span className="service-text">Blog</span>
                </div>
              </div>

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">Category Leaderboard</span>
                  <span className="service-text">Category Leaderboard</span>
                </div>
              </div>

              <div
                className="service-item"
                onMouseEnter={() =>
                  setMenuImage(
                    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
                  )
                }
              >
                <div className="service-text-wrapper">
                  <span className="service-text">Multi-Channel Search Report</span>
                  <span className="service-text">Multi-Channel Search Report</span>
                </div>
              </div>

            </div>

            <div className="mega-right">
              <div className="mega-img-wrapper">
                <img src={menuImage} alt="" />
              </div>
            </div>

          </div>

        </div>

        <a href="/">Webinar</a>

      </nav>
      {/* MOBILE MENU BUTTON */}

<button
  className="mobile-menu-btn"
  onClick={() => setMenuOpen(true)}
>

  <span></span>
  <span></span>

</button>

      {/* CONTACT BUTTON */}
      <button className="contact-btn">

        <div className="btn-text-wrapper">

          <span className="btn-text">
            Get In Touch ↗
          </span>

          <span className="btn-text">
            Get In Touch ↗
          </span>

        </div>

      </button>

    </header>
  );
};

export default MainNavbar;