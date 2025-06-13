export default function Tree() {
    return (
        <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Cây tiếng Nhật N5</h2>
            </div>
            <div className="p-6">
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        {/* <!-- Language tree visualization --> */}
                        <div className="flex justify-center">
                            <div className="language-node active bg-white dark:bg-dark-700 border-2 border-blue-500 p-4 rounded-lg shadow-md w-40 text-center">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">Bài 12</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Từ vựng</div>
                                <div className="mt-2 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
                                    Đang học
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-between mt-4">
                            <div className="language-node completed bg-white dark:bg-dark-700 border-2 border-green-500 p-3 rounded-lg shadow-md w-32 text-center">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">Bài 11</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Ngữ pháp</div>
                                <div className="mt-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-0.5 rounded-full">
                                    Hoàn thành
                                </div>
                            </div>
                            <div className="language-node bg-white dark:bg-dark-700 border-2 border-gray-200 dark:border-gray-600 p-3 rounded-lg shadow-md w-32 text-center">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">Bài 13</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Kanji</div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-4">
                            <div className="language-node completed bg-white dark:bg-dark-700 border-2 border-green-500 p-3 rounded-lg shadow-md w-32 text-center">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">Bài 10</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Hội thoại</div>
                                <div className="mt-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-0.5 rounded-full">
                                    Hoàn thành
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="text-center">
                    <button className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <i className="fas fa-book-open mr-2"></i> Tiếp tục học
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">Bạn đã hoàn thành 65% trình độ N5</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2 dark:bg-gray-700">
                        <div className="bg-red-500 h-2 rounded-full w-[65%]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}