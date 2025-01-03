"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`w-full fixed top-0 left-0 right-0 bg-white z-50 shadow-md transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            {/* Top bar with logo and hamburger on mobile */}
            <div className="flex md:flex-col justify-between md:justify-center items-center px-4 py-4 bg-white">
                <img src="/logo.png" alt="Logo" className="w-[100px] h-[100px] md:w-[130px] md:h-[130px]" />
                <button 
                    className="md:hidden text-[#8e6c90] text-3xl absolute right-4 w-12 h-12 flex items-center justify-center"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Navigation links */}
            <div className={`
                md:flex md:justify-center
                bg-[#8e6c90] text-white
                ${isMenuOpen ? 'block' : 'hidden'}
            `}>
                {/* Mobile: vertical layout, Desktop: horizontal layout */}
                <div className={`
                    flex
                    md:flex-row md:gap-10 md:h-14 md:items-center
                    flex-col gap-4 py-4
                `}>
                    <Link 
                        href="/" 
                        className={`text-center px-4 py-2 ${pathname == "/" ? "bg-[#806182] rounded-xl" : ""}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/services" 
                        className={`text-center px-4 py-2 ${pathname == "/services" ? "bg-[#806182] rounded-xl" : ""}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link 
                        href="/gallery" 
                        className={`text-center px-4 py-2 ${pathname == "/gallery" ? "bg-[#806182] rounded-xl" : ""}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Gallery
                    </Link>
                    <Link 
                        href="/products" 
                        className={`text-center px-4 py-2 ${pathname == "/products" ? "bg-[#806182] rounded-xl" : ""}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Products
                    </Link>
                    <Link 
                        href="/contact" 
                        className={`text-center px-4 py-2 ${pathname == "/contact" ? "bg-[#806182] rounded-xl" : ""}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
