import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "How does the matching process work?",
        answer: "We use a combination of advanced AI and human expertise to match your unique skills and career aspirations with our network of top-tier companies."
    },
    {
        question: "What industries do you specialize in?",
        answer: "Our primary focus is on Technology, Creative Arts, Finance, and Healthcare, but we are constantly expanding into new sectors."
    },
    {
        question: "Is there a cost for candidates?",
        answer: "No. Our services are completely free for candidates. We believe talent should never have to pay for opportunity."
    },
    {
        question: "How long does the process take?",
        answer: "It varies depending on the role and company, but typically our candidates receive their first interview request within 2 weeks of profile completion."
    },
    {
        question: "Can I remain anonymous?",
        answer: "Yes. You have full control over your privacy settings. You can choose to be visible only to companies you apply to, or stay hidden until you're ready."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="relative z-10 py-24 bg-white text-black">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Header */}
                <div className="lg:col-span-12 mb-16 text-center">
                    <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-4 uppercase">
                        Support
                    </h3>
                    <h2 className="text-5xl md:text-6xl font-serif tracking-tight">
                        Common Questions.
                    </h2>
                </div>

                <div className="lg:col-span-8 lg:col-start-3 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200 overflow-hidden cursor-pointer"
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            <div className="py-6 flex items-center justify-between group">
                                <h3 className="text-xl font-medium font-serif group-hover:text-gray-600 transition-colors">{faq.question}</h3>
                                <div className="text-gray-400 group-hover:text-black transition-colors">
                                    {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </div>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-6 text-gray-600 leading-relaxed max-w-2xl">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
