import TopNavigation from "@/components/top-navigation";
import Image from "next/image";

export default function CoursesId() {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <TopNavigation/>
            <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
                <div className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* <!-- Course Header --> */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                        <div className="flex items-center mb-2">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mr-3">Lập trình Python cơ bản</h1>
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">Đang học</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">Học Python từ cơ bản đến nâng cao với các bài tập thực hành</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center">
                            <i className="fas fa-play mr-2"></i> Tiếp tục học
                        </button>
                    </div>
                </div>
                
                {/* <!-- Course Progress --> */}
                <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center mb-4 md:mb-0">
                            <div className="relative w-16 h-16 mr-4">
                                <svg className="progress-ring w-16 h-16" viewBox="0 0 36 36">
                                    <circle className="progress-ring-circle stroke-gray-200 dark:stroke-gray-700" stroke-width="4" fill="transparent" r="16" cx="18" cy="18"></circle>
                                    <circle className="progress-ring-circle stroke-blue-500" stroke-width="4" fill="transparent" r="16" cx="18" cy="18" stroke-dasharray="100" stroke-dashoffset="28"></circle>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-800 dark:text-white">72%</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Tiến độ khóa học</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">12/20 bài học đã hoàn thành</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Thời gian học</p>
                                <p className="text-lg font-semibold text-gray-800 dark:text-white">12h 45m</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Bài kiểm tra</p>
                                <p className="text-lg font-semibold text-gray-800 dark:text-white">3/5</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Điểm số</p>
                                <p className="text-lg font-semibold text-gray-800 dark:text-white">8.5/10</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Ngày bắt đầu</p>
                                <p className="text-lg font-semibold text-gray-800 dark:text-white">15/03/2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Course Tabs --> */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                    <div className="flex space-x-8">
                        <button className="tab-button active py-2 px-1 font-medium text-sm focus:outline-none">
                            Nội dung khóa học
                        </button>
                        <button className="tab-button py-2 px-1 font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                            Tài nguyên
                        </button>
                        <button className="tab-button py-2 px-1 font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                            Thảo luận
                        </button>
                        <button className="tab-button py-2 px-1 font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                            Ghi chú
                        </button>
                        <button className="tab-button py-2 px-1 font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                            Cài đặt
                        </button>
                    </div>
                </div>
                
                {/* <!-- Course Content --> */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* <!-- Lessons Tree --> */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                                <h3 className="font-medium text-gray-800 dark:text-white">Nội dung khóa học</h3>
                            </div>
                            <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[700px] overflow-y-auto">
                                {/* <!-- Chapter 1 --> */}
                                <div className="chapter">
                                    <div className="chapter-header flex items-center justify-between p-4 cursor-pointer bg-gray-50 dark:bg-dark-700">
                                        <div className="flex items-center">
                                            <i className="fas fa-folder-open text-blue-500 mr-3"></i>
                                            <h4 className="font-medium text-gray-800 dark:text-white">Chương 1: Giới thiệu Python</h4>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200">3/5 bài</span>
                                            <i className="fas fa-chevron-down chapter-toggle ml-3 text-gray-500 dark:text-gray-400"></i>
                                        </div>
                                    </div>
                                    <div className="chapter-content">
                                        {/* <!-- Lesson 1 --> */}
                                        <div className="lesson-item active pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-blue-600 dark:text-blue-400">Bài 1: Giới thiệu về Python</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">15:24</span>
                                        </div>
                                        {/* <!-- Lesson 2 --> */}
                                        <div className="lesson-item completed pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 2: Cài đặt môi trường</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">22:10</span>
                                        </div>
                                        {/* <!-- Lesson 3 --> */}
                                        <div className="lesson-item completed pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 3: Chạy chương trình đầu tiên</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">18:45</span>
                                        </div>
                                        {/* <!-- Quiz 1 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-question-circle text-purple-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài kiểm tra 1</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">10 câu</span>
                                        </div>
                                        {/* <!-- Lesson 4 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 4: Biến và kiểu dữ liệu</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">25:30</span>
                                        </div>
                                        {/* <!-- Lesson 5 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 5: Toán tử và biểu thức</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">20:15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Chapter 2 --> */}
                                <div className="chapter">
                                    <div className="chapter-header flex items-center justify-between p-4 cursor-pointer bg-gray-50 dark:bg-dark-700">
                                        <div className="flex items-center">
                                            <i className="fas fa-folder-open text-blue-500 mr-3"></i>
                                            <h4 className="font-medium text-gray-800 dark:text-white">Chương 2: Cấu trúc điều khiển</h4>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200">4/6 bài</span>
                                            <i className="fas fa-chevron-down chapter-toggle ml-3 text-gray-500 dark:text-gray-400"></i>
                                        </div>
                                    </div>
                                    <div className="chapter-content collapsed">
                                        {/* <!-- Lesson 6 --> */}
                                        <div className="lesson-item completed pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 6: Câu lệnh điều kiện if</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">18:20</span>
                                        </div>
                                        {/* <!-- Lesson 7 --> */}
                                        <div className="lesson-item completed pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 7: Vòng lặp while</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">22:45</span>
                                        </div>
                                        {/* <!-- Lesson 8 --> */}
                                        <div className="lesson-item completed pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 8: Vòng lặp for</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">25:10</span>
                                        </div>
                                        {/* <!-- Quiz 2 --> */}
                                        <div className="lesson-item completed pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-question-circle text-purple-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài kiểm tra 2</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">15 câu</span>
                                        </div>
                                        {/* <!-- Lesson 9 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 9: Câu lệnh break và continue</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">15:30</span>
                                        </div>
                                        {/* <!-- Lesson 10 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 10: Xử lý ngoại lệ</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">20:00</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Chapter 3 --> */}
                                <div className="chapter">
                                    <div className="chapter-header flex items-center justify-between p-4 cursor-pointer">
                                        <div className="flex items-center">
                                            <i className="fas fa-folder text-blue-500 mr-3"></i>
                                            <h4 className="font-medium text-gray-800 dark:text-white">Chương 3: Hàm và Module</h4>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">0/5 bài</span>
                                            <i className="fas fa-chevron-down chapter-toggle collapsed ml-3 text-gray-500 dark:text-gray-400"></i>
                                        </div>
                                    </div>
                                    <div className="chapter-content collapsed">
                                        {/* <!-- Lesson 11 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 11: Khái niệm về hàm</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">25:00</span>
                                        </div>
                                        {/* <!-- Lesson 12 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 12: Tham số và giá trị trả về</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">30:15</span>
                                        </div>
                                        {/* <!-- Lesson 13 -->  */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 13: Phạm vi biến</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">18:30</span>
                                        </div>
                                        {/* <!-- Quiz 3 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-question-circle text-purple-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài kiểm tra 3</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">12 câu</span>
                                        </div>
                                        {/* <!-- Lesson 14 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 14: Module và package</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">22:45</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Chapter 4 --> */}
                                <div className="chapter">
                                    <div className="chapter-header flex items-center justify-between p-4 cursor-pointer">
                                        <div className="flex items-center">
                                            <i className="fas fa-folder text-blue-500 mr-3"></i>
                                            <h4 className="font-medium text-gray-800 dark:text-white">Chương 4: Lập trình hướng đối tượng</h4>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">0/4 bài</span>
                                            <i className="fas fa-chevron-down chapter-toggle collapsed ml-3 text-gray-500 dark:text-gray-400"></i>
                                        </div>
                                    </div>
                                    <div className="chapter-content collapsed">
                                        {/* <!-- Lesson 15 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 15: Lớp và đối tượng</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">30:00</span>
                                        </div>
                                        {/* <!-- Lesson 16 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 16: Kế thừa và đa hình</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">35:15</span>
                                        </div>
                                        {/* <!-- Quiz 4 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-question-circle text-purple-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài kiểm tra 4</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">15 câu</span>
                                        </div>
                                        {/* <!-- Lesson 17 --> */}
                                        <div className="lesson-item pl-14 pr-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-play-circle text-blue-500 mr-3"></i>
                                                <span className="lesson-title font-medium text-gray-700 dark:text-gray-300">Bài 17: Magic methods</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">25:30</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Lesson Content --> */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                            {/* <!-- Lesson Header --> */}
                            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">Bài 1: Giới thiệu về Python</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Chương 1: Giới thiệu Python • Bài 1/5</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700">
                                            <i className="fas fa-bookmark"></i>
                                        </button>
                                        <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700">
                                            <i className="fas fa-share-alt"></i>
                                        </button>
                                        <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700">
                                            <i className="fas fa-ellipsis-v"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- Video Player --> */}
                            <div className="aspect-w-16 aspect-h-9 bg-black">
                                <div className="w-full h-96 bg-gray-800 flex items-center justify-center">
                                    <div className="text-center">
                                        <i className="fas fa-play-circle text-5xl text-white opacity-50 mb-2"></i>
                                        <p className="text-white">Video bài giảng</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- Lesson Navigation --> */}
                            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between">
                                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-dark-700 dark:border-gray-600 dark:text-gray-300 flex items-center">
                                    <i className="fas fa-arrow-left mr-2"></i> Bài trước
                                </button>
                                <button className="px-4 py-2 bg-primary-500 text-white rounded-md text-sm font-medium hover:bg-primary-600 flex items-center">
                                    Đánh dấu hoàn thành <i className="fas fa-check ml-2"></i>
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-dark-700 dark:border-gray-600 dark:text-gray-300 flex items-center">
                                    Bài tiếp theo <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                            
                            {/* <!-- Lesson Content --> */}
                            <div className="p-6">
                                <div className="prose dark:prose-invert max-w-none">
                                    <h2>Giới thiệu về Python</h2>
                                    <p>Python là một ngôn ngữ lập trình bậc cao, thông dịch, hướng đối tượng và đa mục đích. Python được tạo ra bởi Guido van Rossum và được phát hành lần đầu tiên vào năm 1991.</p>
                                    
                                    <h3>Đặc điểm nổi bật của Python</h3>
                                    <ul>
                                        <li><strong>Dễ học:</strong> Cú pháp đơn giản, rõ ràng, gần gũi với ngôn ngữ tự nhiên</li>
                                        <li><strong>Đa nền tảng:</strong> Chạy được trên nhiều hệ điều hành khác nhau</li>
                                        <li><strong>Thư viện phong phú:</strong> Hỗ trợ nhiều thư viện cho các lĩnh vực khác nhau</li>
                                        <li><strong>Cộng đồng lớn:</strong> Có nhiều tài liệu và hỗ trợ từ cộng đồng</li>
                                    </ul>
                                    
                                    <h3>Ứng dụng của Python</h3>
                                    <p>Python được sử dụng trong nhiều lĩnh vực:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                                            <h4 className="font-medium text-blue-800 dark:text-blue-200 flex items-center">
                                                <i className="fas fa-laptop-code mr-2"></i> Phát triển web
                                            </h4>
                                            <p className="text-sm text-blue-700 dark:text-blue-300">Django, Flask, FastAPI</p>
                                        </div>
                                        <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                                            <h4 className="font-medium text-purple-800 dark:text-purple-200 flex items-center">
                                                <i className="fas fa-brain mr-2"></i> Khoa học dữ liệu
                                            </h4>
                                            <p className="text-sm text-purple-700 dark:text-purple-300">Pandas, NumPy, SciPy</p>
                                        </div>
                                        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                                            <h4 className="font-medium text-green-800 dark:text-green-200 flex items-center">
                                                <i className="fas fa-robot mr-2"></i> AI & Machine Learning
                                            </h4>
                                            <p className="text-sm text-green-700 dark:text-green-300">TensorFlow, PyTorch, scikit-learn</p>
                                        </div>
                                        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                                            <h4 className="font-medium text-yellow-800 dark:text-yellow-200 flex items-center">
                                                <i className="fas fa-tools mr-2"></i> Tự động hóa
                                            </h4>
                                            <p className="text-sm text-yellow-700 dark:text-yellow-300">Scripting, Automation</p>
                                        </div>
                                    </div>
                                    
                                    <h3>Cú pháp cơ bản</h3>
                                    <p>Python sử dụng thụt lề để xác định khối lệnh thay vì dấu ngoặc nhọn như nhiều ngôn ngữ khác.</p>
                                    
                                    <div className="bg-gray-800 rounded-lg p-4 my-4 overflow-x-auto">
                                        <pre><code className="text-sm text-gray-300"># Đây là chương trình Python đầu tiên
print("Xin chào, Python!")

# Khai báo biến
x = 10
y = 20
tong = x + y

# Câu lệnh điều kiện
if tong  30:
    print("Tổng lớn hơn 30")
else:
    print("Tổng nhỏ hơn hoặc bằng 30")</code></pre>
                                    </div>
                                    
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-6">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 pt-1">
                                                <i className="fas fa-lightbulb text-blue-500 text-xl"></i>
                                            </div>
                                            <div className="ml-3">
                                                <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200">Mẹo học tập</h4>
                                                <div className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                                                    <p>Hãy thử chạy đoạn code trên bằng cách sao chép vào trình thông dịch Python hoặc các trình biên dịch trực tuyến như Replit, Trinket.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h3>Tài liệu tham khảo</h3>
                                    <ul>
                                        <li><a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Tài liệu chính thức Python</a></li>
                                        <li><a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Python for Beginners - Microsoft</a></li>
                                        <li><a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Python Crash Course</a></li>
                                    </ul>
                                </div>
                                
                                {/* <!-- Lesson Resources --> */}
                                <div className="mt-8">
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4 flex items-center">
                                        <i className="fas fa-paperclip mr-2"></i> Tài nguyên bài học
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="resource-item p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-200">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
                                                    <i className="fas fa-file-pdf text-blue-500 dark:text-blue-400"></i>
                                                </div>
                                                <div className="ml-3">
                                                    <h4 className="text-sm font-medium text-gray-800 dark:text-white">Slide bài giảng</h4>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF • 2.4 MB</p>
                                                </div>
                                                <div className="ml-auto">
                                                    <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
                                                        <i className="fas fa-download"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="resource-item p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-200">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg">
                                                    <i className="fas fa-file-code text-purple-500 dark:text-purple-400"></i>
                                                </div>
                                                <div className="ml-3">
                                                    <h4 className="text-sm font-medium text-gray-800 dark:text-white">Code mẫu</h4>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">ZIP • 45 KB</p>
                                                </div>
                                                <div className="ml-auto">
                                                    <button className="text-purple-500 hover:text-purple-700 dark:hover:text-purple-400">
                                                        <i className="fas fa-download"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="resource-item p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-200">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/50 p-2 rounded-lg">
                                                    <i className="fas fa-link text-green-500 dark:text-green-400"></i>
                                                </div>
                                                <div className="ml-3">
                                                    <h4 className="text-sm font-medium text-gray-800 dark:text-white">Bài tập thực hành</h4>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">Link • Online</p>
                                                </div>
                                                <div className="ml-auto">
                                                    <button className="text-green-500 hover:text-green-700 dark:hover:text-green-400">
                                                        <i className="fas fa-external-link-alt"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Comments Section --> */}
                                <div className="mt-8">
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4 flex items-center">
                                        <i className="fas fa-comments mr-2"></i> Thảo luận (3)
                                    </h3>
                                    <div className="space-y-4">
                                        {/* <!-- Comment 1 --> */}
                                        <div className="flex">
                                            <div className="flex-shrink-0 mr-3">
                                                <img className="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User avatar"/>
                                            </div>
                                            <div className="flex-1 bg-gray-50 dark:bg-dark-700 rounded-lg px-4 py-2">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-sm font-medium text-gray-800 dark:text-white">Trần Văn Nam</h4>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">2 giờ trước</span>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Bài giảng rất dễ hiểu, cảm ơn giảng viên. Cho mình hỏi nên cài Python bản nào là phù hợp nhất cho người mới?</p>
                                                <div className="mt-2 flex items-center space-x-4">
                                                    <button className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center">
                                                        <i className="fas fa-reply mr-1"></i> Trả lời
                                                    </button>
                                                    <button className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center">
                                                        <i className="fas fa-thumbs-up mr-1"></i> Thích (5)
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* <!-- Comment 2 --> */}
                                        <div className="flex ml-10">
                                            <div className="flex-shrink-0 mr-3">
                                                <img className="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User avatar"/>
                                            </div>
                                            <div className="flex-1 bg-gray-50 dark:bg-dark-700 rounded-lg px-4 py-2">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-sm font-medium text-gray-800 dark:text-white">Nguyễn Thị Mai</h4>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">1 giờ trước</span>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Mình khuyên bạn nên cài bản Python 3.9 hoặc 3.10 vì ổn định và có nhiều tài liệu hỗ trợ.</p>
                                                <div className="mt-2 flex items-center space-x-4">
                                                    <button className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center">
                                                        <i className="fas fa-reply mr-1"></i> Trả lời
                                                    </button>
                                                    <button className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center">
                                                        <i className="fas fa-thumbs-up mr-1"></i> Thích (2)
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* <!-- Comment 3 --> */}
                                        <div className="flex">
                                            <div className="flex-shrink-0 mr-3">
                                                <img className="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/men/75.jpg" alt="User avatar"/>
                                            </div>
                                            <div className="flex-1 bg-gray-50 dark:bg-dark-700 rounded-lg px-4 py-2">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-sm font-medium text-gray-800 dark:text-white">Lê Minh Đức</h4>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">30 phút trước</span>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Có bạn nào biết cách cài đặt Python trên Mac không? Mình gặp lỗi khi cài qua Homebrew.</p>
                                                <div className="mt-2 flex items-center space-x-4">
                                                    <button className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center">
                                                        <i className="fas fa-reply mr-1"></i> Trả lời
                                                    </button>
                                                    <button className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center">
                                                        <i className="fas fa-thumbs-up mr-1"></i> Thích (0)
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* <!-- Add Comment --> */}
                                        <div className="mt-4">
                                            <div className="flex">
                                                <div className="flex-shrink-0 mr-3">
                                                    <img className="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User avatar"/>
                                                </div>
                                                <div className="flex-1">
                                                    <form>
                                                        <div className="border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm overflow-hidden">
                                                            <label htmlFor="comment" className="sr-only">Thêm bình luận</label>
                                                            <textarea rows={3} name="comment" id="comment" className="block w-full py-3 px-4 border-0 resize-none focus:ring-0 sm:text-sm dark:bg-dark-700 dark:text-white" placeholder="Thêm bình luận..."></textarea>
                                                            <div className="bg-gray-50 dark:bg-dark-800 px-4 py-2 flex justify-end">
                                                                <button type="submit" className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                                                                    Đăng bình luận
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}
