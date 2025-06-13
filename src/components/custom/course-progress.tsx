export default function CourseProgress() {
    return (
        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="relative w-16 h-16 mr-4">
                        <svg className="progress-ring w-16 h-16" viewBox="0 0 36 36">
                            <circle className="progress-ring-circle stroke-gray-200 dark:stroke-gray-700" strokeWidth="4" fill="transparent" r="16" cx="18" cy="18"></circle>
                            <circle className="progress-ring-circle stroke-blue-500" strokeWidth="4" fill="transparent" r="16" cx="18" cy="18" strokeDasharray="100" strokeDashoffset="28"></circle>
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
    );
}