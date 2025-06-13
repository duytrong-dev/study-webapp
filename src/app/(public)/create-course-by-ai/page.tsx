export default function CreateCourseByAIPage() {
    return(
        <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
            <div className="max-w-7xl mx-auto">
                {/* <!-- Page Header --> */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-primarycolor-blue">Tạo khóa học bằng AI</h1>
                        <p className="text-gray-600 dark:text-gray-400">Tải lên tài liệu PDF và để AI phân tích, tạo khóa học tự động</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-dark-700 dark:text-gray-300">
                            <i className="fas fa-history mr-2"></i> Lịch sử tạo khóa học
                        </button>
                    </div>
                </div>
                
                {/* <!-- Main Content Grid --> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* <!-- Left Column - File Upload --> */}
                    <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Tải lên tài liệu</h2>
                        </div>
                        <div className="p-6">
                            {/* <!-- File Upload Area --> */}
                            <div id="file-upload-area" className="file-upload rounded-lg p-8 text-center cursor-pointer mb-6">
                                <div className="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                                    <i className="fas fa-file-pdf text-primary-600 dark:text-primary-300 text-2xl"></i>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Kéo thả file PDF vào đây</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Hoặc nhấn để chọn file từ máy tính</p>
                                <input type="file" id="pdf-upload" className="hidden" accept=".pdf"/>
                                <button id="select-file-btn" className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none">
                                    <i className="fas fa-upload mr-2"></i> Chọn file
                                </button>
                            </div>
                            
                            {/* <!-- File Info --> */}
                            <div id="file-info" className="hidden bg-gray-50 dark:bg-dark-700 rounded-lg p-4 mb-6">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-3">
                                        <i className="fas fa-file-pdf text-primary-600 dark:text-primary-300"></i>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-gray-900 dark:text-white" id="file-name">Tên file.pdf</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400" id="file-size">2.5 MB</div>
                                    </div>
                                    <button id="remove-file-btn" className="text-red-500 hover:text-red-600 dark:hover:text-red-400">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            
                            {/* <!-- Course Information --> */}
                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tên khóa học</label>
                                    <input type="text" id="course-name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-700 dark:border-gray-600 dark:text-white" placeholder="Nhập tên khóa học"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cấp độ</label>
                                    <select id="course-level" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-700 dark:border-gray-600 dark:text-white">
                                        <option value="">Chọn cấp độ</option>
                                        <option value="beginner">Cơ bản</option>
                                        <option value="intermediate">Trung cấp</option>
                                        <option value="advanced">Nâng cao</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Môn học</label>
                                    <input type="text" id="course-subject" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-700 dark:border-gray-600 dark:text-white" placeholder="Nhập môn học"/>
                                </div>
                            </div>
                            
                            {/* <!-- Generate Button --> */}
                            <button id="generate-course-btn" className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                                <i className="fas fa-magic mr-2"></i> Tạo khóa học bằng AI
                            </button>
                        </div>
                    </div>
                    
                    {/* <!-- Right Column - AI Generated Content --> */}
                    <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Kết quả AI tạo ra</h2>
                        </div>
                        <div className="p-6">
                            {/* <!-- Initial State --> */}
                            <div id="ai-initial-state" className="text-center py-12">
                                <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-dark-700 rounded-full flex items-center justify-center mb-4">
                                    <i className="fas fa-robot text-gray-400 text-2xl"></i>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Chưa có dữ liệu</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tải lên file PDF và nhấn &quot;Tạo khóa học bằng AI&quot; để bắt đầu</p>
                            </div>
                            
                            {/* <!-- Loading State --> */}
                            <div id="ai-loading-state" className="hidden text-center py-12">
                                <div className="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                                    <i className="fas fa-spinner fa-spin text-primary-600 dark:text-primary-300 text-2xl"></i>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">AI đang phân tích tài liệu</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <span className="loading-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </p>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div id="ai-progress-bar" className="bg-primary-500 h-1.5 rounded-full w-0"></div>
                                </div>
                            </div>
                            
                            <div id="ai-result-state" className="hidden">
                                {/* <!-- Course Overview --> */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Tổng quan khóa học</h3>
                                    <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4">
                                        <h2 id="course-title" className="text-xl font-bold text-gray-900 dark:text-white mb-2">Lập trình Python từ cơ bản đến nâng cao</h2>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-200">Cơ bản</span>
                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-200">12 bài học</span>
                                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full dark:bg-purple-900 dark:text-purple-200">Lập trình</span>
                                        </div>
                                        <p id="course-description" className="text-gray-700 dark:text-gray-300">Khóa học này cung cấp kiến thức nền tảng về lập trình Python, từ cú pháp cơ bản đến các khái niệm lập trình hướng đối tượng. Phù hợp cho người mới bắt đầu hoặc những ai muốn củng cố kiến thức Python cơ bản.</p>
                                    </div>
                                </div>
                                
                                {/* <!-- Course Chapters --> */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Nội dung khóa học</h3>
                                    <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4">
                                        {/* <!-- Chapter 1 --> */}
                                        <div className="chapter-item">
                                            <div className="chapter-title">Chương 1: Giới thiệu về Python</div>
                                            <div className="lesson-item">Bài 1: Tổng quan về Python</div>
                                            <div className="lesson-item">Bài 2: Cài đặt môi trường Python</div>
                                            <div className="lesson-item">Bài 3: Chạy chương trình Python đầu tiên</div>
                                        </div>
                                        
                                        {/* <!-- Chapter 2 --> */}
                                        <div className="chapter-item">
                                            <div className="chapter-title">Chương 2: Cú pháp cơ bản</div>
                                            <div className="lesson-item">Bài 4: Biến và kiểu dữ liệu</div>
                                            <div className="lesson-item">Bài 5: Toán tử và biểu thức</div>
                                            <div className="lesson-item">Bài 6: Nhập xuất dữ liệu</div>
                                        </div>
                                        
                                        {/* <!-- Chapter 3 --> */}
                                        <div className="chapter-item">
                                            <div className="chapter-title">Chương 3: Cấu trúc điều khiển</div>
                                            <div className="lesson-item">Bài 7: Câu lệnh điều kiện if-else</div>
                                            <div className="lesson-item">Bài 8: Vòng lặp while</div>
                                            <div className="lesson-item">Bài 9: Vòng lặp for</div>
                                        </div>
                                        
                                        {/* <!-- Chapter 4 --> */}
                                        <div className="chapter-item">
                                            <div className="chapter-title">Chương 4: Hàm và Module</div>
                                            <div className="lesson-item">Bài 10: Định nghĩa và gọi hàm</div>
                                            <div className="lesson-item">Bài 11: Tham số và giá trị trả về</div>
                                            <div className="lesson-item">Bài 12: Module và thư viện</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Actions --> */}
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300">
                                        <i className="fas fa-edit mr-2"></i> Chỉnh sửa
                                    </button>
                                    <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                                        <i className="fas fa-save mr-2"></i> Lưu khóa học
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}