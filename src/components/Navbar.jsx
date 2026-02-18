import React from 'react';
import Button from './ui/Button';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-12">
                    <a href="/" className="text-3xl font-bold tracking-tighter">
                        ottobon
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">Find jobs</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">For companies</a>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <a href="#" className="text-sm font-medium text-black hover:underline">
                        Sign in
                    </a>
                    <Button variant="white" className="px-5 py-2 text-sm border-black hover:bg-black hover:text-white transition-colors">
                        Sign up free
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
