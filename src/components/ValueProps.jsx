import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, MessageSquare } from 'lucide-react';

const steps = [
    {
        icon: <Users className="w-6 h-6 text-lime-400" />,
        title: "App-to-human",
        description: "Connect directly with hiring managers. No more black holes."
    },
    {
        icon: <Zap className="w-6 h-6 text-purple-400" />,
        title: "Instantly stand out",
        description: "Showcase your work and skills with a profile that pops."
    },
    {
        icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
        title: "Real-time feedback",
        description: "Know exactly where you stand in the process at all times."
    }
];

const ValueProps = () => {
    return (
        <section className="bg-black text-white py-24">
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                        Your new path <br />
                        <span className="text-gray-500">to hired.</span>
                    </h2>
                    <div className="w-24 h-1 bg-lime-400 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProps;
