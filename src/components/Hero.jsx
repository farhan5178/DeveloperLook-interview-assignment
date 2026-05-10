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

    <span>❮</span>

    <span>GLOBAL SEARCH AWARDS</span>

    <span>The Drum</span>

    <span>UK Social Media Awards</span>

    <span>CONTENT AWARDS</span>

    <span>❯</span>

  </div>

</div>

        {/* TITLE */}
        <div className="hero-title">

          <h1>We Create</h1>

          <div className="title-row">

            <span>Category</span>

            <img
              src={images[activeIndex].thumb}
              alt=""
            />

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

        <p>
          Organic media planners creating,
          distributing & optimising <br />

          <strong>search-first content</strong>

          {" "}for SEO, Social, PR,
          Ai and LLM search
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