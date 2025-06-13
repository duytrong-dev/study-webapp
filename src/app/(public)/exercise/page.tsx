export default function ExercisePage() {
    return(
        <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
                <div className="max-w-7xl mx-auto">
                    {/* <!-- Page Header --> */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Bài kiểm tra </h1>
                            <p className="text-gray-600 dark:text-gray-400">Bài tập chương 3</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-dark-700 dark:text-gray-300">
                                <i className="fas fa-history mr-2"></i> Lịch sử làm bài
                            </button>
                        </div>
                    </div>
                    
                    {/* <!-- Main Content Grid --> */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-1 bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Danh sách câu hỏi</h2>
                            </div>
                            <div className="p-4">
                                {/* <!-- Question Navigation --> */}
                                <div className="grid grid-cols-5 gap-2 mb-4">
                                    {/* <!-- Question numbers --> */}
                                    <div id="q1-nav" className="question-nav-item flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 cursor-pointer" data-question="1">1</div>
                                    <div id="q2-nav" className="question-nav-item flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 cursor-pointer" data-question="2">2</div>
                                    <div id="q3-nav" className="question-nav-item flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 cursor-pointer" data-question="3">3</div>
                                    <div id="q4-nav" className="question-nav-item flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 cursor-pointer" data-question="4">4</div>
                                    <div id="q5-nav" className="question-nav-item flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 cursor-pointer" data-question="5">5</div>
                                    <div id="q6-nav" className="question-nav-item flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 cursor-pointer" data-question="6">6</div>
                                    <div id="q7-nav" className="question-nav-item flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 cursor-pointer" data-question="7">7</div>
                                    <div id="q8-nav" className="question-nav-item flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 cursor-pointer" data-question="8">8</div>
                                    <div id="q9-nav" className="question-nav-item flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 cursor-pointer" data-question="9">9</div>
                                    <div id="q10-nav" className="question-nav-item flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 cursor-pointer" data-question="10">10</div>
                                </div>
                                
                                {/* <!-- Marked Questions --> */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Đánh dấu câu hỏi</h3>
                                    <div className="flex items-center space-x-2">
                                        <button id="mark-question-btn" className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-200">
                                            <i className="fas fa-bookmark mr-1"></i> Đánh dấu
                                        </button>
                                        <button id="clear-mark-btn" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200">
                                            <i className="fas fa-eraser mr-1"></i> Xóa đánh dấu
                                        </button>
                                    </div>
                                </div>
                                
                                {/* <!-- Progress --> */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tiến độ làm bài</h3>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Đã làm: 1/10 câu</span>
                                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">10%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                        <div className="bg-primary-500 h-2 rounded-full w-[10]" ></div>
                                    </div>
                                </div>
                                
                                {/* <!-- Submit Button --> */}
                                <button id="submit-btn" className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                    <i className="fas fa-paper-plane mr-2"></i> Nộp bài
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-3 bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Câu hỏi <span id="current-question">1</span>/10</h2>
                            </div>
                            <div className="p-6 ">
                               
                                <div id="question-3" className="question-content">
                                    <div className="mb-6">
                                        <p className="text-gray-800 dark:text-gray-200 mb-4">Câu 1: Có bao nhiêu kiểu dữ liệu trong js ?</p>
                                        
                                        <div className="space-y-3">
                                            <div className="option-item" data-option="A">
                                                <div className="flex items-center">
                                                    <span className="font-medium mr-2">A.</span>
                                                    <span>3</span>
                                                </div>
                                            </div>
                                            <div className="option-item" data-option="B">
                                                <div className="flex items-center">
                                                    <span className="font-medium mr-2">B.</span>
                                                    <span>6</span>
                                                </div>
                                            </div>
                                            <div className="option-item" data-option="C">
                                                <div className="flex items-center">
                                                    <span className="font-medium mr-2">C.</span>
                                                    <span>9</span>
                                                </div>
                                            </div>
                                            <div className="option-item" data-option="D">
                                                <div className="flex items-center">
                                                    <span className="font-medium mr-2">D.</span>
                                                    <span>12</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <button id="prev-question-btn-2" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300">
                                            <i className="fas fa-arrow-left mr-2"></i> Câu trước
                                        </button>
                                        <div className="flex space-x-3">
                                            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300">
                                                <i className="fas fa-flag mr-2"></i> Báo lỗi
                                            </button>
                                            <button id="next-question-btn-3" className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                                                Câu tiếp theo <i className="fas fa-arrow-right ml-2"></i>
                                            </button>
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