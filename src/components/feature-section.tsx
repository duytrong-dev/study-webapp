'use client';
import { motion } from "framer-motion";

const features = [
    {
        icon: <i className="fas fa-robot text-3xl text-primarycolor-blue"></i>,
        bg: "from-blue-100 to-sky-100",
        title: "Trợ lý AI học tập 24/7",
        desc: "AI đồng hành cùng bạn giải đáp thắc mắc, gợi ý tài liệu học tập phù hợp và tạo câu hỏi kiểm tra ngay lập tức dựa trên bài học hiện tại.",
        bar: "from-sky-100 to-blue-100"
    },
    {
        icon: <i className="fas fa-file-import text-3xl text-[#FF9D60]"></i>,
        bg: "from-orange-100 to-amber-100",
        title: "AI xử lý tài liệu thông minh",
        desc: "Tải tệp lên và xem AI tự động tạo khóa học với slide bài giảng, hệ thống câu hỏi trắc nghiệm và bài kiểm tra đánh giá trong 30 giây.",
        bar: "from-orange-100 to-amber-100"
    },
    {
        icon: <i className="far fa-clock text-3xl text-primarycolor-blue"></i>,
        bg: "from-blue-100 to-sky-100",
        title: "Quản trị thời gian học tập",
        desc: "Hệ thống phân tích và tối ưu lịch học, đề xuất lộ trình cá nhân hóa giúp bạn tập trung vào đúng phần kiến thức chưa vững.",
        bar: "from-violet-100 to-purple-100"
    },
    {
        icon: <i className="fas fa-chart-line text-3xl text-[#0d9488]"></i>,
        bg: "from-emerald-100 to-teal-100",
        title: "Theo dõi tiến độ học tập 4.0",
        desc: "Bản đồ học tập thông minh trực quan hóa toàn bộ tiến trình học của bạn, dự đoán thời gian để hoàn thành mục tiêu.",
        bar: "from-emerald-100 to-teal-100"
    },
    {
        icon: <i className="fas fa-mobile-alt text-3xl text-[#FF9D60]"></i>,
        bg: "from-orange-100 to-amber-100",
        title: "Đồng bộ không giới hạn",
        desc: "Tiến độ khóa học, ghi chú được đồng bộ tự động trên mọi thiết bị, giúp bạn bắt đầu lại ngay vị trí đã dừng.",
        bar: "from-sky-100 to-cyan-100"
    },
    {
        icon: <i className="fas fa-users text-3xl text-[#8b5cf6]"></i>,
        bg: "from-violet-100 to-purple-100",
        title: "Cộng đồng học tập KẾT NỐI",
        desc: "Kết nối và trao đổi kiến thức với hàng triệu người học khắp thế giới trong không gian học tập chung.",
        bar: "from-fuchsia-100 to-pink-100"
    }
];

export default function FeatureSection () {
    return (
        <section id="features" className="py-24 bg-gradient-to-b from-white to-indigo-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-sky-100 text-primarycolor-blue text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                        CÔNG CỤ HỌC TẬP ĐỘT PHÁ
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-600">Chuyển đổi cách bạn học tập</h2>
                    <p className="text-lg text-gray-600">
                        Eduflow Pro tích hợp các công nghệ tiên tiến nhất để tối ưu hóa trải nghiệm học tập, giúp bạn tiếp thu kiến thức nhanh hơn và hiệu quả hơn bao giờ hết.
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, idx) => (
                        <motion.div
                            key={idx}
                            className="feature-card bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className={`w-16 h-16 bg-gradient-to-r ${f.bg} rounded-xl flex items-center justify-center mb-6`}>
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-600 mb-3">{f.title}</h3>
                            <p className="text-gray-600 mb-6">{f.desc}</p>
                            <div className={`gradient-bar h-1 w-full rounded-full bg-gradient-to-r ${f.bar}`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>        
    )
}