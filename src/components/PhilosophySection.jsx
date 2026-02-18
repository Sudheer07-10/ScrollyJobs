import React from 'react';
import { motion } from 'framer-motion';

const PhilosophySection = () => {
    return (
        <section className="relative z-10 w-full min-h-[80vh] bg-white flex flex-col items-center justify-start overflow-hidden pt-12 pb-24">

            {/* Central Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-black mb-6 leading-tight">
                        Our Philosophy is simple.
                        <br />
                        <span className="italic text-gray-500">We don't rush perfection.</span>
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Background */}
            <div className="absolute inset-0 flex flex-col justify-start items-center opacity-10 pointer-events-none select-none pt-48">

                {/* Row 1: PATIENCE • TIME */}
                <div className="w-full overflow-hidden whitespace-nowrap mb-4">
                    <motion.div
                        className="inline-block text-[10rem] md:text-[15rem] leading-none font-bold font-serif text-black"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20
                        }}
                    >
                        PATIENCE • TIME • PATIENCE • TIME • PATIENCE • TIME •
                    </motion.div>
                    <motion.div
                        className="inline-block text-[10rem] md:text-[15rem] leading-none font-bold font-serif text-black"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20
                        }}
                    >
                        PATIENCE • TIME • PATIENCE • TIME • PATIENCE • TIME •
                    </motion.div>
                </div>

                {/* Row 2: FOCUS • CRAFT */}
                <div className="w-full overflow-hidden whitespace-nowrap">
                    <motion.div
                        className="inline-block text-[10rem] md:text-[15rem] leading-none font-bold font-serif text-black"
                        animate={{ x: [-1000, 0] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25
                        }}
                    >
                        FOCUS • CRAFT • FOCUS • CRAFT • FOCUS • CRAFT •
                    </motion.div>
                    <motion.div
                        className="inline-block text-[10rem] md:text-[15rem] leading-none font-bold font-serif text-black"
                        animate={{ x: [-1000, 0] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25
                        }}
                    >
                        FOCUS • CRAFT • FOCUS • CRAFT • FOCUS • CRAFT •
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default PhilosophySection;
