'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        // Cột 1
                        <div key="brand">
                            <div className="flex items-center mb-6">
                                <i className="fas fa-graduation-cap text-3xl text-[#94D0FF] mr-3"></i>
                                <span className="text-2xl font-bold text-[#94D0FF]">Eduflow Pro</span>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Nền tảng học tập thông minh với công nghệ AI, giúp tối ưu hóa trải nghiệm học tập trên mọi thiết bị.
                            </p>
                            <div className="flex space-x-4">
                                <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:bg-primarycolor-blue">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:bg-[#1DA1F2]">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:bg-[#FF0000]">
                                    <i className="fab fa-youtube"></i>
                                </Link>
                                <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors hover:bg-[#0A66C2]">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </div>
                        </div>,
                        // Cột 2
                        <div key="links">
                            <h3 className="text-lg font-semibold mb-6">Liên kết nhanh</h3>
                            <ul className="space-y-3">
                                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Về chúng tôi</Link></li>
                                <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">Tính năng</Link></li>
                                <li><Link href="#course" className="text-gray-400 hover:text-white transition-colors">Khóa học</Link></li>
                                <li><Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Đánh giá</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Liên hệ</Link></li>
                            </ul>
                        </div>,
                        // Cột 3
                        <div key="policy">
                            <h3 className="text-lg font-semibold mb-6">Chính sách</h3>
                            <ul className="space-y-3">
                                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Điều khoản sử dụng</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Chính sách bảo mật</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Chính sách cookie</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Thỏa thuận người dùng</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                            </ul>
                        </div>,
                        // Cột 4
                        <div key="contact">
                            <h3 className="text-lg font-semibold mb-6">Liên hệ</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-[#94D0FF] mt-1 mr-3"></i>
                                    <span className="text-gray-400">Trường Đại Học CNTT-TT Việt Hàn, Phường Hòa Quý, Quận Ngũ Hành Sơn, TP. Đà Nẵng</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-phone-alt text-[#94D0FF] mt-1 mr-3"></i>
                                    <span className="text-gray-400">+84 123 456 789</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-envelope text-[#94D0FF] mt-1 mr-3"></i>
                                    <span className="text-gray-400">support@eduflowpro.vn</span>
                                </li>
                            </ul>
                        </div>
                    ].map((col, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {col}
                        </motion.div>
                    ))}
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 EduFlow Pro. All rights reserved.</p>
                    <p className="text-gray-400 text-sm">Nguyen Duy Trong Team!</p>
                </div>
            </div>
        </footer>
    )
}