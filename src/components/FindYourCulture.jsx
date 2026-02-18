import React from 'react';

const tags = [
    "Adventurous", "Autonomous", "Bold", "Collaborative", "Curious",
    "Design Driven", "Ego-Free", "Empowering", "Entrepreneurial", "Fast Paced",
    "Fearless", "Forward Thinking", "Friendly", "Inclusive", "Kind"
];

const FindYourCulture = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <h2 className="text-4xl font-bold tracking-tighter mb-12">Find your culture</h2>

                <div className="flex flex-wrap gap-4">
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            className="px-6 py-3 rounded-xl border border-gray-200 text-lg font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-200"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FindYourCulture;
