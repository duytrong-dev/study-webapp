import Link from "next/link";

export default function CoursesSection() {
    return (
        <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden mb-8 ">
            <div className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* <!-- Header with tabs --> */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Khóa học của tôi</h1>
                        <p className="text-gray-500 dark:text-gray-400">Quản lý và tạo khóa học mới để bắt đầu học tập</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button id="create-course-btn" className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center">
                            <i className="fas fa-plus mr-2"></i> Tạo khóa học mới
                        </button>
                    </div>
                </div>
                
                {/* <!-- Tabs --> */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                    <div className="flex space-x-8">
                        <button className="tab-button active py-2 px-1 font-medium text-sm focus:outline-none">
                            Tất cả khóa học
                        </button>
                        <button className="tab-button py-2 px-1 font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                            Đang học
                        </button>
                        <button className="tab-button py-2 px-1 font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                            Đã hoàn thành
                        </button>
                        <button className="tab-button py-2 px-1 font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                            Đã lưu
                        </button>
                    </div>
                </div>
                
                {/* <!-- Filter and sort --> */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Hiển thị 8/12 khóa học</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button id="filter-button" className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none">
                                <i className="fas fa-filter text-gray-500 dark:text-gray-400"></i>
                                <span>Lọc</span>
                            </button>
                            <div id="filter-dropdown" className="hidden absolute right-0 mt-2 w-48 bg-white dark:bg-dark-800 rounded-md shadow-lg z-10 border dark:border-gray-700">
                                <div className="py-1">
                                    <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">Loại khóa học</div>
                                    <div className="px-4 py-1">
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-500" checked/>
                                            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Tự tạo</span>
                                        </label>
                                    </div>
                                    <div className="px-4 py-1">
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-500" checked/>
                                            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Hệ thống</span>
                                        </label>
                                    </div>
                                    <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">Trạng thái</div>
                                    <div className="px-4 py-1">
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-500" checked/>
                                            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Đang học</span>
                                        </label>
                                    </div>
                                    <div className="px-4 py-1">
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-500"/>
                                            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Chưa bắt đầu</span>
                                        </label>
                                    </div>
                                    <div className="px-4 py-1">
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-500"/>
                                            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Đã hoàn thành</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <button id="sort-button" className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none">
                                <i className="fas fa-sort-amount-down text-gray-500 dark:text-gray-400"></i>
                                <span>Sắp xếp</span>
                            </button>
                            <div id="sort-dropdown" className="hidden absolute right-0 mt-2 w-48 bg-white dark:bg-dark-800 rounded-md shadow-lg z-10 border dark:border-gray-700">
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Mới nhất</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Cũ nhất</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Tên A-Z</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Tên Z-A</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700">Tiến độ cao nhất</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Courses Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* <!-- Course Card 1 --> */}
                    <div className="course-card bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition duration-300 ease-in-out relative">
                        <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
                            <i className="fas fa-code text-white text-5xl"></i>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lập trình Python cơ bản</h3>
                                <div className="course-actions absolute right-4 top-4 flex space-x-1">
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-bookmark"></i>
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Học Python từ cơ bản đến nâng cao với các bài tập thực hành</p>
                            
                            <div className="mb-3">
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                                    <span>Tiến độ</span>
                                    <span>72%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-blue-500 h-2 rounded-full w-[72%]"></div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-1 text-sm"></i>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">12/20 bài</span>
                                </div>
                                <Link href={"/courses/id"} className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-md hover:bg-primary-200 dark:hover:bg-primary-800">
                                    Tiếp tục học
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Course Card 2 --> */}
                    <div className="course-card bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition duration-300 ease-in-out relative">
                        <div className="h-40 bg-gradient-to-r from-purple-500 to-purple-400 flex items-center justify-center">
                            <i className="fas fa-language text-white text-5xl"></i>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tiếng Nhật N5</h3>
                                <div className="course-actions absolute right-4 top-4 flex space-x-1">
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-bookmark"></i>
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Học tiếng Nhật trình độ sơ cấp với giáo trình Minna no Nihongo</p>
                            
                            <div className="mb-3">
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                                    <span>Tiến độ</span>
                                    <span>45%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-purple-500 h-2 rounded-full w-[45%]"></div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-1 text-sm"></i>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">8/25 bài</span>
                                </div>
                                <button className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-md hover:bg-primary-200 dark:hover:bg-primary-800">
                                    Tiếp tục học
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Course Card 3 --> */}
                    <div className="course-card bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition duration-300 ease-in-out relative">
                        <div className="h-40 bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center">
                            <i className="fas fa-laptop-code text-white text-5xl"></i>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Thiết kế Web cơ bản</h3>
                                <div className="course-actions absolute right-4 top-4 flex space-x-1">
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-bookmark"></i>
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">HTML, CSS, JavaScript cơ bản cho người mới bắt đầu</p>
                            
                            <div className="mb-3">
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                                    <span>Tiến độ</span>
                                    <span>28%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-green-500 h-2 rounded-full w-[28%]"></div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-1 text-sm"></i>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">5/15 bài</span>
                                </div>
                                <button className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-md hover:bg-primary-200 dark:hover:bg-primary-800">
                                    Bắt đầu học
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Course Card 4 --> */}
                    <div className="course-card bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition duration-300 ease-in-out relative">
                        <div className="h-40 bg-gradient-to-r from-yellow-500 to-yellow-400 flex items-center justify-center">
                            <i className="fas fa-chart-line text-white text-5xl"></i>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Kinh tế học đại cương</h3>
                                <div className="course-actions absolute right-4 top-4 flex space-x-1">
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-bookmark"></i>
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Hiểu các nguyên lý cơ bản của kinh tế học vi mô và vĩ mô</p>
                            
                            <div className="mb-3">
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                                    <span>Tiến độ</span>
                                    <span>15%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-yellow-500 h-2 rounded-full w-[15%]"></div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-1 text-sm"></i>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">3/20 bài</span>
                                </div>
                                <button className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-md hover:bg-primary-200 dark:hover:bg-primary-800">
                                    Bắt đầu học
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Course Card 5 --> */}
                    <div className="course-card bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition duration-300 ease-in-out relative">
                        <div className="h-40 bg-gradient-to-r from-red-500 to-red-400 flex items-center justify-center">
                            <i className="fas fa-atom text-white text-5xl"></i>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Vật lý đại cương</h3>
                                <div className="course-actions absolute right-4 top-4 flex space-x-1">
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-bookmark"></i>
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Các khái niệm cơ bản về cơ học, nhiệt động lực học và điện từ học</p>
                            
                            <div className="mb-3">
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                                    <span>Tiến độ</span>
                                    <span>90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-red-500 h-2 rounded-full w[90%]"></div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-1 text-sm"></i>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">18/20 bài</span>
                                </div>
                                <button className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-md hover:bg-primary-200 dark:hover:bg-primary-800">
                                    Tiếp tục học
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Course Card 6 --> */}
                    <div className="course-card bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition duration-300 ease-in-out relative">
                        <div className="h-40 bg-gradient-to-r from-indigo-500 to-indigo-400 flex items-center justify-center">
                            <i className="fas fa-dna text-white text-5xl"></i>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sinh học phân tử</h3>
                                <div className="course-actions absolute right-4 top-4 flex space-x-1">
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                    <button className="p-2 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-dark-600">
                                        <i className="fas fa-bookmark"></i>
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tìm hiểu về cấu trúc và chức năng của DNA, RNA và protein</p>
                            
                            <div className="mb-3">
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                                    <span>Tiến độ</span>
                                    <span>60%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-indigo-500 h-2 rounded-full w-[60%]"></div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-1 text-sm"></i>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">12/20 bài</span>
                                </div>
                                <button className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-md hover:bg-primary-200 dark:hover:bg-primary-800">
                                    Tiếp tục học
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Add Course Card --> */}
                    <div className="card-hover bg-gray-50 dark:bg-dark-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-600 transition duration-300 ease-in-out" id="add-course-card">
                        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-plus text-primary-600 dark:text-primary-300 text-2xl"></i>
                        </div>
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Thêm khóa học</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Tạo mới hoặc nhập từ file PDF</p>
                    </div>
                </div>
                
                {/* <!-- Pagination --> */}
                <div className="flex justify-center mt-8">
                    <nav className="inline-flex rounded-md shadow">
                        <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:bg-dark-800 dark:border-gray-700 dark:text-gray-400">
                            <i className="fas fa-chevron-left"></i>
                        </a>
                        <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-primary-600 dark:bg-dark-800 dark:border-gray-700 dark:text-primary-400">1</a>
                        <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:bg-dark-800 dark:border-gray-700 dark:text-gray-400">2</a>
                        <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:bg-dark-800 dark:border-gray-700 dark:text-gray-400">3</a>
                        <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:bg-dark-800 dark:border-gray-700 dark:text-gray-400">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    )
}