import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ progress, isLoading }) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
                >
                    <div className="space-y-6 text-center">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter text-black"
                        >
                            Ottobon
                        </motion.h1>

                        <div className="w-64 h-[2px] bg-gray-100 rounded-full overflow-hidden mx-auto">
                            <motion.div
                                className="h-full bg-black"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "easeOut" }}
                            />
                        </div>

                        <p className="text-xs font-mono text-gray-400 tabular-nums">
                            Loading Experience... {progress}%
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
