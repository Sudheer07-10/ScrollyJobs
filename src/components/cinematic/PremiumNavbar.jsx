import React, { useState, useEffect } from 'react';

const PremiumNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto transition-all duration-300">
            <div className={`
                mx-auto px-8 py-4 rounded-full 
                bg-[#050505]/80 backdrop-blur-xl border border-white/10 shadow-2xl
                flex items-center justify-between md:gap-12
                transition-all duration-300
            `}>

                {/* Logo Area */}
                <div className="text-xl font-bold tracking-tight text-white cursor-pointer hover:opacity-80 transition-opacity">
                    Ottobon
                </div>

                {/* Center Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                    <a href="#" className="hover:text-white transition-colors">Overview</a>
                    <a href="#" className="hover:text-white transition-colors">Technology</a>
                    <a href="#" className="hover:text-white transition-colors">Curated</a>
                    <a href="#" className="hover:text-white transition-colors">Pricing</a>
                </div>

                {/* Right Action */}
                <div className="flex items-center gap-4">
                    {/* Search Icon */}
                    <button className="text-white/70 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>

                    <button className="bg-blue-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default PremiumNavbar;
