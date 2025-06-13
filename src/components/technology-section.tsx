const techs = [
    {
        icon: <i className="fab fa-aws text-4xl text-primarycolor-blue"></i>,
        title: "AWS Cloud",
        desc: "Cơ sở hạ tầng đáng tin cậy giúp đảm bảo tốc độ và độ ổn định tuyệt đối."
    },
    {
        icon: <i className="fas fa-brain text-4xl text-primarycolor-blue"></i>,
        title: "AI & Machine Learning",
        desc: "Hệ thống AI tối ưu hóa học tập dựa trên năng lực cá nhân ưu việt."
    },
    {
        icon: <i className="fas fa-database text-4xl text-primarycolor-blue"></i>,
        title: "NoSQL & Graph Database",
        desc: "Quản lý dữ liệu lớn và phức tạp với khả năng mở rộng không giới hạn."
    },
    {
        icon: <i className="fas fa-shield-alt text-4xl text-primarycolor-blue"></i>,
        title: "Bảo mật nâng cao",
        desc: "Mã hóa dữ liệu đầu cuối và kiểm soát truy cập đa lớp cho sự riêng tư tối đa."
    },
    {
        icon: <i className="fas fa-bolt text-4xl text-primarycolor-blue"></i>,
        title: "Edge Computing",
        desc: "Tốc độ tải nhanh với nội dung phân phối từ 2000+ điểm trên toàn thế giới."
    }
];

export default function TechnologySection() {
    return (
        <section id="tech" className="py-24 bg-gradient-to-br from-blue-50 to-sky-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-sky-100 text-primarycolor-blue text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                        CÔNG NGHỆ HIỆN ĐẠI
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-600">Nền tảng mạnh mẽ cho trải nghiệm vượt trội</h2>
                    <p className="text-lg text-gray-600">
                        EduFlow kết hợp những công nghệ tiên tiến nhất để tạo ra môi trường học tập thông minh cho tương lai.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {techs.map((tech, idx) => (
                        <div key={idx} className="tech-card rounded-2xl p-6 text-center flex flex-col items-center">
                            <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center mb-6 pulse">
                                {tech.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-600 mb-2">{tech.title}</h3>
                            <p className="text-gray-600 text-sm">{tech.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}