export default function LessonContent() {
    return (
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
                        <pre>
                            <code className="text-sm text-gray-300">
                                # Đây là chương trình Python đầu tiên
                                print(&quot;Xin chào, Python!&quot;)
                                
                                # Khai báo biến
                                x = 10
                                y = 20
                                tong = x + y
                                
                                # Câu lệnh điều kiện
                                if tong &gt; 30:
                                    print(&quot;Tổng lớn hơn 30&quot;)
                                else:
                                    print(&quot;Tổng nhỏ hơn hoặc bằng 30&quot;)
                            </code>
                        </pre>
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
                
            </div>
        </div>
    );
}