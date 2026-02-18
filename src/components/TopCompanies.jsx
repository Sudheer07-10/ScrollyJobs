import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const companies = [
    {
        name: "Webflow",
        description: "The visual way to build for the web.",
        logo: "W",
        color: "bg-blue-600 text-white",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Vercel",
        description: "Develop. Preview. Ship.",
        logo: "V",
        color: "bg-black text-white",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Miro",
        description: "The visual collaboration platform for every team.",
        logo: "M",
        color: "bg-yellow-400 text-black",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Linear",
        description: "The issue tracking tool you'll enjoy using.",
        logo: "L",
        color: "bg-purple-600 text-white",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
    }
];

const TopCompanies = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <h2 className="text-4xl font-bold tracking-tighter">Top Companies</h2>
                    <a href="#" className="text-sm font-medium hover:underline flex items-center">
                        View all <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {companies.map((company, index) => (
                        <a href="#" key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block">
                            <div className="h-48 overflow-hidden relative">
                                <img src={company.image} alt={company.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>

                                <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg shadow-lg ${company.color}`}>
                                    {company.logo}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2 flex items-center justify-between">
                                    {company.name}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-2">{company.description}</p>

                                <div className="mt-6 flex items-center gap-4 text-xs font-medium text-gray-400">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                                        ))}
                                    </div>
                                    <span>12 active jobs</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopCompanies;
