
import TopNavigation from "@/components/top-navigation";
import CoursesSection from "@/components/custom/courses-section";

export default function Pomodoro() {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <TopNavigation/>
            <div className="flex-1 overflow-auto p-2 transition-colors duration-300 md:p-6">
                <div className="flex flex-col lg:flex-row gap-8">
            {/* <!-- Left Column - Timer and Controls --> */}
            <div className="lg:w-1/3 space-y-6">
                {/* <!-- Timer Section --> */}
                <div className="bg-white dark:bg-dark-800 shadow rounded-xl p-6">
                    <div className="flex justify-center mb-6">
                        <div className="pomodoro-timer w-64 h-64 rounded-full bg-primary-100 dark:bg-primary-900 flex flex-col items-center justify-center relative">
                            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#e0f2fe" stroke-width="5" />
                                <circle id="pomodoro-progress" cx="50" cy="50" r="45" fill="none" stroke="#0ea5e9" stroke-width="5" 
                                        stroke-dasharray="283" stroke-dashoffset="283" transform="rotate(-90 50 50)" />
                            </svg>
                            <div id="timer-display" className="text-5xl font-bold text-primary-600 dark:text-primary-300">25:00</div>
                            <div id="timer-state" className="text-primary-500 dark:text-primary-400 mt-2">Làm việc</div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center space-x-4 mb-6">
                        <button id="start-pomodoro" className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500">
                            <i className="fas fa-play mr-2"></i> Bắt đầu
                        </button>
                        <button id="pause-pomodoro" className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 hidden">
                            <i className="fas fa-pause mr-2"></i> Tạm dừng
                        </button>
                        <button id="reset-pomodoro" className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-dark-700 dark:text-white">
                            <i className="fas fa-redo mr-2"></i> Đặt lại
                        </button>
                    </div>
                    
                    {/* <!-- Timer Settings --> */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Thời gian làm việc (phút)</label>
                            <input id="work-time" type="number" min="1" max="60" value="25" className="w-16 px-2 py-1 border border-gray-300 rounded-md dark:bg-dark-700 dark:border-gray-600"/>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Thời gian nghỉ ngắn (phút)</label>
                            <input id="short-break-time" type="number" min="1" max="15" value="5" className="w-16 px-2 py-1 border border-gray-300 rounded-md dark:bg-dark-700 dark:border-gray-600"/>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Thời gian nghỉ dài (phút)</label>
                            <input id="long-break-time" type="number" min="1" max="30" value="15" className="w-16 px-2 py-1 border border-gray-300 rounded-md dark:bg-dark-700 dark:border-gray-600"/>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Pomodoros trước khi nghỉ dài</label>
                            <input id="pomodoros-before-long-break" type="number" min="1" max="10" value="4" className="w-16 px-2 py-1 border border-gray-300 rounded-md dark:bg-dark-700 dark:border-gray-600"/>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Âm báo khi hết giờ</label>
                            <div className="relative">
                                <select id="alarm-sound" className="appearance-none w-32 px-2 py-1 border border-gray-300 rounded-md dark:bg-dark-700 dark:border-gray-600">
                                    <option value="bell">Chuông</option>
                                    <option value="digital">Digital</option>
                                    <option value="nature">Tiếng thiên nhiên</option>
                                    <option value="none">Không có</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Tự động bắt đầu phiên tiếp theo</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input id="auto-start-next" type="checkbox" className="sr-only peer" checked/>
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-500"></div>
                            </label>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Task List --> */}
                <div className="bg-white dark:bg-dark-800 shadow rounded-xl p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Danh sách công việc</h2>
                    
                    <div className="flex mb-4">
                        <input id="new-task-input" type="text" placeholder="Thêm công việc mới..." className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-700 dark:border-gray-600"/>
                        <button id="add-task-btn" className="px-4 py-2 bg-primary-500 text-white rounded-r-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    
                    <div id="task-list" className="space-y-2 max-h-64 overflow-y-auto">
                        {/* <!-- Task items will be added here --> */}
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                        <span id="tasks-completed">0 công việc đã hoàn thành</span>
                        <button id="clear-completed" className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300">Xóa đã hoàn thành</button>
                    </div>
                </div>
            </div>
            
            {/* <!-- Right Column - Focus Sounds and Stats --> */}
            <div className="lg:w-2/3 space-y-6">
                {/* <!-- Tabs --> */}
                <div className="bg-white dark:bg-dark-800 shadow rounded-xl overflow-hidden">
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="flex -mb-px">
                            <button id="focus-sounds-tab" className="tab-underline active py-4 px-6 text-sm font-medium text-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                <i className="fas fa-headphones mr-2"></i> Nhạc tập trung
                            </button>
                            <button id="stats-tab" className="tab-underline py-4 px-6 text-sm font-medium text-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                <i className="fas fa-chart-line mr-2"></i> Thống kê
                            </button>
                            <button id="tips-tab" className="tab-underline py-4 px-6 text-sm font-medium text-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                <i className="fas fa-lightbulb mr-2"></i> Mẹo học tập
                            </button>
                        </nav>
                    </div>
                    
                    {/* <!-- Tab Content --> */}
                    <div className="p-6">

                                                {/* <!-- Focus Sounds Content --> */}
                        <div id="focus-sounds-content" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* <!-- Sound Card 1 --> */}
                                <div className="focus-sound-card bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition duration-300 ease-in-out">
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk?rel=0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Nhạc tập trung Lofi</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Nhạc không lời giúp tập trung cao độ</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-volume-up text-primary-500 mr-2"></i>
                                                <input type="range" min="0" max="100" value="50" className="w-24"/>
                                            </div>
                                            <button className="px-3 py-1 bg-primary-500 text-white text-sm rounded-md hover:bg-primary-600">
                                                <i className="fas fa-play mr-1"></i> Phát
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Sound Card 2 -->/ */}
                                <div className="focus-sound-card bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition duration-300 ease-in-out">
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/rUxyKA_-grg?rel=0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Tiếng mưa rơi</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Tiếng mưa rơi nhẹ nhàng giúp thư giãn</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-volume-up text-primary-500 mr-2"></i>
                                                <input type="range" min="0" max="100" value="50" className="w-24"/>
                                            </div>
                                            <button className="px-3 py-1 bg-primary-500 text-white text-sm rounded-md hover:bg-primary-600">
                                                <i className="fas fa-play mr-1"></i> Phát
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Sound Card 3 --> */}
                                <div className="focus-sound-card bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition duration-300 ease-in-out">
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/1ZYbU82GVz4?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Tiếng quán cà phê</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Âm thanh quán cà phê giúp sáng tạo</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-volume-up text-primary-500 mr-2"></i>
                                                <input type="range" min="0" max="100" value="50" className="w-24"/>
                                            </div>
                                            <button className="px-3 py-1 bg-primary-500 text-white text-sm rounded-md hover:bg-primary-600">
                                                <i className="fas fa-play mr-1"></i> Phát
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Sound Card 4 --> */}
                                <div className="focus-sound-card bg-white dark:bg-dark-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition duration-300 ease-in-out">
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/ZzJ7F5N1p8s?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Tiếng sóng biển</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Tiếng sóng biển êm dịu</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <i className="fas fa-volume-up text-primary-500 mr-2"></i>
                                                <input type="range" min="0" max="100" value="50" className="w-24"/>
                                            </div>
                                            <button className="px-3 py-1 bg-primary-500 text-white text-sm rounded-md hover:bg-primary-600">
                                                <i className="fas fa-play mr-1"></i> Phát
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4">
                                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Tìm kiếm nhạc tập trung</h3>
                                <div className="flex">
                                    <input type="text" placeholder="Tìm kiếm trên YouTube..." className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:border-gray-600"/>
                                    <button className="px-4 py-2 bg-primary-500 text-white rounded-r-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Stats Content --> */}
                        <div id="stats-content" className="hidden space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-primary-50 dark:bg-primary-900 rounded-lg p-4">
                                    <div className="text-sm text-primary-600 dark:text-primary-300 mb-1">Pomodoros hôm nay</div>
                                    <div className="text-2xl font-bold text-primary-800 dark:text-primary-200">3</div>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900 rounded-lg p-4">
                                    <div className="text-sm text-green-600 dark:text-green-300 mb-1">Thời gian tập trung</div>
                                    <div className="text-2xl font-bold text-green-800 dark:text-green-200">1h 15m</div>
                                </div>
                                <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-4">
                                    <div className="text-sm text-purple-600 dark:text-purple-300 mb-1">Công việc hoàn thành</div>
                                    <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">5/8</div>
                                </div>
                            </div>
                            
                            <div className="bg-white dark:bg-dark-700 rounded-lg p-4">
                                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Thống kê tuần này</h3>
                                <div className="h-64">
                                    <canvas id="weeklyStatsChart"></canvas>
                                </div>
                            </div>
                            
                            <div className="bg-white dark:bg-dark-700 rounded-lg p-4">
                                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Thời gian tập trung tốt nhất</h3>
                                <div className="h-64">
                                    <canvas id="productivityChart"></canvas>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Tips Content --> */}
                        <div id="tips-content" className="hidden space-y-4">
                            <div className="bg-white dark:bg-dark-700 rounded-lg p-4">
                                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Cách sử dụng Pomodoro hiệu quả</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>Chọn một công việc cụ thể để tập trung trong mỗi phiên Pomodoro</li>
                                    <li>Loại bỏ mọi phiền nhiễu (tắt thông báo, để điện thoại xa)</li>
                                    <li>Nghỉ ngơi đúng cách giữa các phiên để não bộ phục hồi</li>
                                    <li>Sau 4 phiên làm việc, hãy nghỉ dài hơn (15-30 phút)</li>
                                    <li>Ghi chép lại những phiên làm việc để cải thiện năng suất</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white dark:bg-dark-700 rounded-lg p-4">
                                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Mẹo tập trung cao độ</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>Tạo không gian làm việc gọn gàng, ngăn nắp</li>
                                    <li>Sử dụng nhạc không lời hoặc tiếng ồn trắng để che đi tiếng ồn xung quanh</li>
                                    <li>Uống đủ nước trong khi làm việc</li>
                                    <li>Thực hiện vài động tác thể dục nhẹ giữa các phiên nghỉ</li>
                                    <li>Đặt mục tiêu rõ ràng cho từng phiên làm việc</li>
                                </ul>
                            </div>
                            
                            <div className="bg-white dark:bg-dark-700 rounded-lg p-4">
                                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Công cụ hỗ trợ học tập</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                                    <a href="#" className="flex flex-col items-center p-3 bg-gray-50 dark:bg-dark-600 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-500">
                                        <i className="fas fa-book text-primary-500 text-xl mb-2"></i>
                                        <span className="text-sm text-center">Ghi chú thông minh</span>
                                    </a>
                                    <a href="#" className="flex flex-col items-center p-3 bg-gray-50 dark:bg-dark-600 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-500">
                                        <i className="fas fa-project-diagram text-primary-500 text-xl mb-2"></i>
                                        <span className="text-sm text-center">Sơ đồ tư duy</span>
                                    </a>
                                    <a href="#" className="flex flex-col items-center p-3 bg-gray-50 dark:bg-dark-600 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-500">
                                        <i className="fas fa-brain text-primary-500 text-xl mb-2"></i>
                                        <span className="text-sm text-center">Flashcards</span>
                                    </a>
                                    <a href="#" className="flex flex-col items-center p-3 bg-gray-50 dark:bg-dark-600 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-500">
                                        <i className="fas fa-stopwatch text-primary-500 text-xl mb-2"></i>
                                        <span className="text-sm text-center">Quản lý thời gian</span>
                                    </a>
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
