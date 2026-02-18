import React from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Gradients using CSS for now, matching the vibe */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-lime-100 to-yellow-100 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30 -z-10 -translate-x-1/4 translate-y-1/4"></div>

            <div className="max-w-[1400px] mx-auto px-6 relative">

                {/* Decorative Floating Elements (Avatars/Icons) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-0 left-[10%] hidden lg:block"
                >
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 rotate-[-12deg]">
                        <span className="text-xl">😎</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-10 right-[15%] hidden lg:block"
                >
                    <div className="w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 rotate-[12deg]">
                        <span className="text-2xl">⚡️</span>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="text-center max-w-4xl mx-auto space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9]"
                    >
                        Land a job <br />
                        <span className="relative inline-block">
                            the easy way
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-lime-400 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 max-w-lg mx-auto leading-relaxed"
                    >
                        The best place to discover leaders in the product space, without hitting a glass ceiling.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-xl mt-8 border border-gray-100"
                    >
                        <div className="flex items-center px-4 py-3 flex-1 w-full border-b md:border-b-0 md:border-r border-gray-100">
                            <Search className="w-5 h-5 text-gray-400 mr-3" />
                            <input
                                type="text"
                                placeholder="Job title, keywords..."
                                className="w-full outline-none text-gray-700 placeholder:text-gray-400"
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-8 bg-gray-200 mx-2"></div>

                        <div className="flex items-center px-4 py-3 flex-1 w-full">
                            <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                            <input
                                type="text"
                                placeholder="City, state or zip"
                                className="w-full outline-none text-gray-700 placeholder:text-gray-400"
                            />
                        </div>

                        <Button variant="primary" className="w-full md:w-auto px-8 py-3 rounded-xl">
                            Search <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>

                    <div className="pt-12 flex justify-center text-sm text-gray-400 gap-8">
                        <span>Trusted by top companies</span>
                        {/* Logos would go here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
