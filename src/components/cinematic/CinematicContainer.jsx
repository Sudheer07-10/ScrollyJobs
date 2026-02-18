import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SequenceCanvas from './SequenceCanvas';
import StoryOverlay from './StoryOverlay';
import PremiumNavbar from './PremiumNavbar';

const CinematicContainer = () => {
    const containerRef = useRef(null);

    // Track scroll progress over the entire container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Fade out everything at the end to reveal next section smoothly
    const containerOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

    return (
        <div ref={containerRef} className="relative bg-white" style={{ height: '1000vh' }}>
            <PremiumNavbar />

            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <motion.div style={{ opacity: containerOpacity }} className="w-full h-full">
                    <SequenceCanvas scrollProgress={scrollYProgress} />
                    <StoryOverlay scrollProgress={scrollYProgress} />
                </motion.div>
            </div>

            {/* Optional: Content below the sequence */}
            {/* <div className="h-screen bg-[#050505] flex items-center justify-center text-white/50">
                <p>Scroll to explore</p>
            </div> */}
        </div>
    );
};

export default CinematicContainer;
