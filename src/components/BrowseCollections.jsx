import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const collections = [
    {
        title: "Women Led",
        count: "128 active jobs",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
        color: "bg-orange-50"
    },
    {
        title: "Wellness",
        count: "32 active jobs",
        image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800",
        color: "bg-yellow-50"
    },
    {
        title: "Web3",
        count: "15 active jobs",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
        color: "bg-purple-50"
    },
    {
        title: "Music Tech",
        count: "8 active jobs",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800",
        color: "bg-blue-50"
    },
    {
        title: "Marketplaces",
        count: "64 active jobs",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
        color: "bg-pink-50"
    },
    {
        title: "Living room",
        count: "42 active jobs",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
        color: "bg-green-50"
    }
];

const BrowseCollections = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <h2 className="text-4xl font-bold tracking-tighter">Browse Collections</h2>
                    <a href="#" className="text-sm font-medium hover:underline flex items-center">
                        View all <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collections.map((collection, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative h-48 rounded-3xl overflow-hidden mb-4">
                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                            </div>

                            <div className="flex items-center justify-between px-2">
                                <div>
                                    <h3 className="text-lg font-bold">{collection.title}</h3>
                                    <p className="text-sm text-gray-500">{collection.count}</p>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrowseCollections;
