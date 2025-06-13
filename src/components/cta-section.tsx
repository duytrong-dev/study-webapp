'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section id="cta-section" className="py-24 bg-gradient-to-r from-primarycolor-blue to-[#94D0FF] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white"></div>
                <div className="absolute top-60 right-20 w-40 h-40 rounded-full bg-white"></div>
                <div className="absolute bottom-20 left-1/2 w-24 h-24 rounded-full bg-white"></div>
            </div>
            
            <div className="max-w-4xl mx-auto px-6 relative">
                <div className="text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-extrabold text-white mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Sẵn sàng học tập thông minh cùng AI?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-white opacity-90 mb-10 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Trải nghiệm EduFlow ngay hôm nay cùng 250.000+ người học. Dùng thử miễn phí trợ lý AI và nhận ưu đãi đặc biệt khi đăng ký.
                    </motion.p>
                    
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Link href="#" className="bg-white text-primarycolor-blue font-semibold px-8 py-4 rounded-lg text-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center">
                            <i className="fas fa-robot mr-3"></i> Dùng thử AI miễn phí
                        </Link>
                        <Link href="#" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-center transition-all duration-300 flex items-center">
                            <i className="fas fa-gift mr-3"></i> Gói premium ưu đãi
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}