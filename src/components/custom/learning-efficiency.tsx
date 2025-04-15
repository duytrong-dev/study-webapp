export default function LearningEfficiency() {
    return (
        <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Hiệu quả học tập</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white dark:bg-dark-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Tập trung</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200">+12%</span>
                    </div>
                    <div className="text-lg font-bold mb-1">78%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-blue-500 h-2 rounded-full w-[70%]"></div>
                    </div>
                </div>
                <div className="bg-white dark:bg-dark-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Ghi nhớ</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full dark:bg-green-900 dark:text-green-200">+8%</span>
                    </div>
                    <div className="text-lg font-bold mb-1">85%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-green-500 h-2 rounded-full w-[85%]"></div>
                    </div>
                </div>
                <div className="bg-white dark:bg-dark-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Áp dụng</span>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full dark:bg-purple-900 dark:text-purple-200">+5%</span>
                    </div>
                    <div className="text-lg font-bold mb-1">65%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-purple-500 h-2 rounded-full w-[65%]"></div>
                    </div>
                </div>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded-lg">
                <p className="text-xs text-purple-700 dark:text-purple-300">Khả năng ghi nhớ của bạn tốt hơn 92% người dùng khác. Hãy tập trung cải thiện khả năng áp dụng kiến thức.</p>
            </div>
        </div>
    )
}