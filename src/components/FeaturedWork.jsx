// FeaturedWork.jsx

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const works = [

  {
    title: "SIXT",
    year: "[2023-2025]",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
  },

  {
    title: "Dojo - B2B",
    year: "[2021-2025]",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",
  },

  {
    title: "Magnet Trade - B2B",
    year: "[2023-2024]",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Leading E Sim brand globally",
    year: "[2023-2025]",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
  },

  {
    title: "JD Sports",
    year: "[2025]",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop",
  },

  {
    title: "Parkdean Resorts",
    year: "[2019-2025]",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",
  },

  {
    title: "Pooky",
    year: "[2025]",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000&auto=format&fit=crop",
  },

  {
    title: "Revolution Beauty",
    year: "[2022-2025]",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop",
  },

  {
    title: "Lloyds Pharmacy",
    year: "[2022-23]",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2000&auto=format&fit=crop",
  },

  {
    title: "PrettyLittleThing",
    year: "[2025]",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop",
  },

];

const FeaturedWork = () => {

  const [active, setActive] = useState(0);

  const itemRefs = useRef([]);

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            const index = Number(
              entry.target.dataset.index
            );

            setActive(index);

          }

        });

      },

      {
        threshold:0.55,
      }

    );

    itemRefs.current.forEach((item) => {

      if(item) observer.observe(item);

    });

    return () => observer.disconnect();

  }, []);

  return (

    <section className="bg-black text-white rounded-[34px] px-10 py-10">

      <div className="grid grid-cols-2 gap-10">

        {/* ================= LEFT ================= */}

        <div>

          <p className="text-[22px] font-medium mb-28">
            Featured Work
          </p>

          <div className="flex flex-col">

            {works.map((item, index) => (

              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className="h-[220px] flex items-center"
              >

                <div
                  className={`
                    transition-all duration-500
                    ${active === index
                      ? "opacity-100 scale-100"
                      : "opacity-20 scale-[0.96]"
                    }
                  `}
                >

                  <div className="flex items-start gap-4">

                    <h2 className="text-[92px] leading-[0.84] tracking-[-6px] font-semibold">

                      {item.title}

                    </h2>

                    <span className="text-[24px] mt-4 whitespace-nowrap">

                      {item.year}

                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="sticky top-8 h-screen flex items-center">

          <div className="relative w-full h-[82vh] rounded-[30px] overflow-hidden">

            <AnimatePresence mode="wait">

              <motion.img
                key={works[active].image}
                src={works[active].image}
                alt=""
                initial={{
                  opacity:0,
                  scale:1.08
                }}
                animate={{
                  opacity:1,
                  scale:1
                }}
                exit={{
                  opacity:0,
                  scale:0.96
                }}
                transition={{
                  duration:0.7,
                  ease:"easeInOut"
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />

            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>

  );

};

export default FeaturedWork;