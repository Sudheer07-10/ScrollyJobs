import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-lime-400 text-black hover:bg-lime-500 hover:shadow-lg hover:-translate-y-0.5 border border-transparent",
        outline: "bg-transparent border border-gray-200 text-black hover:border-black",
        ghost: "bg-transparent text-gray-600 hover:text-black hover:bg-gray-50",
        white: "bg-white text-black hover:bg-gray-100 border border-gray-200"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
