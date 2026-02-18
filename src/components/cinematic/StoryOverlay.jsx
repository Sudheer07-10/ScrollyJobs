import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const StoryOverlay = ({ scrollProgress }) => {

    // Helper to create scroll-triggered opacity/y-axis animations
    const useStoryBeat = (start, end) => {
        // Ensure fade duration doesn't cause overlap
        const duration = end - start;
        const fade = Math.min(0.05, duration / 2);

        const opacity = useTransform(scrollProgress, [0, start, start + fade, end - fade, end, 1], [0, 0, 1, 1, 0, 0]);
        const y = useTransform(scrollProgress, [0, start, start + fade, end - fade, end, 1], [50, 50, 0, 0, -50, -50]);
        return { opacity, y };
    };

    // Define beats (Strictly non-overlapping buffers)
    const heroBeat = useStoryBeat(0.01, 0.12);    // Ends at 0.12
    const revealBeat = useStoryBeat(0.15, 0.32);  // Starts at 0.15
    const detailBeat = useStoryBeat(0.33, 0.55);  // Starts at 0.35
    // Adjusted beats to feel continuous but safe
    const impactBeat = useStoryBeat(0.50, 0.65);  // Starts at 0.50, Ends at 0.65

    // VISIBILITY FIX CONFIRMED:
    // Starts fading in at 0.68 (minimal 3% buffer from impactBeat end)
    // FADES OUT by 0.88 so it "comes and goes" distinctly before the next section
    const ctaBeat = {
        opacity: useTransform(scrollProgress, [0, 0.68, 0.78, 0.82, 0.88], [0, 0, 1, 1, 0]),
        y: useTransform(scrollProgress, [0, 0.68, 0.78, 0.82, 0.88], [50, 50, 0, 0, -100])
    };

    return (
        <div className="absolute inset-0 pointer-events-none z-[9999]">
            <div className="max-w-[1400px] mx-auto px-6 h-full relative">

                {/* 0-15% HERO */}
                <motion.div
                    style={heroBeat}
                    className="absolute top-1/4 left-0 right-0 text-right space-y-6 pointer-events-none flex justify-end px-12"
                >
                    <div className="max-w-5xl">
                        <h1 className="text-6xl md:text-8xl font-serif font-normal text-black drop-shadow-sm leading-[0.9]">
                            <span className="block tracking-tight">TRUST THE PATH</span>
                            <span className="block italic font-medium tracking-normal">DELIVER WITH</span>
                            <span className="block italic font-medium tracking-normal">CERTAINTY.</span>
                        </h1>
                    </div>
                </motion.div>

                {/* 15-40% REVEAL (Left) */}
                <motion.div
                    style={revealBeat}
                    className="absolute top-1/3 left-6 md:left-24 max-w-lg"
                >
                    <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl border border-white/50 shadow-2xl">
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-black mb-6">
                            Curated Opportunities.
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            We strip away the noise. Only the most innovative companies,
                            the most impactful roles, and the highest potential careers
                            make the cut.
                        </p>
                    </div>
                </motion.div>

                {/* 40-65% DETAIL (Right) */}
                <motion.div
                    style={detailBeat}
                    className="absolute top-1/3 right-6 md:right-24 max-w-lg text-right"
                >
                    <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl border border-white/50 shadow-2xl">
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-black mb-6">
                            Zero Noise.
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            Precision matching technology filters out irrelevant listings.
                            Focus on what matters: your craft, your growth, your future.
                        </p>
                    </div>
                </motion.div>

                {/* 65-85% IMPACT (Center/Bottom) */}
                <motion.div
                    style={impactBeat}
                    className="absolute bottom-1/4 left-0 right-0 text-center flex justify-center"
                >
                    <div className="max-w-4xl bg-white/60 backdrop-blur-xl p-12 rounded-3xl border border-white/50 shadow-2xl">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6">
                            Direct Connection.
                        </h2>
                        <p className="text-xl text-gray-800 font-medium">
                            Skip the resume black hole. Apply directly to hiring managers
                            at top-tier tech companies.
                        </p>
                    </div>
                </motion.div>

                {/* 85-100% CTA */}
                <motion.div style={{ opacity: ctaBeat.opacity, y: ctaBeat.y }} className="absolute top-1/3 left-0 right-0 text-center pointer-events-auto flex justify-center z-[9999]">
                    <div className="inline-block px-16 py-12 rounded-3xl bg-white backdrop-blur-xl border border-white/40 shadow-2xl">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-black mb-4">
                            Experience Ottobon.
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 font-medium">
                            Designed for focus. Crafted for careers.
                        </p>
                        <button className="px-10 py-5 bg-black text-white text-xl font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl">
                            Explore Openings
                        </button>
                        <br />
                        <button className="mt-4 text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-300 hover:border-black">
                            View Full Specs
                        </button>
                    </div>
                </motion.div>

                {/* SCROLL INDICATOR (Fades out immediately) */}
                <motion.div
                    style={{ opacity: useTransform(scrollProgress, [0, 0.05], [1, 0]) }}
                    className="absolute top-[60%] right-[15%] flex flex-col items-center space-y-2 pointer-events-none"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-gray-400">Scroll to Explore</p>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1"
                    >
                        <motion.div
                            className="w-1 h-2 bg-gray-400 rounded-full"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default StoryOverlay;
