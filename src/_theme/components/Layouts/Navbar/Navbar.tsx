import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="bg-[#1C1C1C] text-white shadow-lg border-b border-white-light">
            <div className="max-w-full mx-auto flex justify-between items-center py-4 px-6">
                {/* Left Side - Logo and Brand */}
                <div className="flex items-center">
                    <div className="mr-4">
                        <img src="/assets/images/AiBot.png" alt="Bot" className="w-16" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/assets/images/LogoHeading.png" alt="Heading" className="w-32" />
                        <p className="text-white text-xs mt-2">Get Ready, Get Hired</p>
                    </div>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-sm">
                    {['Features', 'Benefits', 'How it Works', 'Pricing', 'Testimonials'].map((item) => (
                        <a key={item} href="#" className="hover:text-[#e940d1]">
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu with animation */}
            <div className={`md:hidden px-6 text-sm bg-[#1a1a1a] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] py-4 space-y-2' : 'max-h-0 py-0'}`}>
                {['Features', 'Benefits', 'How it Works', 'Pricing', 'Testimonials'].map((item) => (
                    <a key={item} href="#" className="block hover:text-[#e940d1]">
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
