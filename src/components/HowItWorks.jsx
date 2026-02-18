import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
    {
        id: 1,
        title: "Build your new profile",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 2,
        title: "Discover jobs you love",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 3,
        title: "Apply direct to teams",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 4,
        title: "Get quick feedback",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 5,
        title: "Land interviews & jobs",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
    }
];

const HowItWorks = () => {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-6">
                <h2 className="text-4xl font-bold tracking-tighter text-center mb-16">
                    It's simple to get started
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Steps */}
                    <div className="space-y-6">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                onClick={() => setActiveStep(step.id)}
                                className={`flex items-center p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${activeStep === step.id ? 'bg-white border-black shadow-lg' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold mr-6 ${activeStep === step.id ? 'bg-lime-400 text-black' : 'bg-white text-gray-400 border border-gray-100'}`}>
                                    {step.id}
                                </div>
                                <h3 className={`text-xl font-bold ${activeStep === step.id ? 'text-black' : 'text-gray-400'}`}>
                                    {step.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Visual Preview */}
                    <div className="relative h-[600px] bg-white rounded-3xl border border-gray-200 p-4 shadow-xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>

                        <div className="mt-8 h-full rounded-xl overflow-hidden relative">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeStep}
                                    src={steps[activeStep - 1].image}
                                    alt={steps[activeStep - 1].title}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* Overlay Mock UI elements */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 bg-lime-400 rounded-full"></div>
                                    <div className="space-y-2 flex-1">
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
