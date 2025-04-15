export default function CoursesSection() {
    return (
        <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Khóa học của bạn</h2>
                <button className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                    <i className="fas fa-plus mr-1"></i> Thêm khóa học
                </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <!-- Course Card 1 --> */}
                <div className="card-hover bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition duration-300 ease-in-out">
                    <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                        <i className="fas fa-code text-white text-4xl"></i>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Lập trình Python cơ bản</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Học Python từ cơ bản đến nâng cao</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <i className="fas fa-check-circle text-green-500 mr-1 text-sm"></i>
                                <span className="text-xs text-gray-500 dark:text-gray-400">12/20 bài</span>
                            </div>
                            <button className="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-md hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-200">
                                Tiếp tục
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Course Card 2 --> */}
                <div className="card-hover bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition duration-300 ease-in-out">
                    <div className="h-32 bg-gradient-to-r from-purple-500 to-purple-400 flex items-center justify-center">
                        <i className="fas fa-language text-white text-4xl"></i>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Tiếng Nhật N5</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Học tiếng Nhật trình độ sơ cấp</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <i className="fas fa-check-circle text-green-500 mr-1 text-sm"></i>
                                <span className="text-xs text-gray-500 dark:text-gray-400">8/25 bài</span>
                            </div>
                            <button className="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-md hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-200">
                                Tiếp tục
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Course Card 3 --> */}
                <div className="card-hover bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition duration-300 ease-in-out">
                    <div className="h-32 bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center">
                        <i className="fas fa-laptop-code text-white text-4xl"></i>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Thiết kế Web</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">HTML, CSS, JavaScript cơ bản</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <i className="fas fa-check-circle text-green-500 mr-1 text-sm"></i>
                                <span className="text-xs text-gray-500 dark:text-gray-400">5/15 bài</span>
                            </div>
                            <button className="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-md hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-200">
                                Bắt đầu
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Add Course Card --> */}
                <div className="card-hover bg-gray-50 dark:bg-dark-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-600 transition duration-300 ease-in-out">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-3">
                        <i className="fas fa-plus text-primary-600 dark:text-primary-300 text-xl"></i>
                    </div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Thêm khóa học</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Tạo mới hoặc nhập từ file PDF</p>
                </div>
            </div>
        </div>
    )
}