import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [count, setCount] = useState(0);
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        let current = 0;
        let timeoutId;

        const updateCounter = () => {
            if (current >= 100) {
                setCount(100);
                timeoutId = setTimeout(() => setShowLogo(true), 250);
                return;
            }

            // Always increment between 1 and 10
            const increment = Math.floor(Math.random() * 10) + 1;
            current = Math.min(current + increment, 100);
            setCount(current);

            // Shorter delay to prevent stalling (30-80ms)
            const delay = Math.floor(Math.random() * 50) + 30;
            timeoutId = setTimeout(updateCounter, delay);
        };

        // Start almost immediately
        timeoutId = setTimeout(updateCounter, 100);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#e6e0d8] text-black overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
        >
            <AnimatePresence mode='wait'>
                {/* Counter Phase */}
                {!showLogo && (
                    <motion.div
                        key="counter"
                        className="absolute inset-0 flex items-center justify-center"
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        <h1 className="text-[15vw] md:text-[200px] leading-none font-medium tracking-tighter">
                            {count}
                        </h1>
                    </motion.div>
                )}

                {/* Logo Phase */}
                {showLogo && (
                    <motion.div
                        key="logo"
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        onAnimationComplete={() => {
                            // Wait a bit then trigger completion
                            setTimeout(onComplete, 1200);
                        }}
                    >
                        <h1 className="text-[15vw] md:text-[200px] leading-none font-medium tracking-tighter uppercase font-['Times_New_Roman']">
                            ottobon
                        </h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default LoadingScreen;
