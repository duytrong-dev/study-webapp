import CourseProgress from "@/components/custom/course-progress"

export default function CoursesIdDoc() {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
                <div className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div>
                                <div className="flex items-center mb-2">
                                    <h1 className="text-2xl font-bold text-primarycolor-blue dark:text-gray-600 mr-3">
                                        Lập trình Python cơ bản
                                    </h1>
                                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        Đang học
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-600">
                                    Học Python từ cơ bản đến nâng cao với các bài tập thực hành
                                </p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center">
                                    <i className="fas fa-check mr-2"></i> Đánh dấu đã hoàn thành
                                </button>
                            </div>
                        </div>

                        <CourseProgress />

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <i className="fas fa-info-circle text-yellow-400 mt-1"></i>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-yellow-600">
                                        <strong>Mẹo học tập:</strong> Đọc kỹ tài liệu và thực hành bài tập. Bạn có thể đánh dấu hoàn thành bài học khi đã nắm vững nội dung.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-600 mb-4">Python là gì?</h2>
                            <p className="text-gray-600 mb-4">
                                Python là một ngôn ngữ lập trình bậc cao, dễ đọc, dễ học và rất phổ biến hiện nay. Python được sử dụng rộng rãi trong các lĩnh vực như phát triển web, khoa học dữ liệu, trí tuệ nhân tạo, tự động hóa, và nhiều lĩnh vực khác.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Python có cú pháp đơn giản, thư viện phong phú và cộng đồng lớn mạnh. Trong khóa học này, chúng ta sẽ đi từ những kiến thức cơ bản nhất đến các khái niệm nâng cao.
                            </p>
                            
                            <div className="bg-blue-50 p-4 rounded-md mb-4">
                                <h3 className="font-medium text-blue-600 mb-2">Ví dụ code Python đầu tiên:</h3>
                                <pre className="bg-gray-800 text-gray-100 p-3 rounded-md overflow-x-auto">
                                    <code>
                                        # In ra màn hình
                                        print("Xin chào thế giới!")
                                        
                                        # Khai báo biến
                                        name = "Python"
                                        print("Tôi đang học", name)
                                    </code>
                                </pre>
                            </div>
                            
                            <p className="text-gray-600">
                                <strong>Thuật ngữ chính:</strong> ngôn ngữ lập trình, cú pháp, thư viện, biến, kiểu dữ liệu, hàm, vòng lặp.
                            </p>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-6 mb-8">
                            <h2 className="text-xl font-semibold text-gray-600 mb-4">Các môi trường thực thi Python</h2>
                            <p className="text-gray-600 mb-4">
                                Python có thể chạy ở nhiều môi trường khác nhau, phổ biến nhất là:
                            </p>
                            
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <li className="bg-white p-4 rounded-lg shadow border border-gray-100">
                                    <div className="flex items-center mb-2">
                                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                                            <i className="fas fa-desktop text-blue-600"></i>
                                        </div>
                                        <h3 className="font-medium text-gray-600">Máy tính cá nhân</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Python được cài đặt và chạy trực tiếp trên máy tính của bạn thông qua terminal hoặc IDE.
                                    </p>
                                </li>
                                <li className="bg-white p-4 rounded-lg shadow border border-gray-100">
                                    <div className="flex items-center mb-2">
                                        <div className="bg-green-100 p-2 rounded-full mr-3">
                                            <i className="fas fa-cloud text-green-600"></i>
                                        </div>
                                        <h3 className="font-medium text-gray-600">Nền tảng trực tuyến</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Có thể chạy Python trên các nền tảng như Google Colab, Jupyter Notebook, Repl.it mà không cần cài đặt.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-6 mb-8">
                            <h2 className="text-xl font-semibold text-gray-600 mb-4">Bài tập thực hành</h2>
                            
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <i className="fas fa-pencil-alt text-purple-400 mt-1"></i>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-purple-600">
                                            Hãy hoàn thành các bài tập dưới đây để củng cố kiến thức. Bạn có thể kiểm tra đáp án sau khi làm xong.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                    <div className="flex items-start mb-3">
                                        <div className="custom-checkbox">
                                            <input type="checkbox" id="exercise1"/>
                                            <label htmlFor="exercise1" className="flex items-center cursor-pointer">
                                                <span className="checkmark"></span>
                                                <span className="font-medium text-gray-600">Bài tập 1: In thông báo</span>
                                            </label>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Viết đoạn mã Python để in ra màn hình dòng chữ &quot;Tôi đang học Python&quot;.
                                    </p>
                                    <div className="bg-gray-100 p-3 rounded-md">
                                        <textarea className="w-full bg-gray-100 border-0 focus:ring-0 h-20 text-gray-600" placeholder="Viết code của bạn vào đây..."></textarea>
                                    </div>
                                    <button className="mt-2 bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm">Kiểm tra kết quả</button>
                                </div>
                                
                                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                    <div className="flex items-start mb-3">
                                        <div className="custom-checkbox">
                                            <input type="checkbox" id="exercise2"/>
                                            <label htmlFor="exercise2" className="flex items-center cursor-pointer">
                                                <span className="checkmark"></span>
                                                <span className="font-medium text-gray-600">Bài tập 2: Câu hỏi lý thuyết</span>
                                            </label>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Python có thể chạy ở những môi trường nào? (Chọn nhiều đáp án)
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input type="checkbox" id="answer1" className="rounded text-blue-600 focus:ring-blue-500"/>
                                            <label htmlFor="answer1" className="ml-2 text-sm text-gray-600">Máy tính cá nhân</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="answer2" className="rounded text-blue-600 focus:ring-blue-500"/>
                                            <label htmlFor="answer2" className="ml-2 text-sm text-gray-600">Nền tảng trực tuyến</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="answer3" className="rounded text-blue-600 focus:ring-blue-500"/>
                                            <label htmlFor="answer3" className="ml-2 text-sm text-gray-600">Điện thoại di động</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="answer4" className="rounded text-blue-600 focus:ring-blue-500"/>
                                            <label htmlFor="answer4" className="ml-2 text-sm text-gray-600">Máy chủ (server)</label>
                                        </div>
                                    </div>
                                    <button className="mt-3 bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm">Kiểm tra đáp án</button>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                    <div className="flex items-start mb-3">
                                        <div className="custom-checkbox">
                                            <input type="checkbox" id="exercise3"/>
                                            <label htmlFor="exercise3" className="flex items-center cursor-pointer">
                                                <span className="checkmark"></span>
                                                <span className="font-medium text-gray-600">Bài tập 3: Kiểu dữ liệu</span>
                                            </label>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Kiểu dữ liệu nào sau đây là kiểu số nguyên trong Python?
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input type="radio" id="int" name="datatype" className="text-blue-600 focus:ring-blue-500"/>
                                            <label htmlFor="int" className="ml-2 text-sm text-gray-600">int</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="str" name="datatype" className="text-blue-600 focus:ring-blue-500"/>
                                            <label htmlFor="str" className="ml-2 text-sm text-gray-600">str</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="float" name="datatype" className="text-blue-600 focus:ring-blue-500"/>
                                            <label htmlFor="float" className="ml-2 text-sm text-gray-600">float</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="bool" name="datatype" className="text-blue-600 focus:ring-blue-500"/>
                                            <label htmlFor="bool" className="ml-2 text-sm text-gray-600">bool</label>
                                        </div>
                                    </div>
                                    <button className="mt-3 bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm">Kiểm tra đáp án</button>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                    <div className="flex items-start mb-3">
                                        <div className="custom-checkbox">
                                            <input type="checkbox" id="exercise4"/>
                                            <label htmlFor="exercise4" className="flex items-center cursor-pointer">
                                                <span className="checkmark"></span>
                                                <span className="font-medium text-gray-600">Bài tập 4: Vòng lặp for</span>
                                            </label>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Viết đoạn mã Python sử dụng vòng lặp <code>for</code> để in ra các số từ 1 đến 5.
                                    </p>
                                    <div className="bg-gray-100 p-3 rounded-md">
                                        <textarea className="w-full bg-gray-100 border-0 focus:ring-0 h-20 text-gray-600" placeholder="Viết code của bạn vào đây..."></textarea>
                                    </div>
                                    <button className="mt-2 bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm">Kiểm tra kết quả</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
