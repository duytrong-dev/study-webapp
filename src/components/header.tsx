'use client';
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { href: "#", label: "Trang chủ" },
    { href: "#features", label: "Tính năng" },
    { href: "#course", label: "Khóa học" },
    { href: "#platform", label: "Nền tảng" },
    { href: "#testimonials", label: "Đánh giá" },
];

export default function Header() {
    const [active, setActive] = useState(navLinks[0].href);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <motion.nav
            className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full z-40 transform"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
                <div className="flex items-center cursor-pointer">
                    <i className="fas fa-graduation-cap text-3xl text-primarycolor-blue mr-3"></i>
                    <span className="text-xl font-bold text-primarycolor-blue">Eduflow Pro</span>
                </div>
                
                <div className="hidden lg:flex space-x-8">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link text-gray-700 hover:text-primarycolor-blue font-medium transition-colors ${
                                active === link.href ? "text-primarycolor-blue font-bold" : ""
                            }`}
                            onClick={() => setActive(link.href)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                
                <div className="hidden lg:flex items-center space-x-4">
                    <Link href="/login" className="text-gray-600 hover:text-primarycolor-blue font-medium transition-colors">Đăng nhập</Link>
                    <Link href="/dashboard" className="bg-gradient-to-r from-primarycolor-blue to-[#94D0FF] hover:from-[#3B96E6] hover:to-primarycolor-blue text-white px-4 py-2 rounded-lg font-semibold shadow hover:shadow-lg transition-all transform hover:-translate-y-0.5">Bắt đầu ngay</Link>
                </div>
                
                <button
                    id="mobile-menu-btn"
                    className="lg:hidden text-gray-600"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>

            {/* Mobile menu */}
            {showMobileMenu && (
                <motion.div
                    className="lg:hidden bg-white/90 h-[100vh] z-40 backdrop-blur-lg shadow-md px-4 py-4 space-y-4 flex flex-col items-center"
                    initial={{ y: -40, opacity: 0, scale: 0.98 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -40, opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block text-gray-700 hover:text-primarycolor-blue font-medium transition-colors ${
                                active === link.href ? "text-primarycolor-blue font-bold" : ""
                            }`}
                            onClick={() => {
                                setActive(link.href);
                                setShowMobileMenu(false);
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/login" className="block text-gray-600 hover:text-primarycolor-blue font-medium transition-colors">Đăng nhập</Link>
                    <Link href="/dashboard" className="block bg-gradient-to-r from-primarycolor-blue to-[#94D0FF] hover:from-[#3B96E6] hover:to-primarycolor-blue text-white px-4 py-2 rounded-lg font-semibold shadow hover:shadow-lg transition-all">Bắt đầu ngay</Link>
                </motion.div>
            )}
        </motion.nav>
    )
}