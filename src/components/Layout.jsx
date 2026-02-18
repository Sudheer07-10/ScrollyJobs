import React from 'react';
import Navbar from './Navbar';

import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-lime-400 selection:text-black">
            <Navbar />

            <main className="pt-16">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
