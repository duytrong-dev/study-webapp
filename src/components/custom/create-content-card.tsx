export default function CreateContentCard() {
    return (
        <div className="bg-white dark:bg-dark-800 shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Tạo nội dung</h2>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-2 gap-3">
                    <button className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors">
                        <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-2">
                            <i className="fas fa-plus text-primary-600 dark:text-primary-300"></i>
                        </div>
                        <span className="text-sm text-center">Khóa học thủ công</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2">
                            <i className="fas fa-file-pdf text-green-600 dark:text-green-300"></i>
                        </div>
                        <span className="text-sm text-center">Từ file PDF</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-2">
                            <i className="fas fa-project-diagram text-purple-600 dark:text-purple-300"></i>
                        </div>
                        <span className="text-sm text-center">Sơ đồ tư duy</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors">
                        <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-2">
                            <i className="fas fa-layer-group text-yellow-600 dark:text-yellow-300"></i>
                        </div>
                        <span className="text-sm text-center">Playlist học tập</span>
                    </button>
                </div>
            </div>
        </div>
    )
}