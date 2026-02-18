import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-black text-white pt-24 pb-8 px-6 md:px-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* Top Section: Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">

                    {/* Left Column: Brand & Subscribe */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-6">Hire Different ™</h3>

                            {/* Email Input */}
                            <div className="flex items-center bg-[#1a1a1a] rounded-lg p-1 pr-1.5 max-w-md border border-white/10">
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className="bg-transparent flex-1 text-white px-4 py-3 focus:outline-none placeholder-gray-500 text-sm"
                                />
                                <button className="bg-white text-black px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-200 transition-colors">
                                    Join for free
                                </button>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right Columns: Links */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Find Work */}
                        <div className="space-y-6">
                            <h4 className="font-bold text-lg">Find Work</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Explore Jobs</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Discover Companies</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Browse Collections</a></li>
                            </ul>
                        </div>

                        {/* Find People */}
                        <div className="space-y-6">
                            <h4 className="font-bold text-lg">Find People</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Learn More</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Sign up</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="space-y-6">
                            <h4 className="font-bold text-lg">Company</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Middle: Massive Logo */}
                <div className="w-full flex justify-center mb-16 border-b border-gray-900 pb-16">
                    <h1 className="text-[18vw] leading-none font-semibold tracking-tighter text-white select-none pointer-events-none">
                        ottobon
                    </h1>
                </div>

                {/* Bottom: Legal */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-gray-600 uppercase tracking-widest font-semibold">
                    <span>2026 ottobon Group. All Rights Reserved.</span>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
