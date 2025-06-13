export default function CourseTabs() {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
            <div className="flex space-x-8">
                <button className="tab-button active py-2 px-1 font-medium text-sm focus:outline-none">
                    Nội dung khóa học
                </button>
                <button className="tab-button py-2 px-1 font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                    Tài nguyên
                </button>
                <button className="tab-button py-2 px-1 font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                    Thảo luận
                </button>
                <button className="tab-button py-2 px-1 font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                    Ghi chú
                </button>
                <button className="tab-button py-2 px-1 font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none">
                    Cài đặt
                </button>
            </div>
        </div>
    );
}