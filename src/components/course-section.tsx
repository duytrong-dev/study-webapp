'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
    {
        image: "/photo-2.avif",
        alt: "Programming Courses",
        badge: { text: "AI Support", bg: "from-primarycolor-blue to-[#94D0FF]", textColor: "text-white" },
        category: { name: "Lập trình", bg: "bg-blue-100", text: "text-primarycolor-blue" },
        stars: 4.5,
        rating: 4.7,
        title: "Lập trình Full-stack với AI",
        desc: "Tạo ứng dụng web hiện đại với JavaScript, React, NodeJS và AI hỗ trợ viết code",
        duration: "12 tuần",
        price: "2.990.000₫",
        priceColor: "text-primarycolor-blue"
    },
    {
        image: "/photo-3.avif",
        alt: "Marketing Courses",
        badge: { text: "Hot", bg: "bg-[#FF9D60]", textColor: "text-white" },
        category: { name: "Marketing", bg: "bg-orange-100", text: "text-[#FF9D60]" },
        stars: 5,
        rating: 4.9,
        title: "Thành thạo Digital Marketing",
        desc: "Trở thành chuyên gia SEO, Quảng cáo Google, Facebook và Content Marketing trong 60 ngày",
        duration: "8 tuần",
        price: "1.790.000₫",
        priceColor: "text-[#FF9D60]"
    },
    {
        image: "/photo-4.avif",
        alt: "Business Courses",
        badge: { text: "New", bg: "bg-[#8b5cf6]", textColor: "text-white" },
        category: { name: "Kinh doanh", bg: "bg-violet-100", text: "text-[#8b5cf6]" },
        stars: 5,
        rating: 5.0,
        title: "Quản trị Doanh nghiệp 4.0",
        desc: "Chiến lược lãnh đạo và kỹ năng quản lý trong thời đại chuyển đổi số",
        duration: "10 tuần",
        price: "2.490.000₫",
        priceColor: "text-[#8b5cf6]"
    },
    {
        image: "/photo-5.avif",
        alt: "Data Science Courses",
        badge: { text: "Sale", bg: "bg-[#0d9488]", textColor: "text-white" },
        category: { name: "Dữ liệu", bg: "bg-teal-100", text: "text-[#0d9488]" },
        stars: 4,
        rating: 4.1,
        title: "Data Science & AI nâng cao",
        desc: "Python, Machine Learning và hệ thống dữ liệu thực chiến cùng phân tích bằng AI",
        duration: "14 tuần",
        price: "2.990.000₫",
        priceColor: "text-[#0d9488]"
    }
];

function renderStars(stars: number) {
    const full = Math.floor(stars);
    const half = stars % 1 >= 0.5;
    return (
        <>
            {[...Array(full)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
            {half && <i className="fas fa-star-half-alt"></i>}
            {[...Array(5 - full - (half ? 1 : 0))].map((_, i) => <i key={i} className="far fa-star"></i>)}
        </>
    );
}

export default function CourseSection () {
    return (
        <section id="course" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-sky-100 text-primarycolor-blue text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                        KHÓA HỌC ĐA DẠNG
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-600">Khám phá thế giới kiến thức không giới hạn</h2>
                    <p className="text-lg text-gray-600">
                        Được hỗ trợ bởi AI, các khóa học trên EduFlow giúp bạn đạt được mục tiêu học tập nhanh hơn 37% so với phương pháp truyền thống.
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            className="course-card bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:-translate-y-3"
                            initial={{
                                opacity: 0,
                                x: idx % 2 === 0 ? -200 : 200, // Trái hoặc phải
                                scale: 0.8,
                                rotate: idx % 2 === 0 ? -8 : 8
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                rotate: 0
                            }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="relative">
                                <Image src={course.image} 
                                    alt={course.alt} 
                                    className="w-full h-56 object-cover"
                                    width={800}
                                    height={800}
                                />
                                <div className={`absolute top-0 left-0 ${course.badge.bg} ${course.badge.textColor} text-xs font-bold px-3 py-1.5 rounded-br-xl`}>
                                    {course.badge.text}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <div className={`${course.category.bg} ${course.category.text} text-xs font-bold px-2 py-1 rounded`}>
                                        {course.category.name}
                                    </div>
                                    <div className="flex text-amber-400 ml-auto">
                                        {renderStars(course.stars)}
                                        <span className="text-gray-500 text-sm ml-1">({course.rating})</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                                <p className="text-gray-600 text-sm mb-6">
                                    {course.desc}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center text-gray-500">
                                        <i className="far fa-clock mr-2"></i>
                                        <span className="text-sm">{course.duration}</span>
                                    </div>
                                    <div className={`font-bold text-lg ${course.priceColor}`}>{course.price}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <Link href="#" className="inline-flex items-center bg-gradient-to-r from-primarycolor-blue to-[#94D0FF] hover:from-[#3B96E6] hover:to-primarycolor-blue text-white font-semibold px-8 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                        Xem tất cả khóa học <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                </div>
            </div>
        </section>        
    )
}