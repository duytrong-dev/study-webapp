export default function StudyTools() {
    return (
        <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Công cụ học tập</h2>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                        <i className="fas fa-brain text-blue-600 dark:text-blue-300"></i>
                    </div>
                    <span className="text-sm text-center">Flashcards</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-2">
                        <i className="fas fa-project-diagram text-purple-600 dark:text-purple-300"></i>
                    </div>
                    <span className="text-sm text-center">Sơ đồ tư duy</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2">
                        <i className="fas fa-stopwatch text-green-600 dark:text-green-300"></i>
                    </div>
                    <span className="text-sm text-center">Pomodoro</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors">
                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-2">
                        <i className="fas fa-headphones text-yellow-600 dark:text-yellow-300"></i>
                    </div>
                    <span className="text-sm text-center">Nhạc tập trung</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-2">
                        <i className="fas fa-book text-red-600 dark:text-red-300"></i>
                    </div>
                    <span className="text-sm text-center">Ghi chú</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-2">
                        <i className="fas fa-video text-indigo-600 dark:text-indigo-300"></i>
                    </div>
                    <span className="text-sm text-center">Video học tập</span>
                </button>
            </div>
        </div>
    )
}