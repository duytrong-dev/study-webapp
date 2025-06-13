import Image from "next/image";

const testimonials = [
    {
        name: "Trần Minh Anh",
        avatar: "/user-3.jpg",
        alt: "Student",
        stars: 5,
        comment: "Hệ thống AI của EduFlow đã thay đổi hoàn toàn cách học của tôi. Tính năng tạo câu hỏi từ tài liệu giúp tôi tiết kiệm 3 giờ học mỗi tuần!",
        badge: { text: "Sinh viên FPT", bg: "bg-blue-100", textColor: "text-primarycolor-blue" },
        bgCircle: "bg-primarycolor-blue/5"
    },
    {
        name: "Nguyễn Văn Tuấn",
        avatar: "/user-1.jpg",
        alt: "Teacher",
        stars: 4.5,
        comment: "Là giảng viên, tôi dùng EduFlow để soạn bài và tạo khóa học. AI tạo câu hỏi từ tài liệu đã tiết kiệm cho tôi hàng giờ soạn bài mỗi tuần.",
        badge: { text: "Giảng viên Đại học", bg: "bg-orange-100", textColor: "text-[#FF9D60]" },
        bgCircle: "bg-[#FF9D60]/5"
    },
    {
        name: "Lê Thị Hương",
        avatar: "/user-2.jpg",
        alt: "Professional",
        stars: 5,
        comment: "Với EduFlow, tôi có thể học ở bất kỳ đâu chỉ từ điện thoại. Tính năng đồng bộ cho phép tôi liền mạch chuyển đổi giữa làm việc và học tập.",
        badge: { text: "Marketing Manager", bg: "bg-violet-100", textColor: "text-[#8b5cf6]" },
        bgCircle: "bg-[#8b5cf6]/5"
    }
];

function renderStars(stars: number) {
    const full = Math.floor(stars);
    const half = stars % 1 >= 0.5;
    return (
        <>
            {[...Array(full)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
            {half && <i className="fas fa-star-half-alt"></i>}
        </>
    );
}

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-sky-100 text-primarycolor-blue text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                        NGƯỜI DÙNG NÓI GÌ
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-600">250.000+ người học đã thành công</h2>
                    <p className="text-lg text-gray-600">
                        Những khóa học chất lượng cao và hệ thống học tập thông minh đã thay đổi cách học của hàng ngàn người.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="testimonial-card rounded-2xl p-8 shadow-xl overflow-hidden relative hover:shadow-2xl transition-all">
                            <div className={`absolute top-5 right-5 w-20 h-20 rounded-full ${t.bgCircle}`}></div>
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white mr-4 overflow-hidden shadow">
                                    <Image src={t.avatar} alt={t.alt} className="w-full h-full object-cover" width={64} height={64} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-600">{t.name}</h4>
                                    <div className="flex text-amber-400 mt-1">
                                        {renderStars(t.stars)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-6">
                                &quot;{t.comment}&quot;
                            </p>
                            <div className="flex items-center">
                                <div className="h-px flex-1 bg-gray-200 mr-4"></div>
                                <div className={`${t.badge.bg} ${t.badge.textColor} text-xs font-bold px-2 py-1 rounded`}>
                                    {t.badge.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}