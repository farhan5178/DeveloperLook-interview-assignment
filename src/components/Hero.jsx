import "../styles/hero.css";
import { useEffect, useState } from "react";

const images = [

  {
    bg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
  },

  {
    bg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
  },

  {
    bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop"
  }

];

const Hero = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="hero-section">

      {/* BG IMAGE */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${images[activeIndex].bg})`
        }}
      />

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">

        {/* AWARDS */}
     <div className="hero-awards">

  <p>#1 MOST RECOMMENDED</p>

  <h4>CONTENT MARKETING AGENCY</h4>

  <div className="awards-logos">

    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="white" strokeWidth="1.5">
       <path d="M12 2C8 10 4 20 12 38M12 2C16 10 20 20 12 38" />
       <path d="M4 14C8 16 10 12 12 10" />
       <path d="M20 14C16 16 14 12 12 10" />
       <path d="M3 24C8 26 10 22 12 20" />
       <path d="M21 24C16 26 14 22 12 20" />
    </svg>

    <span className="award-item">GLOBAL SEARCH AWARDS</span>

    <span className="award-item">The Drum</span>

    <span className="award-item">UK Social Media Awards</span>

    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="white" strokeWidth="1.5">
       <path d="M12 2C8 10 4 20 12 38M12 2C16 10 20 20 12 38" />
       <path d="M4 14C8 16 10 12 12 10" />
       <path d="M20 14C16 16 14 12 12 10" />
       <path d="M3 24C8 26 10 22 12 20" />
       <path d="M21 24C16 26 14 22 12 20" />
    </svg>

  </div>

</div>

        {/* TITLE */}
        <div className="hero-title">

          <h1>We Create</h1>

          <div className="title-row">

            <div className="category-group">
              <span>Category</span>

              <img
                src={images[activeIndex].thumb}
                alt=""
              />
            </div>

            <span>Leaders</span>

          </div>

        </div>

        {/* SUBTEXT */}
        <p className="hero-subtext">
          on every searchable platform
        </p>

      </div>

      {/* BOTTOM */}
      <div className="hero-bottom">

        <p className="hero-description-text">
          Organic media planners creating, distributing & optimising  <br />
          <b>search-first</b> content for SEO, Social, PR, Ai and LLM search
        </p>

        <p className="hero-office">
          4 Global Offices serving <br />
          UK, USA (New York) & EU
        </p>

      </div>

    </section>

  );

};

export default Hero;