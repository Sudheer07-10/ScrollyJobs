import React from 'react';
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';

const jobs = [
    {
        company: "Linear",
        logo: "L", // Placeholder
        imgColor: "bg-purple-100 text-purple-600",
        role: "Senior Graphic Designer",
        type: "Full-time • Remote",
        tags: ["Design", "Marketing"]
    },
    {
        company: "Notion",
        logo: "N",
        imgColor: "bg-gray-100 text-black",
        role: "Product Manager - Mobile",
        type: "Full-time • NYC",
        tags: ["Product", "Mobile"]
    },
    {
        company: "Figma",
        logo: "F",
        imgColor: "bg-green-100 text-green-600",
        role: "Staff Software Engineer",
        type: "Full-time • SF / Remote",
        tags: ["Engineering", "React"]
    },
    {
        company: "Stripe",
        logo: "S",
        imgColor: "bg-indigo-100 text-indigo-600",
        role: "Backend Engineer - Payments",
        type: "Full-time • Dublin",
        tags: ["Engineering", "Backend"]
    }
];

const TrendingJobs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <h2 className="text-4xl font-bold tracking-tighter">Trending jobs</h2>
                    <a href="#" className="text-sm font-medium hover:underline flex items-center">
                        View all <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {jobs.map((job, index) => (
                        <div key={index} className="group relative bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:border-lime-200 transition-all duration-300">
                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${job.imgColor}`}>
                                    {job.logo}
                                </div>
                                <button className="text-gray-300 hover:text-black transition-colors">
                                    <span className="sr-only">Save</span>
                                    {/* Bookmark Icon can go here */}
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="mb-6 space-y-2">
                                <h3 className="font-bold text-lg leading-tight group-hover:text-lime-600 transition-colors">
                                    {job.role}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium">{job.company}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {job.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-gray-50 text-xs font-medium rounded-full text-gray-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                <span className="text-xs text-gray-400 font-medium">{job.type}</span>
                                <Button variant="white" className="px-4 py-2 text-xs border-gray-200 hover:scale-105">
                                    Apply now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingJobs;
