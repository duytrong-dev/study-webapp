import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-14 pb-16 overflow-hidden">

            <div className="feature-blob top-20 left-1/4 w-80 h-80 bg-primarycolor-blue rounded-full"></div>
            <div className="feature-blob top-1/2 right-1/3 w-64 h-64 bg-[#FF9D60] rounded-full"></div>
            <div className="feature-blob bottom-20 left-2/3 w-96 h-96 bg-[#8b5cf6] rounded-full"></div>
            
            <div className="absolute inset-0 hero-bg-gradient -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-12 items-center">
                {/* <!-- Text Content --> */}
                <div className="text-center lg:text-left">
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-sky-100 text-primarycolor-blue text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                        Trợ lý học tập AI - Phiên bản thông minh 2024
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-600">
                        Tăng tốc học tập cùng<span className="gradient-text"> trợ lý thông minh AI</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10">
                        EduFlow là nền tảng học tập đầu tiên tích hợp trợ lý AI đa chức năng giúp bạn tối ưu thời gian, cá nhân hoá lộ trình học và nắm vững kiến thức nhanh gấp đôi.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                        <a href="#features" className="bg-gradient-to-r from-primarycolor-blue to-[#94D0FF] hover:from-[#3B96E6] hover:to-primarycolor-blue text-white font-semibold px-6 py-3.5 rounded-lg text-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center">
                            <i className="fas fa-bolt mr-2"></i> Dùng thử AI miễn phí
                        </a>
                        <a href="#course" className="bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 font-semibold px-6 py-3.5 rounded-lg text-center transition-all duration-300 shadow hover:shadow-md flex items-center justify-center">
                            <i className="fas fa-play-circle mr-2"></i> Xem demo học trải nghiệm
                        </a>
                    </div>
                    
                    {/* <!-- Icon Features --> */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-3 hero-shadow">
                                <i className="fas fa-brain text-xl text-primarycolor-blue icon-bounce"></i>
                            </div>
                            <div>
                                <p className="font-bold text-lg text-gray-600">AI Tự động phân tích</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center ">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mr-3 hero-shadow">
                                <i className="far fa-clock text-xl text-[#FF9D60] icon-flip"></i>
                            </div>
                            <div>
                                <p className="font-bold text-lg text-gray-600">Tiết kiệm 40% thời gian</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mr-3 hero-shadow">
                                <i className="fas fa-mobile-alt text-xl text-[#ef4444] icon-pulse"></i>
                            </div>
                            <div>
                                <p className="font-bold text-lg text-gray-600">Đồng bộ thiết bị</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Hero Illustration --> */}
                <div className="relative flex justify-center">
                    <div className="max-w-lg w-full relative floating">
                        <div className="bg-white border-2 border-white rounded-2xl hero-shadow overflow-hidden">
                            <Image src="/photo-1.avif" 
                                alt="Trợ lý học tập AI" 
                                className="w-full h-auto object-cover rounded-t-xl"
                                width={1200}
                                height={800}
                            />
                            <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-primarycolor-blue to-[#94D0FF] rounded-full flex items-center justify-center mr-3">
                                        <i className="fas fa-robot text-white"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Trợ lý AI đang hoạt động</h3>
                                        <p className="text-sm text-gray-600">Đang phân tích học tập của bạn</p>
                                    </div>
                                    <div className="ml-auto w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                                            <i className="fas fa-user text-gray-500"></i>
                                        </div>
                                        <div className="flex-1 bg-blue-50 rounded-2xl px-4 py-3">
                                            <p>Tôi hiện đang học ở đâu trong lộ trình?</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                            <i className="fas fa-robot text-primarycolor-blue"></i>
                                        </div>
                                        <div className="flex-1 bg-gray-50 rounded-2xl px-4 py-3">
                                            <p className="font-semibold mb-1">Bạn đã hoàn thành 75% Khóa học Lập trình</p>
                                            <p className="text-sm">Dự kiến hoàn thành sau 6 buổi học với chúng tôi!</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-end">
                                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                                        <span className="ml-2 text-sm text-gray-600">Trợ lý AI đang nhập...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Floating icon elements --> */}
                    <div className="absolute left-0 top-20 w-16 h-16 bg-gradient-to-r from-primarycolor-blue to-[#3BB2FE] rounded-full flex items-center justify-center shadow-xl icon-bounce">
                        <i className="fas fa-book text-white text-xl"></i>
                    </div>
                    
                    <div className="absolute right-0 top-1/3 w-14 h-14 bg-gradient-to-r from-[#FF9D60] to-[#ff8538] rounded-full flex items-center justify-center shadow-xl floating" style={{ animationDelay: "0.5s" }}>
                        <i className="fas fa-chart-line text-white text-lg"></i>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-r from-[#8b5cf6] to-[#7C4EF1] rounded-full flex items-center justify-center shadow-xl floating" style={{ animationDelay: "1s" }}>
                        <i className="fas fa-rocket text-white text-xl"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}