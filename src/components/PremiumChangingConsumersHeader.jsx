import { motion } from "framer-motion";

const PremiumChangingConsumersHeader = () => {
    return (
        <section id="premium" className="w-full py-20 sm:py-28 md:py-36 overflow-hidden mt-24 md:mt-36 mb-24 md:mb-32">
            <div className="relative overflow-hidden whitespace-nowrap">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 38,
                        ease: "linear",
                    }}
                    className="flex items-center gap-5 sm:gap-8 w-max"
                >
                    {[...Array(2)].map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 sm:gap-5 md:gap-6 px-3 sm:px-5"
                        >
                            <h2 className="text-[28px] sm:text-[42px] md:text-[88px] leading-[0.9] md:leading-[0.82] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-6px] font-black text-black whitespace-nowrap">
                                Not Algorithms
                            </h2>

                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop"
                                alt="Team"
                                className="w-[38px] h-[38px] sm:w-[56px] sm:h-[56px] md:w-[82px] md:h-[82px] rounded-[14px] sm:rounded-[20px] md:rounded-[24px] object-cover border border-black/5 shadow-sm"
                            />

                            <h2 className="text-[28px] sm:text-[42px] md:text-[88px] leading-[0.9] md:leading-[0.82] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-6px] font-black text-black whitespace-nowrap">
                                Chasing Consumers
                            </h2>

                            <img
                                src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=400&auto=format&fit=crop"
                                alt="Creative Team"
                                className="w-[38px] h-[38px] sm:w-[56px] sm:h-[56px] md:w-[82px] md:h-[82px] rounded-[14px] sm:rounded-[20px] md:rounded-[24px] object-cover border border-black/5 shadow-sm"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Divider */}
            <div className="w-full h-[0.5px] bg-black/10 mt-10 md:mt-12" />
        </section>
    );
};

export default PremiumChangingConsumersHeader;
