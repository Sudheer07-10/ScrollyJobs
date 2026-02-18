import React from 'react';
import { motion } from 'framer-motion';

const OriginsSection = () => {
    return (
        <section className="relative z-10 w-full bg-white py-24 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto">

                {/* Intro Text */}
                <div className="flex justify-center mb-24">
                    <p className="max-w-xl text-lg md:text-xl text-gray-600 leading-relaxed text-center">
                        From the top-tier universities to the high-tech innovators in our network, every step is deliberate.
                        We believe that great careers aren't just found; they're cultivated, nurtured, and respected.
                    </p>
                </div>

                {/* Header */}
                <div className="mb-16">
                    <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-4 uppercase">
                        Sourcing
                    </h3>
                    <h2 className="text-5xl md:text-7xl font-serif text-black tracking-tight">
                        Origins of Excellence.
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                            alt="University"
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
                            <span className="text-white font-medium text-lg">Top Universities</span>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                            alt="Tech Hub"
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
                            <span className="text-white font-medium text-lg">Innovation Hubs</span>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                            alt="Mentorship"
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
                            <span className="text-white font-medium text-lg">Global Talent</span>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default OriginsSection;
