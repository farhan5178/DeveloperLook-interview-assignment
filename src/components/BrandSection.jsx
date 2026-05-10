import "../styles/brand-section.css";
  import { Splide, SplideSlide } from '@splidejs/react-splide';
  import '@splidejs/react-splide/css';




const BrandSection = () => {

 

  return (

    <section className="brand-section">

      {/* ================= LOGO ROW ================= */}

      <div className="brand-logos">

        <p>The agency behind</p>

     




 <div className="logo-marquee">

          <div className="logo-track">

            {/* SET 1 */}

            <div className="logo-set">

              <img
                src="https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5338&fp-y=0.5169&dm=1777373493&s=bb03a8f6ccc46401ed5f940ae7aa6d6f"
                alt=""
              />

              <img
                src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1754645714&s=bd5a1c6f9193f3f0ec0bbbe3caca8ef4"
                alt=""
              />

              <img
                src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/Untitled-design.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1752040111&s=0392eafd23d787e83e25c5b0535bbc77"
                alt=""
              />

            </div>

            {/* SET 2 */}

            <div className="logo-set">

              <img
                src="https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5338&fp-y=0.5169&dm=1777373493&s=bb03a8f6ccc46401ed5f940ae7aa6d6f"
                alt=""
              />

              <img
                src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1754645714&s=bd5a1c6f9193f3f0ec0bbbe3caca8ef4"
                alt=""
              />

              <img
                src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/Untitled-design.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1752040111&s=0392eafd23d787e83e25c5b0535bbc77"
                alt=""
              />

            </div>

          </div>

        </div>

      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="brand-content">

        {/* LEFT */}

        <div className="brand-left">

          <p>
            A global team of search-first content marketers
            engineering semantic relevancy & category
            signals for both the internet and people
          </p>

        </div>

        {/* RIGHT */}

        <div className="brand-right">

          <h2 className="brand-heading">

            <span className="heading-top">
              Driving Demand &
            </span>

            <div className="discovery-row">

              <span>Discovery</span>

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />

            </div>

          </h2>

          {/* BUTTONS */}

          <div className="brand-buttons">

            <button className="story-btn">
              Our Story ↗
            </button>

            <button className="service-btn">
              Our Services ↗
            </button>

          </div>

        </div>

      </div>

    </section>

  );

};

export default BrandSection;