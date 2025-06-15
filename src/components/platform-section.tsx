'use client';
import { motion } from "framer-motion";

const devices = [
    {
        icon: <i className="fas fa-laptop text-7xl text-primarycolor-blue opacity-20"></i>,
        gradient: "from-primarycolor-blue to-[#3BB2FE]",
        bg: "from-primarycolor-blue/20 to-[#94D0FF]/30",
        label: "Giao diện Desktop",
        delay: "0s"
    },
    {
        icon: <i className="fas fa-mobile-alt text-7xl text-[#FF9D60] opacity-20"></i>,
        gradient: "from-[#FF9D60] to-[#FF8B53]",
        bg: "from-[#FF9D60]/20 to-[#FFC1A2]/30",
        label: "Ứng dụng di động",
        delay: "1s"
    },
    {
        icon: <i className="fas fa-tablet-alt text-7xl text-[#8b5cf6] opacity-20"></i>,
        gradient: "from-[#8b5cf6] to-[#7C4EF1]",
        bg: "from-[#8b5cf6]/20 to-[#B8A1FF]/30",
        label: "Máy tính bảng",
        delay: "2s"
    },
    {
        icon: <i className="fas fa-headset text-7xl text-[#0d9488] opacity-20"></i>,
        gradient: "from-[#0d9488] to-[#0C927E]",
        bg: "from-[#0d9488]/20 to-[#22C5AB]/30",
        label: "Hỗ trợ 24/7",
        delay: "3s"
    }
];

export default function PlatformSection() {
    return (
        <section id="platform" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-sky-100 text-primarycolor-blue text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                        MỌI THIẾT BỊ - MỌI LÚC
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-600">Đồng hành cùng bạn trên mọi nền tảng</h2>
                    <p className="text-lg text-gray-600">
                        Dù bạn đang ở đâu, chỉ cần có thiết bị kết nối internet, Eduflow Pro luôn sẵn sàng cùng bạn tiến gần tới mục tiêu học tập.
                    </p>
                </motion.div>
                
                {/* <!-- Platform Devices --> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="lg:order-1">
                        <motion.div
                            className="mb-10"
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                                    <i className="fas fa-desktop text-xl text-primarycolor-blue"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-600">Trải nghiệm desktop hoàn hảo</h3>
                            </div>
                            <p className="text-gray-600">
                                Giao diện tối ưu cho máy tính với đầy đủ công cụ quản lý học tập chuyên nghiệp, làm việc đa nhiệm mượt mà.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            className="mb-10"
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                                    <i className="fas fa-mobile-alt text-xl text-[#FF9D60]"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-600">Ứng dụng di động hiện đại</h3>
                            </div>
                            <p className="text-gray-600">
                                Giao diện được thiết kế riêng cho điện thoại, giúp bạn học tập tiện lợi trên mọi chuyến đi chỉ với thao tác chạm.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                                    <i className="fas fa-tablet-alt text-xl text-primarycolor-blue"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-600">Tối ưu cho máy tính bảng</h3>
                            </div>
                            <p className="text-gray-600">
                                Khám phá khóa học cùng không gian rộng rãi trên màn hình lớn, lý tưởng cho học tập chuyên sâu và làm bài tập chi tiết.
                            </p>
                        </motion.div>
                    </div>
                    
                    <div className="relative device-showcase">
                        <div className="relative">
                            <div className="absolute top-0 right-0 opacity-25">
                                <svg width="250" height="333" viewBox="0 0 400 322" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M316 161C316 182.244 309.705 202.928 298.035 220.095C286.365 237.261 269.972 250.024 251.001 256.235C232.03 262.446 211.611 261.74 193.082 254.265C174.553 246.79 159.083 233.004 149.224 215.391C139.366 197.779 135.783 177.445 139.192 157.672C142.602 137.898 152.795 119.999 168.032 107.25C183.27 94.5006 202.631 87.712 222.5 88.0001" stroke="#5AB2FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6"/>
                                </svg>
                            </div>
                            <div className="grid grid-cols-2 gap-6 lg:gap-8 relative">
                                {devices.map((d, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="floating"
                                        style={{ animationDelay: d.delay }}
                                        initial={{ opacity: 0, y: 60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, delay: idx * 0.15 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <div className={`bg-gradient-to-br ${d.gradient} rounded-3xl p-4 shadow-2xl`}>
                                            <div className="bg-white rounded-2xl p-3 border-8 border-gray-800 shadow-lg">
                                                <div className={`w-full h-64 bg-gradient-to-r ${d.bg} rounded-xl flex items-center justify-center`}>
                                                    {d.icon}
                                                </div>
                                                <div className="text-center mt-4">
                                                    <div className="h-3 w-3/4 bg-gray-200 rounded-full mx-auto"></div>
                                                    <div className="h-2 w-2/5 bg-gray-200 rounded-full mx-auto mt-2"></div>
                                                </div>
                                                <div className="text-center mt-4 text-sm font-medium text-gray-700">{d.label}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-primarycolor-blue/20 to-[#94D0FF]/20 blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}