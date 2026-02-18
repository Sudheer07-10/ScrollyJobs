import React from 'react';
import { motion } from 'framer-motion';

const FooterCTA = () => {
    return (
        <section className="relative z-10 py-32 bg-white flex flex-col items-center justify-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
            >
                {/* Main Headline */}
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9] text-black mb-8">
                    YOUR ONE <br className="hidden md:block" />
                    STOP <br className="hidden md:block" />
                    JOB SOLUTION.
                </h2>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-gray-500 mb-12">
                    Join to apply to 100's of the best start up jobs.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 min-w-[160px]">
                        Start for free
                    </button>
                    <button className="px-8 py-3 bg-white text-black border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 min-w-[160px]">
                        Join as a company
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default FooterCTA;
